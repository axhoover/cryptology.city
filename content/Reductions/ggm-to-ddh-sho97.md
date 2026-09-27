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
security-loss: "a generic distinguisher making $q$ queries has advantage $O(q^2/p)$, $p$ the prime group order"
---

# GGM ⇒ DDH

[[decisional-diffie-hellman|DDH]] holds in the [[generic-group-model|generic group model]]: every generic distinguisher needs $\Omega(\sqrt{p})$ group operations to decide it in a group of prime order $p$.

## Statement

A generic distinguisher making $q$ group-operation queries in a cyclic group of prime order $p$ has advantage $O(q^2/p)$ between $(g, g^x, g^y, g^{xy})$ and $(g, g^x, g^y, g^z)$, so deciding [[decisional-diffie-hellman|DDH]] in the [[generic-group-model|generic group model]] takes $\Omega(\sqrt{p})$ queries — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

Treat $x, y, z$ as indeterminates, answer group-oracle queries with random labels, and record the affine polynomial each label represents; in the real world substitute $z = xy$, giving polynomials of degree at most $2$. Choosing the point only after the adversary halts, the two worlds are simulated identically unless two distinct recorded polynomials agree at it, probability at most $2/p$ per pair over $O(q^2)$ pairs.

## Notes

`class: free`: the hypothesis is a computational model, not a primitive, so the black-box classes do not apply; Sho97 bound every generic algorithm unconditionally, which is the `free` class scoped by the model.

`model: generic-group`: the bound holds only for generic algorithms; nothing is claimed in the standard model.

- Prime order is load-bearing, and so is genericity: a small prime factor of the group order gives a generic distinguisher (project onto the small subgroup), and a symmetric pairing, which is not a generic operation, decides DDH outright — standard; see [[decisional-diffie-hellman#attacks|DDH § Attacks]].
