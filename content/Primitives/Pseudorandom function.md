---
aliases:
  - PRF
  - iPRF
title: PRF
---
# Pseudorandom function
A **Pseudorandom Function (PRF)** allows someone to succinctly represent a function that is indistinguishable from a uniformly random function. A user generates a key and uses it to evaluate a function at many points; any efficient adversary who sees only these input-output pairs cannot distinguish them from a truly random function.

## Syntax
A PRF is a pair of efficient algorithms $\PRF= (\Gen, \Eval)$ with respect to keyspace $\calK$, domain $\calD$, and range $\calR$:
- $\Gen(1^\secpar) \to k,$ is a randomized function that
samples a key $k \in \calK,$
- $\Eval(k,x) \to y,$ is a deterministic function that
takes a key $k\in \calK$ and an input $x \in \calD$, outputting $y \in \calR.$

## Properties

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \Gen(1^\secpar)$; $b \getsr \{0,1\}$
\State $R \getsr \Funcs(\calD,\calR)$
\Comment{Can be sampled lazily for efficiency}
\State $\calO_0(x) := \Eval(k,x)$
\State $\calO_1(x) := R(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRF $\PRF$ is **pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prf}}_{\PRF,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Invertible PRFs

An **invertible PRF (iPRF)** extends the PRF with an inversion algorithm, allowing recovery of all inputs that map to a given output. An $\mathsf{iPRF} = (\Gen, \Eval, \Invert)$ adds:
- $\Invert(k, y) \to X,$ is a deterministic function that
returns the preimage set $X = \{x \in \calD : \Eval(k, x) = y\}$

Note that for domains much larger than the range, $\Invert$ may return exponentially many preimages, so efficiency is only meaningful when $|\calD|$ is reasonable relative to $|\calR|$.

### Correctness
With an inversion function, it also makes sense to restrict an iPRF to be **correct**. Meaning if for all for all $x\in \calD,$
$\Pr[x \in \Invert(k, y): \Eval(k, x) = y] = 1,$
where the probability is taken over $k \gets \Gen(1^{\secpar}).$

### Security

Invertible PRFs can either achieve the traditional security game
$\Game^{\mathrm{prf}}$ or can satisfy the stronger security game
$\Game^{\mathrm{iprf}}$ where $\calA$ is additionally given access to
an inversion oracle that returns the pre-image of a given output
$y\in \calR$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{iprf}}_{\mathsf{iPRF},\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \Gen(1^\secpar)$; $b \getsr \{0,1\}$
\State $R \getsr \Funcs(\calD,\calR)$
\Comment{Can be sampled lazily for efficiency}
\State $\calO_0(x) := \Eval(k,x)$ ; $\calO_0^{-1}(y) := \Invert(k,y)$
\State $\calO_1(x) := R(x)$ ; $ \calO_1^{-1}(y) := R^{-1}(y)$
\State $b' \gets \calA^{\calO_b,\calO_b^{-1}}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An iPRF $\mathsf{iPRF}$ is **strongly pseudorandom** if for
all efficient $\calA$,

$$
\Adv^{\mathrm{iprf}}_{\mathsf{iPRF},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{iprf}}_{\mathsf{iPRF},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Known results
- [[One-way function|OWF]] implies the existence of iPRFs — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]]
- [[Pseudorandom permutation|PRP]]s over large domains are iPRFs — [[Switching Lemma]]


## Pseudorandom Injective Functions
TODO: define these and say how they relate to PRPs


## Puncturable PRFs

# Other results
