---
aliases:
  - Alternating moduli assumption
  - AMA
  - CDM
  - Crypto Dark Matter
title: Alternating moduli assumption
---

# Alternating Moduli 

The _alternating moduli assumption_ (also called _Crypto Dark Matter_[^1] after [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]) posits that mixing linear operations over different moduli — specifically $\ZZ_2$ (XOR) and $\ZZ_3$ (mod-3 addition) — yields candidate [[pseudorandom-function|PRF]] constructions that are computationally indistinguishable from random, under assumptions not known to reduce to standard assumptions like [[learning-with-errors|LWE]] or [[learning-parity-with-noise|LPN]].


## Assumption

The main candidates from [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]] use a two-layer structure: a secret linear map $A$ over $\ZZ_2$ followed by a public linear map $B$ over $\ZZ_3$. Given $n, m, \ell \in \poly(\secpar)$, the function $f_A : \bits^n \to \ZZ_3^\ell$ is defined by

$$
f_A(x) = B \cdot (A \cdot x \bmod 2) \bmod 3,
$$

where $A \getsr \ZZ_2^{m \times n}$ is the secret key and $B \getsr \ZZ_3^{\ell \times m}$ is public. The weak PRF version assumes hardness for uniformly random inputs; the strong PRF version assumes hardness for adversarially chosen inputs.

### Weak alternating moduli (random-input) assumption

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{weak-am}}_{\calA}(\secpar)$}
\begin{algorithmic}
\State $A \getsr \ZZ_2^{m \times n}$; $B \getsr \ZZ_3^{\ell \times m}$
\State $b \getsr \{0,1\}$
\State $\calO_0() := (x \getsr \bits^n;\; (x,\; B \cdot (A \cdot x \bmod 2) \bmod 3))$
\State $\calO_1() := (x \getsr \bits^n;\; y \getsr \ZZ_3^\ell;\; (x, y))$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
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

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{am}}_{\calA}(\secpar)$}
\begin{algorithmic}
\State $A \getsr \ZZ_2^{m \times n}$; $B \getsr \ZZ_3^{\ell \times m}$
\State $b \getsr \{0,1\}$
\State $R \getsr \Funcs(\bits^n, \ZZ_3^\ell)$
\Comment{Can be sampled lazily}
\State $\calO_0(x) := B \cdot (A \cdot x \bmod 2) \bmod 3$
\State $\calO_1(x) := R(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**AM is hard** if for all efficient $\calA$,

$$
\Adv^{\mathrm{am}}_{\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{am}}_{\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. AM hardness implies Weak-AM hardness (the strong assumption implies the weak one).

## Known Results

- Low-complexity PRF candidates (in $\mathrm{NC}^1$ / $\mathrm{TC}^0$) based on mixed-moduli assumptions — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]
- Mixed-moduli PRFs → applications in MPC with low-communication preprocessing, leakage-resilient PRFs, and more — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]
- Low-complexity PRG in $\mathrm{NC}^1$ is required by the iO construction from well-founded assumptions — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]
- The assumption is not known to follow from or imply standard lattice assumptions

# Variations

## Low-complexity PRFs (in $\mathrm{NC}^1$ / $\mathrm{TC}^0$)

Separate from the alternating moduli assumption, there is interest in PRFs computable by low-complexity circuits. A PRF in $\mathrm{TC}^0$ (constant depth, threshold gates) would have strong implications for MPC efficiency.

## Pseudorandom correlation generators (PCG)

A related paradigm where short seeds expand to long correlated randomness useful in MPC; alternating-moduli-style assumptions can ground efficient PCG constructions.

# Attacks

- Ongoing cryptanalytic attention; several early candidates have been partially broken or weakened
- Algebraic attacks exploiting the mixed-moduli structure (Gröbner basis methods, linearization) remain the primary avenue


[^1]: The name "Crypto Dark Matter" reflects the idea that large regions of the cryptographic assumption landscape remain unexplored.