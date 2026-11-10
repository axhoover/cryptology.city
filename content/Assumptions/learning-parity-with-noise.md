---
type: assumption
status: draft
aliases:
  - LPN
  - Learning parity with noise
title: Learning parity with noise
id: lpn
variants:
  sparse-lpn: "#sparse-learning-parity-with-noise"
  lpn-low-noise: "#low-noise-lpn"
  quasi-polynomial-low-noise-lpn: "#quasi-polynomially-hard-low-noise-lpn"
  subexponential-lpn: "#subexponential-lpn"
  subexponential-lpn-fp: "#sub-exponential-lpn-over-large-fields"
  lpn-mid-noise: "#mid-noise-lpn"
  ring-lpn: "#ring-lpn"
  sparse-ring-lpn: "#sparse-ring-lpn"
  lpn-constant-noise: "#constant-noise-lpn"
  lpn-high-noise: "#high-noise-lpn"
---

# Learning parity with noise

The _learning parity with noise (LPN)_ assumption states that noisy random linear equations over $\FF_2$, $(\mathbf{A}, \mathbf{A}\mathbf{s}+\mathbf{e})$ with Bernoulli noise $\mathbf{e}$, are indistinguishable from uniform. It can be viewed as [[learning-with-errors|LWE]] specialized to the binary field.

## Assumption

