---
type: reduction
status: draft
title: LWE with polynomial ratio ⇒ BARG for NP
aliases: []
id: red-polynomial-ratio-lwe-to-barg-for-np-cjj21
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: barg-for-np
class: unstated
model: crs
source:
  - "[[CJJ21 - SNARGs for P from LWE|CJJ21]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: ""
---

# LWE with polynomial ratio ⇒ BARG for NP

## Statement

If [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] is hard for polynomial-time adversaries, $\classNP$ has a [[succinct-argument#batch-arguments-for-np|non-interactive batch argument]] in the CRS model: $k$ statements $x_1, \ldots, x_k$ of satisfiability for one circuit $C$ have a single proof of size $\poly(\secpar, |C|, \log k)$, sound against efficient provers for statements fixed before the CRS is sampled — [[CJJ21 - SNARGs for P from LWE|CJJ21]]. It is the first BARG for $\classNP$ from LWE alone; it is somewhere extractable, and it is obtained by instantiating the [[fiat-shamir-heuristic|Fiat–Shamir transform]] with correlation-intractable hashing for an interactive batch argument — [[CJJ21 - SNARGs for P from LWE|CJJ21]].

## Notes

- The BARG is the main ingredient of the SNARG for deterministic computations in the same paper ([[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]]) — [[CJJ21 - SNARGs for P from LWE|CJJ21]].
