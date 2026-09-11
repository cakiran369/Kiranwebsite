# Metrics log

Append a row each time a YouTube Studio screenshot is reviewed. Day numbers are
counted from launch day = Day 1 (9 June 2026), so 8 September 2026 is Day 92.

## Snapshots

| Date | Day | Subs | Views (90d) | Impressions (90d) | Watch hrs (90d) | CTR |
|------|-----|------|-------------|-------------------|-----------------|-----|
| 2026-09-08 | 92 | 50 | ~1,300 | 11,542 | 41.4 | ~11% |
| 2026-09-10 | 94 | 50* | ~1,270 | 11,542 | 42.5 | ~11% |
| 2026-09-11 | 95 | **57** | 656 (28d) | — | 18.5 (28d) | — |

\* The 10 Sept subscriber count was carried forward from 8 Sept, not measured —
that screenshot showed watch time only. The +7 delta is therefore 8 → 11 Sept,
three days, not one.

Run rate at the 10 Sept snapshot: ~0.7 watch hours/day (41.4 → 42.5 over two
days, net of the 90-day window shedding two June days).

**Do not reuse the old "~1,000 impressions/day, ~45 views/day" baselines** —
they are not consistent with any other figure on this page. 11,542 impressions
over 90 days is 128/day, and at ~11% CTR that is ~1,270 views over 90 days, or
~14 views/day. That set reconciles with watch time at ~2:00 average view
duration; 45 views/day would imply 0:38, which is impossible for 5–11 minute
explainers retaining 30–43%. Treat ~128 impressions/day and ~14 views/day as
the real baselines.

## Monthly trend

| Month | Impressions | Watch hrs | Subs (end) |
|-------|-------------|-----------|------------|
| June 2026 | 1,871 | 6.9 | 28 |
| July 2026 | 3,600 | 13.8 | 34 |
| August 2026 | 9,019 | ~30 | 43 |
| September 2026 (partial) | 11,542 | 41.4 | 50 |

Impressions and watch hours have roughly doubled month over month. Subscribers
have not — they add +6 to +9 per month, near-flat against a 6x rise in
impressions since June.

## Retention by video

| Video | Retention | Avg duration |
|-------|-----------|--------------|
| FRM | 43.3% | 2:21 |
| US CPA | 41.1% | 3:04 |
| CFA | 40.4% | 4:28 |
| EA Course | ~38% | 2:17 |
| DipIFR | ~30% | 2:00 |

## Watch hours by video

| Video | Hours |
|-------|-------|
| EA Course | 14.3 |
| US CPA | 10.6 |
| EA Course (10 Sep) | 14.8 |
| US CPA (10 Sep) | 11.0 |
| All others combined (10 Sep) | ~16.7 |

Two videos out of ten hold 61% of all watch time, and between 8 and 10 Sept
they took ~0.9 of the ~1.1-hour net gain. The 90-day window was shedding June
days over the same period, so treat the split as directional rather than exact —
but the direction is not in doubt.

## 11 Sept 2026 — first 28-day read, and a subscriber move

| Measure | 28-day value | Per day |
|---|---|---|
| Views | 656 | 23.4 |
| Watch hours | 18.5 | 0.66 |
| Blended average view duration | — | **1:42** |

### Corrections this snapshot forces

- **Current view rate is ~23/day, not ~14.** The 14/day figure was a 90-day
  average, and the 90 days are not evenly loaded: 656 views in the last 28 days
  leaves ~614 for the 62 days before, i.e. ~10/day. The view rate has **more
  than doubled** over the quarter. Use 28-day windows for run rate from now on;
  the 90-day number understates the present by ~40%.
- **Blended average view duration is 1:42, not ~2:00.** Worse than the earlier
  estimate, and well below every video in the retention table (2:16 to 4:28).
  The videos not in that table — CMA, ACCA, EA FAQ, CPA FAQ — are dragging the
  blend down hard.

### CFA first 5 days — the length thesis, confirmed live

43 views, 3.0 watch hours, 5 likes, 1 comment.