For a dimension $k = k(\secpar)$ polynomially related to $\secpar$, noise rate $0 < \varepsilon < 1/2$, and sample count $m \in \poly(\secpar)$, the LPN game asks an adversary to distinguish a noisy linear system $(\mathbf{A}, \mathbf{As}+\mathbf{e})$ from a uniformly random pair.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{lpn}}_{k,\varepsilon,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \FF_2^{m \times k}$
\State $\mathbf{s} \getsr \FF_2^k$; $\mathbf{e} \getsr \mathrm{Ber}(\varepsilon)^m$
\State $b \getsr \bits$
\State $\mathbf{v}_0 := \mathbf{A} \cdot \mathbf{s} + \mathbf{e}$
\State $\mathbf{v}_1 \getsr \FF_2^m$
\State $b' \gets \calA(1^\secpar, \mathbf{A}, \mathbf{v}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**$(k,\varepsilon)$-LPN is hard** if for all efficient $\calA$ and all polynomials $m = m(\secpar)$,

$$
\Adv^{\mathrm{lpn}}_{k,\varepsilon,m,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{lpn}}_{k,\varepsilon,m,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

LPN is naturally stated over $\FF_2$. However, it generalizes to any finite field $\FF_q$: replace $\FF_2$ with $\FF_q$ throughout, and let each noise coordinate $e_i$ be zero with probability $1-\varepsilon$ and uniformly random in $\FF_q \setminus \{0\}$ with probability $\varepsilon$.

### Noise Level

Depending on $\varepsilon$ relative to $k$, $(k,\varepsilon)$-LPN has several regimes, which imply different results. The regimes below are ordered from weakest to strongest assumption: hardness at lower noise implies hardness at higher noise — folklore.

- [[noise-level-to-noise-level|Low-noise LPN ⇒ Mid-noise LPN]]
- [[lpn-mid-noise-to-lpn-high-noise|Mid-noise LPN ⇒ High-noise LPN]]
- [[lpn-high-noise-to-lpn-constant-noise|High-noise LPN ⇒ Constant-noise LPN]]

#### Constant-noise LPN

The noise rate is a constant $\varepsilon \in (0, 1/2)$.

#### High-noise LPN

The noise rate is $\varepsilon = k^{-\gamma}$ for a constant $0 < \gamma < 1/2$.

#### Mid-noise LPN

The noise rate is $\varepsilon = k^{-\gamma}$ for a constant $1/2 \le \gamma < 1$.

#### Low-noise LPN

The noise rate is $\varepsilon = \log^c(k)/k$ for a constant $c > 1$.

At $\varepsilon = O(\log(k)/k)$, [[#Attacks|Gaussian elimination]] recovers $\mathbf{s}$ in polynomial time — standard.

##### Quasi-polynomially hard low-noise LPN

For a constant $\beta \in (0,1)$, $(k,\varepsilon)$-LPN with noise rate $\varepsilon = O(\log^{1+\beta}(k)/k)$ is hard for adversaries of quasi-polynomial size — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]. The size bound cannot be every quasi-polynomial, since [[#Attacks|Gaussian elimination]] recovers $\mathbf{s}$ in time $\poly(k) \cdot (1-\varepsilon)^{-k} = 2^{O(\log^{1+\beta} k)}$ at this noise rate — standard. [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]] state the assumption for every constant $\beta > 0$; the bound $\beta < 1$ is what makes the compression factor $2^{\Theta(\log^{1-\beta} \secpar)}$ of their [[trapdoor-hash-function#slightly-sublinear-trapdoor-hash-functions|trapdoor hash function]] grow with $\secpar$. It implies low-noise LPN at noise rate $\log^c(k)/k$ for every constant $c > 1+\beta$ ([[quasi-polynomial-low-noise-lpn-to-lpn-low-noise|Quasi-polynomially hard low-noise LPN ⇒ Low-noise LPN]]) — folklore.

TODO: the exact adversary size and advantage bounds, and their dependence on $\beta$, from the main theorem of [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].

### Subexponential LPN

$(k,\varepsilon)$-LPN is **$T$-hard** if every adversary running in time $T$ has advantage at most $1/T$. _Subexponential LPN_ assumes $T$-hardness for $T = 2^{k^{\alpha}}$ for a constant $\alpha \in (0,1)$. Each result fixes its own exponent: [[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]] assumes constant-noise LPN that is $2^{\omega(k^{1/2})}$-hard, [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]] constant-noise LPN that is $2^{k^{1/2+\Omega(1)}}$-hard, and [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] LPN that is $2^{O(\sqrt{k})}$-hard.

The standard assumption bounds only polynomial-time adversaries.

#### Sub-exponential LPN over large fields

For a prime $p$, LPN over $\FF_p$, in the field generalization above, with secret dimension $\ell$, polynomially many samples and noise rate $\ell^{-\delta}$ for a constant $\delta \in (0, 1)$ is **sub-exponentially hard** if there is a constant $\alpha > 0$ such that for all sufficiently large $\ell$ every adversary of size at most $2^{\ell^{\alpha}}$ has advantage at most $2^{-\ell^{\alpha}}$ — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Known Results

- [[noise-level-to-pke-ale03|Mid-noise LPN ⇒ PKE]]
- [[noise-level-to-hash-function-blvw19|Low-noise LPN ⇒ CRHF]]
- [[noise-level-to-tdh-amr25|Quasi-polynomially hard low-noise LPN ⇒ Slightly sublinear TDH]]
- [[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]]
- [[subexponential-lpn-to-pke-yz16|Subexponential LPN ⇒ IND-CCA PKE]]
- [[lpn-mid-noise-to-pke-cca2-security-kmp14|Mid-noise LPN ⇒ IND-CCA PKE]]
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]]
- [[subexponential-lpn-to-ot-yz16|Subexponential LPN ⇒ OT]]
- [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]]
- [[subexponential-lpn-to-prc-cg24|Subexponential LPN ⇒ PRC]]
- [[lwe-to-zero-bit-prc-cg24|Subexponential LPN ⇒ Zero-bit PRC]]

# Variations

## Sparse Learning Parity with Noise

Sparse LPN replaces the uniformly random matrix $\mathbf{A}$ with one whose rows are $d$-sparse: each row is sampled uniformly from all binary vectors of Hamming weight exactly $d$. The secret and noise distributions are unchanged.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{slpn}}_{k,\varepsilon,m,d,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \FF_2^{m \times k}$ with each row sampled uniformly from weight-$d$ vectors
\State $\mathbf{s} \getsr \FF_2^k$; $\mathbf{e} \getsr \mathrm{Ber}(\varepsilon)^m$
\State $b \getsr \bits$
\State $\mathbf{v}_0 := \mathbf{A} \cdot \mathbf{s} + \mathbf{e}$
\State $\mathbf{v}_1 \getsr \FF_2^m$
\State $b' \gets \calA(1^\secpar, \mathbf{A}, \mathbf{v}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**$(k,\varepsilon,d)$-Sparse LPN is hard** if for all efficient $\calA$ and all polynomials $m = m(\secpar)$,

$$
\Adv^{\mathrm{slpn}}_{k,\varepsilon,m,d,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{slpn}}_{k,\varepsilon,m,d,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

Sparse LPN yields, in the random-oracle model, pseudorandom correlation functions and hence [[pseudorandom-correlation-generator|pseudorandom correlation generators]] for VOLE and OT correlations — [[BCM+25 - Fast Pseudorandom Correlation Functions from Sparse LPN|BCM+25]].

### Known results

- [[sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg|Sparse LPN ⇒ PCG]]
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]]
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- The $\FF_p$ generalization over expanding matrices, [[noisy-k-lin-over-expanders|noisy k-LIN over expanders]], together with [[planted-clique|planted clique]] gives PKE ([[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]) — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]

## Ring-LPN

