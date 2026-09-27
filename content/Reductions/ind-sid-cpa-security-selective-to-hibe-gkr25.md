---
type: reduction
status: draft
title: "IND-sID-CPA Security (Selective) ⇒ HIBE"
aliases: []
id: red-ind-sid-cpa-security-selective-to-hibe-gkr25
kind: implication
hypotheses: [ind-sid-cpa]
conclusion: hibe
class: unstated
model: standard
source:
  - "[[GKR25 - A Note on Adaptive Security in Hierarchical Identity-Based Encryption|GKR25]]"
  - "[[DG17b - From Selective IBE to Full IBE and Selective HIBE|DG17b]]"
security-loss: ""
---

# IND-sID-CPA Security (Selective) ⇒ HIBE

[[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]] implies [[hierarchical-identity-based-encryption|HIBE]].

## Statement

From any [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA-secure]] [[identity-based-encryption|IBE]] there is an [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA-secure]] [[hierarchical-identity-based-encryption|HIBE]] in the standard model — [[GKR25 - A Note on Adaptive Security in Hierarchical Identity-Based Encryption|GKR25]]. A selectively secure HIBE supporting arbitrarily many delegations was known earlier from the same hypothesis — [[DG17b - From Selective IBE to Full IBE and Selective HIBE|DG17b]].

## Notes

`class: unstated`: the sources' reduction class was not checked.

- With [[abe-to-ibe]] and [[ind-id-cpa-security-to-ind-sid-cpa-security-selective]], this gives ABE ⇒ HIBE as a split chain.
