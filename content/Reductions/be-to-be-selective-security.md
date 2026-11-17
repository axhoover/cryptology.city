---
type: reduction
status: draft
title: "IND-BE-CPA Security ⇒ IND-sBE-CPA Security (Selective)"
aliases: []
id: red-be-to-be-selective-security
kind: implication
hypotheses: [be]
conclusion: be-selective-security
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the two advantages are equal"
rationale:
  class: "The construction is the identity map on BE schemes, and the reduction runs the selective adversary once as an oracle, submitting its pre-committed recipient set as the adaptive challenge."
---

# IND-BE-CPA Security ⇒ IND-sBE-CPA Security (Selective)

## Statement

Every correct [[broadcast-encryption#ind-be-cpa-security|IND-BE-CPA-secure]] [[broadcast-encryption|BE]] scheme $\mathsf{BE}$ is [[broadcast-encryption#ind-sbe-cpa-security-selective|IND-sBE-CPA-secure]]: for every efficient admissible selective adversary $\calA$ there is an efficient admissible adaptive adversary $\calB$ with $\Adv^{\mathrm{be\text{-}cpa}}_{\mathsf{BE},\calB}(\secpar) = \Adv^{\mathrm{sbe\text{-}cpa}}_{\mathsf{BE},\calA}(\secpar)$ — folklore.

## Sketch

$\calB$ runs $\calA(1^\secpar)$ to obtain $S^*$ before passing on $\pp$, forwards $\calA$'s key queries, and submits $S^*$ with $\calA$'s messages as its challenge; this simulates the selective game perfectly, and $\calB$ queries a key for a user in $S^*$ only if $\calA$ does. Correctness is unchanged, since the scheme is.
