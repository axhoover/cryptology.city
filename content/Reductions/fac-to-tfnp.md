---
type: reduction
status: stub
title: "FAC ⊆ TFNP"
aliases: []
id: red-fac-to-tfnp
kind: inclusion
hypotheses: [fac]
conclusion: tfnp
class: free
model: standard
source: folklore
security-loss: ""
---

# FAC ⊆ TFNP

[[factoring|FAC]] is contained in [[total-function-np|TFNP]].

## Statement

Migrated verbatim from [[total-function-np]] § Relevance to cryptography:

> Integer factorization and discrete logarithm — the two most historically important hard problems in cryptography — are both in TFNP, formalizing the intuition that they are "hard search problems with guaranteed solutions." Recent work has used TFNP subclass hardness (especially PPAD) as a basis for constructing cryptographic primitives from weaker or more structured assumptions.

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

- Uncited.
- `[[factoring]]` is not wikilinked although content/Assumptions/factoring.md exists.
- 'the two most historically important hard problems in cryptography' is marketing prose (house-style anti-pattern).
