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
  lpn-low-noise: "#noise-level"
  subexponential-lpn: "#subexponential-lpn"
  lpn-mid-noise: "#noise-level"
  ring-lpn: "#ring-lpn"
  lpn-constant-noise: "#noise-level"
  lpn-high-noise: "#noise-level"
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

Depending on the setting of $\varepsilon$ relative to $k$, the $(k,\varepsilon)$-LPN problem has different regimes which are generally known to imply different results.

- [[noise-level-to-noise-level|Noise Level ⇒ Noise Level]]

If noise drops to $O(\log(k) / k)$, then there are folklore attacks which run in
polynomial time and achieve constant advantage.

### Subexponential LPN

Some applications require assuming _subexponential LPN_, which means that they assume any algorithm which achieves non-negligible advantage in the LPN game requires running in time $2^{\omega(k^{\varepsilon})}$ for some $\varepsilon > 0$ (often $\varepsilon = 1/2$).

In other words, any algorithm which runs in $2^{O(k^{\varepsilon})}$ time has negligible advantage. Whereas, the normal LPN assumption only makes an assumption about polynomial time adversaries. Typically, this assumption is made only in the constant-noise regime, making it incomparable to more standard lower-noise normal LPN assumptions.

# Known results

- [[noise-level-to-pke-ale03|Noise Level ⇒ PKE]]
- [[noise-level-to-hash-function-blvw19|Noise Level ⇒ Hash function]]
- [[noise-level-to-tdh-amr25|Noise Level ⇒ TDH]]
- [[tdh-to-cpir-amr25|TDH ⇒ cPIR]]
- [[noise-level-to-depir-cimr25|Noise Level ⇒ DEPIR]]
- [[noise-level-to-depir-cimr25-2|Noise Level ⇒ DEPIR]]
- [[subexponential-lpn-to-pke-yz16|Subexponential LPN ⇒ PKE]]
- [[subexponential-lpn-to-ot-yz16|Subexponential LPN ⇒ OT]]
- [[subexponential-lpn-to-prc-cg24|Subexponential LPN ⇒ PRC]]

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

is negligible. Note that Sparse LPN with $d = k$ reduces to standard LPN, so sparse hardness is a stronger assumption for smaller $d$.

### Known results

- [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Partially homomorphic encryption (PHE) + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- [[dcr-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DCR + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- [[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]

## Ring-LPN

Ring-LPN replaces the matrix $\mathbf{A} \in \FF_2^{m \times k}$ with multiplication by a random polynomial $a \in \FF_2[x]/(f(x))$ for a fixed polynomial $f$ of degree $k$. The secret is $s \in \FF_2[x]/(f(x))$ and the LPN sample is $(a, a \cdot s + e)$ for small noise $e$. The ring structure reduces the public key from $O(mk)$ bits to $O(k)$ bits and enables faster computation via polynomial multiplication.

Ring-LPN underlies practical authentication protocols (e.g., Lapin) and efficient pseudorandom correlation generator constructions.

<!-- BEGIN GENERATED participates-in ca3941503e99 -->

## Participates in

**Builds on Learning parity with noise**

- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|DDH + LPN + LWE + NC1-PRG ⇒ iO]]
- [[lpn-and-lwe-and-nc1-prg-to-io-jls21|LPN + LWE + NC1-PRG ⇒ iO]]
- [[lpn-to-pke|LPN ⇒ PKE]]
- [[lpn-to-secret-key-pir-sk-pir-cimr25|LPN ⇒ Secret-Key PIR (SK-PIR)]]

**Produces Learning parity with noise**

- [[lsn-to-lpn-cimr25|LSN ⇒ LPN]]
- [[sparse-learning-parity-with-noise-to-lpn|Sparse Learning Parity with Noise ⇒ LPN]]

<!-- END GENERATED participates-in -->
