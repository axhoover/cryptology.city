---
type: barrier
status: draft
title: "No fully-black-box reduction from two-round OT to two-round semi-honest MPC"
aliases: []
id: bar-two-round-ot-to-two-round-semi-honest-mpc-abg-20
hypotheses: [two-round-ot]
conclusion: two-round-semi-honest-mpc
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
circumvented-by: [red-two-round-ot-to-two-round-semi-honest-mpc-gs18]
source:
  - "[[ABG+20 - Separating Two-Round Secure Computation From Oblivious Transfer|ABG+20]]"
rationale:
  class: "ABG+20 construct oracles relative to which two-round OT exists but no two-round semi-honest protocol securely computes their target functionality, which rules out constructions that use the OT only as a black box with proofs that use the adversary only as an oracle."
---

# No fully-black-box reduction from two-round OT to two-round semi-honest MPC

## Statement

There is a three-party functionality that no two-round protocol secure against semi-honest adversaries computes using a [[oblivious-transfer#two-round-ot|two-round OT]] protocol only as a black box. Hence there is no fully-black-box construction of [[secure-multi-party-computation#two-round-semi-honest-mpc|two-round semi-honest MPC]] from two-round OT, and the non-black-box use of the OT in the two-round protocols of GS18 and BL18 is necessary. A similar separation holds when one starts from any two-party functionality other than OT — [[ABG+20 - Separating Two-Round Secure Computation From Oblivious Transfer|ABG+20]].

## Notes

- ABG+20 also present a complete 4-party functionality, and give evidence that ruling out a complete 3-party functionality, or black-box constructions of 3-round MPC from 2-round OT, is difficult — [[ABG+20 - Separating Two-Round Secure Computation From Oblivious Transfer|ABG+20]].
- Three rounds suffice with black-box use: two-round semi-honest OT gives three-round semi-honest MPC that uses the OT only as a black box — [[PS21 - Three-Round Secure Multiparty Computation from Black-Box Two-Round Oblivious Transfer|PS21]].
- With non-black-box use of the OT, two rounds suffice ([[two-round-ot-to-two-round-semi-honest-mpc-gs18|two-round OT ⇒ two-round semi-honest MPC]]) — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]], [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]].
