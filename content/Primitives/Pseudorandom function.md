---
aliases:
  - PRF
title: PRF
---
# Pseudorandom function (PRF)
A Pseudorandom Function (PRF) allows someone to succinctly represent a function that is indistinguishable from a uniformly random function. A user generates a key and uses it to evaluate a function at many points; any efficient adversary who sees only these input-output pairs cannot distinguish them from a truly random function.

## Syntax
A PRF is a pair of efficient algorithms $\PRF= (\Gen, \Eval)$ with respect to keyspace $\calK$, domain $\calD$, and range $\calR$:
- $\Gen(1^\secpar) \to k$ — samples a key $k \in \calK,$
- $\Eval(k,x) \to y$ — takes a key $k\in \calK$ and an input $x \in \calD$, outputting $y \in \calR.$

## Properties

### Security

```pseudocode
\begin{algorithm}
\caption{$\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \Gen(1^\secpar)$; $b \gets \{0,1\}$
\State $\calO_0(x) := \Eval(k,x)$
\State $\calO_1(x) := R(x)$ for uniform random $R : \calD \to \calR$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRF is **secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) := \left|\Pr\!\left[\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar) = 1\right] - \frac{1}{2}\right|
$$

is negligible.

# Variations

## Invertible PRFs
TODO - move from iPRF file


## Injective PRFs


## Puncturable PRFs

# Other results
