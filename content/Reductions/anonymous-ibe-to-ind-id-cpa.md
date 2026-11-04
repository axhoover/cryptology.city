---
type: reduction
status: draft
title: "Anonymous IBE ⇒ IND-ID-CPA IBE"
aliases: []
id: red-anonymous-ibe-to-ind-id-cpa
kind: implication
hypotheses: [anonymous-ibe]
conclusion: ind-id-cpa
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on IBE schemes, and the reduction forwards any adversary unchanged."
---

# Anonymous IBE ⇒ IND-ID-CPA IBE

## Statement

An [[identity-based-encryption#anonymous-ibe|anonymous IBE]] scheme, with the same algorithms, is an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] scheme: an anonymous IBE is by definition IND-ID-CPA-secure as well as ANO-ID-CPA-secure — folklore.
