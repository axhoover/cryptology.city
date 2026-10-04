---
type: reduction
status: draft
title: "GGM ⇒ DDH"
aliases: []
id: red-ggm-to-ddh-sho97
kind: implication
hypotheses: [ggm]
conclusion: ddh
class: free
model: generic-group
source:
  - "[[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]"
security-loss: "advantage $O(q^2/p)$ for $q$ queries, $p$ the prime group order"
rationale:
  class: "The hypothesis is a model of computation rather than a primitive, so no black-box class applies; Sho97 bounds every generic algorithm unconditionally, which is the free class scoped by the model."
  model: "Sho97's bound holds only for generic algorithms; nothing is claimed in the standard model."
---

# GGM ⇒ DDH

## Statement

In the [[generic-group-model|generic group model]], [[decisional-diffie-hellman|DDH]] is hard in groups of prime order $p$: every generic distinguisher $\calA$ between $(g, g^x, g^y, g^{xy})$ and $(g, g^x, g^y, g^z)$ making $q$ group-operation queries has $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) = O(q^2/p)$, so deciding DDH generically takes $\Omega(\sqrt{p})$ queries — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

Treat $x, y, z$ as indeterminates, answer group-oracle queries with random labels, and record the affine polynomial each label represents; in the real world substitute $z = xy$, giving polynomials of degree at most $2$. Choosing the point only after the adversary halts, the two worlds are simulated identically unless two distinct recorded polynomials agree at it, probability at most $2/p$ per pair over $O(q^2)$ pairs.

## Notes

- Prime order and genericity are both needed: a small prime factor of the group order gives a generic distinguisher (project onto the small subgroup), and a symmetric pairing, which is not a generic operation, decides DDH outright — standard; see [[decisional-diffie-hellman#attacks|DDH attacks]].
