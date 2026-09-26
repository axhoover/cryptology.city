---
type: barrier
status: draft
title: "No free reduction from GGM to CDH"
aliases: []
id: bar-ggm-to-cdh-sho97
hypotheses: [ggm]
conclusion: cdh
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]"
---

# No free reduction from GGM to CDH

A reduction of class `free` from [[generic-group-model|GGM]] to [[computational-diffie-hellman|CDH]] would imply a contradiction.

## Statement

A generic algorithm making $q$ group-operation queries in a cyclic group of prime order $p$ computes $g^{xy}$ from $(g, g^x, g^y)$ with probability $O(q^2/p)$, so solving [[computational-diffie-hellman|CDH]] in the [[generic-group-model|generic group model]] takes $\Omega(\sqrt{p})$ queries, matching baby-step giant-step — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

Treat $x, y$ as indeterminates, answer group-oracle queries with random labels, and record the affine polynomial each label represents; choose $(x, y)$ only after the adversary halts. It wins only if two distinct recorded polynomials agree at $(x, y)$ or its output's polynomial agrees with $xy$ there — each the vanishing of a nonzero polynomial of degree at most $2$ at a uniform point of $\ZZ_p^2$, probability at most $2/p$, over $O(q^2)$ events.

## Notes

`class: free`: Sho97 bounds every generic algorithm, whatever its structure, so the class ruled out is `free`, scoped to the generic-group model; `schema/reduction-classes.yaml` rejects `generic-group` as a class and prescribes this pairing.

- A model-relative lower bound, not a barrier against a proof technique: the hypothesis is that the adversary is generic, not another assumption, so the barrier record type fits imperfectly.
