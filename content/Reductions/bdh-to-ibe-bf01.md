---
type: reduction
status: draft
title: "BDH ⇒ IBE (random oracle model)"
aliases: []
id: red-bdh-to-ibe-bf01
kind: implication
hypotheses: [bdh]
conclusion: ibe
class: fully-black-box
model: rom
source:
  - "[[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]"
security-loss: ""
rationale:
  class: "The construction is one fixed scheme over the pairing group, and the reduction runs the IBE adversary only as an oracle to solve BDH."
  model: "The reduction programs the scheme's hash functions, modelled as random oracles."
---

# BDH ⇒ IBE (random oracle model)

## Statement

If the computational [[bilinear-map-assumptions|BDH]] assumption holds and the hash functions are modelled as [[random-oracle-model|random oracles]], the Boneh–Franklin scheme FullIdent is an [[identity-based-encryption#ind-id-cca-security|IND-ID-CCA-secure]] [[identity-based-encryption|IBE]] and BasicIdent is [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].
