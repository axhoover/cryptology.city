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
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — the source sentence says only that the EGL construction of [[oblivious-transfer|OT]] needs the enhancement (the receiver must sample an image without learning its preimage), not that no construction from a plain [[trapdoor-permutation|TDP]] exists, and no such separation is known (Hajiabadi, TCC 2018, still frames it as open), so the page asserts an unproved impossibility that contradicts [[tdp-to-ot]] (`kind: equivalence`). The attributable nearby barrier is Hajiabadi's theorem that there is no fully-black-box construction of an enhanced TDP from a standard TDP, with conclusion `enhanced-trapdoor-permutation` rather than `ot`; [[GR13 - Enhancements of Trapdoor Permutations|GR13]] work out the enhanced and doubly-enhanced notions and why the standard OT and NIZK constructions need them. See [[tdp-to-ot]] and [[enhanced-trapdoor-permutations-to-ot-gkm-00]].
