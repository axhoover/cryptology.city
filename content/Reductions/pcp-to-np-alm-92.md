---
type: reduction
status: draft
title: PCP = NP
aliases:
  - PCP theorem
id: red-pcp-to-np-alm-92
kind: equivalence
hypotheses: [pcp]
conclusion: np
class: free
model: standard
source:
  - "[[ALM+92 - Proof Verification and Hardness of Approximation Problems|ALM+92]]"
security-loss: ""
---

# PCP = NP

## Statement

$\mathbf{PCP}[O(\log n), O(1)] = \classNP$: every $L \in \classNP$ has a probabilistic polynomial-time verifier $V$ that, on input $x \in \bits^n$ and oracle access to a proof string $\pi$, uses $O(\log n)$ random bits, reads a constant number of bits of $\pi$, accepts with probability $1$ for some $\pi$ when $x \in L$, and accepts every $\pi$ with probability at most $1/2$ when $x \notin L$ ([[probabilistically-checkable-proofs|PCP]]) — [[ALM+92 - Proof Verification and Hardness of Approximation Problems|ALM+92]]. ALM+92 build on [[AS92 - Probabilistic Checking of Proofs A New Characterization of NP|AS92]], who characterize $\classNP$ as the languages whose membership proofs a polynomial-time verifier checks using $O(\log n)$ random bits and a sub-logarithmic number of queries, and who introduce the recursive composition of verifiers both papers use — [[AS92 - Probabilistic Checking of Proofs A New Characterization of NP|AS92]]. The converse inclusion $\mathbf{PCP}[O(\log n), O(1)] \subseteq \classNP$ is standard.

## Sketch

For $\mathbf{PCP}[O(\log n), O(1)] \subseteq \classNP$: over all $2^{O(\log n)} = \poly(n)$ coin strings the verifier reads at most $\poly(n)$ positions of $\pi$, so an $\classNP$ machine guesses those bits and runs $V$ on every coin string, accepting iff all runs accept — standard.

## Notes

- Only $2^{O(\log n)} \cdot O(1)$ positions of $\pi$ can be addressed, so the proof has length $\poly(n)$ — standard. Running the verifier $k$ times with independent coins gives soundness error $2^{-k}$ with $O(k)$ queries and $O(k \log n)$ random bits — standard.
- The multi-prover analogue at exponential scale is [[mip-to-nexp-bfl90|MIP = NEXP]] — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]].
