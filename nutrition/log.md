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

| | Value (at 88.75 kg) | Was (at 90.05 kg) |
|---|---|---|
| BMR (Mifflin-St Jeor) | **1,743 kcal** | 1,756 |
| Maintenance (TDEE), ×1.52 | **~2,650 kcal** | ~2,669 |
| **Calorie target** | **~2,100 kcal/day** | ~2,120 |
| Protein | 130–145 g/day | unchanged |
| Fat floor | 55 g/day | unchanged |
| Carbs (remainder) | ~243 g/day | ~248 |
| Projected loss | 0.5 kg/week | unchanged |

**The targets fall as the weight does** — a smaller body costs less to run. Every
1 kg lost takes ~15 kcal off maintenance, so the target drifts down ~15 kcal per
kilogram. At 88.75 kg that is 2,100, not the 2,120 quoted through the middle of
September.

`build_tracker.py`'s seed weight was left at the 91.5 kg starting value while the
chat numbers were being quoted from 90.05 — corrected on 2026-09-25 to 88.75 so
the workbook and the running commentary agree.

### Where maintenance comes from

Revised 2026-09-11 from a month of Apple Watch step data: **8,237 steps/day
averaged 12 Aug–11 Sep**, about 5.6 km. The original ×1.45 assumed a sedentary
NEAT baseline, which that step count clearly is not.

| | Kcal/day |
|---|---|
| BMR — doing nothing | 1,759 |
| × 1.2, living plus a desk-bound day's steps | 2,110 |
| Walking above that baseline (~3.2 km) | +150 |
| Training, 6 sessions | +413 |
| **Maintenance, ×1.52** | **2,673** |

413 kcal/day over six sessions is **~482 per session** — still in the right range
for 60–90 minutes of lifting at this bodyweight, and no longer inflated by
walking that was being miscounted as gym work.

**This does not change what to eat.** The six-day average intake has been
2,193 kcal against a new target of 2,125 — within 70 kcal. What changes is the
reading of it: the deficit was **480 kcal/day, not 357**, and the rate
**0.44 kg/week, not 0.32**. The plan was working better than the model said.

### Independent cross-check — Apple Watch active energy, 2026-09-18

Health reports **677 kcal/day of active energy averaged over 7–13 Sep**, with the
trend reading "Higher for 5 weeks." Active energy is everything above resting, so
it can be added to BMR directly:

| | Kcal |
|---|---|
| BMR (Mifflin-St Jeor) | 1,756 |
| Apple Watch active energy | +677 |
| Thermic effect of food, ~10% of a 2,189 kcal intake | +215 |
| **Implied maintenance** | **2,648** |
| **Model maintenance (×1.52)** | **2,669** |

**Within 21 kcal — under 1%.** Three independent routes now agree: the step-count
decomposition, the scale trend, and the watch's own energy estimate.

**This does not raise the target.** The 677 is already inside the ×1.52
multiplier — adding it on top would count the same activity twice and put the day
at maintenance. The standing rule holds: activity is measured, never credited in
advance.

One thing to watch. The chart shows recent weeks at 550–850 against 400–550 through
June–August, and the fitted weight line (−0.489 kg/wk) is running slightly ahead of
the food log's prediction (−0.436). That 0.05 kg/week gap is about 57 kcal/day —
within noise, but the right size for genuinely rising activity. If the gap persists
over the next two weeks, maintenance moves up rather than the model being wrong.

### The multiplier is confirmed — 2026-09-16

The trailing weight check was scheduled for around 2026-09-20. The data arrived
early and it is unambiguous.

| Weigh-in | Weight | Change |
|---|---|---|
| 2026-09-05 | 91.50 | — |
| 2026-09-07 | 90.75 | −0.75 over 2 days |
| 2026-09-09 | 90.30 | −0.45 over 2 days |
| 2026-09-11 | 90.05 | −0.25 over 2 days |
| 2026-09-16 | 90.15 | +0.10 over 5 days |
| 2026-09-17 | 90.05 | −0.10 over 1 day |
| 2026-09-18 | **89.55** | **−0.50 over 1 day — first reading under 90** |
| 2026-09-19 | 89.45 | −0.10 over 1 day |
| 2026-09-22 | 89.50 | +0.05 over 3 days |
| 2026-09-23 | 89.60 | +0.10 over 1 day |
| 2026-09-24 | **89.15** | **−0.45 over 1 day — largest single-day drop logged** |
| 2026-09-25 | **88.75** | **−0.40 over 1 day — first reading under 89** |

The 09-16 reading was noise — different clothing, and two higher-carb days behind
it. It came straight back off the next morning without anything changing.

**The 09-18 reading is noise in the other direction.** It follows Day 14, which
finished 38 kcal *above* maintenance. A day with no deficit cannot produce half a
kilo of fat loss; that is water, glycogen and gut contents moving, most likely
releasing what the previous few higher-carb days had held.

Endpoint-to-endpoint rates are unstable for exactly this reason — 09-07 to 09-18
reads −0.764 kg/week, which is a number the intake cannot support. A
least-squares line through all six post-flush points is the honest measure:

| Measure | Rate |
|---|---|
| Endpoints 09-07 → 09-19 | −0.700 kg/wk |
| **Least-squares fit, 7 points from 09-07** | **−0.560 kg/wk** |
| Predicted from 14 logged days at 2,167 kcal | −0.456 kg/wk |

### The test passed, and the calorie target is being met — 2026-09-25

**88.75 — the second sub-89.3 reading, which is exactly the test named yesterday.**
Two consecutive drops, 0.85 kg in two days, and the first reading under 89.

| Measure | Rate |
|---|---|
| Fit, 09-16 on — as of yesterday | −0.626 kg/wk |
| **Fit, 09-16 on — with today** | **−0.790 kg/wk** |
| **Fit, all 12 points from 09-05** | **−0.696 kg/wk** |
| Endpoints 09-11 → 09-25 (post-flush, 14 days) | −0.650 kg/wk |
| **Predicted from all 21 logged days at 2,125 kcal** | **−0.494 kg/wk** |

**Do not read the weekly fit.** It has now swung −0.53 → −0.63 → −0.79 on three
consecutive mornings without the food changing. Over twenty days it oscillates
between −0.4 and −0.8 depending entirely on which reading landed last, which is
why the 09-19 call and the 09-23 reversal both looked compelling and both
overstated what a week of data can support.

**The stable signal is the long window.** Post-flush, 09-11 to today: −0.65 kg/wk
observed against −0.49 predicted. A gap of ~0.16 kg/wk, about **176 kcal/day**, and
it has been roughly that size and direction for two weeks. That is consistent with
photo estimates running ~8% high, or maintenance being nearer 2,845 than 2,669. It
is not consistent with anything being wrong.

### The headline: the target is actually being hit

**The last seven days average 2,112 kcal against a 2,120 target.** That is the
first rolling week in the log to land on target, and it came down from 2,343 a
fortnight ago without a single meal being cut — only the snack layer thinning out.

| Window | Avg kcal | vs 2,120 |
|---|---|---|
| Seven days to 09-22 | 2,343 | +223 |
| **Seven days to 09-24** | **2,112** | **−8** |

**Guidance unchanged, because it is working.** 2,120, first 200 kcal free.

**Protein is now the only unsolved line.** The last seven days average **107 g
against a 130 g floor** — and Days 20 and 21 closed at 71 g and 72.5 g, the two
lowest of the log, both because the closing scoops were planned and never taken.
Seven of the last eleven days have ended that way. The calorie side of this has
been solved by habit; the protein side is still being solved by calculation every
night, and that is why it keeps failing.

### One reading does not reverse a call — 2026-09-24

**89.15 this morning, down 0.45 kg from yesterday.** That is the largest
single-day move in the log, and it breaks the five-day flat patch.

It also has enormous leverage on the fit, which is the reason to be careful:

| Measure | Rate |
|---|---|
| Fit, 09-16 on — **as of yesterday** | −0.526 kg/wk |
| Fit, 09-16 on — **with today** | **−0.626 kg/wk** |
| Fit, 09-16 on — *if today had read 89.60* | −0.404 kg/wk |
| Fit, all 11 points from 09-05 | −0.652 kg/wk |
| **Predicted from the last 7 logged days at 2,216 kcal** | **−0.412 kg/wk** |

One morning's reading swings the fitted rate by 0.22 kg/week in either direction.
**That is larger than the entire question being argued about.** Yesterday's call —
back to 2,120, the first 200 kcal are free — was made on two datasets agreeing
over a week; it does not get reversed by a single point, in either direction.

What the reading is **not** is 0.45 kg of fat. That would take 3,465 kcal of
deficit in one day. Day 20 ran ~800 under maintenance, so at most ~0.10 kg of it
is real; the rest is water, and most likely yesterday's 89.60 was the high
outlier rather than today being a new low.

