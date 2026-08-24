---
type: barrier
status: stub
title: "No reduction from BQP to NP"
aliases: []
id: bar-bqp-to-np
hypotheses: [bqp]
conclusion: np
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from BQP to NP

A reduction of class `unstated` from [[bounded-error-quantum-polynomial-time|BQP]] to [[nondeterministic-polynomial-time|NP]] would imply a contradiction.

## Statement

Migrated verbatim from [[bounded-error-quantum-polynomial-time]] § Known relationships:

> - **$\classBQP$ vs $\classNP$:** the two classes are believed incomparable. Simon's problem is in $\classBQP$ but not in $\classNP$ relative to a random oracle; conversely, NP-complete problems are not believed to be in $\classBQP$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- TYPING LOSS: as a bare {BQP} => {NP} pair this is indistinguishable from an inclusion claim, which is the opposite of what the sentence asserts.
- Uncited (Simon94 / BBBV93 would be the standard sources).
- SUSPECTED IMPRECISION (recorded, not fixed): Simon's problem is defined relative to a random 2-to-1 function with a hidden XOR mask, not a uniformly random oracle; the random-oracle statement usually cited in this area is BBBV, which separates in the OTHER direction.
- No citation for the oracle separation (BBBV93 / Simon94 would be the standard ones).
- SUSPECTED IMPRECISION (report only): Simon's problem is defined relative to a random 2-to-1 function with a hidden XOR mask, not a uniformly random oracle; 'relative to a random oracle' overstates what the Simon separation gives. The random-oracle statement usually cited in this direction is BBBV (NP not in BQP relative to a random oracle), which is the OTHER direction.
- Two belief statements plus one oracle-separation claim in one bullet; beliefs are not theorems and should not migrate as reductions.
