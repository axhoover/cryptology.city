---
type: assumption
status: draft
aliases:
  - DCR
  - Paillier assumption
  - Decisional composite residuosity
title: Decisional composite residuosity assumption
id: dcr
variants:
  d-th-composite-residuosity: "#d-th-composite-residuosity"
---

# Decisional composite residuosity assumption

The _decisional composite residuosity (DCR) assumption_ states that it is computationally hard to distinguish a random $n$-th power residue modulo $n^2$ from a uniformly random element of $\ZZ_{n^2}^*$, where $n = pq$ is an RSA modulus. Introduced by Paillier as the hardness basis for an additively homomorphic encryption scheme — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]].

## Assumption

Let $n = pq$ for random $\secpar$-bit primes $p, q$. The _DCR advantage_ of an adversary $\calA$ is

$$
\Adv^{\mathrm{dcr}}_{\calA}(\secpar) := \left|2\Pr\!\left[\calA(1^\secpar, n, c_b) = b\right] - 1\right|,
$$

where $b \getsr \bits$, $c_0 := r^n \bmod n^2$ for $r \getsr \ZZ_n^*$ (a uniformly random $n$-th power), and $c_1 \getsr \ZZ_{n^2}^*$.

**DCR is hard** if for all efficient $\calA$, $\Adv^{\mathrm{dcr}}_{\calA}(\secpar)$ is negligible.

## Known Results

- [[dcr-to-he-pai99|DCR ⇒ HE]]
- DCR hardness implies [[factoring|factoring]] hardness: given $p, q$, an element $z \in \ZZ_{n^2}^*$ is an $n$-th residue iff $z^{\varphi(n)} \equiv 1 \pmod{n^2}$ — folklore. Whether factoring hardness implies DCR hardness is open.
- [[dcr-to-pke-pai99|DCR ⇒ PKE]]
- [[dcr-to-com|DCR ⇒ COM]]
- [[dcr-to-he-pai99|DCR ⇒ HE]]
- [[dkg-and-he-to-tpke|DKG + HE ⇒ TPKE]]

# Variations

## $d$-th Composite Residuosity

Generalizes DCR to $n^d$-th powers modulo $n^{d+1}$ — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]. Gives homomorphism for messages modulo $n^d$.

# Attacks

- DCR is broken if [[factoring|factoring]] $n$ is easy — knowing $p$ and $q$ determines the group structure
- Quantum attacks: Shor's algorithm factors $n$ in polynomial time, breaking DCR — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]
- No sub-exponential classical attack on DCR independent of factoring is known

<!-- BEGIN GENERATED participates-in 4fad64553ebb -->

## Participates in

**Builds on Decisional composite residuosity assumption**

- [[dcr-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DCR + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- [[dcr-to-com|DCR ⇒ COM]]
- [[dcr-to-he-pai99|DCR ⇒ HE]]
- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Partially homomorphic encryption (PHE)]]
- [[dcr-to-pke-pai99|DCR ⇒ PKE]]

**Produces Decisional composite residuosity assumption**

- [[fac-to-dcr-pai99|FAC ⇒ DCR]]

<!-- END GENERATED participates-in -->
