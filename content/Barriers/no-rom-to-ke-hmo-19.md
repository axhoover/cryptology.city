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

In the [[random-oracle-model|random oracle model]] every [[key-exchange|key-agreement]] protocol whose honest parties make $\ell$ oracle queries is broken by an eavesdropper making $O(\ell^2)$ queries, matching the quadratic gap of Merkle's puzzles, so no random-oracle key agreement is secure against polynomial-query eavesdroppers — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]. Communication cannot be traded for the gap either: for protocols whose honest parties' queries are uniformly random, or which run in two rounds with non-adaptive queries, secrecy against an eavesdropper making roughly $\ell^2$ queries requires exchanging $\Omega(\ell)$ bits, as Merkle's puzzles does — [[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]].

## Sketch

For protocols with uniformly random honest queries the communication bound is proved by reduction from set-disjointness in two-party communication complexity; the two-round non-adaptive case is proved directly by an information-theoretic argument.

## Notes

`class: free`: Every result on the page bounds all protocols in the random oracle model, not a proof technique: BM09 (after IR89) break every $\ell$-query protocol with $O(\ell^2)$ eavesdropper queries, so no random-oracle key agreement is secure against polynomial-query eavesdroppers, and HMO+19 add a communication lower bound. That is the `free` class scoped by the model axis — the treatment schema/reduction-classes.yaml prescribes for idealized-model lower bounds and that no-ggm-to-dlog-sho97 already uses. Merkle's puzzles does not contradict the bare barrier: its query gap is quadratic, i.e. polynomial.

`model: rom`: Key agreement in the random oracle model against query-bounded, computationally unbounded eavesdroppers. This is not the information-theoretic key-agreement setting; content/Primitives/key-exchange.md calls it that and is wrong. Barrier frontmatter has no `model` field, so the model is named in the statement.

- The original random-oracle barrier, with an eavesdropper making roughly $\ell^6$ queries — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
- Query complexity reduced to the optimal $O(\ell^2)$; no random-oracle key agreement achieves a better-than-quadratic query gap — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]].
