---
type: reduction
status: draft
title: "GGM ⇒ DLOG"
aliases: []
id: red-ggm-to-dlog-sho97
kind: implication
hypotheses: [ggm]
conclusion: dlog
class: free
model: generic-group
source:
  - "[[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]"
security-loss: "a generic algorithm making $q$ queries succeeds with probability $O(q^2/p)$, $p$ the largest prime factor of the group order"
---

# GGM ⇒ DLOG

[[discrete-logarithm|DLOG]] holds in the [[generic-group-model|generic group model]]: every generic algorithm needs $\Omega(\sqrt{p})$ group operations to solve it, $p$ the largest prime factor of the group order.

## Statement

A generic algorithm making $q$ group-operation queries in a cyclic group of order $n$ computes $x$ from $(g, g^x)$ with probability $O(q^2/p)$, where $p$ is the largest prime dividing $n$, so solving [[discrete-logarithm|DLOG]] in the [[generic-group-model|generic group model]] takes $\Omega(\sqrt{p})$ queries, matching baby-step giant-step and Pollard rho — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

Treat $x$ as an indeterminate, answer group-oracle queries with random labels, and record the affine polynomial $a + bx$ each label represents; choose $x$ only after the adversary halts. Its view is then independent of $x$, and it wins only if two distinct recorded polynomials agree at $x$ (probability at most $1/p$ per pair, $O(q^2)$ pairs) or its output equals $x$ (probability $1/n$).

## Notes

`class: free`: the hypothesis is a computational model, not a primitive, so the black-box classes do not apply; Sho97 bound every generic algorithm unconditionally, which is the `free` class scoped by the model.

`model: generic-group`: the bound holds only for generic algorithms; nothing is claimed in the standard model.
