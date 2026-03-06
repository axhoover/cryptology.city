---
aliases:
  - DLOG
  - Discrete logarithm
title: Discrete logarithm
---
# Discrete logarithm
The *discrete logarithm (DLOG)* assumption is used throughout cryptography. It is a natural strengthening of the [[computational-diffie-hellman|CDH]] assumption. In other words, an adversary which can solve the DLOG problem can also solve [[computational-diffie-hellman|CDH]] in the same group.

## Assumption
Informally, the DLOG assumption concerns a cyclic group
generation algorithm
$\GrGen,$ which takes as input a security parameter $1^{\secpar}$ and outputs
a succinct description of a cyclic group $(\GG,g,p),$ where $\GG$ is the group
set, $g$ is a generator for the group, and $p$ is the order of the group.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{dl}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$
\State $x \getsr [p]$
\State $X \gets g^x$
\State $\hat{x} \gets \calA(1^\secpar, \GG, g, p, X)$
\Return $[\hat{x} = x]$
\end{algorithmic}
\end{algorithm}
```
We say that **DLOG is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA,$

$$
\Adv^{\text{dl}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{dl}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

## Related results
- It is easy to see that if $\calA$ can compute $x$ for a random $g^x$, then $\calA$ can compute both $x$ and $y$ from $g^{x}$ and $g^{y}$ and find $g^{xy}$ easily. This establishes that DLOG is not easier than [[computational-diffie-hellman|CDH]].
- In the [[generic-group-model|Generic Group Model]], $\Adv^{\text{dl}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\mathcal{A}$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Shoup97]]


## Attacks
- The *Baby-step Giant-step* is a generic attack which works in all groups and requires space $S$ and time $T$ with $S\cdot T \ge p$. Therefore, this is optimal in the [[generic-group-model|GGM]] — TODO citation

# Vairations

## One-more Discrete Logarithm
In some works (TODO-cite), it is important to consider adversaires

```pseudocode
\begin{algorithm}
% oracle-split: 40
\algname{Game}
\caption{$\Game^{\text{om-dl}}_{\GrGen,\calA, \ell}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$ ; $q \gets 0$
\For{$i = 1,\ldots,\ell+1$}
\State $x_i \getsr [p]$
\State $X_i \gets g^{x_i}$
\EndFor
\State $(\hat{x}_i)_{i\in [\ell+1]} \gets \calA^{\calO_{\text{dl}}}(1^\secpar, \GG, g, p, (X_i)_{i\in [\ell+1]})$
\Return $\big[q \le \ell \land \forall_{i\in [\ell+1]}~~x_i = \hat{x}_i\big]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\text{dl}}(Z)$}
\begin{algorithmic}
\State $q \gets q + 1$
\State $z \gets \mathrm{dlog}_g(Z)$
\Return $z$
\end{algorithmic}
\end{algorithm}
```

We say that **OM-DL is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA$,

$$
\Adv^{\text{om-dl}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{om-dl}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.



[^1]: Succinct means that the tuple $(\GG,g,p)$ is at most
$\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$