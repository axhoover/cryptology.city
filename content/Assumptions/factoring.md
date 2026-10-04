---
type: assumption
status: draft
aliases:
  - FAC
  - Factoring
  - Integer factoring
  - Factoring assumption
  - IFP
title: Factoring assumption
id: fac
variants:
  factoring-blum-integers: "#factoring-with-known-factor-structure"
---

# Factoring assumption

The _factoring assumption_ states that there is no efficient algorithm that factors the product $N = pq$ of two large, random, equal-length primes $p$ and $q$. This is one of the oldest and most studied hardness assumptions in computational number theory and is the basis of RSA-based cryptography.

## Assumption

For security parameter $\secpar$, let $p, q$ be independently uniform random $\secpar$-bit primes and $N = pq$. The _factoring advantage_ of an adversary $\calA$ is

$$
\Adv^{\mathrm{fac}}_{\calA}(\secpar) := \Pr\!\left[\calA(1^\secpar, N) \in \{p, q\}\right].
$$

**Factoring is hard** if for all efficient $\calA$, $\Adv^{\mathrm{fac}}_{\calA}(\secpar)$ is negligible.

## Known Results

- [[rsa-assumption|RSA]] hardness implies factoring hardness, since the factors of $N$ give $\varphi(N)$ and hence the decryption exponent — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]; the converse is open in the standard model, and [[rsa-to-fac-dlo24|RSA ⇔ FAC]] holds in the generic ring model — [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]], [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]
- [[fac-to-qr-gm84|QR ⇒ FAC]] (for Blum moduli); the converse is open.
- [[fac-to-dcr-pai99|DCR ⇒ FAC]]; the converse is open.
- Quantum computers can factor in polynomial time via Shor's algorithm — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]

# Variations

## Strong RSA assumption

The strong RSA assumption requires that it is hard to compute any $e$-th root of a random group element for an adversarially chosen $e > 1$, not just a fixed $e$. This is a stronger assumption than standard RSA.

## Factoring with known factor structure

Some protocols assume factoring is hard even given additional structural information about $N$ (e.g., $N = pq$ with $p \equiv q \equiv 3 \pmod{4}$, so-called Blum integers). Blum integers are used in the Blum-Blum-Shub PRG.

# Attacks

- **Trial division**: $O(\sqrt{N})$ — practical only for very small factors
- **Pollard's $\rho$** algorithm: $O(N^{1/4})$ expected time
- **Elliptic curve method (ECM)**: efficient when $p$ is small; runs in $L_p[1/2, \sqrt{2}]$
- **Quadratic sieve**: $L_N[1/2, 1]$ — best algorithm for $N < 10^{100}$
- **General Number Field Sieve (GNFS)**: sub-exponential $L_N[1/3, (64/9)^{1/3}] \approx L_N[1/3, 1.923]$ — best known classical algorithm for large $N$
- **Quantum**: Shor's algorithm — polynomial time $O((\log N)^3)$ — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]

<!-- BEGIN GENERATED participates-in d06ffee379ff -->

## Participates in

**Builds on Factoring assumption**

- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[fac-to-tfnp|FAC ⊆ TFNP]]
- [[factoring-with-known-factor-structure-to-prg|Factoring with known factor structure ⇒ PRG]] (via [[factoring#factoring-with-known-factor-structure|Factoring with known factor structure]])

**Produces Factoring assumption**

- [[fac-to-dcr-pai99|DCR ⇒ FAC]]
- [[fac-to-qr-gm84|QR ⇒ FAC]] (via [[factoring#factoring-with-known-factor-structure|Factoring with known factor structure]])
- [[rsa-to-fac-dlo24|RSA ⇔ FAC]]
- [[fac-to-rsa-rsa78|RSA ⇒ FAC]]

<!-- END GENERATED participates-in -->
