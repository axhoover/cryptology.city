---
type: reduction
status: draft
title: OWF ⇒ Constant-round WI proofs for NP (Feige–Shamir)
aliases: []
id: red-owf-to-witness-indistinguishable-proof-fs90
kind: implication
hypotheses: [owf]
conclusion: witness-indistinguishable-proof
class: fully-black-box
model: standard
source:
  - "[[FS90 - Witness Indistinguishable and Witness Hiding Protocols|FS90]]"
security-loss: "a factor of the number of parallel repetitions, from a hybrid over them"
rationale:
  class: "The protocol uses the commitment built from the one-way function only as an oracle, and the reduction runs any distinguishing verifier only as an oracle against one repetition at a time."
---

# OWF ⇒ Constant-round WI proofs for NP (Feige–Shamir)

## Statement

Every zero-knowledge proof is [[zero-knowledge-proof#witness-indistinguishable-wi-proofs|witness indistinguishable]], and witness indistinguishability is preserved under parallel composition — [[FS90 - Witness Indistinguishable and Witness Hiding Protocols|FS90]]. Hence, if [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, the parallel repetition of the [[hash-function-to-zkp-gmw91|GMW91]] proof for an $\classNP$-complete language is a constant-round witness-indistinguishable proof for $\classNP$ with negligible soundness error.

## Sketch

Witness indistinguishability compares the verifier's views under two witnesses, and a hybrid argument switches the witness in one parallel copy at a time; the copies other than the switched one are simulated by the reduction, which knows both witnesses. Zero knowledge does not survive this, since the simulator must handle all copies at once — [[FS90 - Witness Indistinguishable and Witness Hiding Protocols|FS90]].

## Notes

- Feige and Shamir also define witness-hiding protocols and show that witness indistinguishability with two independent witnesses gives witness hiding — [[FS90 - Witness Indistinguishable and Witness Hiding Protocols|FS90]].
- Two messages suffice given NIZK proofs: [[nizk-to-zap-dn00|NIZK ⇒ zaps]] — [[DN00 - Zaps and Their Applications|DN00]].