Ring-LPN replaces the matrix $\mathbf{A} \in \FF_2^{m \times k}$ with multiplication by a random element of $R = \FF_2[x]/(f(x))$ for a fixed polynomial $f$ of degree $k$. For a secret $s \getsr R$, it asks to distinguish samples $(a, a \cdot s + e)$, with fresh $a \getsr R$ and noise $e \in R$ whose coefficients are drawn independently from $\mathrm{Ber}(\varepsilon)$, from uniform samples over $R^2$ — [[HKLPP12 - Lapin An Efficient Authentication Protocol Based on Ring-LPN|HKLPP12]]. Each ring sample $(a, a \cdot s + e)$ gives $k$ noisy parities of $s$, whose $k \times k$ coefficient matrix (multiplication by $a$ in $R$) is described by the $k$ bits of $a$ rather than the $k^2$ bits of a uniform block of $\mathbf{A}$, and $a \cdot s$ is one polynomial multiplication — standard.

Ring-LPN over $\FF_2[x]/(f(x))$ yields Lapin, a two-round symmetric-key authentication protocol secure against active attacks — [[HKLPP12 - Lapin An Efficient Authentication Protocol Based on Ring-LPN|HKLPP12]].

### Sparse Ring-LPN

For a prime $p$, a polynomial $F \in \ZZ_p[X]$, $R_p = \ZZ_p[X]/(F(X))$, and a weight $t$, Sparse Ring-LPN asks to distinguish $(a, a e + f)$ from $(a, u)$ for uniform $a, u \in R_p$ and $t$-sparse $e, f \in R_p$ — [[BCG+20 - Efficient Pseudorandom Correlation Generators from Ring-LPN|BCG+20]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{srlpn}}_{p,F,t,\calA}(\secpar)$}
\begin{algorithmic}
\State $a \getsr R_p$; $b \getsr \bits$
\State $e, f \gets$ $t$-sparse elements of $R_p$
\State $v_0 := a e + f$
\State $v_1 \getsr R_p$
\State $b' \gets \calA(1^\secpar, a, v_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**$(p,F,t)$-Sparse Ring-LPN is hard** if for all efficient $\calA$,

