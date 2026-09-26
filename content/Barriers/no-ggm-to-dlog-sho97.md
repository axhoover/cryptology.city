---
type: barrier
status: draft
title: "No free reduction from GGM to DLOG"
aliases: []
id: bar-ggm-to-dlog-sho97
hypotheses: [ggm]
conclusion: dlog
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]"
---

# No free reduction from GGM to DLOG

A reduction of class `free` from [[generic-group-model|GGM]] to [[discrete-logarithm|DLOG]] would imply a contradiction.

## Statement

A generic algorithm making $q$ group-operation queries in a cyclic group of order $n$ computes $x$ from $(g, g^x)$ with probability $O(q^2/p)$, where $p$ is the largest prime dividing $n$, so solving [[discrete-logarithm|DLOG]] in the [[generic-group-model|generic group model]] takes $\Omega(\sqrt{p})$ queries, matching baby-step giant-step and Pollard rho — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Sketch

Treat $x$ as an indeterminate, answer group-oracle queries with random labels, and record the affine polynomial $a + bx$ each label represents; choose $x$ only after the adversary halts. Its view is then independent of $x$, and it wins only if two distinct recorded polynomials agree at $x$ (probability at most $1/p$ per pair, $O(q^2)$ pairs) or its output equals $x$ (probability $1/n$).

## Notes

`class: free`: Sho97 bounds every generic algorithm, whatever its structure, so the class ruled out is `free`, scoped to the generic-group model; `schema/reduction-classes.yaml` rejects `generic-group` as a class and prescribes this pairing.

- A model-relative lower bound, not a barrier against a proof technique: the hypothesis is that the adversary is generic, not another assumption, so the barrier record type fits imperfectly.
