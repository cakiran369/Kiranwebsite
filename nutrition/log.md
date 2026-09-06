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
| Dinner | Fresh pineapple juice, ~350–450 ml, no added sugar | 175–240 | 1–2 g | 0–0.5 g |
| **TOTAL** | | **1,855–2,500** | **91.5–123 g** | **61–95.5 g** |
| **Midpoint** | | **2,177.5** | **107.25 g** | **78.25 g** |

### Pending — not counted in any total until confirmed

| Item | Calories | Protein | Fat | Why it's pending |
|---|---|---|---|---|
| Pre-workout scoop | 5–15 | 0 g | 0 g | Planned but not taken as of last check. Negligible either way. |

**Resolved 2026-09-05:** the 70 g chocolate bar was **not eaten** — confirmed by
the user, who had whey with water instead. Row removed from the log entirely.

**Dinner (resolved):** fresh pineapple juice, no added sugar — juice only, no
solid food. Day 2 is complete apart from the pre-workout.

Day 2 final, against the ~2,020 target:

| | Value | vs target |
|---|---|---|
| Calories (mid) | 2,177.5 | **+158** |
| Protein (mid) | 107.25 g | 23 g under the 130 g floor |
| Fat (mid) | 78.25 g | 23 g over the 55 g floor |

The juice is what tipped the day over. "No added sugar" is true and beside the
point: 350–450 ml of pineapple juice is still ~35–45 g of natural sugar with the
fibre removed, which is roughly a chocolate bar's worth of sugar, drunk in two
minutes, with ~1.5 g of protein attached.

As a **snack** it would be unremarkable. As **dinner** it is the one meal slot
that had to carry protein, and it carried none — leaving the day 23 g short of
the floor on a training program that needs 130 g. A whey scoop in water at the
same moment would have cost ~110 kcal and delivered ~22 g, closing most of the
gap for half the calories.

Liquid calories also don't register as food. Expect to be hungry later tonight,
which is where a day like this usually gets undone.

**Day 2 closed.** Hunger did arrive around midnight, as expected. Nothing was
eaten — grilled chicken and a whey scoop were both considered and declined. No
row added, per the rule. The pre-workout stays unconfirmed and rolls off as
pending.

Final: 2,177.5 kcal midpoint, **390 under maintenance** — a genuine deficit day.
The cost was protein, which finished at 107.25 g against the 130 g floor.

---

## Day 3 — 2026-09-06

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 maida porotta + kadala curry | 520–800 | 15–21 g | 23–38 g |
| Lunch | Honest Bowl — Grilled Chicken and Rice Bowl | 550–710 | 42–48 g | 9–18 g |
| Dinner | Honest Bowl — Tofu Delight Bowl | 420–560 | 18–22 g | 15–25 g |
| Dinner | Chicken curry, 1 takeaway container | 280–420 | 20–28 g | 16–26 g |
| **TOTAL** | | **1,770–2,490** | **95–119 g** | **63–107 g** |
| **Midpoint** | | **2,130** | **107 g** | **85 g** |

Three porotta were served at breakfast; two eaten, one left deliberately.

Went with plan A of the four costed at dinner — the one that missed the protein
floor. The chicken bowl at lunch did its job (42–48 g in one meal, the best
single item in the log). The tofu bowl did not: 490 kcal at the midpoint for
20 g, at the same price as the 42 g chicken bowl.

Fat reached 85 g, the highest in the log and a third consecutive rise.

---

## Trends

Two days is not yet a trend — this fills in as days accumulate. Current daily
midpoints:

| Date | Calories | Protein | Fat | Complete? |
|---|---|---|---|---|
| 2026-09-04 | 1,808 | 78.5 g | 67.5 g | yes |
| 2026-09-05 | 2,177.5 | 107.25 g | 78.25 g | yes |
| 2026-09-06 | 2,130 | 107 g | 85 g | yes |

Three complete days. Averages of the midpoints: **2,038 kcal, 97.6 g protein,
76.9 g fat** — against a 2,017 target, a 130 g protein floor and a 55 g fat
floor.

**Calories are solved.** The three-day average is 21 kcal above target — closer
than the estimate's own error bars. That is a 529 kcal/day deficit against
maintenance, an implied **0.48 kg/week**, or ~6 kg by December 1. Nothing about
the calorie target needs changing.

**Protein has a ceiling at ~107 g.** Days 2 and 3 landed at 107.25 and 107.00 —
twice, from completely different food. Day 1 was 78.5. The floor has never been
reached. Twice now the day has ended with the shaker doing work the meals
should have done.

**Fat rises every single day: 67.5 → 78.25 → 85 g.** It is now 34% of intake
and 30 g above the floor. This is the one genuinely worsening line in the log.

The two are the same problem. At 2,038 kcal there is plenty of room for 130 g of
protein — the room is being spent on fat instead. **Cutting fat from 77 g to
60 g frees 152 kcal, which buys 38 g of lean protein.** That single swap closes
the entire gap without touching the calorie target, which is already right.

Where the fat comes from is not mysterious: coconut chutney, deep-fried vada,
layered porotta, oil-heavy curry, cajun-fried tofu. The fix is not eating less.
It is choosing grilled over fried in the same meal slot, at the same calories.
