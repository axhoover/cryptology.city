---
aliases:
  - LPN
  - Learning parity with noise
title: Learning parity with noise
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
\State $b \getsr \{0,1\}$
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

- **Constant-noise:** $0 < \varepsilon < 1/2$ (weakest assumption)
- **High-noise**: $\varepsilon = 1/k^\gamma$ for $0 < \gamma < 1/2$
- **Mid-noise**: $\varepsilon = 1/k^\gamma$ for every $\gamma < 1$
- **Low-noise**: $\varepsilon = \log^c(k) / k$ for some $c > 1$. (strongest assumption)

If noise drops to $O(\log(k) / k)$, then there are folklore attacks which run in
polynomial time and achieve constant advantage.

### Subexponential LPN

Some applications require assuming _subexponential LPN_, which means that they assume any algorithm which achieve non-negligible advantage in the LPN game requires running in time $2^{\omega(k^{\varepsilon})}$ for some $\varepsilon > 0$ (often $\varepsilon = 1/2$).

In other words, any algorithm which runs in $2^{O(k^{\varepsilon})}$ time has negligible advantage. Whereas, the normal LPN assumption only makes an assumption about polynomial time adversaries. Typically, this assumption is made only in the constant-noise regime, making it incomparable to more standard lower-noise normal LPN assumptions.

# Known results

- Mid-noise (and hence low-noise) LPN implies [[public-key-encryption|PKE]] — [[Ale03 - More on average case vs approximation complexity|Ale03]]
- Some works show that Low-noise LPN with $\varepsilon = \log^2 k / k$ implies [[hash-function|OWF]] — [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]], [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]]
- Low-noise LPN with $\varepsilon = \log^{1+\beta} k / k$, where $0 < \beta < 1$, is known to imply [[single-server-private-information-retrieval|PIR]] with slightly sublinear communication $N/2^{\Theta(\log^{1-\beta} N)}$ (through the use of [[trapdoor-hash-function|TDH]])— [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]
  - Fully sublinear PIR from any flavor of LPN is open.
- [[doubly-efficient-pir|SK-DEPIR]] can be built from mid and high-noise LPN — [[CIMR25 - Secret-Key PIR from Random Linear Codes]]
- [[public-key-encryption|CCA-PKE]] and [[oblivious-transfer|OT]] can be built from subexponential LPN— [[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]]
- [[pseudorandom-error-correcting-code|Public-key PRCs]] can be built from subexponential LPN — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]

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
\State $b \getsr \{0,1\}$
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
- Sparse LPN combined with any [[homomorphic-encryption|linearly homomorphic PKE]] (e.g., based on [[decisional-diffie-hellman|DDH]] or [[decisional-composite-residuosity|DCR]]) yields [[homomorphic-encryption|Somewhat Homomorphic Encryption]] — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]]

## Ring-LPN

Ring-LPN replaces the matrix $\mathbf{A} \in \FF_2^{m \times k}$ with multiplication by a random polynomial $a \in \FF_2[x]/(f(x))$ for a fixed polynomial $f$ of degree $k$. The secret is $s \in \FF_2[x]/(f(x))$ and the LPN sample is $(a, a \cdot s + e)$ for small noise $e$. The ring structure reduces the public key from $O(mk)$ bits to $O(k)$ bits and enables faster computation via polynomial multiplication.

Ring-LPN underlies practical authentication protocols (e.g., Lapin) and efficient pseudorandom correlation generator constructions.

