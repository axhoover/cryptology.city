---
type: reduction
status: draft
title: "BE ⇒ Selectively secure BE"
aliases: []
id: red-be-to-be-selective
kind: implication
hypotheses: [be]
conclusion: be-selective
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the two advantages are equal"
rationale:
  class: "The construction is the identity map on BE schemes, and the reduction runs the selective adversary once as an oracle, submitting its pre-committed set as the adaptive challenge."
---

# BE ⇒ Selectively secure BE

## Statement

Every $(1 - \negl(\secpar))$-correct [[broadcast-encryption#ind-be-cpa-security|IND-BE-CPA-secure]] [[broadcast-encryption|BE]] scheme $\mathsf{BE}$ is [[broadcast-encryption#ind-sbe-cpa-security-selective|IND-sBE-CPA-secure]], for every $n = n(\secpar) \le \poly(\secpar)$: for every efficient admissible selective adversary $\calA$ there is an efficient admissible adaptive adversary $\calB$ with $\Adv^{\mathrm{be\text{-}cpa}}_{\mathsf{BE},\calB}(\secpar) = \Adv^{\mathrm{sbe\text{-}cpa}}_{\mathsf{BE},\calA}(\secpar)$ — folklore.

## Sketch

$\calB$ runs $\calA(1^\secpar, n)$ to obtain $S^*$, receives $\pp$, queries $\calO_{\mathrm{key}}(i)$ once for each of the at most $n \le \poly(\secpar)$ users $i \notin S^*$, passes $\pp$ and these keys to $\calA$, and submits $S^*$ with $\calA$'s messages as its challenge; this simulates the selective game perfectly, and $\calB$ queries no key for a user in $S^*$.
