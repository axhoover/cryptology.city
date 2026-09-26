---
type: barrier
status: draft
title: "No free reduction from GGM to DDH"
aliases: []
id: bar-ggm-to-ddh-sho97
hypotheses: [ggm]
conclusion: ddh
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]"
---

# No free reduction from GGM to DDH

A reduction of class `free` from [[generic-group-model|GGM]] to [[decisional-diffie-hellman|DDH]] would imply a contradiction.

## Statement

A generic distinguisher making $q$ group-operation queries in a cyclic group of prime order $p$ has advantage $O(q^2/p)$ between $(g, g^x, g^y, g^{xy})$ and $(g, g^x, g^y, g^z)$, so deciding [[decisional-diffie-hellman|DDH]] in the [[generic-group-model|generic group model]] takes $\Omega(\sqrt{p})$ queries — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

Treat $x, y, z$ as indeterminates, answer group-oracle queries with random labels, and record the affine polynomial each label represents; in the real world substitute $z = xy$, giving polynomials of degree at most $2$. Choosing the point only after the adversary halts, the two worlds are simulated identically unless two distinct recorded polynomials agree at it, probability at most $2/p$ per pair over $O(q^2)$ pairs.

## Notes

`class: free`: Sho97 bounds every generic algorithm, whatever its structure, so the class ruled out is `free`, scoped to the generic-group model; `schema/reduction-classes.yaml` rejects `generic-group` as a class and prescribes this pairing.

- A model-relative lower bound, not a barrier against a proof technique: the hypothesis is that the adversary is generic, not another assumption, so the barrier record type fits imperfectly.
- Prime order is load-bearing, and so is genericity: a small prime factor of the group order gives a generic distinguisher (project onto the small subgroup), and a symmetric pairing, which is not a generic operation, decides DDH outright — standard; see [[decisional-diffie-hellman#attacks|DDH § Attacks]].
