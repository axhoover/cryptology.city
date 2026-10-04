---
type: reduction
status: draft
title: "GGM ⇒ CDH"
aliases: []
id: red-ggm-to-cdh-sho97
kind: implication
hypotheses: [ggm]
conclusion: cdh
class: free
model: generic-group
source:
  - "[[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]"
security-loss: "success probability $O(q^2/p)$ for $q$ queries, $p$ the prime group order"
rationale:
  class: "The hypothesis is a model of computation rather than a primitive, so no black-box class applies; Sho97 bound every generic algorithm unconditionally, which is the free class scoped by the model."
  model: "Sho97's bound holds only for generic algorithms; nothing is claimed in the standard model."
---

# GGM ⇒ CDH

## Statement

In the [[generic-group-model|generic group model]], [[computational-diffie-hellman|CDH]] is hard in groups of prime order $p$: every generic algorithm $\calA$ making $q$ group-operation queries computes $g^{xy}$ from $(g, g^x, g^y)$ with probability $\Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar) = O(q^2/p)$, so solving CDH generically takes $\Omega(\sqrt{p})$ queries, matching baby-step giant-step — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

Treat $x, y$ as indeterminates, answer group-oracle queries with random labels, record the affine polynomial each label represents, and choose $(x, y)$ only after the adversary halts. It wins only if two distinct recorded polynomials agree at $(x, y)$ or its output's polynomial agrees with $xy$ there; each is the vanishing of a nonzero polynomial of degree at most $2$ at a uniform point of $\ZZ_p^2$, probability at most $2/p$, over $O(q^2)$ events.
