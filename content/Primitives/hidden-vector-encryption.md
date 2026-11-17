---
type: primitive
status: draft
aliases:
  - HVE
  - Hidden vector encryption
title: Hidden vector encryption
id: hve
variants:
  hve-attribute-hiding: "#attribute-hiding-security"
  hve-payload-hiding: "#payload-hiding-security"
  hve-selective-attribute-hiding: "#selective-attribute-hiding-security"
  range-query-encryption: "#subset-and-range-queries"
---

# Hidden vector encryption

**Hidden vector encryption (HVE)** is a form of predicate encryption in which ciphertexts are labeled with an attribute vector $x \in \Sigma^n$ and secret keys correspond to conjunctive pattern predicates $v \in (\Sigma \cup \{*\})^n$. A key for pattern $v$ decrypts a ciphertext for attribute $x$ if and only if $v$ matches $x$ at every non-wildcard position: $\forall i,\; v_i \ne * \Rightarrow v_i = x_i$. The same framework supports comparison queries $x \ge a$, subset queries $x \in S$, and conjunctions of them — [[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]]. The primary motivation is fine-grained access control over encrypted databases and conjunctive keyword search.

## Syntax

An HVE scheme is a tuple of efficient algorithms $\mathsf{HVE} = (\Setup, \KeyGen, \Enc, \Dec)$ with respect to alphabet $\Sigma$, vector length $n$, message space $\calM$, and ciphertext space $\calC$:

- $\Setup(1^\secpar, \Sigma, n) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ and master secret key $\msk$,
- $\KeyGen(\msk, v) \to \sk_v,$ is a (possibly randomized) algorithm that takes $\msk$ and a pattern vector $v \in (\Sigma \cup \{*\})^n$, outputting a secret key $\sk_v$,
- $\Enc(\pp, x, m) \to c,$ is a randomized algorithm that takes $\pp$, an attribute vector $x \in \Sigma^n$, and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk_v, c) \to m,$ is a deterministic algorithm that takes $\sk_v$ and $c$, outputting $m \in \calM$ or $\bot$.

Decryption succeeds if and only if $v$ matches $x$: for all $i \in [n]$, either $v_i = *$ (wildcard) or $v_i = x_i$.

## Properties

### Correctness

An HVE scheme is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $v \in (\Sigma \cup \{*\})^n$, $x \in \Sigma^n$ with $v$ matching $x$, and $m \in \calM$,

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

### Selective security