What *is* real and worth keeping: **intake has genuinely come down.** The
seven-day average fell from 2,343 to 2,216 as 09-16's 2,360 rolled off and
Day 20's 1,870 rolled on. The scale is doing what the food log says it should.

**Guidance unchanged: 2,120, and the first 200 kcal are free.** The thing to
watch is whether a second sub-89.3 reading arrives this week. If it does, the
trend is genuinely at ~0.6 kg/wk and the target is if anything slightly
conservative. If tomorrow reads 89.5 again, today was water and nothing changed.

### The gap has closed and reversed — 2026-09-23

Four days ago the fitted line was running *ahead* of the food log and I read
above-target days as corrective. **With four more weigh-ins that reading is
wrong, and the correction matters because it changed the advice.**

| Measure | Rate |
|---|---|
| Least-squares fit, 9 points from 09-07 | −0.484 kg/wk |
| **Least-squares fit, last 6 points (09-16 on)** | **−0.526 kg/wk** |
| Predicted from all 17 logged days at 2,212 kcal | −0.415 kg/wk |
| **Predicted from the last 7 logged days at 2,343 kcal** | **−0.296 kg/wk** |

**The scale has been flat for five days: 89.55, 89.45, 89.50, 89.60.** Slightly up,
in fact. And the food log explains it exactly — **the last seven days average
2,343 kcal against a 2,120 target, 223 over.**

This is not a metabolic stall and nothing is broken. Intake rose and the scale
followed, with the usual few days of lag. The two datasets agree.

Where the 223 came from, all of it in the evening or between meals:

| | Kcal |
|---|---|
| Sunday's snack layer (vada, squid, gelato, mint juice) | ~585 |
| Two creamy garlic sauces, Monday and Tuesday | ~380 |
| Three restaurant dinners against their mess equivalents | ~600 each |

**Every mess-based day in that week landed on target.** The meals are not the
problem and have not been for a fortnight.

**Revised guidance: stop treating above-target days as corrective.** That framing
was right on 09-19 and is wrong now. Back to 2,120, and the first 200 kcal are
free — leave the garlic sauce and the snack layer alone and the rate returns to
~0.45 kg/week without touching a single meal.

### The multiplier is confirmed — 2026-09-16

The trailing weight check was scheduled for around 2026-09-20. The data arrived
early and it is unambiguous.

| Weigh-in | Weight | Change |
|---|---|---|
| 2026-09-05 | 91.50 | — |
| 2026-09-07 | 90.75 | −0.75 over 2 days |
| 2026-09-09 | 90.30 | −0.45 over 2 days |
| 2026-09-11 | 90.05 | −0.25 over 2 days |
| 2026-09-16 | 90.15 | +0.10 over 5 days |
| 2026-09-17 | 90.05 | −0.10 over 1 day |
| 2026-09-18 | **89.55** | **−0.50 over 1 day — first reading under 90** |
| 2026-09-19 | 89.45 | −0.10 over 1 day |
| 2026-09-22 | 89.50 | +0.05 over 3 days |
| 2026-09-23 | 89.60 | +0.10 over 1 day |

The 09-16 reading was noise — different clothing, and two higher-carb days behind
it. It came straight back off the next morning without anything changing.

**The 09-18 reading is noise in the other direction.** It follows Day 14, which
finished 38 kcal *above* maintenance. A day with no deficit cannot produce half a
kilo of fat loss; that is water, glycogen and gut contents moving, most likely
releasing what the previous few higher-carb days had held.

Endpoint-to-endpoint rates are unstable for exactly this reason — 09-07 to 09-18
reads −0.764 kg/week, which is a number the intake cannot support. A
least-squares line through all six post-flush points is the honest measure:

| Measure | Rate |
|---|---|
| Endpoints 09-07 → 09-19 | −0.700 kg/wk |
| **Least-squares fit, 7 points from 09-07** | **−0.560 kg/wk** |
| Predicted from 14 logged days at 2,167 kcal | −0.456 kg/wk |

**The gap has widened from 0.05 to 0.10 kg/week** — about **114 kcal/day**. Two
readings ago it was inside the noise; it is now consistent in direction across two
checks, which is worth naming without yet acting on.

Three candidate explanations, in order of likelihood:

1. **Photo estimates running ~5% high.** A 114 kcal error on a 2,167 kcal average
   is well inside what range-estimating from photographs can produce.
2. **Maintenance is higher than 2,669.** The watch shows active energy "higher for
   5 weeks"; a true multiplier of ~1.58 rather than 1.52 would close the gap
   exactly.
3. **Still water.** Seven points over twelve days is thin, and the last three
   readings are all recent lows pulling the fit down.

What it is **not**: unlogged whey. Scoops that were taken but not reported would
mean actual intake was *higher* than logged, which would make weight fall more
slowly, not faster.

No change to the target until there is another week of data. The practical
consequence is about protein, not calories: **losing at 0.56 kg/week on a 112 g
average protein intake is more aggressive than the plan intended**, and makes the
unconfirmed evening scoops matter more rather than less.

Predicted from thirteen logged days averaging 2,189 kcal against a 2,669
maintenance: **−0.436 kg/week.**

**The fitted line and the prediction agree to within 0.05 kg/week.** The ×1.52 multiplier — revised on 09-11 from
×1.45 using a month of Apple Watch step data — is correct. Maintenance is
~2,669 kcal and the 2,120 target holds.

That the first three intervals were −0.75, −0.45 and −0.25 and then the rate
settled at ~0.47 is the textbook shape: glycogen and its bound water leaving
first, fat loss underneath at a steady rate.

### Added activity — modelled, not credited

The daily walk is now inside the ×1.52 multiplier, so the extra-activity block on
the Targets sheet is reset to zero and reserved for walking **on top of** the
usual 8,200 steps. The calisthenics remain outside it:

| | Kcal/day |
|---|---|
| 60 push-ups | 24 |
| 36 pull-ups | 43 |
| **Total** | **~67** |

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

The multiplier is deliberate. The usual "6–7 days/week = ×1.725" row
assumes cardio-style work; an hour of PPL with rest periods is more like
250–350 kcal, so ×1.725 would put maintenance at ~3,050 and invent ~500 kcal
that doesn't exist. Everything above is an estimate — the scale over 2–3 weeks
is the real measurement, and the multiplier is the cell to correct.

Protein at 130–145 g is roughly 2.1 g/kg of estimated lean mass. It is
deliberately higher than the earlier 90–130 g band: in a deficit, on six
sessions a week, protein is what keeps the loss coming off fat rather than
muscle.

BMI is 34.1, which is worth raising with a GP or dietitian alongside this plan.

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

## Day 5 — 2026-09-08

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Puttu + kadala curry | 420–600 | 12–16 g | 12–19 g |
| Lunch | 2 eggs dry-fried (no oil) + half container ghee rice + small chicken curry + curd salad | 565–786 | 35–45 g | 29–44 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Dinner | 2 chapati + green peas curry + 2 boiled eggs | 520–676 | 26–33 g | 22–33 g |
| Drink | Coca-Cola Zero Sugar, 245 ml | 0–2 | 0 g | 0 g |
| Snack | 1 whey scoop + water | 100–120 | 20–25 g | 1–2 g |
| **TOTAL** | | **1,705–2,314** | **113–144 g** | **65–101 g** |
| **Midpoint** | | **2,009.5** | **128.5 g** | **83 g** |

Worth noting against the juices earlier in the log: this drink really is zero.
The pineapple and orange juices, both described as without sugar, cost 180 and
275 kcal and carried ~35 g of sugar each.

Eggs went onto the mess dinner as the protein anchor — 29.5 g from a meal that
would otherwise have given 17 g. The evening slot that decided the first four
days is now the one carrying protein.

**This lunch is the swap, done properly.** Eggs cooked dry with pepper and salt
instead of in oil (~20–25 kcal saved per egg), the ghee rice halved without being
asked, chicken for the protein anchor, curd on the side. **5.9 g of protein per
100 kcal** — against 4.7 for yesterday's plate and 3.7 for the mess baseline.

The mess served puttu rather than the Tuesday masala dosa on the menu.

A better breakfast than it looks. Puttu is steamed rice flour and coconut with
**no frying oil at all**, and the kadala carries the protein — 14 g, against
9.5 g yesterday and 7.5 g on Day 1. Still 2.7 g of protein per 100 kcal, but the
fat is coconut and curry oil rather than a fry-up.

### Day 5 closed — the trend broke

**2,009.5 kcal, 3 above target and 547 under maintenance.** Protein 128.5 g,
fat 83 g.

| | Day 4 | Day 5 |
|---|---|---|
| Calories | 2,560.5 | **2,009.5** |
| Protein | 130.1 g | 128.5 g |
| Fat | 104.25 g | **83 g** |
| vs maintenance | −4 | **+547** |

**551 fewer calories and 21 g less fat for the same protein.** Four days of
rising calories and rising fat stopped here, and it stopped by swapping rather
than restricting: dry-fried eggs instead of oil-fried, rice halved, eggs on the
dinner as the protein anchor, whey rather than more eggs late.