- **4:11 watch time per view** against a channel blend of 1:42 — **2.47x**.
- Only 37% of channel views (8.6/day of 23.4/day); the back catalogue's search
  traffic still carries the rest.

A fresh video, on its own first-week traffic, produced two and a half times the
watch time per view of the channel average. This is now the second independent
confirmation that runtime is the lever, and the first from live data rather
than lifetime aggregates.

### The subscriber move

50 (8 Sept) → 57 (11 Sept): +7 in three days, against a baseline of +7 per
**month**. Roughly 10x the usual rate, implying ~10 subs per 100 views over
those days versus a historical 1.7.

Treat as unconfirmed. Three days is inside noise, subscriber counts update in
batches, and sub gains lag the views that cause them. It is the first genuinely
good signal the channel has produced — but one signal.

**It does not move the binding constraint.** Watch time is 0.66 hours/day,
which annualises to 241 hours against a target of 8,000. That figure has not
changed since 10 Sept. Subscribers were never the gate.

## 11 Sept 2026 — 7-day subscriber attribution

| Video | Subs (7d) |
|-------|-----------|
| US CPA Explained | 1 |
| EA Course explained | 1 |
| Diploma in IFRS | 1 |
| FRM, CFA, US CPA FAQ, EA Course Jobs, US CMA | 0 |

Three attributed against a dashboard delta of +7. YouTube only attributes a
subscribe that happens on a video watch page, so the other four came from the
channel page, search results or an external link (Instagram, WhatsApp), or sit
in the 1–2 day reporting lag. Worth knowing: **roughly half of new subscribers
are not coming from a video watch page at all.**

### The CFA subscriber test was underpowered — it proves nothing

