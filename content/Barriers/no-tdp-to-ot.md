---
type: barrier
status: stub
title: "No reduction from TDP to OT"
aliases: []
id: bar-tdp-to-ot
hypotheses: [tdp]
conclusion: ot
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from TDP to OT

A reduction of class `unstated` from [[trapdoor-permutation|TDP]] to [[oblivious-transfer|OT]] would imply a contradiction.

## Statement

Migrated verbatim from [[trapdoor-permutation]] § Enhanced trapdoor permutations:

> An _enhanced TDP_ additionally requires that the TDP remain hard to invert even when given a random coin $r$ and a random element $y = \Eval(f, x)$ sampled using $r$ in a specific way. This stronger property is necessary for constructing [[oblivious-transfer|OT]] from TDPs.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'necessary for constructing OT from TDPs' is a negative claim (plain TDPs do not suffice) stated with NO citation; the relevant results are Goldreich's enhanced-TDP note and Haitner's separations.
- Typed as a barrier because it asserts the non-existence of a construction from plain TDP, but the reduction class and the exact Q are unstated — low confidence.
- The word 'necessary' may be intended loosely ('needed for the known proof'), in which case it is not a barrier at all.
