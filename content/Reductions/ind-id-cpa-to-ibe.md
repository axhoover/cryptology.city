---
type: reduction
status: draft
title: "IND-ID-CPA IBE ⇒ IBE"
aliases: []
id: red-ind-id-cpa-to-ibe
kind: implication
hypotheses: [ind-id-cpa]
conclusion: ibe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the IBE algorithms, and the reduction forwards any adversary unchanged."
---

# IND-ID-CPA IBE ⇒ IBE

## Statement

An [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|identity-based encryption]] scheme, with the same algorithms, is an identity-based encryption scheme: the named notion only adds a security guarantee — folklore.
