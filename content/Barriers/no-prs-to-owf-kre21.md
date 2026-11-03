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
oracle: "a quantum (unitary) oracle relative to which PRS generators exist and BQP = QMA"
source:
  - "[[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]]"
rationale:
  class: "Kre21's oracle is a quantum oracle relative to which PRS generators exist and no quantum-secure one-way function does, which rules out every construction that uses the PRS generator only as an oracle with a proof that uses the adversary only as an oracle, and says nothing about proofs that relativize only with respect to classical oracles."
---

# No fully-black-box reduction from PRS to OWF

## Statement

No construction of a [[hash-function#preimage-resistance-one-wayness|one-way function]] secure against quantum adversaries from [[pseudorandom-quantum-state|pseudorandom quantum state generators]] relativizes with respect to quantum oracles, so in particular none is fully black-box: there is a quantum oracle relative to which PRS generators with output length $n = \omega(\log \secpar)$ exist and $\classBQP = \classQMA$ — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]]. Relative to that oracle every function computable in bounded-error quantum polynomial time with oracle access is inverted in quantum polynomial time: whether a preimage with a given prefix exists is decided in $\classQCMA \subseteq \classQMA = \classBQP$, and a search over prefixes finds one — standard.

## Notes

- Relative to a classical oracle, $\classP = \classNP$ and single-copy-secure PRS generators with $n > \secpar$ exist ([[no-single-copy-prs-to-owf-kqst23|No relativizing reduction from single-copy PRS to OWF]]) — [[KQST23 - Quantum Cryptography in Algorithmica|KQST23]].
- PRS generators with $n = \omega(\log \secpar)$ do not exist if $\classBQP = \classPP$ — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]].
- The other direction holds: [[owf-to-prs-jls18|one-way functions secure against quantum adversaries yield PRS generators]] — [[JLS18 - Pseudorandom Quantum States|JLS18]].
