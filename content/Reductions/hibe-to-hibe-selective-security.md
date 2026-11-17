---
type: reduction
status: draft
title: "HIBE ⇒ Selectively secure HIBE"
aliases: []
id: red-hibe-to-hibe-selective-security
kind: implication
hypotheses: [hibe]
conclusion: hibe-selective-security
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the two advantages are equal"
rationale:
  class: "The construction is the identity map on HIBE schemes, and the reduction runs the selective adversary once as an oracle, submitting its pre-committed identity vector as the adaptive challenge."
---

# HIBE ⇒ Selectively secure HIBE

## Statement

Every [[hierarchical-identity-based-encryption|HIBE]], which is $(1-\negl(\secpar))$-correct and [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA-secure]], is [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA-secure]]: for every polynomially bounded depth $d$ and every efficient admissible selective adversary $\calA$ there is an efficient admissible adaptive adversary $\calB$ with $\Adv^{\mathrm{hibe\text{-}cpa}}_{\HIBE,d,\calB}(\secpar) = \Adv^{\mathrm{shibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar)$ — folklore.

## Sketch

$\calB$ runs $\calA(1^\secpar, d)$ to obtain $\vec{\mathit{id}}^*$ before passing on $\pp$, forwards $\calA$'s extraction queries, and submits $\vec{\mathit{id}}^*$ with $\calA$'s messages as its challenge; this simulates the selective game perfectly, and $\calB$ queries a prefix of $\vec{\mathit{id}}^*$ only if $\calA$ does.
