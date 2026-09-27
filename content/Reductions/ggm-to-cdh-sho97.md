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
security-loss: "a generic algorithm making $q$ queries succeeds with probability $O(q^2/p)$, $p$ the prime group order"
---

# GGM ⇒ CDH

[[computational-diffie-hellman|CDH]] holds in the [[generic-group-model|generic group model]]: every generic algorithm needs $\Omega(\sqrt{p})$ group operations to solve it in a group of prime order $p$.

## Statement

A generic algorithm making $q$ group-operation queries in a cyclic group of prime order $p$ computes $g^{xy}$ from $(g, g^x, g^y)$ with probability $O(q^2/p)$, so solving [[computational-diffie-hellman|CDH]] in the [[generic-group-model|generic group model]] takes $\Omega(\sqrt{p})$ queries, matching baby-step giant-step — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

Treat $x, y$ as indeterminates, answer group-oracle queries with random labels, and record the affine polynomial each label represents; choose $(x, y)$ only after the adversary halts. It wins only if two distinct recorded polynomials agree at $(x, y)$ or its output's polynomial agrees with $xy$ there — each the vanishing of a nonzero polynomial of degree at most $2$ at a uniform point of $\ZZ_p^2$, probability at most $2/p$, over $O(q^2)$ events.

## Notes

`class: free`: the hypothesis is a computational model, not a primitive, so the black-box classes do not apply; Sho97 bound every generic algorithm unconditionally, which is the `free` class scoped by the model.

`model: generic-group`: the bound holds only for generic algorithms; nothing is claimed in the standard model.
