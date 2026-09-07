# Calorie & macro tracker

Photo-based food logging with daily/weekly/monthly rollups.

## Files

| File | Role |
|---|---|
| `meals.csv` | **Source of truth.** One row per meal. |
| `reference.csv` | Per-item calorie/protein estimates, so the same dish is costed the same way each time. |
| `weights.csv` | Weigh-in log. The Targets sheet reads the latest entry from it. |
| `log.md` | Human-readable mirror of the log, with day-by-day notes. |
| `calorie_tracker.xlsx` | Generated master workbook (Meals / Daily / Weights / Trends / Targets / Reference). |
| `build_tracker.py` | Regenerates the workbook from the two CSVs. |
| `verify_tracker.py` | Checks `log.md`'s totals against `meals.csv`. |

## Adding a meal

1. Append a row to `meals.csv`.
2. Update the matching day's table in `log.md`.
3. Run:

```bash
python3 nutrition/build_tracker.py   # rebuild the workbook
python3 nutrition/verify_tracker.py  # confirm log.md still agrees with the CSV
```

`build_tracker.py` needs `openpyxl`; `verify_tracker.py` is standard library only.

## The `status` column

- `logged` — confirmed eaten. Counts toward every total.
- `pending` — mentioned but **not confirmed eaten**. Counted nowhere; shown in
  yellow on the Meals sheet and tallied in the Daily sheet's "Pending items"
  column.

This encodes the one hard rule of the log: nothing counts until it's confirmed
eaten. "Planning to" is not logged. Flip a row to `logged` only on confirmation.

## Targets

The Targets sheet holds the personal inputs — weight, height, age, activity
multiplier, deficit — and derives BMR (Mifflin-St Jeor), maintenance, the
calorie target and the carb allowance as formulas over them. The Daily sheet's
"vs target" column and the Trends sheet's deficit rows all reference those
cells, so **updating the weight there re-derives the whole workbook**. Edit the
yellow cells; leave the rest alone.

The weight cell is a formula reading the last row of the Weights sheet, so
adding a weigh-in re-derives BMR, maintenance, the calorie target and the carb
allowance. Do not type over it — add a row to `weights.csv` instead.

The activity multiplier is the cell most worth correcting: it is an estimate,
and the scale over 2–3 weeks is the real measurement. Do not adjust it off a few
days of data — early weight movement is mostly water.

## How the numbers work

Estimates from photos aren't exact, so every meal carries a **low–high range**.
Trends use the **midpoint** of each range. Daily totals are the sum of the lows
and the sum of the highs.

Totals in the workbook are live Excel formulas (`SUMIFS` over the Meals sheet
filtered to `status = "logged"`), so correcting a meal row in Excel re-computes
the day, the week and the month without re-running the build script. Edit the
blue cells only; the black ones are formulas.

## Verification note

The workbook is written by openpyxl, which stores no cached formula results, so
`fullCalcOnLoad` is set — Excel, LibreOffice and Google Sheets all recalculate
on open. Formulas are restricted to Excel-2007-era functions (`SUMIFS`,
`COUNTIFS`, `AVERAGEIFS`, `AVERAGE`, `IFERROR`) for maximum compatibility.
