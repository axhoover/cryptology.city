---
type: barrier
status: draft
title: "No fully-black-box reduction from DDH to IBE"
aliases: []
id: bar-ddh-to-ibe-prv12
hypotheses: [ddh]
conclusion: ibe
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
circumvented-by: [red-cdh-to-ind-id-cpa-dg17a]
source:
  - "[[PRV12 - How powerful are the DDH hard groups|PRV12]]"
rationale:
  class: "The attack breaks every IBE scheme that accesses a generic prime-order group only through its group-operation oracle, which is how a fully-black-box construction uses a DDH-hard group."
  strength: "The attack is proved in the generic group model and assumes no unproven hardness assumption."
---

# No fully-black-box reduction from DDH to IBE

## Statement

There is no fully-black-box construction of [[identity-based-encryption|IBE]] from a group in which [[decisional-diffie-hellman|DDH]] is hard: in the [[generic-group-model|generic group model]], every IBE scheme whose algorithms access randomly labelled elements of a prime-order group only through the group-operation oracle is broken by an attack — [[PRV12 - How powerful are the DDH hard groups|PRV12]]. The generic group is DDH-hard ([[ggm-to-ddh-sho97|GGM ⇒ DDH]]) — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]], so a fully-black-box construction from a DDH-hard group would give a secure generic-group IBE. The result covers DDH and similar group assumptions — [[PRV12 - How powerful are the DDH hard groups|PRV12]].

## Notes

- [[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]] gets around the barrier: its garbled circuits use the group non-black-box, and DDH hardness implies CDH hardness ([[ddh-to-cdh|DDH ⇒ CDH]]) — [[DG17a - Identity-Based Encryption from the Diffie-Hellman Assumption|DG17a]].
- The pairing-based schemes [[bdh-to-ibe-bf01|BDH ⇒ IBE (random oracle model)]] and [[dbdh-to-ibe-wat05|DBDH ⇒ IBE (Waters, standard model)]] are outside the barrier's scope: they evaluate a bilinear map on the group, an operation beyond the group-operation oracle — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]], [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].
