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

No reduction of any kind from the [[random-oracle-model|random oracle model]] to [[key-exchange|key agreement]] exists. In the random oracle model every key-agreement protocol whose honest parties make at most $\ell$ oracle queries each is broken by an eavesdropper making $O(m^6 \log m)$ queries, for $m$ the larger of $\ell$ and the number of rounds — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]], with the bound as stated by [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] (arXiv 0801.3669v4, footnote 3). If the parties' outputs agree with probability at least $\rho$, then for every $0 < \delta < \rho$ an eavesdropper making $O(\ell^2/\delta^2)$ queries outputs $B$'s key with probability at least $\rho - \delta$, matching the quadratic gap of [[merkle-puzzles|Merkle's puzzles]] — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] (arXiv 0801.3669v4, Theorem 1.2). Hence no random-oracle key agreement is secure against eavesdroppers making polynomially many queries; both eavesdroppers are bounded in oracle queries, not in computation.

## Notes

- An eavesdropper that outputs $k_B$ with probability at least $\rho - \delta$ breaks [[key-exchange#security-indistinguishability-from-random|key-exchange security]], whose key space has at least two elements: the distinguisher that outputs $0$ exactly when the eavesdropper's output equals the candidate key has advantage at least $2\rho - 3/2 - \delta$, which is at least $1/4 - \negl(\secpar)$ for $\delta = 1/4$ when the parties agree except with negligible probability — standard.
- Merkle's puzzles ([[rom-to-merkle-puzzles-mer78|ROM ⇒ Merkle puzzles]]) is consistent with the barrier: its gap between $O(n)$ honest and $\Omega(n^2)$ eavesdropper queries is polynomial — [[Mer78 - Secure Communications Over Insecure Channels|Mer78]].
- For protocols whose honest parties' queries are uniformly random, or which run in two rounds with non-adaptive queries, secrecy against an eavesdropper making roughly $\ell^2$ queries requires $\Omega(\ell)$ bits of communication, as in Merkle's puzzles; the first case is proved by reduction from two-party set disjointness, the second by an information-theoretic argument — [[HMO+19 - On the Communication Complexity of Key-Agreement Protocols|HMO+19]].
