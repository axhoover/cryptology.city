---
type: reduction
status: draft
title: "HIBE ⇒ IBE"
aliases: []
id: red-hibe-to-ibe
kind: implication
hypotheses: [hibe]
conclusion: ibe
class: fully-black-box
model: standard
source: folklore
security-loss: "tight (advantage-preserving)"
rationale:
  class: "The IBE calls the HIBE algorithms only as oracles, and the reduction runs the IBE adversary unchanged as a depth-1 HIBE adversary."
---

# HIBE ⇒ IBE

## Statement

A [[hierarchical-identity-based-encryption|HIBE]] scheme over alphabet $\Sigma$, set up with depth $d = 1$ and with $\Delegate$ discarded, is an [[identity-based-encryption|IBE]] scheme with identity space $\Sigma$. If the HIBE is [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA-secure]], the IBE is [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] with the same advantage — folklore.

## Sketch

The only prefix of a depth-1 identity vector is itself, so at depth 1 the IND-HIBE-CPA game is the IND-ID-CPA game and every IBE adversary is, unchanged, an admissible HIBE adversary.
