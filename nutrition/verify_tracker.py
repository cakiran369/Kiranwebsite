#!/usr/bin/env python3
"""Check that log.md's stated totals agree with meals.csv.

meals.csv is the source of truth; log.md is a hand-maintained mirror, so it is
the thing that drifts. This recomputes every daily total from the CSV and
compares it against the TOTAL / Midpoint rows in log.md.

Pending rows are excluded from totals, matching the workbook.

Usage:  python3 nutrition/verify_tracker.py      (exit 1 on any mismatch)
"""

import csv
import re
import sys
from collections import defaultdict
from pathlib import Path

HERE = Path(__file__).parent
FIELDS = ["kcal", "protein", "fat"]


def daily_totals():
    totals = defaultdict(lambda: {f: [0.0, 0.0] for f in FIELDS})
    with open(HERE / "meals.csv", newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            if row["status"].strip().lower() != "logged":
                continue
            day = totals[row["date"]]
            for f in FIELDS:
                day[f][0] += float(row[f"{f}_low"])
                day[f][1] += float(row[f"{f}_high"])
    return totals


def num(s):
    return float(s.replace(",", "").strip())


def parse_log_totals():
    """Pull the TOTAL and Midpoint rows out of log.md, keyed by date."""
    text = (HERE / "log.md").read_text(encoding="utf-8")
    found = {}
    date = None
    for line in text.splitlines():
        m = re.match(r"##\s+Day\s+\d+\s+—\s+(\d{4}-\d{2}-\d{2})", line)
        if m:
            date = m.group(1)
            continue
        if date is None or not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        label = cells[0].replace("*", "").strip().lower()
        if label.startswith("total"):
            ranges = []
            for cell in cells[2:5]:
                vals = re.findall(r"[\d,]+(?:\.\d+)?", cell.replace("*", ""))
                ranges.append((num(vals[0]), num(vals[-1])))
            found.setdefault(date, {})["total"] = ranges
        elif label.startswith("midpoint"):
            mids = []
            for cell in cells[2:5]:
                vals = re.findall(r"[\d,]+(?:\.\d+)?", cell.replace("*", ""))
                mids.append(num(vals[0]))
            found.setdefault(date, {})["mid"] = mids
    return found


def main():
    totals = daily_totals()
    logged = parse_log_totals()
    problems = []

    for date in sorted(totals):
        csv_ranges = [tuple(totals[date][f]) for f in FIELDS]
        csv_mids = [round((lo + hi) / 2, 2) for lo, hi in csv_ranges]
        entry = logged.get(date)
        if not entry:
            problems.append(f"{date}: no Day section found in log.md")
            continue
        if entry.get("total") != csv_ranges:
            problems.append(
                f"{date}: log.md TOTAL {entry.get('total')} != meals.csv {csv_ranges}")
        if entry.get("mid") and [round(m, 2) for m in entry["mid"]] != csv_mids:
            problems.append(
                f"{date}: log.md Midpoint {entry['mid']} != meals.csv {csv_mids}")

    for date in sorted(logged):
        if date not in totals:
            problems.append(f"{date}: in log.md but has no logged rows in meals.csv")

    print(f"{len(totals)} day(s) checked against log.md")
    for date in sorted(totals):
        cal, pro, fat = (totals[date][f] for f in FIELDS)
        print(f"  {date}  {cal[0]:,.0f}-{cal[1]:,.0f} kcal (mid {sum(cal)/2:,.0f})"
              f"  protein {pro[0]:.1f}-{pro[1]:.1f} g  fat {fat[0]:.1f}-{fat[1]:.1f} g")

    if problems:
        print("\nMISMATCHES:")
        for p in problems:
            print("  -", p)
        return 1
    print("\nlog.md agrees with meals.csv.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
