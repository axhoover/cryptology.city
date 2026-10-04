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
security-loss: "success probability $O(q^2/p)$ for $q$ queries, $p$ the largest prime factor of the group order"
rationale:
  class: "The hypothesis is a model of computation rather than a primitive, so no black-box class applies; Sho97 bounds every generic algorithm unconditionally, which is the free class scoped by the model."
  model: "Sho97's bound holds only for generic algorithms; nothing is claimed in the standard model."
---

# GGM ⇒ DLOG

## Statement

In the [[generic-group-model|generic group model]], every generic algorithm making $q$ group-operation queries in a cyclic group of order $n$ computes $x$ from $(g, g^x)$ with probability $O(q^2/p)$, where $p$ is the largest prime dividing $n$, so solving [[discrete-logarithm|DLOG]] generically takes $\Omega(\sqrt{p})$ queries, matching Pohlig–Hellman combined with baby-step giant-step or Pollard rho — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

For prime $n = p$, treat $x$ as an indeterminate, answer group-oracle queries with random labels, record the affine polynomial $a + bx$ each label represents, and choose $x$ only after the adversary halts. Its view is then independent of $x$, and it wins only if two distinct recorded polynomials agree at $x$ (probability at most $1/p$ per pair, $O(q^2)$ pairs) or its output equals $x$ (probability $1/p$). For composite $n$, give the adversary $x \bmod n/p^e$ for free, $p^e$ the largest power of $p$ dividing $n$, and run the same argument over $\ZZ_{p^e}$, where a nonzero affine polynomial vanishes at a uniform point with probability at most $1/p$.
