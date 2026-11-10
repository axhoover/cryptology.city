---
type: barrier
status: draft
title: "No relativizing reduction from single-copy PRS to OWF"
aliases: []
id: bar-single-copy-prs-to-owf-kqst23
hypotheses: [single-copy-prs]
conclusion: owf
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
oracle: "a classical oracle relative to which P = NP"
source:
  - "[[KQST23 - Quantum Cryptography in Algorithmica|KQST23]]"
rationale:
  class: "KQST23's oracle is a classical oracle relative to which single-copy-secure PRS generators exist and P = NP, so no one-way function exists relative to it, which rules out constructions and proofs that relativize, every fully-black-box one among them."
---

# No relativizing reduction from single-copy PRS to OWF

## Statement

No construction of a [[hash-function#preimage-resistance-one-wayness|one-way function]] from [[pseudorandom-quantum-state#single-copy-security|single-copy-secure PRS generators]] relativizes: there is a classical oracle relative to which $\classP = \classNP$ and single-copy-secure PRS generators with $n > \secpar$ exist — [[KQST23 - Quantum Cryptography in Algorithmica|KQST23]]. Relative to that oracle every function computable in polynomial time with oracle access is inverted in polynomial time: whether a preimage with a given prefix exists is decided in $\classNP = \classP$, and a search over prefixes finds one — standard.