Hunger arrived at night, and was met with the scoop the plan already owed —
which is the correct answer to it. Hunger on a 547 kcal deficit is the receipt,
not a warning.

---

## Day 6 — 2026-09-09

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 1 dosa + egg roast (1 whole egg) | 360–490 | 10–14 g | 17–28 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Lunch | Mess meals plate, rice halved, + 2 boiled eggs + 1-egg omelette, veg curry, coconut thoran, kadala-veg thoran, chutney | 760–1,060 | 33–44 g | 31–48 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Snack | 2 boiled eggs | 140–156 | 12–13 g | 10–11 g |
| Dinner | 2 chapati + chicken curry | 480–680 | 26–36 g | 20–34 g |
| Drink | Coca-Cola Zero Sugar, 245 ml | 0–2 | 0 g | 0 g |
| **TOTAL** | | **1,940–2,648** | **121–157 g** | **80–127 g** |
| **Midpoint** | | **2,294** | **139 g** | **103.5 g** |

Both levers again, third day running: rice halved, three eggs' worth of protein
added. The plate came in at 4.2 g of protein per 100 kcal against the mess
baseline of 3.7.

**The Wednesday cut was made at breakfast, as planned.** The menu's poratta and
egg roast models at ~630 kcal; a dosa in place of the poratta brought it to 425.
~205 kcal saved on the heaviest breakfast of the week.

Protein is 12 g, because the egg roast had one egg rather than two. A second egg
would have cost 74 kcal for 6.3 g — cheap on a breakfast this light.

### Wednesday is one of the two tight days

### Day 6 closed

**2,294 kcal, 139 g protein, 103.5 g fat** — 294 over target, 256 under
maintenance. Best protein day in the log; second-highest fat.

The split is the interesting part:

| | Calories |
|---|---|
| Meals (breakfast 425 + lunch 910 + dinner 581) | **1,916** — under target |
| Snacks (2 scoops 230 + 2 eggs 148) | 378 |
| **Total** | **2,294** |

**The meals were well managed and came in under target on their own.** What took
the day 294 over was the snack layer. Protein was already at 108 g before dinner,
and dinner's own 31 g would have reached 139 g without the 5pm eggs. Dropping
just those two eggs gives **2,146 kcal, 126.5 g protein, 93 g fat** — inside the
band, 404 under maintenance.

That is the refinement for next week: the mess plates are now handled. The
question is no longer "how do I add protein" but "when do I stop adding it".

---

## Day 7 — 2026-09-10 (in progress)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 1 dosa + sambar + red chutney (coconut chutney skipped) | 350–480 | 8–12 g | 12–25 g |
| Lunch | Mess meals plate, rice halved, + matthi taken without the gravy + 2 small fried chicken pieces + sides | 760–1,150 | 39–57 g | 28–53 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Snack | Chicken roll, breadcrumbed and deep-fried | 290–400 | 10–15 g | 15–23 g |
| Dinner | 2 chapati + gobi chilli | 380–540 | 10–15 g | 14–26 g |
| **TOTAL (logged so far)** | | **1,880–2,700** | **87–124 g** | **70–130 g** |
| **Midpoint** | | **2,290** | **105.5 g** | **100 g** |

The roll was first costed as a paratha wrap at ~17 g of protein. On seeing it —
breadcrumbed, deep-fried, mostly white bread with a thin filling — it is
**12.5 g at 3.6 g per 100 kcal**, barely above the mess baseline and a third of
the bream's density. The calories are the same; they are just bread and frying
oil rather than chicken.

**Lifting the fish out and leaving the gravy behind is the sharpest single move
in the log so far.** Matthi curry gravy is where the oil sits; taking the fish
alone keeps ~22 g of protein and drops roughly 100 kcal and 10 g of fat. At
5.1 g of protein per 100 kcal this is the best mess lunch yet.

Coconut chutney skipped again — the same cut made on Day 1, and still worth
~100 kcal and ~9 g of fat every time.

### Thursday is the protein desert

No meat anywhere on the menu today: ghee roast, meals, gobbi chilly. 54 g of
protein as served, the lowest of the week — and lunch has already beaten that
on its own.

**515 kcal to target, 49.5 g of protein still to find** after the first scoop.

| | Calories | Protein | vs maintenance |
|---|---|---|---|
| Gobbi + 2 chapati + 2 more scoops | 2,195 | 139 g | −355 |
| **Bream in place of the gobbi + 1 more scoop** | **1,925** | **145 g** | **−625** |
| Bream alone, no further scoop | 1,810 | 122.5 g | **−740** |

The bream still turns this into the week's best day: **145 g of protein at
1,925 kcal, 625 under maintenance.** The mess dinner works too, but costs
270 more calories for 6 g less protein. Bream on its own would be the biggest
deficit of the week at 740, with protein still inside the band.

---

## Day 8 — 2026-09-11 (in progress)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 set dosa + sambar + red chutney (coconut chutney skipped) | 410–550 | 10–15 g | 11–24 g |
| Breakfast | 1 egg fried dry, no oil, with pepper | 70–78 | 6–6.5 g | 5–5.5 g |
| Lunch | Chicken biriyani, rice halved, + 2 chicken pieces + 3 boiled eggs + curd salad | 700–954 | 45–57 g | 35–53 g |
| **TOTAL (logged so far)** | | **1,180–1,582** | **61–78.5 g** | **51–82.5 g** |
| **Midpoint** | | **1,381** | **69.75 g** | **66.75 g** |

Coconut chutney skipped for the fourth time in eight days — ~100 kcal and ~9 g
of fat each occasion, roughly 400 kcal and 36 g of fat across the week from one
repeated decision.

### Friday is the roomiest day of the week

Biriyani at lunch carries real protein and the kadala dinner is light.
**1,566 kcal left, 111 g of protein to find.**

With the biriyani rice halved (−190 kcal for only −3.5 g of protein, since the
rice carries the calories and the chicken the protein):

| | Calories | Protein | vs maintenance |
|---|---|---|---|
| Halved biriyani + kadala dinner + 3 scoops | 1,839 | 131.75 g | −830 |
| **Halved biriyani + kadala dinner + 4 scoops** | **1,954** | **154.25 g** | **−715** |

**Four scoops.** Three gives the bigger deficit, but protein matters more on a
large-deficit day, not less — 830 under maintenance on a 6-day split is exactly
when the body starts looking at muscle. The extra 115 kcal buys 22.5 g of
insurance.

---
## Day 9 — 2026-09-12 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 set dosa + sambar + red chutney (coconut chutney skipped) | 410–550 | 10–15 g | 11–24 g |
| Lunch | Mess meals plate, rice halved, + 2 boiled eggs + 1 fried fish piece + sambar, curd, veg sides | 665–965 | 31.5–42.5 g | 29–50 g |
| Snack | 2 boiled eggs | 140–156 | 12–13 g | 10–11 g |
| Dinner | 2 chapati + chicken varutharachathu, gravy poured over | 460–650 | 23–32 g | 23–39 g |
| **TOTAL** | | **1,675–2,321** | **76.5–102.5 g** | **73–124 g** |
| **Midpoint** | | **1,998** | **89.5 g** | **98.5 g** |

The two closing scoops and the half grilled chicken were both discussed and
neither was confirmed, so neither is logged. As it stands Day 9 is a **−671 kcal
day, the second-largest deficit of the ten** — but at **89.5 g of protein**, the
lowest protein day since Day 1.

That is the trade the evening scoops existed to prevent. A 671 deficit on a
six-day split with 1.0 g/kg of protein is the shape where the scale keeps moving
and some of what leaves is muscle. If the scoops did get taken, say so and the
day closes at 2,228 and 134.5 g.

Fat still landed at ~98.5 g against a 55 g floor, and roughly 45 g of it came
from the gravies — sambar, three veg sides, and the varutharachathu poured over
the chapati rather than left in the container.

---

## Day 10 — 2026-09-13 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 wheat porotta + kadala curry | 520–750 | 16–22 g | 20–36 g |
| Lunch | Ghee rice (halved) + chicken curry + curd | 440–630 | 21.5–29.5 g | 18.5–31 g |
| Snack | 2 boiled eggs | 140–156 | 12–13 g | 10–11 g |
| Dinner | 2 chapati + egg roast (1 egg) + 2 boiled eggs | 540–696 | 26–31 g | 28–39 g |
| **TOTAL** | | **1,640–2,232** | **75.5–95.5 g** | **76.5–117 g** |
| **Midpoint** | | **1,936** | **85.5 g** | **96.75 g** |

Ghee rice halved. Dinner ran ~170 kcal over the menu on two extra boiled eggs
and a visibly oily roast masala. The closing scoops were not confirmed, so Day 10
closes at 85.5 g of protein — the third day running that the evening whey has
gone unlogged.

---

