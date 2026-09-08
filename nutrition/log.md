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

### Where the training sits

| | Kcal/day |
|---|---|
| BMR — doing nothing | 1,763 |
| × 1.2, sedentary living + digestion | 2,116 |
| **× 1.45 = maintenance** | **2,557** |
| **Of which, training** | **441/day** |

441 kcal/day over six sessions is **~514 kcal per session**. Resistance training
runs about 5–7 kcal/min, so at 91 kg that is right for a 75–90 minute session
and generous for a 45–60 minute one. The gym is counted, and if anything counted
a little kindly. Shown live on the Targets sheet so the assumption is
inspectable rather than buried in one number.

### Added activity — modelled, not credited

5 km walked on 2026-09-07 (3 km was the original figure), plus 60 push-ups and
36 pull-ups:

| | Kcal/day |
|---|---|
| 5 km walk (net of resting) | 227 |
| 60 push-ups | 24 |
| 36 pull-ups | 43 |
| **Total** | **~294** |

That moves maintenance from 2,557 to **~2,851**, an implied multiplier of 1.62. On a walk-only day it is ~2,784.

**The calorie target has deliberately not been raised for it.** Credited in
advance, extra activity is the commonest way a deficit quietly disappears — the
burn is an estimate, the eating is real. It sits on the Targets sheet as a
separate block so it is visible without feeding the target.

At the unchanged 2,007 target it means a **753 kcal/day deficit, ~0.68 kg/week**,
and ~82.4 kg by December 1 rather than 84.7 kg. The alternative is to eat it
back: the target could rise to ~2,210 and still hold 0.5 kg/week.

Note the split in what these do. The walk is nearly all of the calories
(136 of 203). The push-ups and pull-ups are only ~67 kcal but carry real
training stimulus — and 36 pull-ups at 91 kg is meaningful volume on top of a
6-day split, which raises recovery and protein demand rather than lowering it.

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

## Day 4 — 2026-09-07

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 appam + potato curry (bhaji) | 390–520 | 8–11 g | 10–18 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Snack | Sweet melon, 2 wedges | 70–110 | 1–2 g | 0–1 g |
| Lunch | Mess meals plate, rice halved, + 2 boiled eggs (fried fish, sambar, green peas, buttermilk, veg curry, fish curry) | 790–1,100 | 37–51 g | 28–48 g |
| Snack | 2 boiled eggs (5pm) | 140–156 | 12–13 g | 10–11 g |
| Snack | Red grapes, ~100 g | 60–75 | 0.5–0.7 g | 0–0.5 g |
| Snack | Chatti pathiri chicken, 1 slice | 230–320 | 10–14 g | 12–18 g |
| Dinner | Chicken curry + 1 chapati | 380–550 | 23–32 g | 18–30 g |
| **TOTAL** | | **2,160–2,961** | **111.5–148.7 g** | **79–129.5 g** |
| **Midpoint** | | **2,560.5** | **130.1 g** | **104.25 g** |

**130.1 g — the protein floor cleared for the first time.** Four eggs, a fish
and dal lunch, a whey scoop and a chicken dinner did it, and the dinner took one
chapati rather than two exactly as the day's arithmetic required.

**The calorie deficit was almost erased doing it.** 2,560 kcal is 4 kcal *above*
base maintenance; only the 5 km walk creates a deficit at all, and it is 223 kcal
rather than the planned 550. Fat finished at 104 g, the highest in the log by
19 g.

The pathiri is the item that changes the day. At ~275 kcal and ~15 g of fat it
costs more than the two chapati it displaces, and it pushed fat past 80 g before
dinner had started. Dinner has to shrink to compensate: curry with at most one
chapati rather than two.

**Both levers pulled.** Two boiled eggs added, rice taken at half portion. At
44 g that lunch is the highest-protein single meal in the log, above the 42–48 g
Honest Bowl, and it still left 402 kcal of room for dinner.

This is the first meal in the log where the constraint was handled exactly as
the mess plan describes: change what can be changed, accept the rest.

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

## Day 5 — 2026-09-08 (in progress)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Puttu + kadala curry | 420–600 | 12–16 g | 12–19 g |
| Lunch | 2 eggs dry-fried (no oil) + half container ghee rice + small chicken curry + curd salad | 565–786 | 35–45 g | 29–44 g |
| **TOTAL (logged so far)** | | **985–1,386** | **47–61 g** | **41–63 g** |
| **Midpoint** | | **1,185.5** | **54 g** | **52 g** |

**This lunch is the swap, done properly.** Eggs cooked dry with pepper and salt
instead of in oil (~20–25 kcal saved per egg), the ghee rice halved without being
asked, chicken for the protein anchor, curd on the side. **5.9 g of protein per
100 kcal** — against 4.7 for yesterday's plate and 3.7 for the mess baseline.

The mess served puttu rather than the Tuesday masala dosa on the menu.

A better breakfast than it looks. Puttu is steamed rice flour and coconut with
**no frying oil at all**, and the kadala carries the protein — 14 g, against
9.5 g yesterday and 7.5 g on Day 1. Still 2.7 g of protein per 100 kcal, but the
fat is coconut and curry oil rather than a fry-up.

### Today reverses the trend

Four days of rising calories and rising fat ended with Day 4 at maintenance.
Tuesday is a good day to break that: the mess dinner is green peas and chapati,
one of the lightest of the week.

With breakfast and lunch logged, **821 kcal left and 76 g of protein to find.**

