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
rationale:
  class: "The construction is the identity map on IBE schemes, and the reduction runs the selective adversary once as an oracle, submitting its pre-committed identity as the adaptive challenge."
---

# IND-ID-CPA Security ⇒ IND-sID-CPA Security (Selective)

## Statement

Every [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] scheme $\IBE$ is [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA-secure]]: for every efficient admissible selective adversary $\calA$ there is an efficient admissible adaptive adversary $\calB$ with $\Adv^{\mathrm{id\text{-}cpa}}_{\IBE,\calB}(\secpar) = \Adv^{\mathrm{sid\text{-}cpa}}_{\IBE,\calA}(\secpar)$ — folklore.

## Sketch

$\calB$ runs $\calA(1^\secpar)$ to obtain $\mathit{id}^*$ before passing on $\pp$, forwards $\calA$'s extraction queries, and submits $\mathit{id}^*$ with $\calA$'s messages as its challenge; this simulates the selective game perfectly, and $\calB$ queries $\mathit{id}^*$ only if $\calA$ does.