The test set on 11 Sept ("if the subs came from CFA, the length case is
settled; if from the back catalogue, it is search noise") cannot be answered by
this data, because 43 views is far too small a sample to measure conversion.

- At the 1.7 per 100 baseline, 43 views should produce **0.73** subscribers.
- The chance of observing zero, given perfectly normal conversion, is **48%**.

A coin flip. CFA needs roughly **300–600 views** before its subscriber count
carries any signal at all. Do not read its 0 as a negative result.

### What the attribution does say

The three conversions came from US CPA, EA Course and DipIFR — the
search-anchored overview videos. DipIFR is the channel's *worst* retention
video (~30%) and still converted, which points at the real mechanism:
**subscribers come from search intent, not from retention or runtime.** Someone
who searched "US CPA Malayalam", got an answer, and subscribed for more.

This separates the two constraints cleanly, and they need different content:

| Goal | Driver | Content implication |
|------|--------|---------------------|
| Subscribers | search intent on the topic | overview videos on high-demand certifications |
| Watch hours | runtime x retention | long videos |

The length thesis was never a claim about subscribers — it rests on watch time
per view (CFA at 2.47x the channel blend), measured on a different metric and
untouched by this screenshot. The two findings converge on the same next
action: **a long video on a high-search-intent topic.**

## FRM retention curve — read 10 Sept 2026 (lifetime)

Lifetime figures: 2:16 average view duration, 41.9% retention, 5:26 runtime.
The 43.3% / 2:21 in the context file was a 90-day figure — different window,
not a decline.

Shape of the curve, read off the Studio graph:

| Segment | Retention | What it means |
|---------|-----------|---------------|
| 0:00 | starts ~82% | ~18% gone in the first seconds, before any content lands |
| 0:00 → ~2:00 | 82% → 33% | continuous slide; ~60% of the audience lost here |
| ~2:00 → ~4:30 | flat 33–40%, small rise around 3:00–3:30 | content holds; one moment actively re-engages |
| ~4:30 → 5:26 | 33% → 22% | normal outro fade |

**The loss is a slide, not a cliff.** A cliff means one bad moment to cut. A
smooth two-minute decline means nothing in the opening is holding attention —
there is no single edit point to fix, the whole first two minutes has to earn
its place. This refines the "0:30–1:30 drop-off" note in the context file: the
bleed starts at 0:00 and runs to 2:00.

**The plateau is the good news.** Anyone who survives two minutes stays to the
end. The content is not the problem; the opening is.

Modelling the curve as three segments reproduces the actual 2:16 / 41.9%, so
the same model can price a fix:

| Scenario | Avg view duration | Retention | Watch time per view |
|---|---|---|---|
| Today | 2:16 | 41.9% | — |
| Opening stops bleeding (conservative) | 2:39 | 49% | +19% |
| Opening holds ~60% at 2:00 (optimistic) | 3:14 | 60% | +45% |

### Retention is length-independent on this channel

| Video | Runtime | Retention | Avg view duration |
|-------|---------|-----------|-------------------|
| FRM | 5:26 | 41.9% | 2:16 |
| US CPA | 7:28 | 41.1% | 3:04 |
| CFA | 11:04 | 40.4% | 4:28 |

Retention percentage barely moves across a 2x runtime range. Longer videos are
not being punished, so **runtime is close to a linear multiplier on watch time
per view**. A 15-minute video at the same 41% would average 6:09 — nearly 3x
FRM. Fix the opening as well and 15 minutes at 55% averages 8:15.

This is the highest-leverage finding in the data so far, and it costs nothing
but a longer script.

## Monetisation working (as at Day 94, 10 Sept 2026)

### The thresholds actually facing this channel

| Tier | Subs | Watch hours | Window | Unlocks |
|------|------|-------------|--------|---------|
| Early access | 500 | 3,000 | trailing 12 months | Fan funding + some Shopping. No ads. |
| Full YPP | 1,000 | **8,000** | trailing 12 months | Ads + Premium revenue share |

Two corrections to the earlier framing:

1. **The window is rolling, not cumulative.** YPP counts watch hours in the
   trailing 12 months. Hours earned more than a year ago fall out of the count,
   so the channel has to reach a *sustained* rate, not accumulate a total.
2. **The full-YPP bar doubles to 8,000 hours on 1 February 2027.** Existing
   partners are grandfathered; this channel will not be in the programme by
   then, so 8,000 is the number to plan against. The 500-sub / 3,000-hour fan
   funding tier is unchanged.

### Current position

- Run rate ~0.7 watch hours/day = ~255 hours/year if it never grows.
- 8,000 hours/year needs ~22 hours/day — about **31x** the current rate.
- Subscriber conversion is 1.73 per 100 views (22 subs / ~1,270 views, 90d),
  which is ordinary. 950 more subs therefore needs ~55,000 cumulative views
  against ~425/month today.

### Time to threshold, by growth assumption

Months from September 2026. "Linear" assumes each weekly upload adds a fixed
daily rate and nothing else grows — the floor case for posting weekly without
changing the format.

| Growth in daily watch-hour rate | 3,000 hrs (fan funding) | 8,000 hrs (full YPP) | 1,000 subs |
|---|---|---|---|
| Linear (library growth only) | ~31 mo | ~76 mo | — |
| 15% / month | ~23 mo | ~30 mo | ~21 mo |
| 20% / month | ~18 mo | ~24 mo | ~18 mo |
| 30% / month | ~14 mo | ~18 mo | ~14 mo |

**Working estimate: 2 to 3 years to full YPP; 18–24 months to the fan funding
tier.** The earlier "15–18 months / late 2027" figure assumed a cumulative
4,000-hour target and month-over-month doubling. Both assumptions were wrong:
the target is a rolling 8,000, and the apparent doubling (6.9 → 13.8 → 30 →
41.4) was a 90-day rolling window still filling up on a channel younger than
90 days, not four months of real doubling.

Watch hours, not subscribers, is the binding constraint under every assumption,
and the gap widens under the 8,000-hour rule.

### What actually moves the estimate

Growth rate is what separates 18 months from 6 years, and weekly posting alone
only buys the linear row. Two dials matter more than cadence:

- **Watch time per view.** Blended average view duration is ~2:00. CFA (11:04
  runtime, 4:28 average) proves longer formats roughly double watch time per
  view at the same view count. Moving the blended average from 2:00 to 4:00
  halves every timeline above without needing a single extra viewer.
- **Library concentration.** EA and US CPA carry 61% of watch time. Growth is
  coming from search demand on a few topics, not from breadth, so topic
  selection matters more than volume.
