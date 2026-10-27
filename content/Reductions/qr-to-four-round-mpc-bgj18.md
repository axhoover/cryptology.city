---
type: reduction
status: draft
title: "QR ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)"
aliases: []
id: red-qr-to-four-round-mpc-bgj18
kind: implication
hypotheses: [qr]
conclusion: four-round-mpc
class: free
model: standard
source:
  - "[[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]]"
security-loss: ""
rationale:
  class: "The compiler has every party prove that its messages follow the semi-malicious protocol, statements about that protocol's code."
---

# QR ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)

## Statement

If [[quadratic-residuosity|QR]] is hard for polynomial-time adversaries, every functionality has a four-round protocol in the plain model, with simultaneous messages over the broadcast channel, that is secure with abort against a malicious adversary corrupting any number of parties and has a black-box simulator ([[secure-multi-party-computation#four-round-mpc|four-round MPC]]) — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]]. The protocol is the compiler of [[ddh-to-four-round-mpc-bgj18|DDH ⇒ four-round MPC]], which turns a three-round semi-malicious protocol whose first round is public-coin into a four-round malicious one, with its components instantiated under QR — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]].

## Notes

- Polynomially hard [[ddh-to-four-round-mpc-bgj18|DDH]] or [$N$-th residuosity](dcr-to-four-round-mpc-bgj18) gives the same result — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]].
- Four rounds are optimal: with a black-box proof of security, MPC in the plain model needs at least four rounds — [[GMPP16 - The Exact Round Complexity of Secure Computation|GMPP16]].
