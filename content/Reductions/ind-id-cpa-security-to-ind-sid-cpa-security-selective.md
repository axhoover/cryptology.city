---
type: reduction
status: draft
title: "IND-ID-CPA Security ⇒ IND-sID-CPA Security (Selective)"
aliases: []
id: red-ind-id-cpa-security-to-ind-sid-cpa-security-selective
kind: implication
hypotheses: [ind-id-cpa]
conclusion: ind-sid-cpa
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the two advantages are equal"
---

# IND-ID-CPA Security ⇒ IND-sID-CPA Security (Selective)

[[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]] implies [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]].

## Statement

Every [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] scheme is [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA-secure]]: a selective adversary, which commits to $\mathit{id}^*$ before seeing $\pp$, is an adaptive adversary that ignores $\pp$ when choosing its challenge identity, so the identity map on schemes preserves the advantage exactly — folklore.

## Sketch

Wrap the selective adversary as an adaptive one: forward its extraction queries unchanged and submit the pre-committed $\mathit{id}^*$ as the adaptive challenge identity.

## Notes

`class: fully-black-box`: The construction is the identity map on IBE schemes; the reduction runs the selective adversary unchanged as an adaptive adversary that outputs its pre-committed challenge identity. Fixed construction, fixed black-box reduction, advantage preserved exactly.
