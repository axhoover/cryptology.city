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
  subexponential-lpn: "#subexponential-lpn"
  lpn-mid-noise: "#mid-noise-lpn"
  ring-lpn: "#ring-lpn"
  sparse-ring-lpn: "#sparse-ring-lpn"
  lpn-constant-noise: "#constant-noise-lpn"
  lpn-high-noise: "#high-noise-lpn"
---

# Learning parity with noise

The _learning parity with noise (LPN)_ assumption is a post-quantum hardness assumption equivalent to the hardness of decoding a random linear code over $\FF_2$. It can be viewed as [[learning-with-errors|LWE]] specialized to the binary field.

## Assumption

For parameters $k \in \NN$, noise rate $0 < \varepsilon < 1$, and sample count $m \in \poly(\secpar)$, the LPN game asks an adversary to distinguish a noisy linear system $(\mathbf{A}, \mathbf{As}+\mathbf{e})$ from a uniformly random pair.

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

Depending on the setting of $\varepsilon$ relative to $k$, the $(k,\varepsilon)$-LPN problem has different regimes which are generally known to imply different results. The regimes below are ordered from weakest to strongest assumption: hardness at lower noise implies hardness at higher noise — folklore.

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

If noise drops to $O(\log(k) / k)$, then there are folklore attacks which run in
polynomial time and achieve constant advantage.

### Subexponential LPN

Some applications require assuming _subexponential LPN_, which means that they assume any algorithm which achieves non-negligible advantage in the LPN game requires running in time $2^{\omega(k^{\varepsilon})}$ for some $\varepsilon > 0$ (often $\varepsilon = 1/2$).

In other words, any algorithm which runs in $2^{O(k^{\varepsilon})}$ time has negligible advantage. Whereas, the normal LPN assumption only makes an assumption about polynomial time adversaries. Typically, this assumption is made only in the constant-noise regime, making it incomparable to more standard lower-noise normal LPN assumptions.

# Known results

- [[noise-level-to-pke-ale03|Mid-noise LPN ⇒ PKE]]
- [[noise-level-to-hash-function-blvw19|Low-noise LPN ⇒ CRHF]]
- [[noise-level-to-tdh-amr25|Low-noise LPN ⇒ TDH]]
- [[tdh-to-cpir-amr25|TDH ⇒ cPIR]]
- [[noise-level-to-depir-cimr25-2|High-noise LPN ⇒ SK-DEPIR]]
- [[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]]
- [[subexponential-lpn-to-pke-yz16|Subexponential LPN ⇒ PKE]]
- [[subexponential-lpn-to-ot-yz16|Subexponential LPN ⇒ OT]]
- [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]]
- [[subexponential-lpn-to-prc-cg24|Subexponential LPN ⇒ PRC]]
- [[lwe-to-zero-bit-prc-cg24|Subexponential LPN ⇒ Zero-bit PRC]]

## Attacks

TODO

# Variations

## Sparse Learning Parity with Noise

Sparse LPN replaces the uniformly random matrix $\mathbf{A}$ with one whose rows are $d$-sparse: each row is sampled uniformly from all binary vectors of Hamming weight exactly $d$. The secret and noise distributions are unchanged. For $d = O(\log k)$, the matrix can be stored and multiplied far more efficiently, making Sparse LPN particularly attractive for pseudorandom correlation generator (PCG) constructions.

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

### Known results

- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]]
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- [[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]

## Ring-LPN

Ring-LPN replaces the matrix $\mathbf{A} \in \FF_2^{m \times k}$ with multiplication by a random element of $R = \FF_2[x]/(f(x))$ for a fixed polynomial $f$ of degree $k$. For a secret $s \getsr R$, it asks to distinguish samples $(a, a \cdot s + e)$, with fresh $a \getsr R$ and noise $e \in R$ whose coefficients are drawn independently from $\mathrm{Ber}(\varepsilon)$, from uniform samples over $R^2$ — [[HKLPP12 - Lapin An Efficient Authentication Protocol Based on Ring-LPN|HKLPP12]]. The ring structure reduces the public key from $O(mk)$ bits to $O(k)$ bits and enables faster computation via polynomial multiplication.

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

<!-- BEGIN GENERATED participates-in 5700a9f3562a -->

## Participates in

**Builds on Learning parity with noise**

- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|SXDH + LWE + LPN + NC0-PRG ⇒ iO]]
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]] (via [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse-lpn]])
- [[lpn-high-noise-to-lpn-constant-noise|High-noise LPN ⇒ Constant-noise LPN]] (via [[learning-parity-with-noise#high-noise-lpn|lpn-high-noise]])
- [[lpn-mid-noise-to-lpn-high-noise|Mid-noise LPN ⇒ High-noise LPN]] (via [[learning-parity-with-noise#mid-noise-lpn|lpn-mid-noise]])
- [[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]] (via [[learning-parity-with-noise#high-noise-lpn|lpn-high-noise]])
- [[lwe-to-zero-bit-prc-cg24|Subexponential LPN ⇒ Zero-bit PRC]] (via [[learning-parity-with-noise#subexponential-lpn|subexponential-lpn]])
- [[noise-level-to-depir-cimr25-2|High-noise LPN ⇒ SK-DEPIR]] (via [[learning-parity-with-noise#high-noise-lpn|lpn-high-noise]])
- [[noise-level-to-hash-function-blvw19|Low-noise LPN ⇒ CRHF]] (via [[learning-parity-with-noise#low-noise-lpn|lpn-low-noise]])
- [[noise-level-to-noise-level|Low-noise LPN ⇒ Mid-noise LPN]] (via [[learning-parity-with-noise#low-noise-lpn|lpn-low-noise]])
- [[noise-level-to-pke-ale03|Mid-noise LPN ⇒ PKE]] (via [[learning-parity-with-noise#mid-noise-lpn|lpn-mid-noise]])
- [[noise-level-to-tdh-amr25|Low-noise LPN ⇒ TDH]] (via [[learning-parity-with-noise#low-noise-lpn|lpn-low-noise]])
- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] (via [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse-lpn]])
- [[ring-lpn-to-pseudorandom-correlation-generators-pcg|Sparse Ring-LPN ⇒ PCG]] (via [[learning-parity-with-noise#sparse-ring-lpn|sparse-ring-lpn]])
- [[sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg|Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)]] (via [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse-lpn]])
- [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]] (via [[learning-parity-with-noise#subexponential-lpn|subexponential-lpn]])
- [[subexponential-lpn-to-ot-yz16|Subexponential LPN ⇒ OT]] (via [[learning-parity-with-noise#subexponential-lpn|subexponential-lpn]])
- [[subexponential-lpn-to-pke-yz16|Subexponential LPN ⇒ IND-CCA PKE]] (via [[learning-parity-with-noise#subexponential-lpn|subexponential-lpn]])
- [[subexponential-lpn-to-prc-cg24|Subexponential LPN ⇒ PRC]] (via [[learning-parity-with-noise#subexponential-lpn|subexponential-lpn]])

**Produces Learning parity with noise**

- [[lpn-high-noise-to-lpn-constant-noise|High-noise LPN ⇒ Constant-noise LPN]] (via [[learning-parity-with-noise#constant-noise-lpn|lpn-constant-noise]])
- [[lpn-mid-noise-to-lpn-high-noise|Mid-noise LPN ⇒ High-noise LPN]] (via [[learning-parity-with-noise#high-noise-lpn|lpn-high-noise]])
- [[lsn-to-lpn-cimr25|LSN ⇒ LPN]]
- [[noise-level-to-noise-level|Low-noise LPN ⇒ Mid-noise LPN]] (via [[learning-parity-with-noise#mid-noise-lpn|lpn-mid-noise]])

<!-- END GENERATED participates-in -->
