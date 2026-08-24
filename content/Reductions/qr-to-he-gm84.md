---
type: reduction
status: draft
title: "QR ⇒ HE"
aliases: []
id: red-qr-to-he-gm84
kind: implication
hypotheses: [qr]
conclusion: he
class: unstated
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
security-loss: ""
---

# QR ⇒ HE

[[quadratic-residuosity|QR]] implies [[homomorphic-encryption|HE]].

## Statement

Migrated verbatim from [[quadratic-residuosity]] § Known Results:

> - Goldwasser-Micali is multiplicatively homomorphic: $\Enc(b_1) \cdot \Enc(b_2) = \Enc(b_1 \oplus b_2 \bmod 2)$ — [[GM84 - Probabilistic encryption|GM84]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- A property of the specific GM scheme rather than a reduction from the assumption; the target object (XOR-homomorphic bit encryption) is not the wiki homomorphic-encryption page and is not wikilinked at all.
- MINOR: "Enc(b1) . Enc(b2) = Enc(b1 XOR b2 mod 2)" is redundant — XOR is already mod 2 — and the operation is called "multiplicatively homomorphic" while the plaintext operation is additive mod 2.
