---
type: reduction
status: stub
title: "P ⊆ BPP"
aliases: []
id: red-p-to-bpp
kind: inclusion
hypotheses: [p]
conclusion: bpp
class: free
model: standard
source: folklore
security-loss: ""
---

# P ⊆ BPP

[[polynomial-time|P]] is contained in [[bounded-error-probabilistic-polynomial-time|BPP]].

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
- Duplicates the corresponding link of the P subset ZPP subset RP subset BPP chain at bounded-error-probabilistic-polynomial-time.md:23 (transitively).
- Purely classical link, so the parent's model 'quantum' does not apply here.
