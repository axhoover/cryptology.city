---
type: reduction
status: draft
title: "DDH ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)"
aliases: []
id: red-ddh-to-four-round-mpc-bgj18
kind: implication
hypotheses: [ddh]
conclusion: four-round-mpc
class: free
model: standard
source:
  - "[[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]]"
security-loss: ""
rationale:
  class: "The compiler has every party prove that its messages follow the semi-malicious protocol, statements about that protocol's code."
---

# DDH ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)

## Statement

If [[decisional-diffie-hellman|DDH]] is hard for polynomial-time adversaries, every functionality has a four-round protocol in the plain model, with simultaneous messages over the broadcast channel, that is secure with abort against a malicious adversary corrupting any number of parties and has a black-box simulator ([[secure-multi-party-computation#four-round-mpc|four-round MPC]]) — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]]. A compiler turns a three-round semi-malicious protocol whose first round is public-coin into a four-round malicious one. Its main tool is a three-round promise zero-knowledge protocol in the simultaneous-message model, which is zero knowledge only against verifiers that do not abort, and its simulator treats aborting and non-aborting adversaries separately — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]].

## Notes

- Polynomially hard [[qr-to-four-round-mpc-bgj18|QR]] or [$N$-th residuosity](dcr-to-four-round-mpc-bgj18) gives the same result — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]].
- Four rounds are optimal: with a black-box proof of security, MPC in the plain model needs at least four rounds — [[GMPP16 - The Exact Round Complexity of Secure Computation|GMPP16]].
- Earlier, polynomially hard DDH gave five rounds, and four rounds needed one-way permutations together with sub-exponentially hard DDH — [[ACJ17 - A New Approach to Round-Optimal Secure Multiparty Computation|ACJ17]].
- Four-round OT also suffices ([[four-round-ot-to-four-round-mpc-ccg20|four-round OT ⇒ four-round MPC]]) — [[CCG+20 - Round Optimal Secure Multiparty Computation from Minimal Assumptions|CCG+20]].
