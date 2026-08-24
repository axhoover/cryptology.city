---
type: reduction
status: draft
title: "BPP ⊆ AM"
aliases: []
id: red-bpp-to-am-gs86
kind: inclusion
hypotheses: [bpp]
conclusion: am
class: free
model: standard
source:
  - "[[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]"
security-loss: ""
---

# BPP ⊆ AM

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[arthur-merlin|AM]].

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

- The GS86 attribution is doubtful (recorded, not fixed): BPP inside AM is immediate from the definition, not a result of the private-versus-public-coin paper.
- Duplicates co-arthur-merlin.md:18 sub-edge 1, which states the same inclusion with NO citation - the two pages disagree on whether a citation is needed.
- Uncited and unlabelled folklore; same disagreement with bounded-error-probabilistic-polynomial-time.md:24.
- The 'Symmetrically' clause carries no justification of its own, so the split leaves this link unsupported.
