---
aliases:
  - QR
  - Quadratic residuosity
  - Quadratic residuosity assumption
  - QRA
title: Quadratic residuosity assumption
---

# Quadratic residuosity assumption

The _quadratic residuosity (QR) assumption_ states that it is computationally hard to decide whether a given integer $a$ with Jacobi symbol $\left(\frac{a}{N}\right) = 1$ is a quadratic residue modulo $N = pq$. The Jacobi symbol restriction ensures that quadratic residuosity is information-theoretically hidden; the QR assumption makes this computationally hard. It underlies the first provably CPA-secure public-key encryption scheme — [[GM84 - Probabilistic encryption|GM84]].

## Assumption

Let $N = pq$ for random $\secpar$-bit primes $p \equiv q \equiv 3 \pmod{4}$ (or general primes). Let $\QR_N = \{a \in \ZZ_N^* : \exists x,\, x^2 \equiv a \pmod{N}\}$ and $\J_N = \{a \in \ZZ_N^* : \left(\frac{a}{N}\right) = 1\} \supseteq \QR_N$. The _QR advantage_ of $\calA$ is

$$
\Adv^{\mathrm{qr}}_{\calA}(\secpar) := \left|2\Pr\!\left[\calA(1^\secpar, N, a) = 1\right] - 1\right|,
$$

where $a$ is uniformly random in $\QR_N$ (with probability 1/2) or uniformly random in $\J_N \setminus \QR_N$ (with probability 1/2).

**QR is hard** if for all efficient $\calA$, $\Adv^{\mathrm{qr}}_{\calA}(\secpar)$ is negligible.

## Known Results

- QR → CPA-secure [[public-key-encryption|PKE]]: Goldwasser-Micali encryption (the first IND-CPA PKE scheme) encrypts one bit at a time — [[GM84 - Probabilistic encryption|GM84]]
- Goldwasser-Micali is multiplicatively homomorphic: $\Enc(b_1) \cdot \Enc(b_2) = \Enc(b_1 \oplus b_2 \bmod 2)$ — [[GM84 - Probabilistic encryption|GM84]]
- QR follows from [[factoring|factoring hardness]]: knowing $p$ and $q$ allows computing the Legendre symbols $\left(\frac{a}{p}\right)$ and $\left(\frac{a}{q}\right)$ — [[GM84 - Probabilistic encryption|GM84]]
- QR → statistically hiding [[commitment-scheme|commitment scheme]] — standard
- The original [[zero-knowledge-proof|ZK proof]] of GMR85 was for quadratic residuosity — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]]

# Variations

## Quadratic residuosity over $\ZZ_p$ (prime field)

For a prime $p$, deciding quadratic residuosity modulo $p$ is easy (via the Legendre symbol). The hardness only arises for composite moduli.

## Higher residuosity

Generalizes QR to $d$-th power residuosity modulo $N$. Underlies Goldwasser-Micali generalizations and the Benaloh cryptosystem.

# Attacks

- QR is broken if [[factoring|factoring]] $N$ is easy: knowing $p, q$ determines all Legendre symbols
- Quantum attacks: Shor's algorithm factors $N$ and breaks QR — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]
