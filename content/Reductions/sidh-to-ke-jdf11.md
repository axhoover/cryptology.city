---
type: reduction
status: draft
title: "SIDH ⇒ KE"
aliases: []
id: red-sidh-to-ke-jdf11
kind: implication
hypotheses: [sidh]
conclusion: ke
class: unstated
model: standard
source:
  - "[[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]"
security-loss: ""
---

# SIDH ⇒ KE

[[supersingular-isogeny-diffie-hellman|SIDH]] implies [[key-exchange|KE]].

## Statement

The [[supersingular-isogeny-diffie-hellman|SIDH]] assumption implies [[key-exchange|KE]]. Over a supersingular $E/\FF_{p^2}$ with $p = \ell_A^{e_A}\ell_B^{e_B} f \pm 1$, each party computes a secret isogeny with kernel $\langle [m]P + [n]Q \rangle$ for a basis $\{P, Q\}$ of its own $\ell^{e}$-torsion, publishes the image curve together with the images of the other party's torsion basis, and both derive $j(E_{AB})$; the session key is indistinguishable from random in the authenticated-links model of Canetti and Krawczyk under the decisional variant SSDDH — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]. The hypothesis is false: the published torsion images make the secret isogeny recoverable in classical polynomial time — [[CD22 - An efficient key recovery attack on SIDH|CD22]].

## Sketch

Given $\phi_A(P_B), \phi_A(Q_B)$, Bob computes $E_A / \langle [m_B]\phi_A(P_B) + [n_B]\phi_A(Q_B) \rangle$, and Alice symmetrically; both curves are $E / \langle R_A, R_B \rangle$ up to isomorphism, where $R_X = [m_X]P_X + [n_X]Q_X$, so the $j$-invariants agree. Distinguishing $j(E_{AB})$ from the $j$-invariant of an independently generated $E_{A'B'}$ given the transcript is SSDDH by definition.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- SUSPECTED ERROR on content/Assumptions/supersingular-isogeny-diffie-hellman.md: the shared-key line $j(E_{AB}) = j(\phi_B(E_A)) = j(\phi_A(E_B))$ applies each party's own isogeny to the other party's curve. The correct objects are the pushed-forward isogenies $\phi_B' : E_A \to E_{AB}$ and $\phi_A' : E_B \to E_{AB}$ computed from the transmitted torsion-point images; as written the composition is not defined.
- SUSPECTED ERROR on the same page: the SIDH problem is stated with $E' = E/\langle P \rangle$ for a random $\ell$-torsion point $P$ while $\{P, Q\}$ is called a basis of the $\ell^n$-torsion. The kernel is $\langle [m]P + [n]Q \rangle$ for secret $m, n$, and both basis images of the other party's torsion group are published.
