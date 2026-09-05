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
- Whey protein (black coffee or water) as the low-cal protein lever.
- UAE-based; meals mostly South Indian / Kerala style.

## Targets

Set 2026-09-05 from 91.5 kg / 162.5 cm / 33 y / male. Live in the workbook's
Targets sheet, which re-derives them from those inputs — update the weight there
as it comes down rather than editing numbers by hand.

| | Value |
|---|---|
| BMR (Mifflin-St Jeor) | 1,771 kcal |
| Maintenance (TDEE), ×1.45 | ~2,567 kcal |
| **Calorie target** | **~2,020 kcal/day** |
| Protein | 130–145 g/day |
| Fat floor | 55 g/day |
| Carbs (remainder) | ~250 g/day |
| Projected loss | 0.5 kg/week |

The ×1.45 multiplier is deliberate. The usual "6–7 days/week = ×1.725" row
assumes cardio-style work; an hour of PPL with rest periods is more like
250–350 kcal, so ×1.725 would put maintenance at ~3,050 and invent ~500 kcal
that doesn't exist. Everything above is an estimate — the scale over 2–3 weeks
is the real measurement, and the multiplier is the cell to correct.

Protein at 130–145 g is roughly 2.1 g/kg of estimated lean mass. It is
deliberately higher than the earlier 90–130 g band: in a deficit, on six
sessions a week, protein is what keeps the loss coming off fat rather than
muscle.

BMI is 34.7, which is worth raising with a GP or dietitian alongside this plan.

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
| Snack | 3 uzhunnu vada + coconut chutney | 480–650 | 11.5–17 g | 29–40 g |
| **TOTAL (logged so far)** | | **1,680–2,260** | **90.5–121 g** | **61–95 g** |
| **Midpoint** | | **1,970** | **105.75 g** | **78 g** |

### Pending — not counted in any total until confirmed

| Item | Calories | Protein | Fat | Why it's pending |
|---|---|---|---|---|
| Pre-workout scoop | 5–15 | 0 g | 0 g | Planned but not taken as of last check. Negligible either way. |

**Resolved 2026-09-05:** the 70 g chocolate bar was **not eaten** — confirmed by
the user, who had whey with water instead. Row removed from the log entirely.

**Dinner:** unclear whether the vada counted as it — see the note below.

| Scenario | Calories | Protein | Fat |
|---|---|---|---|
| Logged so far | 1,680–2,260 (mid 1,970) | 90.5–121 g | 61–95 g |
| + pre-workout | 1,685–2,275 (mid 1,980) | 90.5–121 g | 61–95 g |

Read: the vada turned the day around. Day 2 was tracking well under Day 1 at
1,405 midpoint; three deep-fried vada plus coconut chutney added ~565 kcal at
the midpoint and pushed the day to **1,970 — above Day 1's 1,808**. Fat did the
same, 43.5 g to **78 g** against Day 1's 67.5 g. Protein finished strong at
105.75 g, comfortably inside the 90–130 band.

The coconut chutney is the notable part: it had been skipped at breakfast on
both days as the deliberate fat cut, and it came back here alongside the
fry-up. If a separate dinner is still coming, the day runs well past Day 1.

---

## Trends

Two days is not yet a trend — this fills in as days accumulate. Current daily
midpoints:

| Date | Calories | Protein | Fat | Complete? |
|---|---|---|---|---|
| 2026-09-04 | 1,808 | 78.5 g | 67.5 g | yes |
| 2026-09-05 | 1,970 | 105.75 g | 78 g | unclear — see Day 2 |

**Calories are not the problem.** Against the ~2,020 target, Day 1 came in 209
under and Day 2 just 47 under. Both days sit in a real deficit — average 1,889
midpoint against ~2,567 maintenance, an implied ~0.62 kg/week. Eating less is
not the fix.

**Protein is short of the new band.** Day 1 at 78.5 g and Day 2 at 105.75 g are
both under the 130 g floor. Two whey scoops and the urad dal in the vada were
not enough; the gap is roughly one more scoop plus a protein-forward main.

**Fat is the pressure point.** Both days landed at 67–78 g against a 55 g floor,
and both times from the same cause — a deep-fried or oil-layered evening item
(porotta on Day 1, vada plus coconut chutney on Day 2). Trading that slot for
protein is the single change that fixes both rows at once.

Caveat: photo-based estimates under-count restaurant oil and ghee, typically by
10–20%. True intake is plausibly 2,100–2,350 on these days, which would put the
deficit closer to 300/day than 650. The scale settles it.