## Day 11 — 2026-09-14 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Large restaurant dosa + sambar + red chutney (white chutney skipped) | 380–590 | 10–16 g | 14–29 g |
| Lunch | Mess meals plate, rice halved, + 1 fried fish piece + veg curry, sambar, thin curry, white side, green side | 565–950 | 22.5–34 g | 23–48 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Dinner | Leftover half rice from lunch + chicken curry | 375–560 | 20–27 g | 12–19 g |
| **TOTAL** | | **1,420–2,230** | **72.5–102 g** | **50–99 g** |
| **Midpoint** | | **1,825** | **87.25 g** | **74.5 g** |

The rice swap at dinner was the right call: ~112 kcal cheaper than three chapati
for only ~6 g less protein, and the saving pays for a scoop worth 22.5 g. Net
**+16.5 g of protein and −6.5 g of fat** against the chapati version, using rice
already bought.

Scoops 2 and 3 were not confirmed, so Day 11 closes at 87.25 g — a **−844 kcal
day**, the largest deficit of the twelve and the third-lowest protein. The
unidentified green 330 ml can is not counted either.

---

## Day 12 — 2026-09-15 (closed) — 33rd birthday

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Large restaurant dosa + sambar + red chutney (white chutney skipped) | 380–590 | 10–16 g | 14–29 g |
| Lunch | 2 chapati + chicken curry with 4 chicken pieces | 420–600 | 26–36 g | 18–29 g |
| Snack | 1 slice birthday cake | 250–400 | 3–5 g | 12–22 g |
| Dinner | Half ghee rice + chicken curry + 2 pieces beef varattiyathu + raita | 690–1,030 | 44–62 g | 33–58 g |
| **TOTAL** | | **1,740–2,620** | **83–119 g** | **77–138 g** |
| **Midpoint** | | **2,180** | **101 g** | **107.5 g** |

**A good birthday.** Cake, a beef-and-chicken dinner and a restaurant breakfast,
and it still closed within 60 kcal of target at a **−489 deficit**. Both levers
were taken unprompted: chapati instead of ghee rice at lunch, ghee rice halved at
dinner. Dinner alone carried 53 g of protein — the best single meal of the twelve
days.

The closing scoop was not confirmed, so protein stands at 101 g rather than the
123.5 g it would have been.

---

## Day 23 — 2026-09-26 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 set dosa + sambar + red chutney (white chutney skipped) | 390–530 | 10–14 g | 11–23 g |
| Lunch | Mess plate — rice halved, fish fry, pappadam, sambar, okra curry, cowpea thoran, beetroot pachadi, raita | 710–1,050 | 35–50 g | 25–46 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Dinner | Half grilled chicken (skin removed) + chicken curry pieces only + chicken soup + rocket salad + hummus + 1 kubbus | 925–1,420 | 91–114 g | 33–59.5 g |
| **TOTAL** | | **2,125–3,130** | **156–203 g** | **70–131.5 g** |
| **Midpoint** | | **2,627.5** | **179.5 g** | **100.75 g** |

**Thirteenth consecutive breakfast without the white chutney.** Across thirteen
days that one repeated decision is ~1,300 kcal and ~115 g of fat not eaten — more
than half a kilogram of the 2.75 kg lost, from a single habit that costs nothing.

### The fish fry does the work — 2026-09-26

**880 kcal against the menu's 950, and ~42 g of protein.** At **4.8 g per 100 kcal**
this is the second-best mess plate in the log, behind only yesterday's biriyani.

| Item | Kcal | Protein |
|---|---|---|
| Rice, halved | ~230 | ~4.5 g |
| **Fish fry (1 whole small fish)** | **~150** | **~17 g** |
| Cowpea thoran | ~100 | ~6 g |
| Pappadam | ~90 | ~3 g |
| Sambar | ~90 | ~4 g |
| Okra curry | ~90 | ~2.5 g |
| Beetroot pachadi | ~55 | ~2 g |
| Raita | ~55 | ~2.75 g |
| **Total** | **~860** | **~42 g** |

**The fish fry is the best protein-per-calorie item the mess serves** — ~11 g per
100 kcal, three times the plate average, better than the chicken fry two days ago.
Fried whole fish keeps its skin and bones, so almost all of the 150 kcal is
actually fish rather than batter.

The cowpea thoran is the quiet second contributor: ~6 g of protein for ~100 kcal,
which is well above anything else vegetarian on the plate.

### Closing Saturday — 2,627.5 kcal, 179.5 g protein

**The day lands 22 kcal under maintenance.** Two decisions made before the food
was touched — **the skin came off and the curry gravy was left** — are worth
~380 kcal between them. Without either, this finishes ~360 above maintenance.

| Item | Kcal | Protein |
|---|---|---|
| **Half grilled chicken, skin removed** | ~410 | ~64 g |
| 1 kubbus (with zaatar oil) | ~290 | ~8.5 g |
| Hummus | ~220 | ~6.5 g |
| Chicken curry, pieces only | ~120 | ~15 g |
| Chicken soup | ~110 | ~7 g |
| Rocket salad | ~22 | ~1.5 g |
| **Dinner** | **~1,172** | **~102.5 g** |

**Taking the curry pieces without the gravy is the new move**, and it is the same
idea as the skin: ~15 g of protein for ~120 kcal instead of ~220. It is the first
time the log records gravy left deliberately.

### The pattern is visible two nights running

| Day | Kcal | Where |
|---|---|---|
| 09-22 | 1,782 | mess |
| 09-23 | 1,870 | mess |
| 09-24 | 1,975 | mess |
| **09-25** | **2,538** | **restaurant grill** |
| **09-26** | **2,628** | **restaurant grill** |

**Every mess day this week landed under 2,000. Both restaurant nights landed above
2,500.** The seven-day average is back to 2,246 against a 2,100 target, having
been 2,112 two days ago.

This is not a discipline failure — the portion decisions at both dinners were the
right ones and the protein is the best it has been all month. A grill dinner
simply costs ~600 kcal more than the mess equivalent, and two in a row moves the
week by ~170 kcal/day on its own.

**179.5 g of protein is the second-highest day of the log**, 35 g past the top of
the band. No closing scoop.

**Second day running that a scoop went in before evening.** 77 g by mid-afternoon
on the tighter of the two menu days, with only the dinner and one more scoop left
to place.


### Saturday is one of the two tight days

**2,100 kcal as served**, against a 2,100 target — the menu uses the entire day
before a scoop is taken.

| | Kcal | Protein |
|---|---|---|
| Breakfast (logged) | 460 | 12 g |
| Meals plate | ~950 | ~33 g |
| Chicken varutharachathu + 2 chapati | ~605 | ~33 g |
| **Menu day** | **~2,015** | **~78 g** |

Saturday is **not** a protein desert — varutharachathu is a proper chicken curry,
so the menu already carries 78 g. The problem is purely the calorie ceiling.

The lever is the one that worked yesterday and on Thursday: **halve the rice at
lunch (~230 kcal) and the day drops to ~1,785**, which leaves room for three
scoops and a finish at ~2,130 with ~143 g — target met and the floor cleared,
with nothing sacrificed at any meal.

Varutharachathu is a roasted-coconut gravy — the richest of the mess curries and
the reason Saturday is priced where it is. Taking the gravy sparingly rather than
pouring it over both chapati is worth ~80 kcal on its own.

---


## Day 22 — 2026-09-25 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 3 idli + sambar + red chutney (white chutney skipped) | 280–410 | 10–13 g | 6–14 g |
| Lunch | Chicken biriyani — rice halved, 2 chicken pieces, pappadam, salad | 550–790 | 34–50 g | 23–42 g |
| Snack | Black coffee + 1 whey scoop (1 h before lunch) | 100–130 | 20–25 g | 1–3 g |
| Snack | Black coffee + 1 whey scoop + a fist of walnuts (~30 g) | 265–360 | 24–30.5 g | 17–26 g |
| Dinner | Half grilled chicken (skin removed) + small kubbus + kadala curry + veggies + hummus | 830–1,360 | 78–97 g | 27–61 g |
| **TOTAL** | | **2,025–3,050** | **166–215.5 g** | **74–146 g** |
| **Midpoint** | | **2,537.5** | **190.75 g** | **110 g** |

**Twelfth consecutive breakfast without the white chutney.**

**The cheapest breakfast on the weekly menu, by a distance.** 345 kcal against the
dosa's 510 and the poori-baji's ~600 — because idli is steamed and everything else
on the breakfast rotation is fried. Protein density is ordinary at 3.3 g per
100 kcal, but the 165 kcal saved against yesterday buys a scoop and a half.

### The best lunch in the log — 2026-09-25

**670 kcal and ~42 g of protein. 6.3 g per 100 kcal** — nearly double the mess
average of 3.7, and the highest-protein lunch of the twenty-two days.

The reason is the portion decision, not the dish: **the rice was halved and both
chicken pieces were kept.** That is the correct way round.

