---
type: reduction
status: draft
title: LWE with polynomial ratio ⇒ SNARG for P
aliases: []
id: red-polynomial-ratio-lwe-to-snarg-for-p-cjj21
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: snarg-for-p
class: unstated
model: crs
source:
  - "[[CJJ21 - SNARGs for P from LWE|CJJ21]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: "polynomial"
rationale:
  security-loss: "CJJ21 assume LWE hard only against polynomial-time adversaries, so the soundness reduction runs in polynomial time with polynomially related advantage."
---

# LWE with polynomial ratio ⇒ SNARG for P

## Statement

If [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] is hard for polynomial-time adversaries, every deterministic computation of $T$ steps has a publicly verifiable [[succinct-argument#snargs-for-p|SNARG]] in the common random string model with adaptive soundness: the common random string and the proof have size $\poly(\secpar, \log T)$, and verification takes time polylogarithmic in $T$ — [[CJJ21 - SNARGs for P from LWE|CJJ21]]. The construction goes through the first [[succinct-argument#batch-arguments-for-np|non-interactive batch argument for NP]] from LWE alone ([[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]]), obtained by instantiating the [[fiat-shamir-heuristic|Fiat–Shamir transform]] with correlation-intractable hashing — [[CJJ21 - SNARGs for P from LWE|CJJ21]].

## Notes

- Earlier SNARGs from standard assumptions covered only bounded-depth computations and needed sub-exponential hardness of LWE — [[JKKZ21 - SNARGs for bounded depth computations and PPAD hardness from sub-exponential LWE|JKKZ21]].
