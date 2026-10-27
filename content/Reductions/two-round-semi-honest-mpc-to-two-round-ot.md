---
type: reduction
status: draft
title: Two-round semi-honest MPC ⇒ Two-round OT
aliases: []
id: red-two-round-semi-honest-mpc-to-two-round-ot
kind: implication
hypotheses: [two-round-semi-honest-mpc]
conclusion: two-round-ot
class: fully-black-box
model: standard
source:
  - "[[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]]"
security-loss: "none"
rationale:
  class: "The OT protocol is the general protocol run on the OT functionality with its messages regrouped, and each party's view is a function of its view in that protocol."
---

# Two-round semi-honest MPC ⇒ Two-round OT

## Statement

Run, for $n = 2$, a protocol that computes every functionality in two rounds with semi-honest security ([[secure-multi-party-computation#two-round-semi-honest-mpc|two-round semi-honest MPC]]) on $((x_0, x_1), c) \mapsto (\bot, x_c)$. This gives a [[oblivious-transfer#two-round-ot|two-message semi-honest OT]]: the receiver sends its first-round message; the sender's first-round message does not depend on the receiver's, so the sender replies with both of its messages; and the receiver's second-round message is never sent, because the sender has no output. Hence $k$-round semi-honest OT is necessary for $k$-round semi-honest MPC, here with $k = 2$ — [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]].

## Sketch

In the OT protocol the sender's view is a sub-view of its view in the MPC protocol, and the receiver's view equals its MPC view, since it can recompute its own unsent second message. The MPC simulators therefore give [[oblivious-transfer#receiver-privacy|receiver privacy]], the sender's view being simulatable without $c$, and [[oblivious-transfer#sender-privacy|sender privacy]], the receiver's view being simulatable from $(c, x_c)$ — standard.

## Notes

- With a common reference string, the simulation argument gives privacy for inputs fixed before the reference string is sampled, as in the MPC security definition, while the OT privacy games let the adversary choose its inputs after seeing it — folklore.
- GS18 call two-round OT the minimal assumption for two-round MPC, and the converse holds by their construction ([[two-round-ot-to-two-round-semi-honest-mpc-gs18|two-round OT ⇒ two-round semi-honest MPC]]) — [[GS18 - Two-Round Multiparty Secure Computation from Minimal Assumptions|GS18]].
- The same construction with any number of rounds gives semi-honest OT from semi-honest 2PC ([[two-party-computation-to-ot|semi-honest 2PC ⇒ OT]]) — folklore.
