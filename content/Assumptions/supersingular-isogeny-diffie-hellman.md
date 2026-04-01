---
aliases:
  - SIDH
  - Supersingular Isogeny Diffie-Hellman
title: Supersingular Isogeny Diffie-Hellman
---

# Supersingular Isogeny Diffie-Hellman

The _Supersingular Isogeny Diffie-Hellman (SIDH)_ assumption underlies a family of post-quantum key exchange protocols based on the conjectured hardness of computing isogenies between supersingular elliptic curves. SIDH was introduced by Jao and De Feo as a candidate post-quantum key exchange — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]. In 2022, a classical polynomial-time attack was discovered that completely breaks SIDH — [[CD22 - An efficient key recovery attack on SIDH|CD22]].

## Assumption

Let $p$ be a prime and $E$ a supersingular elliptic curve over $\FF_{p^2}$. An **isogeny** $\phi : E \to E'$ is a non-trivial rational map that preserves the group structure (a group homomorphism).

The SIDH problem: given $E$, the image curve $E' = E / \langle P \rangle$ where $P$ is a random $\ell$-torsion point, and auxiliary torsion-point images $\phi(Q)$ for a basis $\{P, Q\}$ of the $\ell^n$-torsion subgroup, find an isogeny $\phi : E \to E'$.

The SIDH key exchange works as follows:

1. Both parties fix supersingular $E / \FF_{p^2}$ with $\#E(\FF_{p^2}) = (p+1)^2$, chosen so that $p + 1 = 2^{e_A} 3^{e_B}$
2. Alice chooses a secret $\ell_A$-isogeny $\phi_A : E \to E_A$; Bob chooses $\phi_B : E \to E_B$
3. They exchange $E_A$, $E_B$ and images of each other's torsion points
4. Shared key: $j(E_{AB}) = j(\phi_B(E_A)) = j(\phi_A(E_B))$, the $j$-invariant of the common image curve

## Known Results

- SIDH is not broken by quantum computers (unlike [[discrete-logarithm|discrete log]] or [[factoring|factoring]] assumptions) — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]
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
- **Quantum sub-exponential attack on CSIDH**: Ciphertext-only quantum attack using the hidden shift problem structure; runs in quantum time $\tilde{O}(p^{1/4})$
- The original SIDH assumption (without auxiliary torsion points) may still be hard — this is the basis for exploring modifications
