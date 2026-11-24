---
type: barrier
status: draft
title: "No relativizing reduction from NP to BQP"
aliases: []
id: bar-np-to-bqp-bbbv97
hypotheses: [np]
conclusion: bqp
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
oracle: "a uniformly random length-preserving function"
source:
  - "[[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]]"
rationale:
  class: "BBBV97 show that relative to a random oracle NP is not contained in BQP with probability 1, which rules out exactly the relativizing proofs of the inclusion (by the partial order, every fully-black-box one too) and says nothing about non-relativizing ones."
---

# No relativizing reduction from NP to BQP

## Statement

No relativizing reduction from [[nondeterministic-polynomial-time|NP]] to [[bounded-error-quantum-polynomial-time|BQP]] exists. Let $\mathrm{BQTime}(T(n))^A$ be the class of languages accepted with probability at least $2/3$ by an oracle quantum Turing machine with oracle $A$ that runs in time $T(n)$ on every input. For every $T(n) = o(2^{n/2})$, relative to a uniformly random length-preserving function $A$, with probability $1$, $\classNP^A \not\subseteq \mathrm{BQTime}(T(n))^A$ — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]] (Theorem 3.5). The witness is the range $L_A := \{y : \exists x\; A(x) = y\} \in \classNP^A$ of the oracle: with probability $1$, no bounded-error oracle machine running in time $T(n)$ accepts it. Every polynomial is $o(2^{n/2})$ and there are countably many of them, so $\classNP^A \not\subseteq \classBQP^A$ with probability $1$.

## Notes

- For large $n$, a bounded-error oracle machine running in time $T(n) \le 2^{n/2}/20$ decides whether $1^n \in L_A$ incorrectly with probability at least $1/8$ over the oracle's values on strings of length $n$, whatever its values on the other lengths — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]] (proof of Theorem 3.5).
- The exponent $1/2$ is optimal: [[bounded-error-quantum-polynomial-time#grover-search|Grover search]] accepts every language of $\classNP$ relative to every oracle in time $O(2^{n/2})$ — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]].
- Relative to a uniformly random permutation oracle, with probability $1$, $\mathrm{BQTime}(T(n))$ does not contain $\classNP \cap \classcoNP$ for $T(n) = o(2^{n/3})$ — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]] (Theorem 3.6).
- Unrelativized, $\classNP \subseteq \classBQP$ is not ruled out — [[BBBV97 - Strengths and Weaknesses of Quantum Computing|BBBV97]]. The converse inclusion has its own oracle barrier ([[no-bqp-to-np|No relativizing reduction from BQP to NP]]).
