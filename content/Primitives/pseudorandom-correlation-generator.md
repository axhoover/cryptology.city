---
type: primitive
status: draft
aliases:
  - PCG
  - Pseudorandom correlation generator
title: Pseudorandom correlation generator
id: pseudorandom-correlation-generator
---

# Pseudorandom correlation generator

A pseudorandom correlation generator (PCG) for a target correlation $\calC$ samples a pair of seeds $(k_0, k_1)$ that the two parties expand locally into outputs $(R_0, R_1)$, such that the pair is indistinguishable from a sample of $\calC$ and each seed reveals nothing about the other party's output beyond what $\calC$ itself reveals — [[BCG+19 - Efficient Pseudorandom Correlation Generators Silent OT Extension and More|BCG+19]].

## Syntax

A correlation generator $\calC$ is a $\PPT$ algorithm that on input $1^\secpar$ outputs a pair $(R_0, R_1)$. A PCG for $\calC$ is a pair of efficient algorithms $\mathsf{PCG} = (\Gen, \Eval)$:

- $\Gen(1^\secpar) \to (k_0, k_1)$, a randomized algorithm outputting a pair of seeds.
- $\Eval(\sigma, k_\sigma) \to R_\sigma$, a deterministic algorithm taking a party index $\sigma \in \bits$ and the seed $k_\sigma$, outputting party $\sigma$'s output $R_\sigma$.

$\Eval$ is called Expand in [[BCG+19 - Efficient Pseudorandom Correlation Generators Silent OT Extension and More|BCG+19]]. Seeds as long as outputs make both properties trivial: $\Gen$ that samples $(R_0, R_1) \gets \calC(1^\secpar)$ and outputs $k_\sigma := R_\sigma$, with $\Eval(\sigma, k_\sigma) := k_\sigma$, has advantage $0$ in the correctness game and is secure by reverse-sampleability of $\calC$, so the object of interest is a PCG with $|k_\sigma|$ much smaller than $|R_\sigma|$.

## Properties

### Correctness

The pair $(\Eval(0, k_0), \Eval(1, k_1))$ for $(k_0, k_1) \gets \Gen(1^\secpar)$ is computationally indistinguishable from $\calC(1^\secpar)$ — [[BCG+19 - Efficient Pseudorandom Correlation Generators Silent OT Extension and More|BCG+19]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pcg\text{-}corr}}_{\mathsf{PCG},\calC,\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $(k_0, k_1) \gets \Gen(1^\secpar)$
\State $(R_0^0, R_1^0) := (\Eval(0, k_0), \Eval(1, k_1))$
\State $(R_0^1, R_1^1) \gets \calC(1^\secpar)$
\State $b' \gets \calA(1^\secpar, R_0^b, R_1^b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PCG is **correct** if for all efficient $\calA$,

$$
\Adv^{\mathrm{pcg\text{-}corr}}_{\mathsf{PCG},\calC,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{pcg\text{-}corr}}_{\mathsf{PCG},\calC,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Security

$\calC$ is required to be reverse-sampleable: an efficient algorithm, given $\sigma$ and an output $R_{1-\sigma}$ of one party, samples an $R_\sigma$ such that the resulting pair is computationally indistinguishable from $\calC(1^\secpar)$ — [[BCG+19 - Efficient Pseudorandom Correlation Generators Silent OT Extension and More|BCG+19]].

Let $\mathsf{RSample}(1^\secpar, \sigma, R_{1-\sigma})$ be the reverse sampler of $\calC$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pcg\text{-}sec}}_{\mathsf{PCG},\sigma,\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $(k_0, k_1) \gets \Gen(1^\secpar)$
\State $R^0 := \Eval(\sigma, k_\sigma)$
\State $R^1 \gets \mathsf{RSample}(1^\secpar, \sigma, \Eval(1-\sigma, k_{1-\sigma}))$
\State $b' \gets \calA(1^\secpar, k_{1-\sigma}, R^b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PCG is **secure** if for each $\sigma \in \bits$ and all efficient $\calA$,

$$
\Adv^{\mathrm{pcg\text{-}sec}}_{\mathsf{PCG},\sigma,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{pcg\text{-}sec}}_{\mathsf{PCG},\sigma,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

<!-- BEGIN GENERATED participates-in b5da9f32c273 -->

## Participates in

**Produces Pseudorandom correlation generator**

- [[ring-lpn-to-pseudorandom-correlation-generators-pcg|Sparse Ring-LPN ⇒ PCG]]
- [[sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg|Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)]]

<!-- END GENERATED participates-in -->
