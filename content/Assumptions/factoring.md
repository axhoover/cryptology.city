---
aliases:
  - FAC
  - Factoring
  - Integer factoring
  - Factoring assumption
  - IFP
title: Factoring assumption
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

- The [[rsa-assumption|RSA assumption]] (hardness of computing $e$-th roots mod $N$) is implied by the factoring assumption — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]; the converse is open (factoring may be harder than RSA)
- The [[quadratic-residuosity|QR assumption]] follows from factoring hardness — [[GM84 - Probabilistic encryption|GM84]]
- The [[decisional-composite-residuosity|DCR assumption]] (Paillier) follows from factoring hardness — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]
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
