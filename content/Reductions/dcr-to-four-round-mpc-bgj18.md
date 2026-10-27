---
type: reduction
status: draft
title: "DCR ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)"
aliases: []
id: red-dcr-to-four-round-mpc-bgj18
kind: implication
hypotheses: [dcr]
conclusion: four-round-mpc
class: free
model: standard
source:
  - "[[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]]"
security-loss: ""
rationale:
  class: "The compiler has every party prove that its messages follow the semi-malicious protocol, statements about that protocol's code."
---

# DCR ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)

## Statement

If the $N$-th residuosity assumption holds for polynomial-time adversaries, that is, [[decisional-composite-residuosity|DCR]]: for an RSA modulus $n$, $n$-th powers modulo $n^2$ are indistinguishable from uniform elements of $\ZZ_{n^2}^*$ — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]] — then every functionality has a four-round protocol in the plain model, with simultaneous messages over the broadcast channel, that is secure with abort against a malicious adversary corrupting any number of parties and has a black-box simulator ([[secure-multi-party-computation#four-round-mpc|four-round MPC]]) — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]]. The protocol is the compiler of [[ddh-to-four-round-mpc-bgj18|DDH ⇒ four-round MPC]], which turns a three-round semi-malicious protocol whose first round is public-coin into a four-round malicious one, with its components instantiated under $N$-th residuosity — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]].

## Notes

- Polynomially hard [[ddh-to-four-round-mpc-bgj18|DDH]] or [[qr-to-four-round-mpc-bgj18|QR]] gives the same result — [[BGJ+18 - Promise Zero Knowledge and its Applications to Round Optimal MPC|BGJ+18]].
- Four rounds are optimal: with a black-box proof of security, MPC in the plain model needs at least four rounds — [[GMPP16 - The Exact Round Complexity of Secure Computation|GMPP16]].
