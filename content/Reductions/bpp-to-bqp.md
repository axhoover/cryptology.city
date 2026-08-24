---
type: reduction
status: stub
title: "BPP ⊆ BQP"
aliases: []
id: red-bpp-to-bqp
kind: inclusion
hypotheses: [bpp]
conclusion: bqp
class: free
model: quantum
source: folklore
security-loss: ""
---

# BPP ⊆ BQP

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[bounded-error-quantum-polynomial-time|BQP]].

## Statement

Migrated verbatim from [[bounded-error-quantum-polynomial-time]] § Known relationships:

> - $\classP \subseteq \classBPP \subseteq \classBQP$: classical probabilistic computation is a special case of quantum computation.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Uncited and unlabelled folklore.
- Class names appear only as macros with no wikilinks, though both pages exist.
