---
type: assumption
status: stub
aliases:
  - LSN
  - Learning subspace with noise
title: Learning subspace with noise
id: learning-subspace-with-noise
unlisted: true
---

# Learning subspace with noise

## Assumption

The _learning subspace with noise (LSN)_ assumption states that samples from a hidden uniformly random $k$-dimensional subspace of $\FF_2^n$, each replaced by a uniform vector with probability $\mu$, are indistinguishable from uniform. The problem is due to [[DKL09 - On cryptography with auxiliary input|DKL09]]; the game follows [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]. The parameters are a dimension $n = n(\secpar) \le \poly(\secpar)$, a subspace dimension $k = k(\secpar) \le n$, a noise probability $\mu = \mu(\secpar) \in [0, 1]$ and a sample count $m = m(\secpar) \le \poly(\secpar)$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{lsn}}_{k,n,\mu,m,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathbf{C} \getsr \{\mathbf{M} \in \FF_2^{k \times n} : \mathrm{rank}(\mathbf{M}) = k\}$; $b \getsr \bits$
\For{$i = 1, \ldots, m$}
  \State $\mathbf{a}_i \getsr \FF_2^k$
  \State $\mathbf{e}_i \getsr \FF_2^n$ with probability $\mu$, and $\mathbf{e}_i := \mathbf{0}$ otherwise
  \State $\mathbf{x}_i^0 := \mathbf{a}_i^T \mathbf{C} + \mathbf{e}_i$; $\mathbf{x}_i^1 \getsr \FF_2^n$
\EndFor
\State $b' \gets \calA(1^\secpar, (\mathbf{x}_i^b)_{i \le m})$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

**$(k,n,\mu)$-LSN is hard** if for all efficient $\calA$ and all polynomials $m = m(\secpar)$,

$$
\Adv^{\mathrm{lsn}}_{k,n,\mu,m,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{lsn}}_{k,n,\mu,m,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[DKL09 - On cryptography with auxiliary input|DKL09]], [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].

As an object, LSN denotes Conjecture 1.1 of [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]: for every constant $0 < \rho < 1$, $(k,n,\mu)$-LSN is hard for every $n$ polynomially related to $\secpar$, every $k$ with $\rho n \le k \le n$ and every $\mu$ with $1 - \mu = o(1)$. Hardness for some $(k,n,\mu)$ holds trivially: at $k = n$ the matrix $\mathbf{C}$ is invertible and the samples are exactly uniform. Hardness for all $(k,n,\mu)$ is false: at $k = 1$ and $\mu = 0$ every sample lies in $\{\mathbf{0}, \mathbf{C}\}$, so two of any three samples coincide — standard.

TODO: confirm in [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]] how $n$ depends on $\secpar$ in its LSN definition, and that the dimensions at which its secret-key PIR and SK-DEPIR (Theorem 7.1, item 2) constructions instantiate LSN satisfy $\rho n \le k \le n$ and $1 - \mu = o(1)$.

<!-- BEGIN GENERATED participates-in 5cd12af54fe3 -->

## Participates in

**Builds on Learning subspace with noise**

- [[noise-level-to-depir-cimr25-2|LSN ⇒ SK-DEPIR]]
- [[lsn-to-secret-key-pir-sk-pir-cimr25|LSN ⇒ Secret-Key PIR (SK-PIR)]]

<!-- END GENERATED participates-in -->
