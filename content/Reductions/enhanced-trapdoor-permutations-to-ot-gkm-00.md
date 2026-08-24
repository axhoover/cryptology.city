---
type: reduction
status: draft
title: "Enhanced trapdoor permutations ⇒ OT"
aliases: []
id: red-enhanced-trapdoor-permutations-to-ot-gkm-00
kind: implication
hypotheses: [enhanced-trapdoor-permutation]
conclusion: ot
class: fully-black-box
model: standard
source:
  - "[[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]"
security-loss: ""
---

# Enhanced trapdoor permutations ⇒ OT

[[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]] implies [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[trapdoor-permutation]] § Enhanced trapdoor permutations:

> An _enhanced TDP_ additionally requires that the TDP remain hard to invert even when given a random coin $r$ and a random element $y = \Eval(f, x)$ sampled using $r$ in a specific way. This stronger property is necessary for constructing [[oblivious-transfer|OT]] from TDPs.

Migrated verbatim from [[trapdoor-permutation]] § Other results:

> - [[oblivious-transfer|OT]] can be constructed from enhanced trapdoor permutations — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]

## Notes

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation here (GKM+00 is cited for the same edge at line 55 — duplicate).
- 'enhanced-trapdoor-permutation' is a variation section of this page, not its own slug; the graph needs enhanced TDP as a distinct node from TDP since the whole point of the sentence is that they differ.
- Duplicates the uncited claim at line 46.
- 'enhanced trapdoor permutations' is plain prose with no wikilink to the '## Enhanced trapdoor permutations' section on this same page.
- GKM+00 is primarily a PKE-vs-OT separation paper; whether it is the right citation for the positive enhanced-TDP => OT construction (usually EGL85 + Goldreich's enhancement) is worth checking.
