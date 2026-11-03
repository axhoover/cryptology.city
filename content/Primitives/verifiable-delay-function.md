---
type: primitive
status: draft
aliases:
  - VDF
  - Verifiable delay function
  - Verifiable delay functions
title: Verifiable delay function
id: vdf
variants:
  weak-vdf: "#weak-vdfs"
---

# Verifiable delay function

A verifiable delay function is a function, fixed by public parameters for a delay $T$, whose value at each input takes parallel time $T$ to compute and comes with a proof verified in time $\poly(\log T, \secpar)$; only one value per input verifies, and no adversary running in parallel time $\sigma(T)$ after a polynomial precomputation computes it. The definitions below are those of [[BBBF18 - Verifiable Delay Functions|BBBF18]].

## Syntax

A VDF is a triple of algorithms $\mathsf{VDF} = (\Setup, \Eval, \Vrfy)$:

- $\Setup(1^\secpar, T) \to \pp = (\mathit{ek}, \vk)$, a randomized algorithm running in time $\poly(\secpar)$ that outputs an evaluation key $\mathit{ek}$ and a verification key $\vk$; $\pp$ specifies an efficiently sampleable input space $\calX$ and an output space $\calY$. $\Setup$ may use secret randomness, in which case the scheme needs a trusted setup.
- $\Eval(\mathit{ek}, x) \to (y, \pi)$, which on input $x \in \calX$ outputs $y \in \calY$ and a possibly empty proof $\pi$; it may use randomness to compute $\pi$ but not $y$, and runs in parallel time $T$ with $\poly(\log T, \secpar)$ processors.
- $\Vrfy(\vk, x, y, \pi) \to \bits$, a deterministic algorithm running in total time $\poly(\log T, \secpar)$.

## Properties

### Correctness

$\mathsf{VDF}$ is **correct** if for all $\secpar$, all $T$, every $\pp = (\mathit{ek}, \vk)$ in the support of $\Setup(1^\secpar, T)$ and every $x \in \calX$, if $(y, \pi) \gets \Eval(\mathit{ek}, x)$ then $\Vrfy(\vk, x, y, \pi) = 1$ — [[BBBF18 - Verifiable Delay Functions|BBBF18]].

### Soundness

Soundness requires that the value $\Eval$ computes is the only one that verifies.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{snd}}_{\mathsf{VDF},\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp = (\mathit{ek}, \vk) \gets \Setup(1^\secpar, T)$
\State $(x, y, \pi) \gets \calA(1^\secpar, \pp, T)$
\State $(y^*, \pi^*) \gets \Eval(\mathit{ek}, x)$
\Comment{$y^*$ does not depend on $\Eval$'s randomness}
\Return $[\Vrfy(\vk, x, y, \pi) = 1 \wedge y \ne y^*]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{VDF}$ is **sound** if for all $\calA$ running in time $\poly(T, \secpar)$,

$$
\Adv^{\mathrm{snd}}_{\mathsf{VDF},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{snd}}_{\mathsf{VDF},\calA}(\secpar) = 1\right]
$$

is negligible — [[BBBF18 - Verifiable Delay Functions|BBBF18]].

### Sequentiality

The adversary is a pair $(\calA_0, \calA_1)$: $\calA_0$ precomputes on the public parameters before the input is chosen, and $\calA_1$ computes the value on a uniform input.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{seq}}_{\mathsf{VDF},\calA_0,\calA_1}(\secpar)$}
\begin{algorithmic}
\State $\pp = (\mathit{ek}, \vk) \gets \Setup(1^\secpar, T)$
\State $L \gets \calA_0(1^\secpar, \pp, T)$
\Comment{total time $\poly(T, \secpar)$}
\State $x \getsr \calX$
\State $y_\calA \gets \calA_1(L, \pp, x)$
\Comment{parallel time $\sigma(T)$ on at most $p(T)$ processors}
\State $(y, \pi) \gets \Eval(\mathit{ek}, x)$
\Return $[y_\calA = y]$
\end{algorithmic}
\end{algorithm}
```

For functions $\sigma$ and $p$, $\mathsf{VDF}$ is **$(p, \sigma)$-sequential** if for all randomized $\calA_0$ running in total time $\poly(T, \secpar)$ and $\calA_1$ running in parallel time $\sigma(T)$ on at most $p(T)$ processors,

$$
\Adv^{\mathrm{seq}}_{\mathsf{VDF},\calA_0,\calA_1}(\secpar) := \Pr\!\left[\Game^{\mathrm{seq}}_{\mathsf{VDF},\calA_0,\calA_1}(\secpar) = 1\right]
$$

is negligible — [[BBBF18 - Verifiable Delay Functions|BBBF18]]. The bound on $\calA_1$ is necessary because $\Eval$ computes $y$ in parallel time $T$.

# Variations

## Weak VDFs

A **weak VDF** is defined as above except that $\Eval$ may use $\poly(T, \secpar)$ processors — [[BBBF18 - Verifiable Delay Functions|BBBF18]].

# Other results

- BBBF18 give the first candidate constructions with an exponential gap between evaluation and verification time — [[BBBF18 - Verifiable Delay Functions|BBBF18]].
- Pietrzak makes the RSW [[time-lock-puzzle|time-lock puzzle]] publicly verifiable: a statistically sound public-coin interactive protocol proves that $(N, x, T, y)$ satisfies $y = x^{2^T} \bmod N$ without the prover knowing the factorization of $N$, working in the group of signed quadratic residues for $N$ a product of two safe primes, and the [[fiat-shamir-heuristic|Fiat–Shamir transform]] makes it non-interactive. Sequentiality rests on the assumption that repeated squaring in that group cannot be sped up, a [[sequential-squaring|sequential squaring]] assumption — [[Pie19 - Simple Verifiable Delay Functions|Pie19]].
- Wesolowski's VDF works in any group of unknown order, such as an RSA group or the class group of an imaginary quadratic field; its output and its proof are each a single group element — [[Wes19 - Efficient Verifiable Delay Functions|Wes19]]. BBF18 prove Wesolowski's proof of exponentiation sound in groups satisfying the _adaptive root assumption_, that no efficient adversary that outputs a group element $w \ne 1$ and then receives a random prime $\ell$ can output $u$ with $u^\ell = w$, and show that the adaptive root assumption implies the _low order assumption_, that no efficient adversary outputs an element of small order — [[BBF18 - A Survey of Two Verifiable Delay Functions|BBF18]].
- [[no-rom-to-vdf-gry25|No reduction from ROM to VDF]]: VDFs do not exist in the random oracle model — [[GRY25 - Breaking Verifiable Delay Functions in the Random Oracle Model|GRY25]], [[AAK+25 - Impossibility of VDFs in the ROM The Complete Picture|AAK+25]].

<!-- BEGIN GENERATED participates-in 7cda28dc49a1 -->

## Participates in

**Barriers**

- [[no-rom-to-vdf-gry25|No reduction from ROM to VDF]]

<!-- END GENERATED participates-in -->
