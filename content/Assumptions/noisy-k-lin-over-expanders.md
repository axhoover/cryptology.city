---
type: assumption
status: draft
aliases:
  - Noisy k-LIN
  - noisy k-LIN
  - noisy k-LIN over expanders
  - Noisy k-LIN over expanders
title: Noisy k-LIN over expanders
id: noisy-k-lin
variants:
  search-noisy-k-lin: "#search-noisy-k-lin"
---

# Noisy k-LIN over expanders

The _noisy $k$-LIN over expanders_ conjecture posits that, for every expanding sparse support, no polynomial-size adversary distinguishes $(\mathbf{M}, \mathbf{Ms}+\mathbf{e})$ from $(\mathbf{M}, \mathbf{v})$ for a uniformly random $\mathbf{v}$ with advantage above $1/4$, where $\mathbf{M}$ over $\FF_p$ has that support and uniformly random nonzero entries and $\mathbf{e}$ is noise of rate $(\log n)^{-\varsigma}$ — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Conjecture 4.3. In cryptographic contexts the conjecture is sometimes called [[learning-parity-with-noise#Sparse Learning Parity with Noise|Sparse LPN]] — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], footnote 2. The name "$k$-LIN" also appears in [[bilinear-map-assumptions|bilinear map cryptography]] for the Decision $k$-Linear assumption — a group-theoretic hardness assumption in pairing groups unrelated to the sparse noise structure here.

## Assumption

The security parameter is the number of variables, $\secpar := n$. A support $\mathbf{S} \in \{0,1\}^{m \times n}$ is _$(\gamma, k, t)$-expanding_ if every row of $\mathbf{S}$ has Hamming weight $k$ and, for every set $T \subseteq [m]$ of at most $t$ rows, the bitwise OR of the rows indexed by $T$ has Hamming weight at least $\gamma k |T|$ — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Definition 3.2. The conjecture takes $t = 2^{(\log n)^\alpha}$, quantified below. For a prime $p$ and a constant $\varsigma > 0$, the noise rate is $\eta = (\log n)^{-\varsigma}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{nklin}}_{p,\varsigma,\mathbf{S},\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{M} \gets \mathbf{S}$ with each $1$ replaced by an independent uniform element of $\FF_p^*$
\State $\mathbf{s} \getsr \FF_p^n$
\State for each $i \in [m]$ independently: $e_i \getsr \FF_p^*$ with probability $\eta = (\log n)^{-\varsigma}$, else $e_i := 0$
\State $b \getsr \bits$
\State $\mathbf{v}_0 \gets \mathbf{M}\mathbf{s} + \mathbf{e}$ ; $\mathbf{v}_1 \getsr \FF_p^m$
\State $b' \gets \calA(1^\secpar, \mathbf{M}, \mathbf{v}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

Let

$$
\Adv^{\mathrm{nklin}}_{p,\varsigma,\mathbf{S},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{nklin}}_{p,\varsigma,\mathbf{S},\calA}(\secpar) = 1\right] - 1\right|,
$$

which equals the gap between $\calA$'s acceptance probabilities on $\mathbf{v}_0$ and on $\mathbf{v}_1$. **Noisy $k$-LIN over expanders is hard** if there is a constant $\gamma \in (1/2, 1)$ such that, for all constants $\alpha \in (0,1)$, $\varsigma > 0$ and $c > 0$ and every non-uniform polynomial-size $\calA$, for all sufficiently large $n$, every prime $p \ge n^c$, every $k \ge c \log n$, every $m$ and every $(\gamma, k, 2^{(\log n)^\alpha})$-expanding $\mathbf{S} \in \{0,1\}^{m \times n}$,

$$
\Adv^{\mathrm{nklin}}_{p,\varsigma,\mathbf{S},\calA}(n) \le \frac{1}{4}
$$

— [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Conjecture 4.3, whose $p = n^{\Omega(1)}$ and $k = \Omega(\log n)$ are the bounds $p \ge n^c$ and $k \ge c \log n$. Only the nonzero entries of $\mathbf{M}$, the secret and the noise are random; the support is worst-case. GHJS25's Conjecture 1.3, in the introduction, states the same with advantage at most $1/16$ — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]].

## Known Results

- [[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]
- [PC + Search noisy $k$-LIN ⇒ PKE](pc-and-search-noisy-k-lin-to-pke-ghjs25)

# Variations

## Noisy $k$-LIN over $\FF_2$

For $p = 2$ the noise $e_i$ is a Bernoulli($\eta$) bit and the equations are $k$-XOR; some references consider only this case — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], footnote 2. Conjecture 4.3 requires $p = n^{\Omega(1)}$ and does not cover $p = 2$; [[learning-parity-with-noise#Sparse Learning Parity with Noise|Sparse LPN]] is the $\FF_2$ assumption with random sparse rows.

## Search noisy $k$-LIN

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{snklin}}_{p,\varsigma,\mathbf{S},\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{M} \gets \mathbf{S}$ with each $1$ replaced by an independent uniform element of $\FF_p^*$
\State $\mathbf{s} \getsr \FF_p^n$
\State for each $i \in [m]$ independently: $e_i \getsr \FF_p^*$ with probability $\eta = (\log n)^{-\varsigma}$, else $e_i := 0$
\State $\mathbf{s}' \gets \calA(1^\secpar, \mathbf{M}, \mathbf{M}\mathbf{s} + \mathbf{e})$
\Return $[\mathbf{s}' = \mathbf{s}]$
\end{algorithmic}
\end{algorithm}
```

Let

$$
\Adv^{\mathrm{snklin}}_{p,\varsigma,\mathbf{S},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{snklin}}_{p,\varsigma,\mathbf{S},\calA}(\secpar) = 1\right].
$$

**Search noisy $k$-LIN over expanders is hard** if there is a constant $\gamma \in (1/2, 1)$ such that, for all constants $\alpha \in (0,1)$, $\varsigma > 0$ and $c > 0$ and every non-uniform polynomial-size $\calA$, for all sufficiently large $n$, every prime $p \ge n^c$, every $k \ge c \log n$, every $m$ and every $(\gamma, k, 2^{(\log n)^\alpha})$-expanding $\mathbf{S} \in \{0,1\}^{m \times n}$,

$$
\Adv^{\mathrm{snklin}}_{p,\varsigma,\mathbf{S},\calA}(n) \le \frac{1}{4}
$$

— [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Conjecture 4.4.

A search-to-decision reduction is known for random expanding matrices, with a polynomial loss in the number of equations, and it is not known to extend to every expanding support — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], §4.2. For random $k$-sparse equations over $\FF_2$, a distinguisher for $(k-1)$LIN with $m$ samples yields a search algorithm for $k$LIN with roughly $O(nm)$ samples — [[BRT25 - Sample Efficient Search to Decision for kLIN|BRT25]]. Together with the planted clique conjecture, search noisy $k$-LIN gives PKE ([PC + Search noisy $k$-LIN ⇒ PKE](pc-and-search-noisy-k-lin-to-pke-ghjs25)) — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8.

# Attacks

Noisy $k$-LIN is broken given about $n^{k/2}$ equations, a regime with no nontrivial expansion; in the conjecture's regime of expansion and noise no attack is known, even with unbounded preprocessing on the support — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], §1. PAC-learning counterexamples apply when the support is computable in $\mathrm{AC}^0[\oplus]$ and the number of equations is superpolynomial in $n$; for $p > 2$ with uniformly random nonzero entries none is known, even with superpolynomially many equations — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Remark 1.5. GHJS25 import unconditional lower bounds supporting the conjecture against local tests, linear tests, low-degree polynomials, sum-of-squares algorithms and $\mathrm{AC}^0$ circuits — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], §7.

<!-- BEGIN GENERATED participates-in f4ad1dcfc082 -->

## Participates in

**Builds on Noisy k-LIN over expanders**

- [[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]
- [PC + Search noisy $k$-LIN ⇒ PKE](pc-and-search-noisy-k-lin-to-pke-ghjs25) (via [Search noisy $k$-LIN](noisy-k-lin-over-expanders#search-noisy-k-lin))

<!-- END GENERATED participates-in -->
