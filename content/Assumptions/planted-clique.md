---
aliases:
  - PC
  - planted clique
  - Planted clique
  - planted clique conjecture
title: Planted clique assumption
---

# Planted clique assumption

The _planted clique assumption_ conjectures that no efficient adversary can distinguish an Erdős–Rényi random graph $G(n,1/2)$ from one in which a uniformly random $k$-clique has been planted. For $k = \Omega(\sqrt{n \log n})$, efficient spectral algorithms solve the detection problem; the conjecture concerns sub-square-root clique sizes $k = n^\delta$ for $\delta \in (0, 1/2)$. The variant used in [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]] strengthens this to sub-exponential adversaries.

## Assumption

Let $G(n,1/2)$ denote the Erdős–Rényi distribution on $n$-vertex graphs where each edge appears independently with probability $1/2$. A planted $k$-clique instance is produced by sampling $G \sim G(n,1/2)$ and then forcing all edges within a uniformly random $k$-subset $S \subset [n]$ to be present.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pc}}_{n,k,\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $\mathbf{G} \getsr G(n, 1/2)$
\If{$b = 0$}
  \State $S \getsr \binom{[n]}{k}$
  \Comment{Uniform random $k$-subset of $[n]$}
  \State $\mathbf{G}_{ij} \gets 1$ for all $i \neq j \in S$
  \Comment{Plant a $k$-clique on $S$}
\EndIf
\State $b' \gets \calA(1^\secpar, \mathbf{G})$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**$(n,k)$-planted clique is hard** if for all efficient $\calA$,

$$
\Adv^{\mathrm{pc}}_{n,k,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{pc}}_{n,k,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

The **GHJS25 planted clique conjecture** ([[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Conjecture 4.1) fixes $k = n^\delta$ for any $\delta \in (0, 1/2)$ and asserts that no non-uniform circuit family of size $n^{\log^\alpha n}$ can achieve non-negligible $\Adv^{\mathrm{pc}}_{n,\, n^\delta,\calA}(\secpar)$, for some $\alpha \in (0,1)$. The bound $n^{\log^\alpha n}$ is sub-exponential: it exceeds every fixed polynomial in $n$ but is smaller than $2^{n^\epsilon}$ for every $\epsilon > 0$.

## Known Results

- For $k = \Omega(\sqrt{n \log n})$, the planted clique can be detected in polynomial time via spectral methods: the top eigenvector of the centered adjacency matrix $\mathbf{G} - \tfrac{1}{2}\mathbf{J}$ concentrates on the planted set — [[AKS98 - Finding a Large Hidden Clique in a Random Graph|AKS98]]
- Planted clique hardness against sub-exponential adversaries (jointly with the [[noisy-k-lin-over-expanders|noisy k-LIN]] conjecture over expanders) implies [[public-key-encryption|PKE]] secure against non-uniform polynomial-size circuits — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12
- An alternative PKE construction based on planted clique jointly with the search variant of [[noisy-k-lin-over-expanders|noisy k-LIN]] also holds — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8

# Variations

## Standard planted clique ($k = \Theta(\sqrt{n})$)

The most-studied regime takes $k = c\sqrt{n}$ for a constant $c$. At $c$ large enough, spectral and combinatorial algorithms succeed; for $c$ small, no efficient algorithm is known. This $\sqrt{n}$ threshold is widely believed to be the computational barrier and has been used as an average-case hardness assumption in complexity theory and statistics.

## Planted dense subgraph

Planted dense subgraph generalizes planted clique: a random $k$-vertex subgraph with edge density $q > 1/2$ is embedded in $G(n,1/2)$. The distinguishing threshold depends on the signal-to-noise ratio $(q-1/2)^2/(q(1-q))$; planted clique is the special case $q = 1$.

# Attacks

- **Spectral**: For $k = \Omega(\sqrt{n \log n})$, the top eigenvector of $\mathbf{G} - \tfrac{1}{2}\mathbf{J}$ (where $\mathbf{J}$ is the all-ones matrix) concentrates on $S$, enabling detection and recovery in $O(n^2)$ time — [[AKS98 - Finding a Large Hidden Clique in a Random Graph|AKS98]]
- **Degree threshold**: Vertices in the planted clique have expected degree $\tfrac{n-1}{2} + k - 1$ versus $\tfrac{n-1}{2}$ for unplanted vertices; thresholding on degree finds $S$ when $k = \Omega(\sqrt{n \log n})$