| Item | Kcal | Protein |
|---|---|---|
| Biriyani rice, halved | ~330 | ~7.5 g |
| **2 chicken pieces** | **~220** | **~29 g** |
| Pappadam | ~65 | ~2.5 g |
| Salad / raita | ~55 | ~3 g |
| **Total** | **~670** | **~42 g** |

Biriyani rice is cooked in ghee and stock, so it is denser than the plain rice at
a meals plate — halving it saved ~330 kcal rather than the ~230 a plain plate
saves. The chicken cost ~220 kcal and returned 29 g.

### Closing Friday — 2,537.5 kcal, 190.75 g protein

**The skin came off, and it pulled the day back under maintenance.**

| | Day total | vs maintenance |
|---|---|---|
| Skin on | 2,827.5 | **+177.5** |
| **Skin removed** | **2,537.5** | **−112.5** |

| Item | Kcal | Protein |
|---|---|---|
| **Half grilled chicken, skin removed** | ~410 | ~64 g |
| Hummus | ~220 | ~6.5 g |
| Kadala curry | ~250 | ~10 g |
| Small kubbus | ~190 | ~6 g |
| Veggies | ~22 | ~1 g |
| **Dinner** | **~1,095** | **~87.5 g** |

**~290 kcal and ~29 g of fat removed for the loss of about 2 g of protein.** It is
the single highest-leverage decision available on any plate in this log, and it
was taken after the food had already arrived — which is the part worth keeping.

**190.75 g of protein is still the highest day recorded**, 46 g past the top of the
band. Twenty-two days now average 2,144 kcal and 113.3 g; the last seven average
2,206 against a 2,100 target.

**The day finishes ~178 kcal above maintenance.** Only the second such day in
twenty-two; 09-17 was the other, at +39.

| Item | Kcal | Protein |
|---|---|---|
| **Half grilled chicken, skin on** | ~700 | ~66 g |
| Hummus | ~220 | ~6.5 g |
| Kadala curry | ~250 | ~10 g |
| Small kubbus | ~190 | ~6 g |
| Veggies | ~22 | ~1 g |
| **Dinner** | **~1,385** | **~89.5 g** |

**192.75 g of protein is the highest of the log** by a wide margin, and 47 g past
the top of the band. Protein beyond ~145 g on a cut is not harmful, it is simply
calories in an efficient wrapper — so the half rather than the quarter bought
nothing the day did not already have at 103 g by mid-afternoon.

**The skin is where the day turned.** ~290 kcal and ~29 g of fat for ~2 g of
protein. Without it this finishes at ~2,538 — still over target, but comfortably
under maintenance.

**What it actually costs: nothing much.** A 178 kcal surplus is ~23 g of theoretical
fat mass, and at 193 g of protein alongside a training day, very little of it goes
anywhere. The week still averages 2,247 against a 2,100 target.

**No closing scoop.** The floor was cleared three times over.

### The day in one line

Breakfast, lunch and both scoops were excellent — the halved biriyani rice with
both chicken pieces kept was the best single decision in the log. **Dinner spent
all of it and 178 kcal more.** The pattern named on 09-23 holds exactly: the meals
are managed; it is the restaurant evenings that decide the week.

### Two scoops before evening — 2026-09-25

**103 g of protein with dinner still to come.** That has not happened once in
twenty-two days; the previous best at this hour was ~76 g.

The walnuts are worth naming honestly. **At ~195 kcal for 30 g they are the most
calorie-dense food in the reference table** — denser per gram than the pazham pori
that cost yesterday its target. The difference is what comes back: ~5 g protein,
2 g fibre, and ALA omega-3, against the fritter's 2.5 g of protein and nothing
else. Dense is not the same as empty.

Fat now stands at 66 g, above the 55 g floor. That is fine — the floor is a floor,
and within a fixed calorie target fat displaces carbohydrate rather than adding to
the total.

### The scoop moved, and it worked — 2026-09-25

**The first scoop of the day went in an hour before lunch rather than after
dinner** — the change discussed this morning, made the same day.

It matters because of where it sits in the day. A scoop at 9pm is the last item on
a list that has already been negotiated three times over; a scoop before lunch is
taken before the day has formed an opinion about it. **Seven of the last eleven
closing scoops never happened. This one did.**

**Protein stands at 76 g before the afternoon.** Day 20 and Day 21 each finished
the entire day below that — 71 g and 72.5 g.

### Friday is the roomiest day of the week

**1,455 kcal as served** — the lightest of the seven, and ~645 kcal under target.
Lunch is chicken biriyani, the only menu lunch with meat built into it.

| | Kcal | Protein |
|---|---|---|
| Breakfast (logged) | 345 | 11.5 g |
| Chicken biriyani | ~650 | ~33 g |
| Kadala + 2 chapati | ~480 | ~16 g |
| **Menu day** | **~1,475** | **~60.5 g** |
| **+ 3 scoops** | **~1,820** | **~128 g** |

**Three scoops fit inside target with 280 kcal still spare**, which is the first
day this week where the floor and the target are not in competition. If one of
them goes in pre-workout it is already half solved.

---

## Day 21 — 2026-09-24 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Large plain dosa + sambar + red chutney (white chutney skipped) | 400–620 | 10–16 g | 17–33 g |
| Lunch | Mess plate — rice halved, pappadam, cabbage thoran, dal, curry gravy, 1 small chicken fry, small curd | 570–850 | 27–40 g | 22.5–41 g |
| Snack | 2 small pieces of beef from curry + 1 pazham pori | 220–330 | 10–15 g | 12–20 g |
| Dinner | Gobi chilly + 2 chapati | 400–560 | 11–16 g | 16–28 g |
| **TOTAL (logged so far)** | | **1,590–2,360** | **58–87 g** | **67.5–122 g** |
| **Midpoint** | | **1,975** | **72.5 g** | **94.75 g** |

**Eleventh consecutive breakfast without the white chutney.**

Plain rather than the menu's ghee roast, which saves ~50 kcal of ghee — and
identical to yesterday's breakfast in every respect. **Two consecutive days
opening at 510 kcal is the cheapest breakfast pattern in the log.**

### Closing Thursday — the snack is the whole gap

**1,975 kcal and 72.5 g of protein before any whey. 145 kcal to target, 57.5 g to
the floor.** Those two numbers cannot both be met.

The snack is exactly why:

| | Kcal | Protein | g/100 kcal |
|---|---|---|---|
| 2 small beef pieces | ~90 | ~12.5 g | 13.9 |
| **1 pazham pori** | **~185** | **~2.5 g** | **1.4** |

**The pazham pori is the lowest protein density in the entire reference table** —
below garlic toum, below plain rice. It is deep-fried banana in sweetened batter,
and on its own it is the 145 kcal that now stands between the day and its target.

The beef was a good call and the fritter undid it.

| | Day total | Protein | vs maintenance | Rate |
|---|---|---|---|---|
| **3 scoops** | **2,320** | **140 g** | −349 | 0.32 kg/wk |
| 2 scoops | 2,205 | 117.5 g | −464 | 0.42 kg/wk |

**Take three.** The calories are already spent either way — the choice left is
whether they buy protein or nothing. Two scoops would be the thirteenth day under
the floor in twenty-one, and would follow yesterday's 71 g.

**Without the snack this day lands at 2,045 with 140 g on three scoops** — target
met, floor cleared, nothing given up at any meal. Breakfast, lunch and dinner were
all managed well today. The snack layer is the entire difference, for the fourth
time in a week.

**Closed at 1,975 kcal and 72.5 g — no scoops were confirmed.** Second-lowest
protein day of the log, immediately after the lowest. Seventh unconfirmed closing
in eleven days.

### Lunch beat the menu on both lines — 2026-09-24

**710 kcal against the menu's 950, and ~33 g of protein against ~33 g** — the
halved rice took ~230 kcal off and the chicken fry put protein back that the
Thursday menu does not contain.

| Item | Kcal | Protein |
|---|---|---|
| Rice, halved | ~230 | ~4.5 g |
| 1 small chicken fry piece | ~90 | ~9.5 g |
| Curry gravy | ~95 | ~7 g |
| Dal | ~80 | ~4 g |
| Cabbage thoran | ~80 | ~2.5 g |
| Pappadam | ~75 | ~2.5 g |
| Small curd | ~60 | ~3.5 g |
| **Total** | **~710** | **~33 g** |

**The chicken fry is the whole plate's protein density.** At ~10.5 g per 100 kcal
it is three times the mess average of 3.7, and it arrived on the one menu day
that lists no meat at all.

**Running: 1,220 kcal, 46.5 g protein. 900 kcal to target, 83.5 g to the floor.**

### Thursday is the second protein desert

**1,830 kcal and 54 g of protein as served** — the menu's weakest protein day
after Tuesday. Gobbi chilly at dinner is cauliflower; there is no meat, fish or
egg anywhere on the Thursday menu.

