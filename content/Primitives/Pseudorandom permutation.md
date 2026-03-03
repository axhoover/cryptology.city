---
aliases:
  - PRP
  - sPRP
title: PRP
---
# Pseudorandom permutation
A **Pseudorandom Permutation (PRP)** allows someone to succinctly represent a permutation that is indistinguishable from a uniformly random permutation. A user generates a key and uses it to evaluate the permutation forward and backward at many points; any efficient adversary who sees only these input-output pairs cannot distinguish them from a truly random permutation. PRPs are the formal model behind block ciphers such as [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard).

## Syntax
A PRP is a triple of efficient algorithms $\PRP = (\KeyGen, \Eval, \Invert)$ with respect to keyspace $\calK$ and domain $\calD$:
- $\KeyGen(1^\secpar) \to k,$ is a randomized algorithm that samples a key $k \in \calK,$
- $\Eval(k, x) \to y,$ is a deterministic algorithm that takes a key $k \in \calK$ and input $x \in \calD$, outputting $y \in \calD,$
- $\Invert(k, y) \to x,$ is a deterministic algorithm that takes a key $k \in \calK$ and input $y \in \calD$, outputting $x \in \calD.$

For every key $k$, $\Eval(k, \cdot)$ is a bijection on $\calD$.

## Properties

### Correctness
A PRP $\PRP$ is **correct** if for all $k \in \calK$ and $x \in \calD$,
$$
\Invert(k, \Eval(k, x)) = x.
$$

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prp}}_{\PRP,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi \getsr \Perms(\calD)$
\Comment{Can be sampled lazily}
\State $\calO_0(x) := \Eval(k,x)$
\State $\calO_1(x) := \pi(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRP $\PRP$ is **pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prp}}_{\PRP,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Strong Security
In the **strong PRP (sPRP)** security game, the adversary additionally receives an inverse oracle. This is a strictly stronger notion than standard PRP security.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sprp}}_{\PRP,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi \getsr \Perms(\calD)$
\Comment{Can be sampled lazily}
\State $\calO_0(x) := \Eval(k,x)$ ; $\calO_0^{-1}(y) := \Invert(k,y)$
\State $\calO_1(x) := \pi(x)$ ; $\calO_1^{-1}(y) := \pi^{-1}(y)$
\State $b' \gets \calA^{\calO_b,\calO_b^{-1}}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRP $\PRP$ is **strongly pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sprp}}_{\PRP,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sprp}}_{\PRP,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Small-domain PRPs
Typically, $|\calD|$ is assumed to grow super-polynomially in $\secpar$, so that a brute-force enumeration of $\calD$ is infeasible. When $|\calD|$ is instead polynomial in $\secpar$, the primitive is called a **small-domain PRP** and requires additional care, as some standard constructions and security reductions no longer apply.

# Other results
- [[Pseudorandom function|PRF]]s imply the existence of large-domain PRPs — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]
- PRPs imply the existence of large-domain [[Pseudorandom function|PRF]]s (and
infact these are invertible PRFs) — [[Switching Lemma]]
