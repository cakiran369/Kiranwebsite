# Metrics log

Append a row each time a YouTube Studio screenshot is reviewed. Day numbers are
counted from launch day = Day 1 (9 June 2026), so 8 September 2026 is Day 92.

## Snapshots

| Date | Day | Subs | Views (90d) | Impressions (90d) | Watch hrs (90d) | CTR |
|------|-----|------|-------------|-------------------|-----------------|-----|
| 2026-09-08 | 92 | 50 | ~1,300 | 11,542 | 41.4 | ~11% |
| 2026-09-10 | 94 | 50 | ~1,270 | 11,542 | 42.5 | ~11% |

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
