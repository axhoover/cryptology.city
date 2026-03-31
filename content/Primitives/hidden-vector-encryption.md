---
aliases:
  - HVE
  - Hidden vector encryption
title: Hidden vector encryption
---

# Hidden vector encryption

**Hidden vector encryption (HVE)** is a form of predicate encryption in which ciphertexts are labeled with an attribute vector $x \in \Sigma^n$ and secret keys correspond to conjunctive pattern predicates $v \in (\Sigma \cup \{*\})^n$. A key for pattern $v$ decrypts a ciphertext for attribute $x$ if and only if $v$ matches $x$ at every non-wildcard position: $\forall i,\; v_i \ne * \Rightarrow v_i = x_i$. The same framework supports subset queries and range queries (via bit decomposition). The primary motivation is fine-grained access control over encrypted databases and conjunctive keyword search.

## Syntax

An HVE scheme is a tuple of efficient algorithms $\mathsf{HVE} = (\Setup, \KeyGen, \Enc, \Dec)$ with respect to alphabet $\Sigma$, vector length $n$, message space $\calM$, and ciphertext space $\calC$:

- $\Setup(1^\secpar, \Sigma, n) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ and master secret key $\msk$,
- $\KeyGen(\msk, v) \to \sk_v,$ is a (possibly randomized) algorithm that takes $\msk$ and a pattern vector $v \in (\Sigma \cup \{*\})^n$, outputting a secret key $\sk_v$,
- $\Enc(\pp, x, m) \to c,$ is a randomized algorithm that takes $\pp$, an attribute vector $x \in \Sigma^n$, and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk_v, c) \to m,$ is a deterministic algorithm that takes $\sk_v$ and $c$, outputting $m \in \calM$ or $\bot$.

Decryption succeeds if and only if $v$ matches $x$: for all $i \in [n]$, either $v_i = *$ (wildcard) or $v_i = x_i$.

## Properties

### Correctness

An HVE scheme is $(1-\varepsilon)$-**correct** if for all $\secpar \in \mathbb{N}$, $v \in (\Sigma \cup \{*\})^n$, $x \in \Sigma^n$ with $v$ matching $x$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\KeyGen(\msk, v),\, \Enc(\pp, x, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\pp, \msk) \gets \Setup(1^\secpar, \Sigma, n)$ and randomness of $\KeyGen$ and $\Enc$.

### Payload-Hiding Security

In the payload-hiding game (analogous to IND-CPA), the attribute vector $x$ is public and the adversary tries to distinguish the encrypted payload. The adversary may query keys for patterns, subject to the constraint that no queried pattern matches the challenge attribute vector.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ph}}_{\mathsf{HVE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, \Sigma, n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(v) := \KeyGen(\msk, v)$
\State $(x^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(v)$ for $v$ matching $x^*$}
\State $c^* \gets \Enc(\pp, x^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(v)$ for $v$ matching $x^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HVE scheme $\mathsf{HVE}$ is **payload-hiding** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ph}}_{\mathsf{HVE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ph}}_{\mathsf{HVE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Attribute-Hiding Security

The stronger **attribute-hiding** notion requires that a ciphertext hide not only the payload $m$ but also the attribute vector $x$ itself. The adversary submits two ciphertext candidates $(x_0, m_0)$ and $(x_1, m_1)$ and receives an encryption of one. Admissibility requires that for every key $v$ queried, the predicate outcome is the same on both: the pattern $v$ matches $x_0$ if and only if it matches $x_1$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ah}}_{\mathsf{HVE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, \Sigma, n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(v) := \KeyGen(\msk, v)$
\State $((x_0, m_0), (x_1, m_1), \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{For all queried $v$: $v$ matches $x_0$ iff $v$ matches $x_1$}
\State $c^* \gets \Enc(\pp, x_b, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{Same admissibility constraint holds throughout}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HVE scheme $\mathsf{HVE}$ is **attribute-hiding** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ah}}_{\mathsf{HVE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ah}}_{\mathsf{HVE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Attribute-hiding strictly implies payload-hiding (take $(x_0, m_0) = (x^*, m_0)$ and $(x_1, m_1) = (x^*, m_1)$).

# Variations

## Subset and range queries

The BW07 paper also formalizes subset predicates (is $x_i \in T_i$ for some set $T_i$?) and range predicates (is $a_i \le x_i \le b_i$?) within the same framework via encodings into inner products. Range predicates are handled by a bit decomposition of $x_i$ and $a_i, b_i$, reducing the range check to a conjunction over single-bit comparisons.

# Other results

- HVE is generalized by [[inner-product-predicate-encryption|IPPE]]: a conjunctive pattern predicate over $\Sigma^n$ can be encoded as an inner product over $\ZZ_p$ with an appropriate alphabet embedding
- BW07 introduced HVE and gave constructions for conjunctive, subset, and range queries, proved attribute-hiding under the decisional bilinear Diffie-Hellman and decisional linear assumptions — [[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]]
