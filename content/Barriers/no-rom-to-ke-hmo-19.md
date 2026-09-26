---
type: barrier
status: draft
title: "No reduction from ROM to KE"
aliases: []
id: bar-rom-to-ke-hmo-19
hypotheses: [rom]
conclusion: ke
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]]"
---

# No reduction from ROM to KE

A reduction of class `free` from [[random-oracle-model|ROM]] to [[key-exchange|KE]] would imply a contradiction.

## Statement

In the [[random-oracle-model|random oracle model]] every [[key-exchange|key-agreement]] protocol whose honest parties make $\ell$ oracle queries is broken by an eavesdropper making $O(\ell^2)$ queries, matching the quadratic gap of Merkle's puzzles, so no random-oracle key agreement is secure against polynomial-query eavesdroppers — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]. For protocols whose honest parties' queries are uniformly random, or which run in two rounds with non-adaptive queries, secrecy against an eavesdropper making roughly $\ell^2$ queries requires exchanging $\Omega(\ell)$ bits, as Merkle's puzzles does — [[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]].

## Sketch

For protocols with uniformly random honest queries the communication bound is proved by reduction from set-disjointness in two-party communication complexity; the two-round non-adaptive case is proved directly by an information-theoretic argument.

## Notes

`class: free`: the results bound every random-oracle protocol, not a proof technique — the `free` class scoped by the model axis, as `schema/reduction-classes.yaml` prescribes for idealized-model lower bounds and [[no-ggm-to-dlog-sho97]] uses. Merkle's puzzles does not contradict the barrier: its query gap is quadratic, hence polynomial.

`model: rom`: eavesdroppers are query-bounded and computationally unbounded — not the information-theoretic setting, as [[key-exchange]] wrongly calls it. Barrier frontmatter has no `model` field, so the Statement names the model.

- The original random-oracle barrier, with an eavesdropper making roughly $\ell^6$ queries — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
