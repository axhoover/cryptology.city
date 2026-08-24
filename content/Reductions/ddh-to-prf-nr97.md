---
type: reduction
status: draft
title: DDH ⇒ PRF (Naor–Reingold)
aliases:
  - Naor-Reingold PRF
id: red-ddh-to-prf-nr97
hypotheses: [ddh]
conclusion: prf
class: unstated
model: standard
source:
  - "[[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]"
security-loss: ""
---

# DDH ⇒ PRF (Naor–Reingold)

[[decisional-diffie-hellman|DDH]] implies a [[pseudorandom-function|PRF]], by the
Naor–Reingold construction.

## Construction

Migrated verbatim from [[pseudorandom-function|PRF]] § Other results:

> PRF from [[decisional-diffie-hellman|DDH]]: the Naor-Reingold construction maps $(x_1,\ldots,x_n) \in \bits^n$ to $g^{a_0 \cdot a_1^{x_1} \cdots a_n^{x_n}}$ and is secure under DDH — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]

## Notes

The same reduction is stated from the other end at
[[decisional-diffie-hellman|DDH]] § Known Results.