$$
\Adv^{\mathrm{srlpn}}_{p,F,t,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{srlpn}}_{p,F,t,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

Sparse Ring-LPN yields pseudorandom correlation generators for OLE and authenticated multiplication triples over large fields — [[BCG+20 - Efficient Pseudorandom Correlation Generators from Ring-LPN|BCG+20]].

- [[ring-lpn-to-pseudorandom-correlation-generators-pcg|Sparse Ring-LPN ⇒ PCG]]

# Attacks

- **Gaussian elimination.** Solving $\mathbf{A}'\mathbf{s}' = \mathbf{v}'$ on $k$ fresh samples with invertible $\mathbf{A}'$ returns $\mathbf{s}$ whenever their $k$ noise bits are all $0$, which happens with probability $(1-\varepsilon)^k$; repeating and testing each candidate on further samples recovers $\mathbf{s}$ in time and samples $\poly(k) \cdot (1-\varepsilon)^{-k}$. This is polynomial for $\varepsilon = O(\log(k)/k)$, quasi-polynomial in the [[#Low-noise LPN|low-noise regime]], and $e^{O(\sqrt{k})}$ at $\varepsilon = 1/\sqrt{k}$ — standard.
- **BKW.** For every constant noise rate $\varepsilon < 1/2$, the Blum–Kalai–Wasserman algorithm recovers $\mathbf{s}$ in time $2^{O(k/\log k)}$ from $2^{O(k/\log k)}$ samples — [[BKW03 - Noise-Tolerant Learning, the Parity Problem, and the Statistical Query Model|BKW03]]. It adds pairs of samples that agree on a block of coordinates, zeroing the block at the cost of squaring the noise bias, until only the last block is nonzero; the samples that are then a unit vector reveal the corresponding bit of $\mathbf{s}$ by majority vote — [[BKW03 - Noise-Tolerant Learning, the Parity Problem, and the Statistical Query Model|BKW03]].
- **Fewer samples.** At constant noise rate, with $k^{1+\delta}$ samples for a constant $\delta > 0$, time $2^{O(k/\log\log k)}$ suffices — [[Lyu05 - The Parity Problem in the Presence of Noise, Decoding Random Linear Codes, and the Subset Sum Problem|Lyu05]].
- **Walsh–Hadamard final step.** Keeping every sample in BKW's last stage and recovering the last block of $\mathbf{s}$ with a fast Walsh–Hadamard transform reduces the number of samples needed; applied to the parameters of the HB+ authentication protocol, this gives an attack with work factor $2^{52}$ — [[LF06 - An Improved LPN Algorithm|LF06]].
- **Decoding.** $m$ samples are a decoding instance for a random binary $[m, k]$ code under Bernoulli noise, so the information-set-decoding attacks on [[syndrome-decoding|syndrome decoding]] apply — standard.

<!-- BEGIN GENERATED participates-in 1372302ec5e8 -->

## Participates in

**Builds on Learning parity with noise**

- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO]] (via [[learning-parity-with-noise#sub-exponential-lpn-over-large-fields|Sub-exponential LPN over large fields]])
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]] (via [[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]])
- [[lpn-constant-noise-to-prg-bfkl93|Constant-noise LPN ⇒ PRG]] (via [[learning-parity-with-noise#constant-noise-lpn|Constant-noise LPN]])
- [[lpn-high-noise-to-lpn-constant-noise|High-noise LPN ⇒ Constant-noise LPN]] (via [[learning-parity-with-noise#high-noise-lpn|High-noise LPN]])
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]] (via [[learning-parity-with-noise#low-noise-lpn|Low-noise LPN]])
- [[lpn-mid-noise-to-lpn-high-noise|Mid-noise LPN ⇒ High-noise LPN]] (via [[learning-parity-with-noise#mid-noise-lpn|Mid-noise LPN]])
- [[lpn-mid-noise-to-pke-cca2-security-kmp14|Mid-noise LPN ⇒ IND-CCA PKE]] (via [[learning-parity-with-noise#mid-noise-lpn|Mid-noise LPN]])
- [[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]] (via [[learning-parity-with-noise#high-noise-lpn|High-noise LPN]])
- [[lwe-to-zero-bit-prc-cg24|Subexponential LPN ⇒ Zero-bit PRC]] (via [[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]])
- [[noise-level-to-hash-function-blvw19|Low-noise LPN ⇒ CRHF]] (via [[learning-parity-with-noise#low-noise-lpn|Low-noise LPN]])
- [[noise-level-to-noise-level|Low-noise LPN ⇒ Mid-noise LPN]] (via [[learning-parity-with-noise#low-noise-lpn|Low-noise LPN]])
- [[noise-level-to-pke-ale03|Mid-noise LPN ⇒ PKE]] (via [[learning-parity-with-noise#mid-noise-lpn|Mid-noise LPN]])
- [[noise-level-to-tdh-amr25|Quasi-polynomially hard low-noise LPN ⇒ Slightly sublinear TDH]] (via [[learning-parity-with-noise#quasi-polynomially-hard-low-noise-lpn|Quasi-polynomially hard low-noise LPN]])
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] (via [[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]])
- [[quasi-polynomial-low-noise-lpn-to-lpn-low-noise|Quasi-polynomially hard low-noise LPN ⇒ Low-noise LPN]] (via [[learning-parity-with-noise#quasi-polynomially-hard-low-noise-lpn|Quasi-polynomially hard low-noise LPN]])
- [[ring-lpn-to-pseudorandom-correlation-generators-pcg|Sparse Ring-LPN ⇒ PCG]] (via [[learning-parity-with-noise#sparse-ring-lpn|Sparse Ring-LPN]])
- [[sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg|Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)]] (via [[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]])
- [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]] (via [[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]])
- [[subexponential-lpn-to-ot-yz16|Subexponential LPN ⇒ OT]] (via [[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]])
- [[subexponential-lpn-to-pke-yz16|Subexponential LPN ⇒ IND-CCA PKE]] (via [[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]])
- [[subexponential-lpn-to-prc-cg24|Subexponential LPN ⇒ PRC]] (via [[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]])

**Produces Learning parity with noise**

- [[lpn-high-noise-to-lpn-constant-noise|High-noise LPN ⇒ Constant-noise LPN]] (via [[learning-parity-with-noise#constant-noise-lpn|Constant-noise LPN]])
- [[lpn-mid-noise-to-lpn-high-noise|Mid-noise LPN ⇒ High-noise LPN]] (via [[learning-parity-with-noise#high-noise-lpn|High-noise LPN]])
- [[lsn-to-lpn-cimr25|LSN ⇒ LPN]]
- [[noise-level-to-noise-level|Low-noise LPN ⇒ Mid-noise LPN]] (via [[learning-parity-with-noise#mid-noise-lpn|Mid-noise LPN]])
- [[quasi-polynomial-low-noise-lpn-to-lpn-low-noise|Quasi-polynomially hard low-noise LPN ⇒ Low-noise LPN]] (via [[learning-parity-with-noise#low-noise-lpn|Low-noise LPN]])

<!-- END GENERATED participates-in -->
