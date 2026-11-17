---
type: assumption
status: draft
aliases:
  - PC
  - planted clique
  - Planted clique
  - planted clique conjecture
title: Planted clique assumption
id: pc
variants:
  ghjs25-planted-clique: "#ghjs25-planted-clique-conjecture"
---

# Planted clique assumption

The _planted clique assumption_ conjectures that no efficient adversary can distinguish an Erdős–Rényi random graph $\calG(n,1/2)$ from one in which a uniformly random $k$-clique has been planted. For $k = \Omega(\sqrt{n})$, efficient spectral algorithms solve the detection problem ([[AKS98 - Finding a Large Hidden Clique in a Random Graph|AKS98]]); the conjecture concerns sub-square-root clique sizes $k = n^\delta$ for $\delta \in (0, 1/2)$. The [[#GHJS25 planted clique conjecture|variant]] used in [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]] allows adversaries of size $n^{O((\log n)^\alpha)}$ and bounds their advantage by $1/3$.

## Assumption

Let $\calG(n,1/2)$ denote the Erdős–Rényi distribution on $n$-vertex graphs where each edge appears independently with probability $1/2$. A planted $k$-clique instance is produced by sampling $G \sim \calG(n,1/2)$ and then forcing all edges within a uniformly random $k$-subset $S \subset [n]$ to be present. The number of vertices $n = n(\secpar)$ is polynomially related to $\secpar$, and $k = k(\secpar)$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pc}}_{n,k,\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $\mathbf{G} \getsr \calG(n, 1/2)$
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

As an object, planted clique denotes the assumption that for some constant $\delta \in (0, 1/2)$, $(n, n^\delta)$-planted clique is hard for all efficient $\calA$. For large $n$, a clique of size $n^\delta$ exceeds $2\log_2 n$, which bounds the clique number of $\calG(n, 1/2)$ except with probability $o(1)$, so the two distributions are statistically far apart and the assumption is not information-theoretic — standard.

## Known Results

- For $k = \Omega(\sqrt{n})$, the planted clique can be detected in polynomial time via spectral methods: the top eigenvector of the centered adjacency matrix $\mathbf{G} - \tfrac{1}{2}\mathbf{J}$ concentrates on the planted set — [[AKS98 - Finding a Large Hidden Clique in a Random Graph|AKS98]]
- [[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]
- [PC + Search noisy $k$-LIN ⇒ PKE](pc-and-search-noisy-k-lin-to-pke-ghjs25)

# Variations

## GHJS25 planted clique conjecture

Let $\calG(n, 1/2, n^\delta)$ be the distribution that samples $G \sim \calG(n, 1/2)$ and plants a clique on $n^\delta$ uniformly random vertices. The **GHJS25 planted clique conjecture** states that there exist constants $\alpha \in (0, 1)$ and $\delta \in (0, 1/2)$ such that for all algorithms $\calA$ of size $n^{O((\log n)^\alpha)}$,

$$
\left|\Pr\!\left[\calA(G) = 1 : G \gets \calG(n, 1/2)\right] - \Pr\!\left[\calA(G) = 1 : G \gets \calG(n, 1/2, n^\delta)\right]\right| \le \frac{1}{3}
$$

— [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Conjecture 4.1. The conjecture is stated in the graph size $n$, not in a security parameter; the size bound $n^{O((\log n)^\alpha)} = 2^{O((\log n)^{1+\alpha})}$ exceeds every polynomial in $n$ and is below $2^{n^\epsilon}$ for every $\epsilon > 0$. It bounds the advantage by the constant $1/3$ rather than a negligible function, so it does not by definition strengthen the base assumption. GHJS25 take $n = 2^{(\log \secpar)^{1/(1+\alpha)}}$, so that adversaries of size $\poly(\secpar)$ have size $n^{O((\log n)^\alpha)}$, build a public-key bit encryption scheme with constant distinguishing advantage, and amplify it to a semantically secure one — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]].

## Standard planted clique ($k = \Theta(\sqrt{n})$)

The most-studied regime takes $k = c\sqrt{n}$ for a constant $c$. Polynomial-time algorithms find the clique for every constant $c > 0$ — [[AKS98 - Finding a Large Hidden Clique in a Random Graph|AKS98]]. This $\sqrt{n}$ threshold is widely believed to be the computational barrier and has been used as an average-case hardness assumption in complexity theory and statistics.

## Planted dense subgraph

Planted dense subgraph generalizes planted clique: a random $k$-vertex subgraph with edge density $q > 1/2$ is embedded in $G(n,1/2)$. The distinguishing threshold depends on the signal-to-noise ratio $(q-1/2)^2/(q(1-q))$; planted clique is the special case $q = 1$.

# Attacks

- **Spectral**: For $k = \Omega(\sqrt{n})$, the top eigenvector of $\mathbf{G} - \tfrac{1}{2}\mathbf{J}$ (where $\mathbf{J}$ is the all-ones matrix) concentrates on $S$, enabling detection and recovery in polynomial time — [[AKS98 - Finding a Large Hidden Clique in a Random Graph|AKS98]]
- **Degree threshold**: Vertices in the planted clique have expected degree $\tfrac{n-1}{2} + \tfrac{k-1}{2}$ versus $\tfrac{n-1}{2}$ for unplanted vertices; thresholding on degree finds $S$ when $k = \Omega(\sqrt{n \log n})$ — Kučera, _Expected complexity of graph partitioning problems_ (Discrete Applied Mathematics, 1995)

<!-- BEGIN GENERATED participates-in fbeffaa94c46 -->

## Participates in

**Builds on Planted clique assumption**

- [[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]] (via [[planted-clique#ghjs25-planted-clique-conjecture|GHJS25 planted clique conjecture]])
- [PC + Search noisy $k$-LIN ⇒ PKE](pc-and-search-noisy-k-lin-to-pke-ghjs25) (via [[planted-clique#ghjs25-planted-clique-conjecture|GHJS25 planted clique conjecture]])

<!-- END GENERATED participates-in -->
