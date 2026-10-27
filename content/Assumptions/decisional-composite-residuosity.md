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
  dcr-safe-primes: "#dcr-with-safe-prime-moduli"
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

- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Additively homomorphic encryption]]
- [[fac-to-dcr-pai99|DCR ⇒ FAC]]; whether factoring hardness implies DCR hardness is open.
- [[dcr-to-pke-pai99|DCR ⇒ PKE]]
- [[dcr-to-com|DCR ⇒ COM]]
- [[dkg-and-he-to-tpke|DCR ⇒ TPKE]]

# Variations

## $d$-th Composite Residuosity

Generalizes DCR to $n^d$-th powers modulo $n^{d+1}$ — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]. For a fixed $d \ge 1$ and $n$ as above, **$d$-th composite residuosity is hard** if for all efficient $\calA$, $\left|2\Pr\!\left[\calA(1^\secpar, n, c_b) = b\right] - 1\right|$ is negligible, where $b \getsr \bits$, $c_0 := r^{n^d} \bmod n^{d+1}$ for $r \getsr \ZZ_n^*$ (a uniformly random $n^d$-th power), and $c_1 \getsr \ZZ_{n^{d+1}}^*$; the case $d = 1$ is DCR. Gives homomorphism for messages modulo $n^d$.

## DCR with safe-prime moduli

DCR for moduli $n = pq$ with $p = 2p' + 1$ and $q = 2q' + 1$ safe primes, where $p', q'$ are distinct uniform $\secpar$-bit primes subject to the primality of $2p' + 1$ and $2q' + 1$ — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]. **DCR is hard for safe-prime moduli** if for all efficient $\calA$ the DCR advantage above, with $n$ sampled this way, is negligible.

# Attacks

- DCR is broken if [[factoring|factoring]] $n$ is easy — knowing $p$ and $q$ determines the group structure
- Quantum attacks: Shor's algorithm factors $n$ in polynomial time, breaking DCR — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]
- No sub-exponential classical attack on DCR independent of factoring is known

<!-- BEGIN GENERATED participates-in 415332af4012 -->

## Participates in

**Builds on Decisional composite residuosity assumption**

- [$d$-th Composite Residuosity ⇒ Additively homomorphic encryption](d-th-composite-residuosity-to-he) (via [$d$-th Composite Residuosity](decisional-composite-residuosity#d-th-composite-residuosity))
- [[dcr-safe-primes-to-pke-cca2-security-cs02|DCR (safe-prime moduli) ⇒ CCA-secure PKE (Cramer–Shoup)]] (via [[decisional-composite-residuosity#dcr-with-safe-prime-moduli|DCR with safe-prime moduli]])
- [[dcr-to-com|DCR ⇒ COM]]
- [[dcr-to-constant-bandwidth-oram-ddf-16|DCR ⇒ constant-bandwidth ORAM (Onion ORAM)]]
- [[dcr-to-cpir-cha04|DCR ⇒ One-round sublinear cPIR]]
- [DCR ⇔ $d$-th Composite Residuosity](dcr-to-d-th-composite-residuosity-dj01)
- [[fac-to-dcr-pai99|DCR ⇒ FAC]]
- [[dcr-to-highly-lossy-trapdoor-function-fgkrs10|DCR ⇒ Highly lossy TDF (Freeman–Goldreich–Kiltz–Rosen–Segev)]]
- [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ Additively homomorphic encryption]]
- [[dcr-to-pke-pai99|DCR ⇒ PKE]]
- [[dcr-to-tdh-dgi-19|DCR ⇒ TDH]]
- [[dkg-and-he-to-tpke|DCR ⇒ TPKE]]

**Produces Decisional composite residuosity assumption**

- [DCR ⇔ $d$-th Composite Residuosity](dcr-to-d-th-composite-residuosity-dj01) (via [$d$-th Composite Residuosity](decisional-composite-residuosity#d-th-composite-residuosity))

<!-- END GENERATED participates-in -->
