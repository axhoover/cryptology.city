---
type: barrier
status: draft
title: "No fully-black-box reduction from PRS to OWF"
aliases: []
id: bar-prs-to-owf-kre21
hypotheses: [prs]
conclusion: owf
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
oracle: "Kre21's pair (U, C): for each n, the family of 2^n independent Haar-random n-qubit unitaries, applied controlled on an n-bit index, together with a classical language C, built recursively and independently of the unitaries, that accepts the description x of a QMA verifier exactly when the verifier runs in time less than |x| and the average over Haar-random unitaries of its maximum acceptance probability exceeds 1/2"
source:
  - "[[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]]"
rationale:
  class: "Kre21's oracle is a quantum oracle relative to which PRS generators exist and no quantum-secure one-way function does, which rules out every construction that uses the PRS generator only as an oracle with a proof that uses the adversary only as an oracle, and says nothing about proofs that relativize only with respect to classical oracles."
---

# No fully-black-box reduction from PRS to OWF

## Statement

No construction of a [[hash-function#preimage-resistance-one-wayness|one-way function]] secure against quantum adversaries from [[pseudorandom-quantum-state|pseudorandom quantum state generators]] relativizes with respect to quantum oracles, so in particular none is fully black-box. The oracle is a pair $(\calU, C)$: $\calU = \{U_n\}_{n \in \NN}$, where $U_n |k\rangle|\psi\rangle = |k\rangle U_{n,k}|\psi\rangle$ for $2^n$ independent Haar-random $n$-qubit unitaries $U_{n,k}$, $k \in \bits^n$; and $C$ is a classical language, constructed recursively and independently of $\calU$, that accepts the description $x$ of a $\classQMA$ verifier with oracle access to $(\calU, C)$ exactly when the verifier runs in time less than $|x|$ and the average, over Haar-random unitaries in place of $\calU$, of its maximum acceptance probability over witnesses exceeds $1/2$. With probability $1$ over $\calU$, $\mathrm{Promise}\classBQP = \mathrm{Promise}\classQMA$ relative to $(\calU, C)$, and $\{U_{n,k}\}_{k \in \bits^n}$ is a family of pseudorandom unitaries with $n = \secpar$, which gives PRS generators with output length $n = \secpar$ — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]]. Relative to that oracle every function computable in bounded-error quantum polynomial time with oracle access is inverted in quantum polynomial time: whether a preimage with a given prefix exists is decided in $\mathrm{Promise}\classQCMA \subseteq \mathrm{Promise}\classQMA = \mathrm{Promise}\classBQP$, and a search over prefixes finds one — standard.

## Notes

- The pseudorandom unitaries are proved secure against polynomial-time quantum adversaries with classical advice — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].
- The conference version of [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]] took $C$ to be an arbitrary $\classPSPACE$-complete language; its proof that $\classBQP = \classQMA$ relative to that pair has an error, and the arXiv version replaces $C$ by the language above. Whether the pair with a $\classPSPACE$-complete $C$ also works is conjectured, not proved — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].
- Relative to a classical oracle, $\classP = \classNP$ and single-copy-secure PRS generators with $n > \secpar$ exist ([[no-single-copy-prs-to-owf-kqst23|No relativizing reduction from single-copy PRS to OWF]]) — [[KQST23 - Quantum Cryptography in Algorithmica|KQST23]].
- PRS generators with $n = \omega(\log \secpar)$ do not exist if $\classBQP = \classPP$ — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].
- The other direction holds: [[owf-to-prs-jls18|one-way functions secure against quantum adversaries yield PRS generators]] — [[JLS18 - Pseudorandom Quantum States|JLS18]].
