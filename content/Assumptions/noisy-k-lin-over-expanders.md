---
aliases:
  - Noisy k-LIN
  - noisy k-LIN
  - noisy k-LIN over expanders
  - Noisy k-LIN over expanders
title: Noisy k-LIN over expanders
---

# Noisy k-LIN over expanders

The _noisy $k$-LIN over expanders_ conjecture conjectures that no efficient adversary can distinguish $(\mathbf{M}, \mathbf{Ms}+\mathbf{e})$ from a uniformly random pair when $\mathbf{M}$ is a sparse expanding matrix over $\FF_p$ — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Conjecture 4.3. It is an $\FF_p$ generalization of the [[learning-parity-with-noise#Sparse Learning Parity with Noise|Sparse LPN]] assumption; over $\FF_2$, the two coincide. The name "$k$-LIN" also appears in [[bilinear-map-assumptions|bilinear map cryptography]] for the Decision $k$-Linear assumption — a group-theoretic hardness assumption in pairing groups unrelated to the sparse noise structure here.

## Assumption

A matrix $\mathbf{M} \in \FF_p^{m \times n}$ is _$(\gamma, d, N)$-expanding_ if each column has exactly $d$ nonzero entries drawn from $\FF_p^*$, and for every set $S \subseteq [n]$ with $|S| \le N$, the neighborhood $\{i : M_{ij} \ne 0 \text{ for some } j \in S\}$ has size at least $\gamma d |S|$. The GHJS25 conjecture instantiates this with $d = \Omega(\log n)$ and $N = 2^{(\log n)^\alpha}$ for some $\alpha \in (0,1)$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{nklin}}_{\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{M} \getsr \FF_p^{m \times n}$ with each column $(\gamma, d, N)$-expanding
\State $\mathbf{s} \getsr \FF_p^n$ ; $\mathbf{e} \getsr \mathrm{Ber}_p(\varepsilon)^m$
\Comment{Each $e_i = 0$ w.p. $1-\varepsilon$, uniform in $\FF_p^*$ w.p. $\varepsilon$}
\State $b \getsr \bits$
\State $\mathbf{v}_0 \gets \mathbf{M}\mathbf{s} + \mathbf{e}$ ; $\mathbf{v}_1 \getsr \FF_p^m$
\State $b' \gets \calA(1^\secpar, \mathbf{M}, \mathbf{v}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**Noisy $k$-LIN over $(\gamma, d, N)$-expanders is hard** if for all non-uniform polynomial-size $\calA$,

$$
\Adv^{\mathrm{nklin}}_{\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{nklin}}_{\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Known Results

- Noisy $k$-LIN over expanders is an $\FF_p$ generalization of [[learning-parity-with-noise#Sparse Learning Parity with Noise|Sparse LPN]]; the two names refer to the same family of assumptions specialized to $\FF_2$ vs. $\FF_p$ — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], footnote 2
- Jointly with the [[planted-clique|planted clique conjecture]] against sub-exponential adversaries, noisy $k$-LIN over $(\gamma, \Omega(\log n), 2^{(\log n)^\alpha})$-expanders implies [[public-key-encryption|PKE]] secure against non-uniform polynomial-size circuits — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12
- A search variant of noisy $k$-LIN also suffices for the PKE construction under the joint assumption — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8

# Variations

## Noisy $k$-LIN over $\FF_2$ (Sparse LPN)

Setting $p = 2$ recovers [[learning-parity-with-noise#Sparse Learning Parity with Noise|Sparse LPN]]: the noise over $\FF_2^* = \{1\}$ is simply a Bernoulli bit flip. Earlier works on pseudorandom correlation generators (PCGs) used "Sparse LPN" for this $\FF_2$ case; GHJS25 adopts "noisy $k$-LIN" to emphasize the $\FF_p$ generalization and the column-$k$-sparse structure of $\mathbf{M}$.

## Search noisy $k$-LIN

The search variant asks to recover $\mathbf{s}$ from $(\mathbf{M}, \mathbf{Ms}+\mathbf{e})$. The search-to-decision reduction for standard LPN does not immediately transfer to the expanding-matrix setting. GHJS25 Theorem 8.8 uses a search variant as an alternative assumption sufficient for PKE under the joint conjecture with planted clique.

# Attacks

No efficient algorithms are known for the conjecture parameters. Over $\FF_2$ (reducing to Sparse LPN), the best known attacks are variants of information-set decoding and BKW-style algorithms, whose complexity grows polynomially in $n$ only outside the conjecture's parameter regime.
