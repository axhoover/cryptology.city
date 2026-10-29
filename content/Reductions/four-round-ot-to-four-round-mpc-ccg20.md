---
type: reduction
status: draft
title: "Four-round OT ⇒ Four-round MPC (Choudhuri–Ciampi–Goyal–Jain–Ostrovsky)"
aliases: []
id: red-four-round-ot-to-four-round-mpc-ccg20
kind: implication
hypotheses: [four-round-ot]
conclusion: four-round-mpc
class: unstated
model: standard
source:
  - "[[CCG+20 - Round Optimal Secure Multiparty Computation from Minimal Assumptions|CCG+20]]"
security-loss: ""
---

# Four-round OT ⇒ Four-round MPC (Choudhuri–Ciampi–Goyal–Jain–Ostrovsky)

## Statement

If a four-round plain-model OT protocol exists that is secure against malicious adversaries with a black-box simulator running in expected polynomial time ([[oblivious-transfer#four-round-ot|four-round OT]]), every functionality has a four-round plain-model protocol that is secure with abort against a malicious adversary corrupting any number of parties and has a black-box simulator running in expected polynomial time ([[secure-multi-party-computation#four-round-mpc|four-round MPC]]) — [[CCG+20 - Round Optimal Secure Multiparty Computation from Minimal Assumptions|CCG+20]].

## Notes

- Four rounds are optimal: with a black-box proof of security, MPC in the plain model needs at least four rounds — [[GMPP16 - The Exact Round Complexity of Secure Computation|GMPP16]].
- For every $k \ge 5$, $k$-round MPC against any number of malicious parties follows from $k$-round malicious OT in the plain model — [[BL18 - k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits|BL18]].
- Polynomially hard DDH, QR or $N$-th residuosity also gives four-round MPC ([[ddh-to-four-round-mpc-bgj18|DDH ⇒ four-round MPC]]) — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]].
