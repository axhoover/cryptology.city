---
type: reduction
status: draft
title: "IND-sID-CPA IBE ⇒ IND-ID-CPA IBE (Döttling–Garg)"
aliases: []
id: red-ind-sid-cpa-to-ind-id-cpa-dg17b
kind: implication
hypotheses: [ind-sid-cpa]
conclusion: ind-id-cpa
class: unstated
model: standard
source:
  - "[[DG17b - From Selective IBE to Full IBE and Selective HIBE|DG17b]]"
security-loss: ""
---

# IND-sID-CPA IBE ⇒ IND-ID-CPA IBE (Döttling–Garg)

## Statement

From any [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA-secure]] [[identity-based-encryption|IBE]] there is a generic construction of an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] (fully secure) IBE — [[DG17b - From Selective IBE to Full IBE and Selective HIBE|DG17b]].

## Notes

- TODO: state DG17b's construction (whether it uses the selective IBE as a black box, which sets the class), its security loss, and its identity length, confirming that its identity space contains $\bits^\secpar$.
