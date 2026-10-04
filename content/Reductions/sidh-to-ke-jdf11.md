---
type: reduction
status: draft
title: "SSDDH ⇒ KE"
aliases: []
id: red-sidh-to-ke-jdf11
kind: implication
hypotheses: [ssddh]
conclusion: ke
class: unstated
model: standard
source:
  - "[[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]"
security-loss: ""
---

# SSDDH ⇒ KE

## Statement

If the [[supersingular-isogeny-diffie-hellman#decisional-variant-ssddh|SSDDH]] problem, the decisional variant of [[supersingular-isogeny-diffie-hellman|SIDH]], is hard, the SIDH protocol is a [[key-exchange|key exchange]] whose session key is indistinguishable from random in the authenticated-links model of Canetti and Krawczyk — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]. Over a supersingular $E/\FF_{p^2}$ with $p = \ell_A^{e_A}\ell_B^{e_B} f \pm 1$, each party computes a secret isogeny with kernel $\langle [m]P + [n]Q \rangle$ for a basis $\{P, Q\}$ of its own $\ell^{e}$-torsion, publishes the image curve together with the images of the other party's torsion basis, and both derive $j(E_{AB})$.

## Sketch

Given $\phi_A(P_B), \phi_A(Q_B)$, Bob computes $E_A / \langle [m_B]\phi_A(P_B) + [n_B]\phi_A(Q_B) \rangle$, and Alice symmetrically; both curves are $E / \langle R_A, R_B \rangle$ up to isomorphism, where $R_X = [m_X]P_X + [n_X]Q_X$, so the $j$-invariants agree. Distinguishing $j(E_{AB})$ from the $j$-invariant of an independently generated $E_{A'B'}$ given the transcript is SSDDH by definition.

## Notes

- SSDDH does not hold: the published torsion-point images make the secret isogeny, hence $E_{AB}$, computable in classical polynomial time — [[CD22 - An efficient key recovery attack on SIDH|CD22]].
