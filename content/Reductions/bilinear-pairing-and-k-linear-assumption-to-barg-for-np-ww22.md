---
type: reduction
status: draft
title: Bilinear pairing + k-Lin ⇒ BARG for NP
aliases: []
id: red-bilinear-pairing-and-k-linear-assumption-to-barg-for-np-ww22
kind: implication
hypotheses: [bilinear-pairing, k-linear-assumption]
conclusion: barg-for-np
class: unstated
model: crs
source:
  - "[[WW22 - Batch Arguments for NP and More from Standard Bilinear Group Assumptions|WW22]]"
security-loss: ""
---

# Bilinear pairing + k-Lin ⇒ BARG for NP

## Statement

If the [$k$-Lin assumption](bilinear-map-assumptions#k-linear-assumption) holds in a prime-order [[pairings|pairing group]] for some $k \ge 1$, $\classNP$ has a [[succinct-argument#batch-arguments-for-np|non-interactive batch argument]] in the CRS model: $m$ statements $x_1, \ldots, x_m$ of satisfiability for one Boolean circuit $C$ have a single proof of size $\poly(\secpar, |C|, \log m)$, sound against efficient provers for statements fixed before the CRS is sampled — [[WW22 - Batch Arguments for NP and More from Standard Bilinear Group Assumptions|WW22]]. The construction verifies the batch directly, without correlation-intractable hashing or PCPs, and the subgroup decision assumption in composite-order groups suffices as well — [[WW22 - Batch Arguments for NP and More from Standard Bilinear Group Assumptions|WW22]]. As corollaries WW22 obtain a publicly verifiable non-interactive delegation scheme for RAM programs whose CRS is sublinear in the running time, and aggregate signatures with bounded aggregation, from standard bilinear assumptions — [[WW22 - Batch Arguments for NP and More from Standard Bilinear Group Assumptions|WW22]].

## Notes

- The CRS grows with the number $m$ of statements — [[WW22 - Batch Arguments for NP and More from Standard Bilinear Group Assumptions|WW22]].
- The first BARG for $\classNP$ from LWE alone is [[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]], via correlation-intractable hashing — [[CJJ21 - SNARGs for P from LWE|CJJ21]].
