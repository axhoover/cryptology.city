---
type: assumption
status: draft
aliases:
  - Alternating moduli assumption
  - AMA
  - CDM
  - Crypto Dark Matter
title: Alternating moduli assumption
id: alternating-moduli-assumption
variants:
  alternating-moduli-strong: "#strong-alternating-moduli-chosen-input-assumption"
  alternating-moduli-weak: "#weak-alternating-moduli-random-input-assumption"
---

# Alternating Moduli

The _alternating moduli assumption_ (also called _Crypto Dark Matter_[^1] after [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]) posits that mixing linear operations over different moduli — specifically $\ZZ_2$ (XOR) and $\ZZ_3$ (mod-3 addition) — yields candidate [[pseudorandom-function|PRF]] constructions that are computationally indistinguishable from random, under assumptions not known to reduce to standard assumptions like [[learning-with-errors|LWE]] or [[learning-parity-with-noise|LPN]].

## Assumption

The main candidates from [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]] use a two-layer structure: a secret linear map $A$ over $\ZZ_2$ followed by a public linear map $B$ over $\ZZ_3$. Given $n, m, \ell \in \poly(\secpar)$, the function $f_A : \bits^n \to \ZZ_3^\ell$ is defined by

$$
f_A(x) = B \cdot (A \cdot x \bmod 2) \bmod 3,
$$

where $A \getsr \ZZ_2^{m \times n}$ is the secret key and $B \getsr \ZZ_3^{\ell \times m}$ is public. The weak PRF version assumes hardness for uniformly random inputs.

### Weak alternating moduli (random-input) assumption

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{weak-am}}_{\calA}(\secpar)$}
\begin{algorithmic}
\State $A \getsr \ZZ_2^{m \times n}$; $B \getsr \ZZ_3^{\ell \times m}$
\State $b \getsr \bits$
\State $\calO_0() := (x \getsr \bits^n;\; (x,\; B \cdot (A \cdot x \bmod 2) \bmod 3))$
\State $\calO_1() := (x \getsr \bits^n;\; y \getsr \ZZ_3^\ell;\; (x, y))$
\State $b' \gets \calA^{\calO_b}(1^\secpar, B)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**Weak-AM is hard** if for all efficient $\calA$,

$$
\Adv^{\text{weak-am}}_{\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{weak-am}}_{\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Strong alternating moduli (chosen-input) assumption

The chosen-input analogue for $f_A$ is false, since $f_A(0^n) = 0$ for every key; [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]] put forward a separate depth-3 strong PRF candidate.

## Known Results

- [[alternating-moduli-assumption-to-prf-bip-18|Alternating moduli assumption ⇒ PRF]]
- The candidates admit distributed-evaluation protocols with better round and/or communication complexity than MPC evaluation of AES, LowMC or Rasta, most so with an honest majority or with preprocessing — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]
- The assumption is not known to follow from or imply standard lattice assumptions

# Variations

## Low-complexity PRFs (in $\mathrm{NC}^1$ / $\mathrm{TC}^0$)

Separate from the alternating moduli assumption, there is interest in PRFs computable by low-complexity circuits. PRFs in $\mathrm{TC}^0$ follow from [[decisional-diffie-hellman|DDH]] and from factoring — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]].

## Pseudorandom correlation generators (PCG)

See [[pseudorandom-correlation-generator|PCG]]. Pseudorandom correlation functions for OT correlations follow from a constrained Naor–Reingold PRF whose constraint class contains a low-complexity weak PRF, and the [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]] candidate is one instantiation of that weak PRF — [[BCM+24 - Fast Public-Key Silent OT and More from Constrained Naor-Reingold|BCM+24]].

# Attacks

- Ongoing cryptanalytic attention; several early candidates have been partially broken or weakened
- Algebraic attacks exploiting the mixed-moduli structure (Gröbner basis methods, linearization) remain the primary avenue

[^1]: The name "Crypto Dark Matter" reflects the idea that large regions of the cryptographic assumption landscape remain unexplored.

<!-- BEGIN GENERATED participates-in b6ef03ec6f82 -->

## Participates in

**Builds on Alternating moduli assumption**

- [[alternating-moduli-assumption-to-mpc-bip-18|Alternating moduli assumption ⇒ MPC]]
- [[alternating-moduli-assumption-to-prf-bip-18|Alternating moduli assumption ⇒ PRF]]
- [[alternating-moduli-assumption-to-pseudorandom-correlation-generators-pcg|Alternating moduli assumption ⇒ Pseudorandom correlation generators (PCG)]]

<!-- END GENERATED participates-in -->
