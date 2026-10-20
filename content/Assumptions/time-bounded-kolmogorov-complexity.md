---
type: assumption
status: draft
aliases:
  - Time-bounded Kolmogorov complexity
title: Time-bounded Kolmogorov complexity
id: kt-mild-average-case-hardness
---

# Time-bounded Kolmogorov complexity

The $t$-time-bounded Kolmogorov complexity $K^t(x)$ of a string $x$ is the length of the shortest program that outputs $x$ within $t(|x|)$ steps. The assumption is that every efficient algorithm fails to compute $K^t(x)$ on at least an inverse-polynomial fraction of uniformly random $x$.

## Assumption

Fix a universal Turing machine $U$. For a time bound $t : \NN \to \NN$ and $x \in \bits^*$,

$$
K^t(x) := \min\left\{|\Pi| : U(\Pi, 1^{t(|x|)}) = x\right\},
$$

where $U(\Pi, 1^{t})$ is the output of $U$ on the program $\Pi$ within $t$ steps — [[LP20 - On One-way Functions and Kolmogorov Complexity|LP20]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{kt}}_{t,\calA}(\secpar)$}
\begin{algorithmic}
\State $x \getsr \bits^\secpar$
\State $k \gets \calA(1^\secpar, x)$
\Return $[k = K^t(x)]$
\end{algorithmic}
\end{algorithm}
```

For a polynomial $t(n) \ge (1+\varepsilon)n$ with a constant $\varepsilon > 0$, **$K^t$ is mildly hard on average** if there is a polynomial $p$ such that for all efficient $\calA$ and all sufficiently large $\secpar$,

$$
\Pr\!\left[\Game^{\mathrm{kt}}_{t,\calA}(\secpar) = 1\right] < 1 - \frac{1}{p(\secpar)}
$$

— [[LP20 - On One-way Functions and Kolmogorov Complexity|LP20]].

## Known Results

- [[kt-mild-average-case-hardness-to-owf-lp20|Mild average-case hardness of Kᵗ ⇔ OWF]]: for every polynomial $t(n) \ge (1+\varepsilon)n$, $K^t$ is mildly hard on average if and only if [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist — [[LP20 - On One-way Functions and Kolmogorov Complexity|LP20]].

# Attacks

- Running every program of length at most $\ell$ on $U$ for $t(|x|)$ steps decides whether $K^t(x) \le \ell$ in time $2^{\ell+1} \cdot \poly(t(|x|))$ — standard.

<!-- BEGIN GENERATED participates-in 7eb64e9856b0 -->

## Participates in

**Builds on Time-bounded Kolmogorov complexity**

- [[kt-mild-average-case-hardness-to-owf-lp20|Mild average-case hardness of Kᵗ ⇔ OWF]]

<!-- END GENERATED participates-in -->
