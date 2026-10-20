---
type: reduction
status: draft
title: TDP ⇒ DS (full-domain hash, random oracle model)
aliases:
  - Full-domain hash
  - FDH
id: red-tdp-to-ds-br93
kind: implication
hypotheses: [tdp]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]]"
security-loss: "a factor q_H + 1 for q_H hash queries: a forger with success ε inverts the permutation with probability ε/(q_H + 1)"
rationale:
  class: "The scheme evaluates and inverts the permutation only as an oracle, and the reduction runs any forger once as an oracle, planting its challenge in one random-oracle answer."
  model: "The reduction programs the hash onto the permutation's domain, answering every other query with the image of a point it chose."
---

# TDP ⇒ DS (full-domain hash, random oracle model)

## Statement

Let $f$ be a [[trapdoor-permutation|trapdoor permutation]] of a domain $\calD$ and $H$ a random oracle with uniform values in $\calD$. The full-domain-hash scheme $\Sign(\td, m) := f^{-1}(H(m))$, $\Vrfy(f, m, \sigma) := [f(\sigma) = H(m)]$ is [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable in the [[random-oracle-model|random-oracle model]] — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]].

## Sketch

The reduction, given $f$ and a challenge $y$, guesses which of the forger's hash queries will be its forgery's message and answers that query with $y$. Every other query $m$ it answers with $f(x_m)$ for a uniform $x_m$ it stores, so it can answer a signing query on $m$ with $x_m$. A forgery on the guessed message is $f^{-1}(y)$ — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]].

## Notes

- Efficiency: signing is one inversion and verification one evaluation of $f$ plus a hash; with RSA, verification with a small public exponent costs a few modular multiplications — standard.
- Without random oracles, signatures follow from any one-way function ([[hash-function-to-ds|OWF ⇒ DS]]), at much higher cost — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