| | Calories | Protein | Fat |
|---|---|---|---|
| Green peas + 2 chapati (mess dinner) | 450 | 17 g | 17 g |
| 3 whey scoops | 345 | 67.5 g | 4.5 g |
| **Day total** | **1,980** | **138.5 g** | **73.5 g** |

That would be **576 kcal under maintenance with the floor cleared** — and 31 g
less fat than yesterday on 580 fewer calories, for 8 g more protein. The whole
week's argument in one day.

---

## The mess constraint

Food comes from a Grill Spot mess subscription on a fixed weekly menu. The
menu is not a choice, so meal suggestions are beside the point. The only two
levers are **portion control** and **added protein** (eggs, whey).

Costed across the week, as served. **Dinner "bread items" are chapati, not
porotta** — ~115 kcal and ~3 g fat each, against ~205 kcal and ~11 g for a
porotta. That changes the plan materially:

| Day | Kcal | Protein | Dinner |
|---|---|---|---|
| Monday | 1,885 | 72.5 g | Chicken curry + 2 chapati |
| Tuesday | 1,565 | 54.5 g | Green peas + 2 chapati |
| **Wednesday** | **2,160** | 88.5 g | Chicken traditional curry |
| Thursday | 1,830 | 54.0 g | Gobbi chilly + 2 chapati |
| **Friday** | **1,455** | 59.0 g | Kadala curry + 2 chapati |
| **Saturday** | **2,100** | 77.0 g | Chicken varutharachathu |
| Sunday | 1,875 | 69.0 g | Egg roast + 2 chapati |
| **Average** | **1,839** | **67.8 g** | |

**3.7 g of protein per 100 kcal.** Better than the 3.1 first estimated, but the
shape holds: the mess fills most of the calorie target while delivering about
half the protein floor. Portion control is still what makes room for protein.

For comparison: whey is 19.6 g per 100 kcal, a boiled egg 8.5 g, the mess 3.7 g.

### Standing rules

1. **Rice is the lever, not bread.** Halving the rice at a "Meals" or ghee-rice
   plate saves ~200 kcal for ~2 g of protein. That is the cheapest cut available.
2. **Keep both chapati.** At ~115 kcal and ~3 g fat each they are good value —
   skipping one saves little and costs real fullness. This reverses the earlier
   advice, which assumed porotta.
3. **Whey fills whatever room is left**, typically 2–3 scoops.
4. **On chicken days, ask for more curry.** Same subscription.

### Days that need watching

- **Wednesday and Saturday are the tight days** — 2,160 and 2,100 kcal as
  served. Halving the rice still leaves almost no room for scoops, so these two
  need a second cut: drop a chapati, or take the lighter breakfast. Wednesday's
  poratta-and-egg-roast breakfast and Saturday's dosa set are what load them.
- **Thursday and Tuesday are the protein deserts** — 54 g each, no meat on
  Thursday at all. Both have plenty of room once the rice is halved, so they are
  fixable with 3–5 scoops.
- **Friday is the best day by far** — 1,455 kcal and only 47.5 g of fat. Idly set
  is the one genuinely low-fat breakfast on the menu, and biriyani carries real
  protein. Room for six scoops if wanted.

### On the 130 g floor

With chapati rather than porotta the arithmetic is kinder, but 130 g still needs
2–5 scoops depending on the day, and Wednesday and Saturday cannot reach it
without cutting further. A realistic operating band is **115–125 g, with 130 as
a good day** — still ~1.9 g/kg of estimated lean mass. The floor stays as the
aim; a 118 g day is not a failure.

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
| 2026-09-07 | 2,560.5 | 130.1 g | 104.25 g | yes |
| 2026-09-08 | 1,185.5 (so far) | 54 g | 52 g | no — dinner to come |

Four complete days. Averages of the midpoints: **2,214 kcal, 106.3 g protein,
83.8 g fat**.

| Date | Calories | vs maintenance | Protein | Fat |
|---|---|---|---|---|
| 2026-09-04 | 1,808 | −748 | 78.5 g | 67.5 g |
| 2026-09-05 | 2,178 | −379 | 107.3 g | 78.3 g |
| 2026-09-06 | 2,310 | −246 | 109.5 g | 85.3 g |
| 2026-09-07 | 2,560 | **+4** | **130.1 g** | 104.3 g |

**Every line moves the same way, day after day, and two of the three are moving
the wrong way.**

**Protein: fixed.** 78.5 → 107 → 110 → 130. Four days of steady improvement and
the floor cleared. Whatever was wrong at the start is no longer wrong.

**Calories: up 42% in four days.** 1,808 → 2,560. Day 4 sat exactly at base
maintenance; without the walk there was no deficit at all. The four-day average
gives a 342 kcal/day deficit — **0.31 kg/week, not 0.5**. Walking 5 km every day
would lift that to 0.52, but that is one day of walk data, not four.

**Fat: up 55% in four days.** 67.5 → 104.3, against a 55 g floor. It is now 37%
of intake.

The three are one story: **protein was bought by adding food rather than by
replacing it.** Eggs, pathiri and a full dinner went on top of days that were
already complete. That fixes protein and spends the deficit at the same time.

Next week's job is the swap, not the addition — protein-dense food in place of
fat-dense food at the same calories. The mess plate proved it can be done: eggs
added, rice halved, 44 g of protein, and the day still had room afterwards.

Where the fat comes from is not mysterious: coconut chutney, deep-fried vada,
layered porotta, oil-heavy curry, cajun-fried tofu. The fix is not eating less.
It is choosing grilled over fried in the same meal slot, at the same calories.
