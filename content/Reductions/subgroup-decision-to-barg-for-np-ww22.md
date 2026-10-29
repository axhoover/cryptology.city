---
type: reduction
status: draft
title: Subgroup decision ⇒ BARG for NP
aliases: []
id: red-subgroup-decision-to-barg-for-np-ww22
kind: implication
hypotheses: [subgroup-decision]
conclusion: barg-for-np
class: unstated
model: crs
source:
  - "[[WW22 - Batch Arguments for NP and More from Standard Bilinear Group Assumptions|WW22]]"
security-loss: ""
---

# Subgroup decision ⇒ BARG for NP

## Statement

If the [[bilinear-map-assumptions#subgroup-decision|subgroup decision assumption]] holds in composite-order bilinear groups, $\classNP$ has a [[succinct-argument#batch-arguments-for-np|non-interactive batch argument]] in the CRS model: $m$ statements $x_1, \ldots, x_m$ of satisfiability for one Boolean circuit $C$ have a single proof of size $\poly(\secpar, |C|, \log m)$, sound against efficient provers for statements fixed before the CRS is sampled — [[WW22 - Batch Arguments for NP and More from Standard Bilinear Group Assumptions|WW22]].

## Notes

- In prime-order pairing groups, the $k$-Lin assumption for any $k \ge 1$ gives one as well ([[bilinear-pairing-and-k-linear-assumption-to-barg-for-np-ww22|Bilinear pairing + k-Lin ⇒ BARG for NP]]) — [[WW22 - Batch Arguments for NP and More from Standard Bilinear Group Assumptions|WW22]].
