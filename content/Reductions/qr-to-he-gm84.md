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

[[quadratic-residuosity|QR]] implies partially homomorphic [[homomorphic-encryption|HE]] for addition mod $2$.

## Statement

The Goldwasser–Micali scheme from [[quadratic-residuosity|QR]] is partially homomorphic [[homomorphic-encryption|HE]] for XOR on plaintext bits: with $\pk = (N, y)$ and $\Enc(\pk, b; r) = y^b r^2 \bmod N$, the product of encryptions of $b_1$ and $b_2$ is distributed exactly as a fresh encryption of $b_1 \oplus b_2$ — [[GM84 - Probabilistic encryption|GM84]].

## Sketch

$(y^{b_1} r_1^2)(y^{b_2} r_2^2) = y^{b_1 \oplus b_2}\,(y^{b_1 b_2} r_1 r_2)^2$, and $y^{b_1 b_2} r_1 r_2$ is uniform in $\ZZ_N^*$ when $r_1$ is.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
