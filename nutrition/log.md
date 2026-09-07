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

From 162.5 cm / 33 y / male and the latest weigh-in. The workbook's Targets
sheet reads the most recent weight off the Weights sheet and re-derives
everything below it, so a new weigh-in updates the target automatically.

| | Value (at 90.75 kg) |
|---|---|
| BMR (Mifflin-St Jeor) | 1,763 kcal |
| Maintenance (TDEE), ×1.45 | ~2,557 kcal |
| **Calorie target** | **~2,007 kcal/day** |
| Protein | 130–145 g/day |
| Fat floor | 55 g/day |
| Carbs (remainder) | ~248 g/day |
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

BMI is 34.4, which is worth raising with a GP or dietitian alongside this plan.

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
| Snack | Fresh orange juice, ~350–450 ml, no added sugar | 155–205 | 2–3 g | 0–0.5 g |
| **TOTAL** | | **1,925–2,695** | **97–122 g** | **63–107.5 g** |
| **Midpoint** | | **2,310** | **109.5 g** | **85.25 g** |

Three porotta were served at breakfast; two eaten, one left deliberately.

Went with plan A of the four costed at dinner — the one that missed the protein
floor. The chicken bowl at lunch did its job (42–48 g in one meal, the best
single item in the log). The tofu bowl did not: 490 kcal at the midpoint for
20 g, at the same price as the 42 g chicken bowl.

Fat reached 85.25 g, the highest in the log and a third consecutive rise.

Second juice in three days, both described as "without sugar". Combined the two
drinks cost ~390 kcal and ~75 g of sugar for ~4 g of protein. Today's 180 kcal
spent on grilled chicken breast instead would have been ~33 g of protein and a
140 g day — the floor cleared for the first time.

---

## Day 4 — 2026-09-07 (in progress)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 appam + potato curry (bhaji) | 390–520 | 8–11 g | 10–18 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Snack | Sweet melon, 1 wedge | 35–55 | 0.5–1 g | 0–0.5 g |
| **TOTAL (logged so far)** | | **525–705** | **28.5–37 g** | **11–21.5 g** |
| **Midpoint** | | **615** | **32.75 g** | **16.25 g** |

**Lightest breakfast in the log** — 205 kcal below yesterday's and 16 g of fat
lower. On calories this is the best start of any day so far.

On protein it is the second-lowest: 9.5 g. Appam is rice, bhaji is potato, so
the plate is two carbohydrates and a little coconut oil.

### The breakfast pattern, four days in

| Date | Breakfast | Protein | g per 100 kcal |
|---|---|---|---|
| 2026-09-04 | dosa + sambar | 7.5 g | 1.9 |
| 2026-09-05 | 2 dosa + sambar | 13 g | 2.8 |
| 2026-09-06 | 2 porotta + kadala | 18 g | 2.7 |
| 2026-09-07 | 2 appam + bhaji | 9.5 g | 2.1 |
| **Average** | | **12 g** | **2.4** |

Four breakfasts, none above 18 g, all under 3 g of protein per 100 kcal. This
single slot is why the day has never reached 130 g: it hands lunch and dinner a
120 g debt to clear before anything else.

**Two boiled eggs added to this exact plate** would have made it 603 kcal and
22 g — still lighter than yesterday's breakfast, and more than double the
protein. That is the whole fix.

### Budget for the rest of Day 4

**1,436 kcal left, 98 g of protein to find** — 6.8 g per 100 kcal for the
remainder, down from 7.8 before the shaker.

| | Calories | Protein |
|---|---|---|
| Chicken and rice bowl | 630 | 45 g |
| 200 g grilled chicken + vegetables | 400 | 62 g |
| **Total incl. breakfast and shaker** | **1,600** | **139 g** ✓ |

That clears the floor for the first time and lands 406 kcal under target, with
~400 kcal still spare for rice or vegetables. The light breakfast bought the
room; it only works if lunch and dinner are both protein-anchored.

---

## The mess constraint

Food comes from a Grill Spot mess subscription on a fixed weekly menu. The
menu is not a choice, so meal suggestions are beside the point. The only two
levers are **portion control** and **added protein** (eggs, whey).

Costed across the week, as served:

| Day | Kcal | Protein | Dinner |
|---|---|---|---|
| Monday | 1,865 | 59.5 g | Chicken curry + bread |
| Tuesday | 1,745 | 54.5 g | Green peas + bread |
| Wednesday | 2,140 | 75.5 g | Chicken traditional curry |
| Thursday | 1,810 | 38.0 g | Gobbi chilly + bread |
| Friday | 1,635 | 61.0 g | Kadala curry + bread |
| Saturday | 2,080 | 62.0 g | Chicken varutharachathu |
| Sunday | 2,055 | 69.0 g | Egg roast + bread |
| **Average** | **1,904** | **59.9 g** | |

