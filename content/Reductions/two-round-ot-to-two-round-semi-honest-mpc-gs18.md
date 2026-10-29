---
type: reduction
status: draft
title: "Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)"
aliases: []
id: red-two-round-ot-to-two-round-semi-honest-mpc-gs18
kind: implication
hypotheses: [two-round-ot]
conclusion: two-round-semi-honest-mpc
class: free
model: standard
source:
  - "[[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]]"
  - "[[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]]"
security-loss: ""
rationale:
  class: "The protocol garbles circuits that compute the OT protocol's next-message functions, so it uses the OT protocol's code, and ABG+20 show that black-box use of two-round OT cannot suffice."
---

# Two-round OT ⇒ Two-round semi-honest MPC (Garg–Srinivasan, Benhamouda–Lin)

## Statement

A two-message OT protocol secure against semi-honest adversaries ([[oblivious-transfer#two-round-ot|two-round OT]]) yields, for every $n$ and every functionality, a protocol with two rounds of broadcast that is secure against semi-honest adversaries corrupting any number of parties ([[secure-multi-party-computation#two-round-semi-honest-mpc|two-round semi-honest MPC]]); for an OT in the plain model, the MPC protocol is in the plain model. The theorem is proved independently by [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]] and [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]]. More generally, for every $k \ge 2$, $k$-round semi-honest OT is necessary and complete for $k$-round semi-honest MPC — [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]].

## Notes

- Two rounds are optimal, and two-round OT is necessary ([[two-round-semi-honest-mpc-to-two-round-ot|two-round semi-honest MPC ⇒ two-round OT]]) — [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]].
- Earlier two-round semi-honest protocols needed indistinguishability obfuscation, witness encryption or bilinear maps — [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]].
- The non-black-box use of the OT is necessary ([[no-two-round-ot-to-two-round-semi-honest-mpc-abg-20|no fully-black-box two-round MPC from two-round OT]]) — [[ABG+20 - Separating Two-Round Secure Computation From Oblivious Transfer|ABG+20]]; with three rounds, black-box use of two-round OT suffices — [[PS21 - Three-Round Secure Multiparty Computation from Black-Box Two-Round Oblivious Transfer|PS21]].
- Against malicious adversaries, two-round OT secure against malicious adversaries in the common reference string model gives two-round MPC secure with abort in that model ([[two-round-uc-ot-to-two-round-mpc-gs18|two-round UC OT ⇒ two-round MPC]]) — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]].
