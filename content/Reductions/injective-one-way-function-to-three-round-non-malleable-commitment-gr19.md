---
type: reduction
status: draft
title: "Injective OWF ⇒ Three-round NM commitment (Goyal–Richelson)"
aliases: []
id: red-injective-one-way-function-to-three-round-non-malleable-commitment-gr19
kind: implication
hypotheses: [injective-one-way-function]
conclusion: three-round-non-malleable-commitment
class: unstated
model: standard
source:
  - "[[GR19 - Non-Malleable Commitments using Goldreich-Levin List Decoding|GR19]]"
security-loss: ""
---

# Injective OWF ⇒ Three-round NM commitment (Goyal–Richelson)

## Statement

Every [[injective-one-way-function|injective one-way function]] yields a [[commitment-scheme#three-round-non-malleable-commitments|three-round non-malleable commitment]] scheme — [[GR19 - Non-Malleable Commitments using Goldreich-Levin List Decoding|GR19]].

## Notes

- With a constant number of rounds, any one-way function suffices: [[owf-to-constant-round-non-malleable-commitment-lp11-goy11|OWF ⇒ constant-round NM commitment]] — [[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]], [[Goy11 - Constant round non-malleable protocols using one way functions|Goy11]].