This matters more than usual today because **Day 20 closed at 71 g**, the lowest
of the log. Two low-protein days back to back is the pattern to avoid.

The fix is the same one that worked on Tuesday:

| | Effect |
|---|---|
| **Egg omelette with the lunch plate** | +115 kcal, +7 g |
| **1 chapati at dinner instead of 2** | −120 kcal, −3 g |
| **Quarter grilled chicken at dinner** | +205 kcal, +32 g |

Run all three and Thursday clears 100 g before any whey, at roughly the same
calories as the menu.

---

## Day 20 — 2026-09-23 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Large plain dosa + sambar + red chutney (white chutney skipped) | 400–620 | 10–16 g | 17–33 g |
| Lunch | Mess meals plate + 2-egg omelette, pappadam, veg curry, chammanthi, pickle | 630–940 | 23–31 g | 27.5–45 g |
| Snack | 1-egg omelette | 90–140 | 6–8 g | 7–11 g |
| Dinner | 2 chapati + chicken curry (2 small pieces) | 380–540 | 20–28 g | 16–26 g |
| **TOTAL (logged so far)** | | **1,500–2,240** | **59–83 g** | **67.5–115 g** |
| **Midpoint** | | **1,870** | **71 g** | **91.25 g** |

Plain rather than masala — no potato filling, ~70 kcal cheaper than yesterday's.
**Tenth consecutive breakfast without the white chutney.**

### Wednesday is one of the two tight days

**2,160 kcal as served.** Eating breakfast out came in ~120 under the menu's
poratta-and-egg-roast, which helps.

The **2-egg omelette is the best item on the lunch plate** — ~210 kcal for ~13 g of
protein, 6.2 g per 100 kcal against the mess average of 3.7.

**Two things are not confirmed and both are large.** The rice was not stated as
halved and does not obviously look halved (~120 kcal). The three side containers
are not counted (~200–300 kcal between them). If both went in, the day is ~370
kcal heavier than the numbers below.

### Closing Wednesday

Dinner came in ~120 kcal under the menu because the chicken portion was small —
two pieces rather than the usual three or four.

**250 kcal to target, 59 g of protein to the floor.**

| | Day total | Protein | vs maintenance | Rate |
|---|---|---|---|---|
| **3 scoops** | **2,215** | **138.5 g** | **−454** | **0.41 kg/wk** |
| 2 scoops | 2,100 | 116 g | −569 | 0.52 kg/wk |

This is the tension of the week in one line. Two scoops lands on target and
restarts the scale; three clears the protein floor but runs 95 over.

**Take three.** 2,215 is still below the last seven days' average of 2,286, so it
improves the trend rather than continuing it — and 116 g would be the twelfth day
under the floor in twenty-one. The floor has been missed far more often than the
target has.

Four eggs' worth of omelette and three scoops is what today needed, because the
lunch plate carried no meat or fish at all.

**Closed at 1,870 kcal and 71 g of protein — no scoops were confirmed.** That is
the lowest protein day of the twenty logged, and the sixth day in ten where a
closing scoop was planned and never reported.

---

## Day 19 — 2026-09-22 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Large masala dosa + sambar | 410–600 | 10–15 g | 17–31 g |
| Lunch | Ghee rice (halved) + chicken curry + raita | 490–710 | 26–36 g | 21–36 g |
| Dinner | Quarter grilled chicken + green peas curry + 1 chapati + salad | 545–810 | 44.5–59 g | 23.5–40 g |
| **TOTAL** | | **1,445–2,120** | **80.5–110 g** | **61.5–107 g** |
| **Midpoint** | | **1,782.5** | **95.25 g** | **84.25 g** |

### Tuesday is the protein desert

**1,565 kcal and 54.5 g of protein as served** — the lowest-protein day on the
menu, with green peas and two chapati at dinner and no meat in the evening at all.

Ghee rice halved again — ~190 kcal for ~3 g of protein, the cheapest cut on the
week's menu.

**Tuesday stopped being the protein desert.** The menu serves 54.5 g; adding a
quarter grilled chicken to the green peas dinner and taking one chapati instead of
two puts the day at **95.25 g before any whey at all**. That is the single biggest
structural fix made to a mess day in nineteen days.

### Closing Tuesday

**337 kcal to target, 34.75 g of protein to the floor.**

| | Day total | Protein | Fat | vs maintenance | Rate |
|---|---|---|---|---|---|
| **3 scoops, creamy sauce left** | **2,127.5** | **162.75 g** | **~88 g** | **−541** | **0.49 kg/wk** |
| 2 scoops, creamy sauce left | 2,012.5 | 140.25 g | ~88 g | −656 | 0.60 kg/wk |
| 2 scoops + the creamy sauce | 2,202.5 | 141.25 g | ~105 g | −466 | 0.42 kg/wk |
| 3 scoops + the creamy sauce | 2,317.5 | 163.75 g | ~105 g | −351 | 0.32 kg/wk |

**Three scoops, and leave the creamy sauce in its container.** 7 kcal over target,
162.75 g of protein, a 541 deficit.

The sauce is the same garlic-toum emulsion as yesterday: **~190 kcal for ~1 g of
protein and ~17 g of fat.** It is the only item on the table that costs real
calories for nothing, and it is the difference between a 541 and a 351 deficit.

---

## Day 18 — 2026-09-21 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 poori + potato bhaji | 290–420 | 7–10 g | 14–24 g |
| Lunch | Mess meals plate + 1-egg omelette roll, 2 pappadam, sambar, kadala, chammanthi, veg curry | 750–1,160 | 25–37 g | 31.5–55 g |
| Lunch | Rasam (small container) | 25–50 | 1–2 g | 1–3 g |
| Dinner | Half grilled chicken + 2 chapati + chicken curry + salad + creamy garlic sauce | 865–1,310 | 67–92 g | 46–78.5 g |
| **TOTAL** | | **1,930–2,940** | **100–141 g** | **92.5–160.5 g** |
| **Midpoint** | | **2,435** | **120.5 g** | **126.5 g** |

**Poori is the fattiest item per calorie on the week's menu** — deep-fried, ~19 g of
fat for 355 kcal, against the idly set's 3–8 g for 325.

**The rice was not stated as halved and does not look halved**, so it is costed as
a near-full portion. If it was halved, take ~120 kcal off and the evening gets a
chapati back. The plate also carried two pappadam (~130 kcal, fried) and every
side container — it is the fullest meals plate logged since Day 13.

The omelette roll is the one thing doing protein work on it.

### Closing Monday

**Skipping the fries and the kubboos is the best decision of the day — ~400–600
kcal avoided**, and both were sitting on the plate. That is worth more than every
deliberate cut made at lunch.

**Day 18 closed at 2,435 kcal, 120.5 g of protein, 126.5 g of fat — a 234 deficit.**
No closing scoop was reported and the creamy sauce was taken as plated.

| | Day total | Protein | vs maintenance | Rate |
|---|---|---|---|---|
| **Leave the creamy sauce + 1 chapati instead of 2 + 1 scoop** | **2,245** | **138.25 g** | **−424** | **0.39 kg/wk** |
| Leave the creamy sauce + 1 scoop | 2,360 | 141.75 g | −309 | 0.28 kg/wk |
| As plated, + 1 scoop | 2,550 | 143 g | −119 | 0.11 kg/wk |
| As plated, no scoop | 2,435 | 120.5 g | −234 | 0.21 kg/wk |

**The creamy sauce is ~190 kcal for ~1 g of protein** — 0.5 g per 100 kcal, the
worst rate of anything logged in eighteen days. It is the same garlic-toum
emulsion that cost ~120 kcal on Day 14, and a bigger portion here.

Leaving it and taking one chapati recovers a 424 deficit with protein 8 g clear of
the floor. As plated with a scoop, the day runs at 0.11 kg/week — technically a
deficit, effectively a maintenance day.

The half grilled chicken itself is not the problem: ~485 kcal for ~57 g of protein
is 11.8 g per 100 kcal, the best whole-food rate available.

---

## Day 17 — 2026-09-20 (closed)


| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 1 porotta + kadala curry | 360–550 | 12–16 g | 16–27 g |
| Lunch | Ghee rice (halved) + chicken curry + curd | 490–710 | 26–36 g | 21–36 g |
| Snack | 1 parippu vada + milk coffee (no sugar) | 170–280 | 7–10.5 g | 9–16 g |
| Snack | 1 small stuffed squid, pan-fried | 130–200 | 10–14 g | 8–15 g |
| Snack | Clear soup (one spoonful only) | 5–12 | 0–0.5 g | 0–0.5 g |
| Drink | Mint juice (small cup) | 60–140 | 0–0.5 g | 0–0.5 g |
| Snack | Low-calorie gelato, coconut crème (1 serving) | 80–95 | 1–3 g | 2.5–4.5 g |
| Dinner | Quarter grilled chicken + mixed grill | 650–1,050 | 75–105 g | 33–63 g |
| **TOTAL** | | **1,945–3,037** | **131–185.5 g** | **89.5–162.5 g** |
| **Midpoint** | | **2,491** | **158.25 g** | **126 g** |

