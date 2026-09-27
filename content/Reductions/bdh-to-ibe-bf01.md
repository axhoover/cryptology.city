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
---

# BDH ⇒ IBE (random oracle model)

[[bilinear-map-assumptions|BDH]] implies [[identity-based-encryption|IBE]] in the [[random-oracle-model|random oracle model]].

## Statement

Under the computational [[bilinear-map-assumptions|BDH]] assumption, with its hash functions modelled as [[random-oracle-model|random oracles]], the Boneh–Franklin scheme FullIdent is an IND-ID-CCA-secure [[identity-based-encryption|IBE]], and BasicIdent is IND-ID-CPA-secure — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].

## Notes

`class: fully-black-box`: the construction is one fixed scheme over the pairing group, and the reduction runs the IBE adversary only as an oracle to solve BDH.

`model: rom`: the reduction programs the scheme's hash functions.
