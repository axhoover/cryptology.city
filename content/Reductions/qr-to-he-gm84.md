---
type: reduction
status: draft
title: "QR ⇒ Additively homomorphic encryption"
aliases: []
id: red-qr-to-he-gm84
kind: implication
hypotheses: [qr]
conclusion: additively-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
security-loss: ""
---

# QR ⇒ Additively homomorphic encryption

## Statement

The Goldwasser–Micali scheme, with $\pk = (N, y)$ for $N = pq$ and $y \in \J_N \setminus \QR_N$ and $\Enc(\pk, \beta; r) = y^\beta r^2 \bmod N$ for $\beta \in \bits$ and $r \getsr \ZZ_N^*$, is IND-CPA-secure if [[quadratic-residuosity|QR]] is hard — [[GM84 - Probabilistic encryption|GM84]]. It is [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic]] over $\ZZ_2$: the product of encryptions of $\beta_1$ and $\beta_2$ is distributed exactly as a fresh encryption of $\beta_1 \oplus \beta_2$ — standard.

## Sketch

$(y^{\beta_1} r_1^2)(y^{\beta_2} r_2^2) = y^{\beta_1 \oplus \beta_2}\,(y^{\beta_1 \beta_2} r_1 r_2)^2$, and $y^{\beta_1 \beta_2} r_1 r_2$ is uniform in $\ZZ_N^*$ when $r_1$ is. CPA security is the reduction on [[qr-to-pke-gm84|QR ⇒ PKE]], which sets $y$ to the QR challenge.
