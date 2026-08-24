---
type: reduction
status: draft
title: "BPP ⊆ coAM"
aliases: []
id: red-bpp-to-coam-gs86
kind: inclusion
hypotheses: [bpp]
conclusion: coam
class: free
model: standard
source:
  - "[[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]"
security-loss: ""
---

# BPP ⊆ coAM

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[co-arthur-merlin|coAM]].

## Statement

Migrated verbatim from [[bounded-error-probabilistic-polynomial-time]] § Known relationships:

> - $\classBPP \subseteq \classAM \cap \classcoAM$: BPP problems have trivial one-message Arthur-Merlin protocols (Arthur decides without Merlin) — [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]].

Migrated verbatim from [[co-arthur-merlin]] § Known relationships:

> - $\classBPP \subseteq \classcoAM$: BPP problems have a trivial one-message coAM protocol where Merlin's message is ignored (Arthur decides alone). Symmetrically, $\classBPP \subseteq \classAM$.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Same doubtful GS86 attribution.
- Duplicates co-arthur-merlin.md:18 sub-edge 0, which is uncited.
- Uncited and unlabelled folklore, while bounded-error-probabilistic-polynomial-time.md:24 attributes the identical inclusion to GS86 - the two pages disagree on whether a citation is needed.
