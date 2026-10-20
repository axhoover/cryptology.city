---
type: reduction
status: draft
title: "CDH ⇒ IBE (Döttling–Garg)"
aliases: []
id: red-cdh-to-ind-id-cpa-dg17a
kind: implication
hypotheses: [cdh]
conclusion: ind-id-cpa
class: free
model: standard
source:
  - "[[DG17a - Identity-Based Encryption from the Diffie-Hellman Assumption|DG17a]]"
security-loss: ""
rationale:
  class: "The garbled circuits that the construction evaluates contain the code of chameleon encryption built from the group, so the construction uses the CDH group non-black-box."
---

# CDH ⇒ IBE (Döttling–Garg)

## Statement

If [[computational-diffie-hellman|CDH]] is hard for some group generator $\GrGen$, with no pairing on the group, there is an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] (adaptive) [[identity-based-encryption|IBE]] scheme in the standard model — [[DG17a - Identity-Based Encryption from the Diffie-Hellman Assumption|DG17a]]. The construction builds chameleon encryption from CDH and combines it with one garbled circuit per level of an implicit binary tree over the identity bits; the garbled circuits use chameleon encryption non-black-box — [[DG17a - Identity-Based Encryption from the Diffie-Hellman Assumption|DG17a]].

## Notes

- The same paper obtains IBE from factoring by the same route, and a selectively secure [[hierarchical-identity-based-encryption|HIBE]] from either assumption — [[DG17a - Identity-Based Encryption from the Diffie-Hellman Assumption|DG17a]].
- In the generic group model, no IBE scheme uses a DDH-hard group only through the group-operation oracle ([[no-ddh-to-ibe-prv12|No fully-black-box reduction from DDH to IBE]]) — [[PRV12 - How powerful are the DDH hard groups|PRV12]]. The non-black-box use of the group inside garbled circuits is what gets around it — [[DG17a - Identity-Based Encryption from the Diffie-Hellman Assumption|DG17a]].
- Earlier IBE schemes from Diffie–Hellman-type assumptions need a bilinear pairing: [[bdh-to-ibe-bf01|BDH ⇒ IBE (random oracle model)]] — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]; [[dbdh-to-ibe-wat05|DBDH ⇒ IBE (Waters, standard model)]] — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].