**One porotta rather than the menu's two — ~205 kcal saved** for ~4 g of protein.

The ghee rice was halved anyway, against the morning's suggestion. **That turns out
to be the better call, not a worse one.** Leaving the rice would have added ~190
kcal for ~3 g of protein; spending the same 190 kcal on whey and eggs instead buys
~35 g. Same calories, far more protein — the only cost is that the evening now has
to be filled deliberately rather than by default.

### Day 17 closed — 2,491 kcal, 158.25 g of protein, −178

A restaurant evening: soup (one spoonful), mint juice, a gelato serving, then a
quarter grilled chicken and a mixed grill. **158.25 g of protein, the second-highest
of the eighteen days**, on a deficit of only 178.

The grill platter is why both numbers are high at once — grilled meat is the best
protein-per-calorie food available, but two portions of it is still ~850 kcal.

Worth separating what cost what:

| | Kcal | Protein |
|---|---|---|
| Quarter chicken + mixed grill | ~850 | ~90 g |
| Vada, squid, soup spoonful, gelato | ~485 | ~25 g |
| Mint juice | ~100 | 0 g |

**The dinner was not the problem — the ~585 kcal of snacks and juice before it
were.** They delivered 25 g of protein between them, and they are the difference
between a −178 day and a −760 one.

### Eighteen days

| | Average | Target |
|---|---|---|
| Calories | **2,198** | 2,120 |
| Protein | **117.1 g** | 130–145 g |
| Fat | 94.9 g | 55 g floor |

**470 kcal/day deficit, 0.43 kg/week** across 16 complete days.

The last five protein days read **141, 181, 92, 140, 158** — four of five clear the
floor, and the protein average has climbed from 105.6 to 117.1 over the past week.
That line is finally moving.

---

## Day 16 — 2026-09-19 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 set dosa + vegetable sambar + red chutney (no white chutney) | 480–710 | 12.5–20 g | 17–34 g |
| Lunch | Mess meals plate, rice halved, + 1-egg omelette + sambar, cabbage thoran, veg curry, curd | 615–960 | 23–33 g | 26–47 g |
| Snack | Black coffee + 1.5 whey scoops | 150–195 | 30–37.5 g | 1.5–4.5 g |
| Dinner | Grilled chicken piece + chicken curry + 2 chapati + 1 boiled egg | 650–938 | 52–72.5 g | 29–48.5 g |
| **TOTAL** | | **1,895–2,803** | **117.5–163 g** | **73.5–134 g** |
| **Midpoint** | | **2,349** | **140.25 g** | **103.75 g** |

Ninth breakfast in a row without the white coconut chutney. The flat item at lunch
was a **thin one-egg omelette, not a pappadam** — corrected on the user's word,
worth +45 kcal and +4.5 g of protein, and it retires the "first all-vegetarian
plate" reading written before the correction.

**Dinner ran ~145 kcal over plan** — a larger grilled chicken piece than the 200 g
budgeted, plus a chicken-curry container and a boiled egg that were not in it. The
Sprite can was not identified and is counted as zero-sugar; if it was the sugared
version, add ~84 kcal and the day closes at 2,433 and −236.

**140.25 g of protein on a 320 kcal deficit.** The calorie number runs 229 over
target, which is the right direction this week: the fitted weight line
(−0.560 kg/wk) has been running ahead of what the food log predicts (−0.456), so a
softer day is corrective rather than lost.

### Sixteen days

| | Average | Target |
|---|---|---|
| Calories | **2,179** | 2,120 |
| Protein | **114.4 g** | 130–145 g |
| Fat | 92.8 g | 55 g floor |

**490 kcal/day deficit, 0.45 kg/week**, against a fitted scale trend of 0.56.

Protein is still the open line — **10 of 15 complete days under the floor** — but
the last four read **141, 181, 92, 140**. Three of those four clear it. The one
that did not is Day 15, where the closing scoops went unconfirmed. The pattern is
no longer "protein is always short"; it is "protein is short exactly on the days
the evening whey is skipped."

## Day 15 — 2026-09-18 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 puttu pieces + kadala curry | 560–800 | 14–20 g | 16–30 g |
| Lunch | Chicken biriyani, rice halved, + 2 chicken pieces + raita + garlic pickle | 480–730 | 29.5–43 g | 22–40 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Dinner | 2 chapati + kadala curry | 400–560 | 14–18 g | 11–18 g |
| **TOTAL** | | **1,540–2,220** | **77.5–106 g** | **50–91 g** |
| **Midpoint** | | **1,880** | **91.75 g** | **70.5 g** |

**Lowest-fat day since Day 1 — 70.5 g.** Nothing on a Friday menu is
coconut-based, and that single fact did more for the fat line than any deliberate
cut of the past two weeks.

The breakfast swap cost 355 kcal: Friday's menu breakfast is the idly set, ~325
kcal for 3–8 g of fat, the lightest item on the whole week's menu.

**The two closing scoops were not confirmed, so the day closes at 91.75 g of
protein — 38 under the floor — on a 789 kcal deficit.** Had they been taken it
would have closed at 2,110 and 136.75 g, ten under target. That one habit is the
difference between the best-shaped day of the fifteen and another oversized
deficit at low protein.

---

## Day 14 — 2026-09-17 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | Large restaurant dosa + sambar + red chutney (white chutney skipped) | 380–590 | 10–16 g | 14–29 g |
| Snack | Black coffee + 1 whey scoop | 100–130 | 20–25 g | 1–3 g |
| Lunch | Mess meals plate, rice halved, + 1 fried fish + sambar, cabbage thoran, 2 veg curries + moru curry | 645–1,030 | 24–37 g | 28–52 g |
| Snack | Black coffee + 2 whey scoops | 200–260 | 40–50 g | 2–6 g |
| Dinner | Charcoal grilled chicken + Malabar porotta + hummus, garlic toum, tomato-onion mezze, pickles | 840–1,240 | 60.5–79 g | 46–79 g |
| **TOTAL** | | **2,165–3,250** | **154.5–207 g** | **91–169 g** |
| **Midpoint** | | **2,707.5** | **180.75 g** | **130 g** |

**The first day of the fourteen with no deficit — 38 kcal above maintenance.**
Also by far the highest protein day: 180.75 g, 40 g clear of the previous best.

Two good decisions and one expensive structure:

- **One container at lunch instead of four.** Moru is also the right pick —
  yogurt-based, ~85 kcal against the coconut chammanthi's ~125 for the same
  protein. Yesterday's four cost ~370.
- **The chicken itself was the right food.** ~490 kcal for ~59 g of protein,
  12 g per 100 kcal — the best whole-food rate in the log.
- **The accompaniments were the cost.** Porotta ~240, garlic toum ~120, hummus
  ~90 — **~450 kcal for about 8 g of protein between them.** The toum is the
  worst of the three: an oil-and-garlic emulsion at roughly 480 kcal per 100 g.

The deeper cause was earlier. Three scoops by mid-afternoon left the evening only
452 kcal of room; dinner came in at 1,040. The whey had already solved the
protein floor, so the 345 kcal it cost bought nothing once a grilled chicken
dinner appeared — and it removed the headroom that would have absorbed the
porotta.

**The scoops and the food are one budget, not two.** On a day where a large
protein meal is likely, the scoops should wait.

### What it costs

| | Before Day 14 | After |
|---|---|---|
| Average calories | 2,146 | 2,189 |
| Average protein | 108.5 g | **114.1 g** |
| Rate | 0.48 kg/wk | **0.44 kg/wk** |

One maintenance day in fourteen moves the rate by 0.04 kg/week — about three days
added to the December timeline. It is not a setback; it is the cost of a large
meal, correctly priced. The protein average moving up 5.6 g is worth more than
the rate moving down 0.04.

---

## Day 13 — 2026-09-16 (closed)

| Meal | Items | Calories | Protein | Fat |
|---|---|---|---|---|
| Breakfast | 2 puttu pieces + kadala curry | 560–800 | 14–20 g | 16–30 g |
| Supplement | 1 omega-3 1000 mg + 1 vitamin D3 50,000 IU | 10–20 | 0 g | 1–2 g |
| Lunch | Mess meals plate, rice halved, + 1 fried fish + sambar/veg curry | 385–580 | 16–23 g | 11–20 g |
| Lunch | Sides plated: cabbage-carrot thoran, battered fried pieces, coconut chammanthi | 270–470 | 9–18 g | 19–36 g |
| Dinner | Leftover half rice from lunch + chicken curry | 375–560 | 20–27 g | 12–19 g |
| Snack | 3 whey scoops + water | 300–390 | 60–75 g | 3–9 g |
| **TOTAL** | | **1,900–2,820** | **119–163 g** | **62–116 g** |
| **Midpoint** | | **2,360** | **141 g** | **89 g** |

