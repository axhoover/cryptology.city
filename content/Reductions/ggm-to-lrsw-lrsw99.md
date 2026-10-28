---
type: reduction
status: draft
title: "GGM ⇒ LRSW"
aliases: []
id: red-ggm-to-lrsw-lrsw99
kind: implication
hypotheses: [ggm]
conclusion: lrsw
class: free
model: generic-group
source:
  - "[[LRSW99 - Pseudonym Systems|LRSW99]]"
security-loss: ""
rationale:
  class: "The hypothesis is a model of computation, and LRSW99 bound every generic algorithm in it, which is the free class scoped by the model."
  model: "The bound holds only for generic algorithms; nothing is claimed in the standard model."
---

# GGM ⇒ LRSW

## Statement

In the [[generic-group-model|generic group model]], the [[lrsw-assumption|LRSW assumption]] holds in groups of prime order $p$: every generic algorithm that makes polynomially many group-oracle queries and queries to the LRSW oracle outputs a tuple $(m, a, a^y, a^{x + mxy})$ with $m \ne 0$, $a \ne 1$ and $m$ never queried only with negligible probability — [[LRSW99 - Pseudonym Systems|LRSW99]].

## Notes

- The generic model of LRSW99 has no pairing oracle, so the bound says nothing about generic algorithms that may also evaluate a bilinear map — [[LRSW99 - Pseudonym Systems|LRSW99]].
- In groups with a symmetric pairing, LRSW gives Camenisch–Lysyanskaya signatures ([[type-1-pairing-and-lrsw-to-ds-cl04|Type 1 pairing + LRSW ⇒ DS]]) — [[CL04 - Signature Schemes and Anonymous Credentials from Bilinear Maps|CL04]].
