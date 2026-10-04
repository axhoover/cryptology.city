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
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
  - "[[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]"
rationale:
  class: "IR89 and BM09 break every random-oracle key-agreement protocol whatever its security proof, so every reduction is ruled out: the free class, scoped to the random-oracle model."
---

# No reduction from ROM to KE

## Statement

No reduction of any kind from the [[random-oracle-model|random oracle model]] to [[key-exchange|key agreement]] exists. In the random oracle model every key-agreement protocol whose honest parties make $\ell$ oracle queries is broken by an eavesdropper making $\tilde{O}(\ell^6)$ queries — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] — and by one making $O(\ell^2)$ queries, matching the quadratic gap of [[merkle-puzzles|Merkle's puzzles]] — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]]. The eavesdroppers are bounded in oracle queries, not in computation, so no random-oracle key agreement is secure against polynomial-query eavesdroppers.

## Notes

- Merkle's puzzles ([[rom-to-merkle-puzzles-mer78|ROM ⇒ Merkle puzzles]]) is consistent with the barrier: its gap between $O(n)$ honest and $\Omega(n^2)$ eavesdropper queries is polynomial — [[Mer78 - Secure Communications Over Insecure Channels|Mer78]].
- For protocols whose honest parties' queries are uniformly random, or which run in two rounds with non-adaptive queries, secrecy against an eavesdropper making roughly $\ell^2$ queries requires $\Omega(\ell)$ bits of communication, as in Merkle's puzzles; the first case is proved by reduction from two-party set disjointness, the second by an information-theoretic argument — [[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]].