The second puttu piece cost ~215 kcal for ~4 g of protein — 1.9 g per 100 kcal,
the worst exchange rate logged in thirteen days. The four lunch containers went
onto the plate and came to ~370 kcal rather than the ~300 measured the day
before, because this set carried a large coconut chammanthi dollop and a battered
fried item. Dinner took the leftover half rice rather than a chapati.

### Day 13 closed — 141 g of protein, the highest of the thirteen days

Three scoops taken in water rather than two with milk. **2,360 kcal, 141 g of
protein, a 309 deficit — 0.28 kg/week.**

Read alone that is the softest day of the twelve. Read in sequence it is a
correction. The four days before it ran **−671, −733, −844 and −489** at 85–101 g
of protein — every one a larger deficit than the 550 the target was built around,
and every one short on protein, because the evening scoops kept going untaken or
unreported.

**Twelve complete days: 2,146 kcal, 108.5 g of protein, 90.7 g of fat — a 523
deficit, 0.48 kg/week.** One −309 day moves that average by five calories. The
141 g moves the protein average up by three.

Calories were never the problem. This is the first evening in five where the
closing scoops were actually taken and logged, and it produced the best protein
day in the log.

### On the two capsules

**The vitamin D3 is 50,000 IU — that is a weekly dose strength, not a daily one.**
Twelve capsules in the bottle is the shape of a 12-week once-weekly course, which
is the standard way deficiency is corrected. The adult daily upper limit is
4,000 IU; 50,000 IU taken daily is over twelve times that and causes
hypercalcaemia — nausea, excessive urination, kidney stones, and kidney damage
over months. Check the box or the pharmacist for the schedule it was dispensed on,
and follow that.

Take it with a meal containing fat. It is fat-soluble and absorption is
meaningfully worse on an empty stomach.

**The fish oil is 1000 mg of fish oil, not 1000 mg of omega-3.** A typical
1000 mg capsule carries ~180 mg EPA and ~120 mg DHA — about 300 mg of actual
omega-3, against the 500 mg–1 g of EPA+DHA used in studies.

### The four containers are worth three times what I said this morning

This morning's plan costed "leave the lunch gravies" at ~100 kcal. That figure
came from a single gravy. **Yesterday's four containers measured ~300 kcal, ~10 g
of protein and ~19.5 g of fat** — the correct number, and it changes the day
materially in your favour.

**Skipping them more than covers the second puttu piece.**

| | Day total | Protein | vs maintenance | Rate |
|---|---|---|---|---|
| **Containers skipped + 1 chapati at dinner + 4 scoops** | **2,103** | **154 g** | **−566** | **0.51 kg/wk** |
| Containers skipped + 1 chapati + 3 scoops | 1,988 | 131.5 g | −681 | 0.62 kg/wk |
| Containers eaten + 1 chapati + 3 scoops | 2,288 | 141.75 g | −381 | 0.35 kg/wk |
| Containers eaten + 1 chapati + 2 scoops | 2,173 | 119.25 g | −496 | 0.45 kg/wk |

**Top row: leave the containers, one chapati at dinner, four scoops.** That lands
17 kcal under target at 154 g of protein and a 566 deficit — a *better* day than
the one planned before the extra puttu was eaten.

The second row over-corrects: a 681 deficit two days after a −374 birthday is not
the shape to chase. The fourth row is the one to avoid, since it drops protein
under the floor to save calories that skipping the containers already saved.

---

## Eleven days in — what the numbers actually say

Nine complete days (Day 8 is excluded; its dinner was never confirmed):

| | Average | Target | |
|---|---|---|---|
| Calories | **2,154** | 2,120 | +34 — on target |
| Protein | **108.2 g** | 130–145 g | **−22 g — short every day** |
| Fat | **90.8 g** | 55 g floor | +36 over the minimum |
| Carbs (implied) | 226 g | ~248 g | −22 g |

**Deficit 515 kcal/day, 0.47 kg/week.** The plan is working.

### A correction to what I have been telling you

I have called fat "the one line that is wrong" for about five days. That was the
wrong emphasis and it is worth fixing, because it changes what is worth
optimising.

The 55 g figure is a **floor, not a ceiling** — a minimum for hormone function,
not a limit. Within a fixed calorie target, eating 91 g of fat instead of 55 g
does not add fat to your body; it displaces carbohydrate, which is exactly what
the 226 g implied carb number shows. The real cost of that is **training
performance on a six-day split**, not fat loss. Calories are on target and the
scale is moving at the predicted rate.

**The line that is genuinely wrong is protein: 108 g against a 130 g floor,
every day for nine days.** At 90 kg that is 1.2 g/kg while running a 515 kcal
deficit and training six times a week — the combination where some of what comes
off the scale is muscle rather than fat.

And the cause is specific and fixable: **the closing whey scoops have gone
unlogged three days running.** Days 9, 10 and probably 12 were each planned to
land at 130–145 g and each closed 20–45 g short because the evening scoops were
discussed and never confirmed. If they were taken, tell me and the average moves
to ~125 g on its own. If they were not, that single habit is the whole gap.

Gravies still matter — they are calories, and calories are what drive the
deficit. But the priority order was wrong: **protein first, calories second, fat
a distant third.**

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

| Date | Weight | Change | Since start | Trailing avg |
|---|---|---|---|---|
| 2026-09-05 | 91.50 kg | — | — | 91.50 |
| 2026-09-07 | 90.75 kg | −0.75 kg | −0.75 kg | 91.13 |
| 2026-09-09 | 90.30 kg | −0.45 kg | −1.20 kg | 90.85 |
| 2026-09-11 | 90.05 kg | −0.25 kg | **−1.45 kg** | **90.65** |

**The rate is decelerating exactly as forecast: −0.75, −0.45, −0.25.** That is
glycogen and its water settling out, on schedule. It is the expected shape of a
first week, not a stall.

**1.45 kg is not 1.45 kg of fat.** Across the six days the scale covers
(2026-09-05 to 09-10), intake was 13,642 kcal against ~16,038 of maintenance — a
2,396 kcal deficit, or **0.31 kg of fat**. The other 1.14 kg (79%) is water and
glycogen.

The water share is falling, though: 87% at the first weigh-in, 79% now. As
glycogen finishes settling the scale and the arithmetic will converge.

**Implied fat-loss rate: 0.36 kg/week.** Against the 0.5 target that is behind,
but it is calculated from six days in which three carried a fried snack the
meals did not need. It is also still too early to trust — two more weeks of
trailing average before the multiplier or the target move again.

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
| 2026-09-08 | 2,009.5 | 128.5 g | 83 g | yes |
| 2026-09-09 | 2,294 | 139 g | 103.5 g | yes |
| 2026-09-10 | 2,290 | 105.5 g | 100 g | closing scoop unconfirmed |
| 2026-09-11 | 554 (so far) | 18.75 g | 22.75 g | no — in progress |

Six complete days. Averages of the midpoints: **2,193 kcal, 115.5 g protein,
87.0 g fat** — a 357 kcal/day deficit, **0.32 kg/week**.

| Date | Calories | vs maintenance | Protein | Fat |
|---|---|---|---|---|
| 2026-09-04 | 1,808 | −742 | 78.5 g | 67.5 g |
| 2026-09-05 | 2,178 | −372 | 107.3 g | 78.3 g |
| 2026-09-06 | 2,310 | −240 | 109.5 g | 85.3 g |
| 2026-09-07 | 2,560 | −10 | 130.1 g | 104.3 g |
| 2026-09-08 | 2,010 | −540 | 128.5 g | 83 g |
| 2026-09-09 | 2,294 | −256 | **139 g** | 103.5 g |

**Protein: solved, three days running.** 128.5, 139 and 130 on the last three
complete days, from a start of 78.5. This no longer needs managing.

**Calories: no trend, and the average lags.** 1,808 · 2,178 · 2,310 · 2,560 ·
2,010 · 2,294. The 357 kcal/day average is **0.32 kg/week against a 0.5 target**.
The variance is the story, not the level: the two best days were 1,808 and 2,010,
the two worst 2,560 and 2,294.

**Fat: the one line still wrong.** 87 g average against a 55 g floor, with two
days over 100 g. It is 36% of intake.

Both problems trace to the same habit. **The mess plates are now handled
properly — halved rice, eggs added, one chapati on tight days.** What varies is
the snack layer stacked on top: on Day 5 it was one scoop and the day landed at
2,010; on Days 4 and 6 it was four to six eggs and the days landed at 2,560 and
2,294.

Next week's single adjustment: **decide the day's protein at the meals, then stop.**
When the pre-dinner figure is already above 100 g, an extra snack buys nothing and
costs 150–300 kcal.

Where the fat comes from is not mysterious: coconut chutney, deep-fried vada,
layered porotta, oil-heavy curry, cajun-fried tofu. The fix is not eating less.
It is choosing grilled over fried in the same meal slot, at the same calories.
