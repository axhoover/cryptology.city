---
type: primitive
status: draft
aliases:
  - TBC
  - Tweakable block cipher
  - Tweakable blockcipher
  - Tweakable PRP
title: Tweakable block cipher
id: tweakable-block-cipher
variants:
  strong-tweakable-block-cipher: "#strong-security"
---

# Tweakable block cipher

A **tweakable block cipher (TBC)** is a keyed family of permutations $\tilde E_k(t, \cdot)$ of a domain $\calD$, indexed by a public tweak $t \in \calT$ as well as the key, that no efficient adversary can distinguish from a family of independent uniformly random permutations, one per tweak, given oracle access to it — [[LRW02 - Tweakable Block Ciphers|LRW02]].

## Syntax

A TBC is a triple of efficient algorithms $\mathsf{TBC} = (\KeyGen, \Eval, \Invert)$ with respect to keyspace $\calK$, tweak space $\calT$, and domain $\calD$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized algorithm that samples a key $k \in \calK,$
- $\Eval(k, t, x) \to y,$ is a deterministic algorithm that takes a key $k \in \calK$, a tweak $t \in \calT$ and an input $x \in \calD$, outputting $y \in \calD,$
- $\Invert(k, t, y) \to x,$ is a deterministic algorithm that takes a key $k \in \calK$, a tweak $t \in \calT$ and an input $y \in \calD$, outputting $x \in \calD.$

For every key $k$ and tweak $t$, $\Eval(k, t, \cdot)$ is a bijection on $\calD$. The map $\tilde E : \calK \times \calT \times \calD \to \calD$, $\tilde E_k(t, x) := \Eval(k, t, x)$, is the usual notation. A [[pseudorandom-permutation|PRP]] is the case $|\calT| = 1$.

## Properties

### Correctness

A TBC $\mathsf{TBC}$ is **correct** if for all $k \in \calK$, $t \in \calT$ and $x \in \calD$,

$$
\Invert(k, t, \Eval(k, t, x)) = x.
$$

### Security

The ideal world samples an independent uniformly random permutation $\pi_t$ of $\calD$ for every tweak; $\calA$ chooses the tweak of each query.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{tprp}}_{\mathsf{TBC},\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi_t \getsr \Perms(\calD)$ independently for each $t \in \calT$
\Comment{Can be sampled lazily}
\State $\calO_0(t, x) := \Eval(k, t, x)$
\State $\calO_1(t, x) := \pi_t(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A TBC $\mathsf{TBC}$ is a **tweakable PRP** if for all efficient $\calA$,

$$
\Adv^{\mathrm{tprp}}_{\mathsf{TBC},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{tprp}}_{\mathsf{TBC},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[LRW02 - Tweakable Block Ciphers|LRW02]].

### Strong security

In the **strong tweakable PRP** game, $\calA$ additionally receives an inverse oracle, again with a tweak of its choice.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{tsprp}}_{\mathsf{TBC},\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi_t \getsr \Perms(\calD)$ independently for each $t \in \calT$
\Comment{Can be sampled lazily}
\State $\calO_0(t, x) := \Eval(k, t, x)$ ; $\calO_0^{-1}(t, y) := \Invert(k, t, y)$
\State $\calO_1(t, x) := \pi_t(x)$ ; $\calO_1^{-1}(t, y) := \pi_t^{-1}(y)$
\State $b' \gets \calA^{\calO_b,\calO_b^{-1}}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A TBC $\mathsf{TBC}$ is a **strong tweakable PRP** if for all efficient $\calA$,

$$
\Adv^{\mathrm{tsprp}}_{\mathsf{TBC},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{tsprp}}_{\mathsf{TBC},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[LRW02 - Tweakable Block Ciphers|LRW02]]. A strong tweakable PRP is a tweakable PRP ([[strong-tweakable-block-cipher-to-tweakable-block-cipher|Strong TBC ⇒ TBC]]); the [[prp-to-tweakable-block-cipher-lrw02|LRW1]] construction is a tweakable PRP whenever its block cipher is a PRP on $\bits^n$ with $n = \omega(\log \secpar)$, and four queries distinguish it from an ideal family once inverse queries are allowed — standard.

# Variations

## Tweakable enciphering schemes

A **tweakable enciphering scheme** has a domain $\calD$ of bit strings of several lengths, and each $\Eval(k, t, \cdot)$ is a length-preserving permutation of $\calD$. Its security is the strong game above with each $\pi_t$ a uniformly random length-preserving permutation of $\calD$ — [[HR03 - A Tweakable Enciphering Mode|HR03]].

# Other results

- [[prp-to-tweakable-block-cipher-lrw02|PRP ⇒ TBC (LRW1)]]
- [[strong-prp-to-strong-tweakable-block-cipher-lrw02|Strong PRP ⇒ Strong TBC (LRW2)]]

<!-- BEGIN GENERATED participates-in d6f215e45f22 -->

## Participates in

**Builds on Tweakable block cipher**

- [[strong-tweakable-block-cipher-to-tweakable-block-cipher|Strong TBC ⇒ TBC]] (via [[tweakable-block-cipher#strong-security|Strong security]])

**Produces Tweakable block cipher**

- [[prp-to-tweakable-block-cipher-lrw02|PRP ⇒ TBC (LRW1)]]
- [[strong-prp-to-strong-tweakable-block-cipher-lrw02|Strong PRP ⇒ Strong TBC (LRW2)]] (via [[tweakable-block-cipher#strong-security|Strong security]])
- [[strong-tweakable-block-cipher-to-tweakable-block-cipher|Strong TBC ⇒ TBC]]

<!-- END GENERATED participates-in -->