In the selective payload-hiding game the adversary commits to the challenge attribute vector $x^*$ before $\Setup$ runs; the game otherwise runs as $\Game^{\mathrm{ph}}$, with the same constraint that no queried pattern matches $x^*$, since such a key decrypts $c^*$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sel\text{-}ph}}_{\mathsf{HVE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(x^*, \stA) \gets \calA(1^\secpar)$
\State $(\pp, \msk) \gets \Setup(1^\secpar, \Sigma, n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(v) := \KeyGen(\msk, v)$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(\pp, \stA)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(v)$ for $v$ matching $x^*$}
\State $c^* \gets \Enc(\pp, x^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(v)$ for $v$ matching $x^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HVE scheme $\mathsf{HVE}$ is **selectively payload-hiding** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sel\text{-}ph}}_{\mathsf{HVE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sel\text{-}ph}}_{\mathsf{HVE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Payload-hiding implies selective payload-hiding, a selective adversary being an adaptive one ([[hve-payload-hiding-to-hve|Payload-hiding HVE ⇒ HVE]]) — folklore.

As an object, HVE denotes a $(1-\negl(\secpar))$-[[#Correctness|correct]], selectively payload-hiding scheme with $|\calM| \ge 2$, for every alphabet $\Sigma = \Sigma(\secpar)$ with $2 \le |\Sigma| \le \poly(\secpar)$ and every $n = n(\secpar) \le \poly(\secpar)$ given to $\Setup$. Payload-hiding, attribute-hiding and selectively attribute-hiding HVE each denote a scheme with the same correctness, message space and quantifiers that meets its own game. A scheme for $\Sigma = \bits$ gives one for every $\Sigma$, with vectors of length $n|\Sigma|$: encode each symbol $x_i$ as its indicator vector in $\bits^{|\Sigma|}$, a pattern symbol $\sigma$ as the pattern with $1$ at position $\sigma$ and wildcards elsewhere, and $*$ as $|\Sigma|$ wildcards, which preserves every match — folklore.

### Attribute-Hiding Security

The stronger **attribute-hiding** notion requires that a ciphertext hide not only the payload $m$ but also the attribute vector $x$ itself. The adversary submits two ciphertext candidates $(x_0, m_0)$ and $(x_1, m_1)$ and receives an encryption of one. Admissibility requires that for every key $v$ queried, the predicate outcome is the same on both: the pattern $v$ matches $x_0$ if and only if it matches $x_1$; and if some queried $v$ matches $x_0$ (hence $x_1$), then $m_0 = m_1$, since that key decrypts $c^*$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ah}}_{\mathsf{HVE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, \Sigma, n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(v) := \KeyGen(\msk, v)$
\State $((x_0, m_0), (x_1, m_1), \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{For all queried $v$: $v$ matches $x_0$ iff $v$ matches $x_1$; if some queried $v$ matches $x_0$, then $m_0 = m_1$}
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

is negligible. Attribute-hiding implies payload-hiding (take $(x_0, m_0) = (x^*, m_0)$ and $(x_1, m_1) = (x^*, m_1)$; [[attribute-hiding-security-to-payload-hiding-security|Attribute-Hiding Security ⇒ Payload-Hiding Security]]). If a payload-hiding HVE scheme exists, the converse fails: appending $x$ to every ciphertext keeps payload-hiding, since $x^*$ is the adversary's own choice, and breaks attribute-hiding for any $x_0 \ne x_1$ with no key queries — folklore.

### Selective attribute-hiding security

In the selective attribute-hiding game the adversary commits to the two attribute vectors $x_0, x_1$ before $\Setup$ runs and chooses $m_0, m_1$ after its first key queries; admissibility is that of $\Game^{\mathrm{ah}}$ — [[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sel\text{-}ah}}_{\mathsf{HVE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(x_0, x_1, \stA) \gets \calA(1^\secpar)$
\State $(\pp, \msk) \gets \Setup(1^\secpar, \Sigma, n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(v) := \KeyGen(\msk, v)$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(\pp, \stA)$
\Comment{For all queried $v$: $v$ matches $x_0$ iff $v$ matches $x_1$; if some queried $v$ matches $x_0$, then $m_0 = m_1$}
\State $c^* \gets \Enc(\pp, x_b, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{Same admissibility constraint holds throughout}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HVE scheme $\mathsf{HVE}$ is **selectively attribute-hiding** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sel\text{-}ah}}_{\mathsf{HVE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sel\text{-}ah}}_{\mathsf{HVE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Attribute-hiding implies it, a selective adversary being an adaptive one ([[hve-attribute-hiding-to-hve-selective-attribute-hiding|Attribute-hiding HVE ⇒ selectively attribute-hiding HVE]]), and it implies selective payload-hiding, by $x_0 = x_1 = x^*$, with the clause $m_0 = m_1$ vacuous since no admissible payload-hiding query matches $x^*$ ([[hve-selective-attribute-hiding-to-hve|Selectively attribute-hiding HVE ⇒ HVE]]) — folklore.

# Variations

## Subset and range queries

Range-query encryption is predicate encryption for conjunctions of subset and range predicates over attributes $x \in [T]^\ell$. A scheme is a tuple of efficient algorithms $\Pi = (\Setup, \KeyGen, \Enc, \Dec)$ with message space $\calM$:

- $\Setup(1^\secpar, T, \ell) \to (\pp, \msk)$;
- $\KeyGen(\msk, P) \to \sk_P$ for a predicate $P = P_1 \wedge \cdots \wedge P_\ell$, where each $P_j$ is a subset predicate $x_j \in S_j$ for a set $S_j \subseteq [T]$, a range predicate $a_j \le x_j \le b_j$ for $a_j \le b_j$ in $[T]$, or the predicate that is always true;
- $\Enc(\pp, x, m) \to c$ for $x \in [T]^\ell$ and $m \in \calM$;
- $\Dec(\sk_P, c) \to m$ or $\bot$, deterministic.

The scheme is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, every such $P$, every $x \in [T]^\ell$ with $P(x) = 1$ and every $m \in \calM$, $\Pr\!\left[\Dec(\KeyGen(\msk, P), \Enc(\pp, x, m)) = m\right] \ge 1 - \varepsilon$ over $(\pp, \msk) \gets \Setup(1^\secpar, T, \ell)$ and the coins of $\KeyGen$ and $\Enc$. In the selective payload-hiding game the adversary commits to $x^*$ before $\Setup$ runs and may not query a key for any $P$ with $P(x^*) = 1$, since such a key decrypts $c^*$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sel\text{-}ph}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(x^*, \stA) \gets \calA(1^\secpar)$
\State $(\pp, \msk) \gets \Setup(1^\secpar, T, \ell)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(P) := \KeyGen(\msk, P)$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(\pp, \stA)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(P)$ for $P$ with $P(x^*) = 1$}
\State $c^* \gets \Enc(\pp, x^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(P)$ for $P$ with $P(x^*) = 1$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A range-query encryption scheme $\Pi$ is **selectively payload-hiding** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sel\text{-}ph}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sel\text{-}ph}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, range-query encryption denotes a $(1-\negl(\secpar))$-correct, selectively payload-hiding scheme with $|\calM| \ge 2$, for every $T = T(\secpar)$ and $\ell = \ell(\secpar)$ with $T, \ell \le \poly(\secpar)$.

Subset and range predicates reduce to HVE over $\Sigma = \bits$ by fixed encodings: $x \in S$ by the indicator vector of $x$ against the pattern with wildcards exactly on $S$ and $0$ elsewhere, $x \ge a$ by $x$ in unary against the pattern with $1$ at position $a$ and wildcards elsewhere, and a range as the conjunction of two comparisons, with ciphertexts linear in the domain size ([[hve-to-subset-and-range-queries|HVE ⇒ Subset and range queries]]) — [[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]].

# Other results

- [[ippe-to-hve|IPPE ⇒ HVE]]
- [[bdh-to-hve-bw07|BDH ⇒ HVE]]

<!-- BEGIN GENERATED participates-in edf8ccb71c5f -->

## Participates in

**Builds on Hidden vector encryption**

- [[attribute-hiding-security-to-payload-hiding-security|Attribute-Hiding Security ⇒ Payload-Hiding Security]] (via [[hidden-vector-encryption#attribute-hiding-security|Attribute-Hiding Security]])
- [[hve-attribute-hiding-to-hve-selective-attribute-hiding|Attribute-hiding HVE ⇒ selectively attribute-hiding HVE]] (via [[hidden-vector-encryption#attribute-hiding-security|Attribute-Hiding Security]])
- [[hve-payload-hiding-to-hve|Payload-hiding HVE ⇒ HVE]] (via [[hidden-vector-encryption#payload-hiding-security|Payload-Hiding Security]])
- [[hve-selective-attribute-hiding-to-hve|Selectively attribute-hiding HVE ⇒ HVE]] (via [[hidden-vector-encryption#selective-attribute-hiding-security|Selective attribute-hiding security]])
- [[hve-to-subset-and-range-queries|HVE ⇒ Subset and range queries]]

**Produces Hidden vector encryption**

- [[attribute-hiding-security-to-payload-hiding-security|Attribute-Hiding Security ⇒ Payload-Hiding Security]] (via [[hidden-vector-encryption#payload-hiding-security|Payload-Hiding Security]])
- [[bdh-to-hve-bw07|BDH ⇒ HVE]] (via [[hidden-vector-encryption#selective-attribute-hiding-security|Selective attribute-hiding security]])
- [[hve-attribute-hiding-to-hve-selective-attribute-hiding|Attribute-hiding HVE ⇒ selectively attribute-hiding HVE]] (via [[hidden-vector-encryption#selective-attribute-hiding-security|Selective attribute-hiding security]])
- [[hve-payload-hiding-to-hve|Payload-hiding HVE ⇒ HVE]]
- [[hve-selective-attribute-hiding-to-hve|Selectively attribute-hiding HVE ⇒ HVE]]
- [[hve-to-subset-and-range-queries|HVE ⇒ Subset and range queries]] (via [[hidden-vector-encryption#subset-and-range-queries|Subset and range queries]])
- [[ippe-to-hve|IPPE ⇒ HVE]] (via [[hidden-vector-encryption#selective-attribute-hiding-security|Selective attribute-hiding security]])

<!-- END GENERATED participates-in -->
