---
type: primitive
status: draft
aliases:
  - Injective OWF
  - Injective one-way function
title: Injective one-way function
id: injective-one-way-function
variants:
  length-increasing-injective-owf: "#length-increasing-injective-owfs"
  adaptive-injective-owf: "#adaptive-one-wayness"
---

# Injective one-way function

An injective one-way function is an efficiently computable injective function that no efficient adversary inverts on the image of a uniform input, except with negligible probability. Unlike a [[one-way-permutation|one-way permutation]], it need not be length-preserving.

## Syntax

An injective one-way function is a deterministic polynomial-time algorithm computing $f : \bits^* \to \bits^*$ such that $f(x) \ne f(x')$ for all $x \ne x'$.

## Properties

### One-wayness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{owf}}_{f,\calA}(\secpar)$}
\begin{algorithmic}
\State $x \getsr \bits^\secpar$
\State $\hat{x} \gets \calA(1^\secpar, f(x))$
\Return $[\hat{x} = x]$
\end{algorithmic}
\end{algorithm}
```

An injective function $f$ is **one-way** if for all efficient $\calA$,

$$
\Adv^{\mathrm{owf}}_{f,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{owf}}_{f,\calA}(\secpar) = 1\right]
$$

is negligible. By injectivity, $\hat{x} = x$ if and only if $f(\hat{x}) = f(x)$, so this is the [[hash-function#preimage-resistance-one-wayness|one-wayness]] of a one-way function. A one-way permutation is a length-preserving injective one-way function, and an injective one-way function is a one-way function — standard.

# Variations

## Length-increasing injective OWFs

$f$ is **length-increasing** if there is a function $\ell$ with $\ell(n) > n$ for all $n$ and $|f(x)| = \ell(|x|)$ for all $x$; the stretch is $\ell(n) - n$. There is no fully black-box construction of a one-way permutation from a length-increasing injective one-way function, even one with stretch $1$ that is adaptively one-way ([[no-injective-owf-to-owp-mm11|No fully-black-box reduction from length-increasing injective OWF to OWP]]) — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]].

## Adaptive one-wayness

The adversary may also invert $f$ at every point other than its challenge.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{aowf}}_{f,\calA}(\secpar)$}
\begin{algorithmic}
\State $x \getsr \bits^\secpar$; $y^* \gets f(x)$
\State $\calO(y) := f^{-1}(y)$ if $y \ne y^*$ and $y$ has a preimage, and $\bot$ otherwise
\State $\hat{x} \gets \calA^{\calO}(1^\secpar, y^*)$
\Return $[\hat{x} = x]$
\end{algorithmic}
\end{algorithm}
```

An injective function $f$ is **adaptively one-way** if for all efficient $\calA$, $\Adv^{\mathrm{aowf}}_{f,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{aowf}}_{f,\calA}(\secpar) = 1\right]$ is negligible — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]].

# Other results

- An injective one-way function $f$ gives a non-interactive [[commitment-scheme#binding|perfectly binding]] bit commitment $\Com(b; x, r) = (f(x), r, \langle x, r \rangle \oplus b)$ for $x, r \getsr \bits^\secpar$: binding by injectivity, hiding because $\langle x, r \rangle$ is a [[hardcore-predicate|hardcore predicate]] of $(x, r) \mapsto (f(x), r)$ — standard.
- [[injective-one-way-function-to-four-message-zk-argument-hv18|Injective OWF ⇒ Four-message ZK arguments for NP (fully black-box)]] — [[HV18 - Round-Optimal Fully Black-Box Zero-Knowledge Arguments from One-Way Permutations|HV18]], [[KOS18 - Round Optimal Black-Box Commit-and-Prove|KOS18]].
- [[no-injective-owf-to-owp-mm11|No fully-black-box reduction from length-increasing injective OWF to OWP]] — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]].
- There is no fully-black-box construction, from an injective one-way function and iO for circuits that call it, of a language in $\classNP \cap \classcoNP$ that no efficient algorithm decides on every input — [[BDV17 - Structure vs Hardness Through the Obfuscation Lens|BDV17]].

<!-- BEGIN GENERATED participates-in 34c5d129a181 -->

## Participates in

**Builds on Injective one-way function**

- [[injective-one-way-function-to-four-message-zk-argument-hv18|Injective OWF ⇒ Four-message ZK arguments for NP (fully black-box)]]

**Barriers**

- [[no-injective-owf-to-owp-mm11|No fully-black-box reduction from length-increasing injective OWF to OWP]] (via [[injective-one-way-function#length-increasing-injective-owfs|Length-increasing injective OWFs]])

<!-- END GENERATED participates-in -->
