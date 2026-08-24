---
type: reduction
status: draft
title: "FAC ⇒ RSA"
aliases: []
id: red-fac-to-rsa-rsa78
kind: implication
hypotheses: [fac]
conclusion: rsa
class: unstated
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: ""
---

# FAC ⇒ RSA

[[factoring|FAC]] implies [[rsa-assumption|RSA]].

## Statement

Migrated verbatim from [[factoring]] § Known Results:

> - The [[rsa-assumption|RSA assumption]] (hardness of computing $e$-th roots mod $N$) is implied by the factoring assumption — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]; the converse is open (factoring may be harder than RSA)

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR: The RSA assumption is implied by the factoring assumption is backwards. Factoring N breaks RSA, so RSA hardness implies factoring hardness; RSA hardness is not known to follow from factoring hardness.
- The parenthetical (factoring may be harder than RSA) is the standard intuition and contradicts the main clause as written.
- Two claims in one bullet (the implication and the openness of the converse).
- RSA78 is cited for a relation it does not prove.
