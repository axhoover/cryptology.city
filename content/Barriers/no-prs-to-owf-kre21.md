---
type: barrier
status: draft
title: "No relativizing reduction from PRS to OWF"
aliases: []
id: bar-prs-to-owf-kre21
hypotheses: [prs]
conclusion: owf
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
oracle: "a quantum (unitary) oracle relative to which BQP = QMA"
source:
  - "[[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]]"
rationale:
  class: "Kre21's oracle is a quantum oracle relative to which PRS generators exist and no quantum-secure one-way function does, which rules out constructions and proofs that relativize with respect to quantum oracles, every fully-black-box one among them."
---

# No relativizing reduction from PRS to OWF

## Statement

No construction of a [[hash-function#preimage-resistance-one-wayness|one-way function]] secure against quantum adversaries from [[pseudorandom-quantum-state|pseudorandom quantum state generators]] relativizes with respect to quantum oracles: there is a quantum oracle relative to which PRS generators exist and $\classBQP = \classQMA$ — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]]. Relative to that oracle every function computable in polynomial time with oracle access is inverted in quantum polynomial time: whether a preimage with a given prefix exists is decided in $\classQMA = \classBQP$, and a search over prefixes finds one — standard.

## Notes

- Relative to a classical oracle, $\classP = \classNP$ and single-copy-secure PRS generators exist — [[KQST23 - Quantum Cryptography in Algorithmica|KQST23]].
- PRS generators do not exist if $\classBQP = \classPP$ — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].
- The other direction holds: [[owf-to-prs-jls18|one-way functions secure against quantum adversaries yield PRS generators]] — [[JLS18 - Pseudorandom Quantum States|JLS18]].
