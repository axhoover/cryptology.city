---
type: assumption
status: draft
aliases:
  - SIDH
  - Supersingular Isogeny Diffie-Hellman
title: Supersingular Isogeny Diffie-Hellman
id: sidh
variants:
  csidh: "#csidh"
---

# Supersingular Isogeny Diffie-Hellman

The _Supersingular Isogeny Diffie-Hellman (SIDH)_ assumption underlies a family of post-quantum key exchange protocols based on the conjectured hardness of computing isogenies between supersingular elliptic curves. SIDH was introduced by Jao and De Feo as a candidate post-quantum key exchange — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]. In 2022, a classical polynomial-time attack was discovered that completely breaks SIDH — [[CD22 - An efficient key recovery attack on SIDH|CD22]].

## Assumption

Let $p$ be a prime and $E$ a supersingular elliptic curve over $\FF_{p^2}$. An **isogeny** $\phi : E \to E'$ is a non-trivial rational map that preserves the group structure (a group homomorphism).

The SIDH problem, for distinct small primes $\ell_A, \ell_B$ and bases $\{P_A, Q_A\}$ of $E[\ell_A^{e_A}]$ and $\{P_B, Q_B\}$ of $E[\ell_B^{e_B}]$ (both defined over $\FF_{p^2}$): given $E$, the image curve $E' = E / \langle R \rangle$ for a random point $R \in E[\ell_A^{e_A}]$ of order $\ell_A^{e_A}$, and the images $\phi(P_B), \phi(Q_B)$ under the isogeny $\phi : E \to E'$ with kernel $\langle R \rangle$, find a generator of $\langle R \rangle$ — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]].

The SIDH key exchange of [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]] works as follows:

1. Both parties fix supersingular $E / \FF_{p^2}$ with $\#E(\FF_{p^2}) = (p+1)^2$, chosen so that $p + 1 = 2^{e_A} 3^{e_B}$
2. Alice chooses a secret isogeny $\phi_A : E \to E_A$ with cyclic kernel of order $2^{e_A}$; Bob chooses $\phi_B : E \to E_B$ with cyclic kernel of order $3^{e_B}$
3. They exchange $E_A$, $E_B$ and images of each other's torsion points
4. Shared key: $j(E_{AB})$, the $j$-invariant of the common image curve $E_{AB} = E_B / \langle \phi_B(\ker \phi_A) \rangle \cong E_A / \langle \phi_A(\ker \phi_B) \rangle$; Alice computes the first from Bob's torsion-point images, Bob the second

## Known Results

- SIDH was conjectured to be hard for quantum computers (unlike [[discrete-logarithm|discrete log]] or [[factoring|factoring]] assumptions) — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]; the conjecture is false: SIDH is broken classically — [[CD22 - An efficient key recovery attack on SIDH|CD22]]
- SIDH was selected as a NIST post-quantum cryptography candidate (SIKE) before being broken
- A classical polynomial-time attack on SIDH, using Kani's theorem and the auxiliary torsion-point information — [[CD22 - An efficient key recovery attack on SIDH|CD22]]
- The attack breaks SIDH completely; SIKE was withdrawn from the NIST competition in 2022

# Variations

## CSIDH

_Commutative SIDH (CSIDH)_ uses a commutative group action on supersingular curves over $\FF_p$ (rather than $\FF_{p^2}$). Unlike SIDH, CSIDH does not reveal auxiliary torsion-point information, and it has not been broken by the CD22 attack. It is believed to remain a plausible post-quantum assumption, though quantum sub-exponential attacks exist.

## SQISign

A post-quantum [[digital-signature|digital signature]] scheme based on isogenies, using a different isogeny graph (Deuring correspondence) and not relying on the broken SIDH assumption.

# Attacks

- **CD22 classical polynomial-time attack**: Exploits the auxiliary torsion-point images in SIDH to recover the secret isogeny efficiently via abelian surface arguments (Kani's theorem) — [[CD22 - An efficient key recovery attack on SIDH|CD22]]
- **Quantum sub-exponential attack on CSIDH**: Kuperberg's algorithm for the hidden-shift problem recovers the secret key in quantum subexponential time; a classical meet-in-the-middle attack takes time $\tilde{O}(p^{1/4})$ — Castryck–Lange–Martindale–Panny–Renes (ASIACRYPT 2018)
- The original SIDH assumption (without auxiliary torsion points) may still be hard — this is the basis for exploring modifications

<!-- BEGIN GENERATED participates-in 1159b4484170 -->

## Participates in

**Builds on Supersingular Isogeny Diffie-Hellman**

- [[sidh-to-ke-jdf11|SIDH ⇒ KE]]

<!-- END GENERATED participates-in -->
