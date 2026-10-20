---
type: reduction
status: draft
title: Statistically hiding COM ⇒ Statistical ZK arguments for NP
aliases: []
id: red-statistically-hiding-commitment-to-statistical-zk-argument-bcc88
kind: implication
hypotheses: [statistically-hiding-commitment]
conclusion: statistical-zk-argument
class: fully-black-box
model: standard
source:
  - "[[BCC88 - Minimum Disclosure Proofs of Knowledge|BCC88]]"
security-loss: "polynomial: a prover breaking soundness yields a committer breaking binding"
rationale:
  class: "The protocol uses the commitment scheme only as an oracle, the simulator runs the cheating verifier only as an oracle, and the soundness reduction turns any cheating prover, run as an oracle with rewinding, into a binding adversary."
---

# Statistically hiding COM ⇒ Statistical ZK arguments for NP

## Statement

A [[commitment-scheme#hiding|statistically hiding]], computationally binding commitment scheme yields, for every language in $\classNP$, an interactive argument that is [[zero-knowledge-proof#statistical-zero-knowledge-arguments|statistically zero-knowledge]] and computationally sound — [[BCC88 - Minimum Disclosure Proofs of Knowledge|BCC88]]. With a perfectly hiding commitment the argument is perfect zero-knowledge.

## Sketch

Run a zero-knowledge proof for an $\classNP$-complete problem, such as [[hash-function-to-zkp-gmw91|GMW91]]'s protocol for Graph 3-Colouring, with the prover's commitments made statistically hiding. The simulator's guessing strategy then reproduces the verifier's view up to statistical distance, while a prover that answers two challenges on the same commitments, as needed to cheat on a false statement, opens some commitment two ways — [[BCC88 - Minimum Disclosure Proofs of Knowledge|BCC88]].

## Notes

- Instantiations: [[owp-to-statistically-hiding-commitment-novy98|one-way permutations]] — [[NOVY98 - Perfect Zero-Knowledge Arguments for NP Using Any One-Way Permutation|NOVY98]] — and [[owf-to-statistically-hiding-commitment-hr07|one-way functions]] give such commitments, the latter by HR07, after one-way functions were shown to give statistical zero-knowledge arguments directly ([[owf-to-statistical-zk-argument-nov06|OWF ⇒ statistical ZK arguments]]) — [[NOV06 - Statistical Zero-Knowledge Arguments for NP from Any One-Way Function|NOV06]].
- Statistical zero-knowledge proofs, as opposed to arguments, exist only for languages in $\classAM \cap \classcoAM$ ([[szk-to-am|SZK ⊆ AM]], [[szk-to-coam|SZK ⊆ coAM]]), so they cannot cover $\classNP$ unless the polynomial hierarchy collapses — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].
