# Calorie & Macro Log

Plain-text mirror of the daily food log. `meals.csv` is the machine-readable
source of truth; `calorie_tracker.xlsx` is generated from it. Keep all three in
sync by editing `meals.csv` and re-running `build_tracker.py`.

## Rules

- One photo = one meal (sometimes a supplement or snack).
- Estimates are **ranges (low–high)** — photo-based estimates aren't exact.
- Trends use the **midpoint** of each range.
- Items the user removed (skipped a chutney, ate fewer pieces) are recalculated
  out, not left in.
- **Nothing is logged unless actually consumed.** "Planning to" ≠ logged.
  Unconfirmed items sit in the `pending` status and count toward no total.

## Goals

- Calorie deficit before December.
- 6-day Push/Pull/Legs split.
- Protein target ~90–130 g/day (adjust to bodyweight).
- Whey protein (black coffee or water) as the low-cal protein lever.
- UAE-based; meals mostly South Indian / Kerala style.

---

## Day 1 — 2026-09-04

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Dosa + sambar + red chutney (skipped coconut chutney) | 360–450 | 6–9 g | 8–12 g |
| Lunch | Chicken biryani (half plate) + raita | 500–680 | 25–35 g | 18–28 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Snack | 1 cookie (cashew/almond biscuit) | 38 | 0.5 g | 2 g |
| Dinner | 2 maida porotta + kadala curry | 520–800 | 15–21 g | 23–38 g |
| **TOTAL** | | **1,518–2,098** | **66.5–90.5 g** | **52–83 g** |
| **Midpoint** | | **1,808** | **78.5 g** | **67.5 g** |

Notes: dinner porotta was the heaviest single item (refined flour + oil). Dropped
from 3 to 2 porotta to tighten calories and fat. Protein midpoint landed just
under the 90 g floor.

---

## Day 2 — 2026-09-05 (in progress)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 dosa + sambar + red chutney (skipped coconut chutney) | 410–520 | 11–15 g | 10–17 g |
| Snack | Black coffee + 1 whey scoop (no sugar) | 100–130 | 20–25 g | 1–3 g |
| Lunch | Fish fry + ~half container barik rice + sambar + veg raita + red chutney + veg side | 590–840 | 28–39 g | 20–33 g |
| Snack | 1 whey scoop + water | 100–120 | 20–25 g | 1–2 g |
| **TOTAL (logged so far)** | | **1,200–1,610** | **79–104 g** | **32–55 g** |
| **Midpoint** | | **1,405** | **91.5 g** | **43.5 g** |

### Pending — not counted in any total until confirmed

| Item | Calories | Protein | Fat | Why it's pending |
|---|---|---|---|---|
| Chocolate bar, 70 g (2 × 35 g king-size) | ~335 | ~6 g | ~16 g | Asked about it, showed the label, then said whey with water instead. Never confirmed eaten. Also ~36 g sugar. |
| Pre-workout scoop | 5–15 | 0 g | 0 g | Planned only; no label seen. Negligible either way. |

**Dinner: not yet eaten** — no row exists for it.

Where the day lands, depending on the pending items:

| Scenario | Calories | Protein | Fat |
|---|---|---|---|
| Logged only (current) | 1,200–1,610 (mid 1,405) | 79–104 g | 32–55 g |
| + pre-workout | 1,205–1,625 (mid 1,415) | 79–104 g | 32–55 g |
| + chocolate bar | 1,535–1,945 (mid 1,740) | 85–110 g | 48–71 g |
| + both | 1,540–1,960 (mid 1,750) | 85–110 g | 48–71 g |

Read: without the bar there is room for a real dinner inside a deficit. With the
bar, dinner has to come in around 300–400 kcal to hold the day near Day 1's
level, and the day's fat is already near Day 1's total before dinner.

---

## Trends

Two days is not yet a trend — this fills in as days accumulate. Current daily
midpoints:

| Date | Calories | Protein | Fat | Complete? |
|---|---|---|---|---|
| 2026-09-04 | 1,808 | 78.5 g | 67.5 g | yes |
| 2026-09-05 | 1,405 | 91.5 g | 43.5 g | no — dinner pending |

Protein is the one to watch: Day 1 finished below the 90 g floor, and Day 2 is
already at 91.5 g before dinner, on the back of two whey scoops.
