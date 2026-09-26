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
---

# HIBE ⇒ IBE

[[hierarchical-identity-based-encryption|HIBE]] implies [[identity-based-encryption|IBE]].

## Statement

Every [[hierarchical-identity-based-encryption|HIBE]] scheme yields an [[identity-based-encryption|IBE]] scheme: fix depth $d = 1$ and discard $\Delegate$. At depth 1 the IND-HIBE-CPA game is the IND-ID-CPA game, so every IBE adversary is a HIBE adversary with the same advantage — folklore.

## Notes

`class: fully-black-box`: the IBE calls the HIBE algorithms only as an oracle, and the reduction runs the IBE adversary unchanged as a depth-1 HIBE adversary.

- 'Strictly generalizes' on the HIBE page also asserts a separation (IBE ⇏ HIBE), uncited and not recorded as a barrier.