**This is the whole problem in one number: 3.1 g of protein per 100 kcal.** As
served, the mess fills 95% of the calorie target while delivering under half the
protein floor, leaving ~100 kcal of room — less than one whey scoop. Portion
control is therefore not a refinement here, it is the precondition for hitting
protein at all.

For comparison: whey is 19.6 g per 100 kcal, a boiled egg 8.5 g, the mess 3.1 g.

### Standing rules

1. **Bread items: take one, not two or three.** ~205 kcal for ~5 g of protein —
   the worst trade on the menu, and it appears at dinner six days a week.
2. **Halve the rice** at any "Meals" or ghee-rice plate. ~200 kcal for ~2 g.
3. **Whey scoops fill the freed calories**, 3–4 on most days.
4. **On chicken days, ask for more curry and less bread.** Same subscription.

### Days that need watching

- **Thursday is the protein desert** — 38 g as served, the lowest of the week
  (ghee roast, meals, gobbi chilly: no meat all day). It also has the most room
  once cut, so it is fixable, but only with supplements.
- **Wednesday and Saturday are the tightest** — heavy dinners leave room for
  only ~2 scoops, landing near 100–115 g.
- **Friday is the best day** — idly set is the one genuinely low-fat breakfast
  on the menu (3–8 g fat) and biriyani carries real protein.

### On the 130 g floor

Under this constraint 130 g needs 3–5 scoops a day, every day. That is a lot of
powder. A realistic operating band is **115–125 g, with 130 as a good day**,
which is still ~1.9 g/kg of estimated lean mass. The floor stays where it is as
the aim; a 118 g day is not a failure.

---

## Weigh-ins

| Date | Weight | Change | Since start |
|---|---|---|---|
| 2026-09-05 | 91.50 kg | — | — |
| 2026-09-07 | 90.75 kg | −0.75 kg | −0.75 kg |

**Do not read this as 0.75 kg of fat.** The logged deficit across the two days
the scale covers was ~647 kcal, which is **0.084 kg of fat**. The other 0.67 kg
— 89% of the drop — is water, glycogen and gut contents, exactly what a first
week looks like when carbohydrate portions come down (three porotta to two, and
so on). Every gram of glycogen holds about three grams of water with it.

That is not bad news. It is the normal shape of a start, and it means the number
will slow down sharply once glycogen settles. Expect that, so it doesn't read as
failure when it happens.

**The activity multiplier stays at 1.45.** Two days is noise, not a measurement.
Revisit it after 2–3 weeks of trailing average, which is what the Weights sheet
is for.

---

## Trends

Two days is not yet a trend — this fills in as days accumulate. Current daily
midpoints:

| Date | Calories | Protein | Fat | Complete? |
|---|---|---|---|---|
| 2026-09-04 | 1,808 | 78.5 g | 67.5 g | yes |
| 2026-09-05 | 2,177.5 | 107.25 g | 78.25 g | yes |
| 2026-09-06 | 2,310 | 109.5 g | 85.25 g | yes |
| 2026-09-07 | 615 (so far) | 32.75 g | 16.25 g | no — in progress |

Three complete days. Averages of the midpoints: **2,098 kcal, 98.4 g protein,
77.0 g fat** — against a 2,017 target, a 130 g protein floor and a 55 g fat
floor.

**Calories are close.** The three-day average is 81 kcal above target — a
469 kcal/day deficit against maintenance, an implied **0.43 kg/week**, or ~5.3 kg
by December 1. The target itself needs no change; the drift is entirely juice.

**Protein has a ceiling near 107–110 g.** Days 2 and 3 landed at 107.25 and
109.5, from completely different food. Day 1 was 78.5. The floor has never been
reached. Twice now the day has ended with the shaker doing work the meals
should have done.

**Fat rises every single day: 67.5 → 78.25 → 85.25 g.** It is now 34% of intake
and 30 g above the floor. This is the one genuinely worsening line in the log.

The two are the same problem. At 2,038 kcal there is plenty of room for 130 g of
protein — the room is being spent on fat instead. **Cutting fat from 77 g to
60 g frees 152 kcal, which buys 38 g of lean protein.** That single swap closes
the entire gap without touching the calorie target, which is already right.

Where the fat comes from is not mysterious: coconut chutney, deep-fried vada,
layered porotta, oil-heavy curry, cajun-fried tofu. The fix is not eating less.
It is choosing grilled over fried in the same meal slot, at the same calories.
