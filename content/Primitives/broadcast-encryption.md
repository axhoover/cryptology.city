---
type: primitive
status: draft
aliases:
  - BE
  - Broadcast encryption
title: Broadcast encryption
id: be
variants:
  be-selective: "#ind-sbe-cpa-security-selective"
---

# Broadcast encryption

A **broadcast encryption (BE)** scheme allows a sender to encrypt a single message to an arbitrary subset $S$ of $n$ registered users such that only users in $S$ can decrypt. Users not in $S$ (revoked users) obtain no information about the plaintext, even if they collude. BE is optimized for one-to-many transmission, and the primary efficiency concern is ciphertext growth as $|S|$ (or the complement $[n] \setminus S$) grows.

## Syntax

A BE scheme is a tuple of efficient algorithms $\mathsf{BE} = (\Setup, \KeyGen, \Enc, \Dec)$ for $n$ users with message space $\calM$ and ciphertext space $\calC$:

- $\Setup(1^\secpar, n) \to (\pp, \msk),$ is a randomized algorithm that takes the security parameter and user count $n$, outputting public parameters $\pp$ and master secret key $\msk$,
- $\KeyGen(\msk, i) \to \sk_i,$ is a (possibly randomized) algorithm that takes $\msk$ and user index $i \in [n]$, outputting a secret key $\sk_i$ for user $i$,
- $\Enc(\pp, S, m) \to c,$ is a randomized algorithm that takes $\pp$, a recipient set $S \subseteq [n]$, and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\pp, \sk_i, c) \to m,$ is a deterministic algorithm that takes $\pp$, a secret key $\sk_i$, and $c$, outputting $m \in \calM$ or $\bot$.

## Properties

### Correctness

A BE scheme is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $S \subseteq [n]$, $i \in S$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\pp, \sk_i, \Enc(\pp, S, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\pp, \msk) \gets \Setup(1^\secpar, n)$, $\sk_i \gets \KeyGen(\msk, i)$, and the randomness of $\Enc$.

### IND-BE-CPA Security

In the adaptive game, the adversary freely queries $\calO_{\mathrm{key}}(i)$ to obtain keys for any users of its choice, then submits a challenge set $S^*$ and two messages. The only constraint is that the adversary may not hold a key for any user in $S^*$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{be\text{-}cpa}}_{\mathsf{BE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(i) := \KeyGen(\msk, i)$
\State $(S^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(i)$ for any $i \in S^*$}
\State $c^* \gets \Enc(\pp, S^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(i)$ for any $i \in S^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A BE scheme $\mathsf{BE}$ is **IND-BE-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{be\text{-}cpa}}_{\mathsf{BE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{be\text{-}cpa}}_{\mathsf{BE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The admissibility constraint requires full collusion resistance: revoked users may pool their keys and still learn nothing about $m$.

As an object, BE denotes a $(1 - \negl(\secpar))$-[[#Correctness|correct]], IND-BE-CPA-secure scheme.

### IND-sBE-CPA Security (Selective)

In the **selective** variant, the adversary commits to $S^*$ before $\Setup$ runs; the key oracle, the admissibility constraint and the challenge are those of [[#IND-BE-CPA Security|IND-BE-CPA security]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sbe\text{-}cpa}}_{\mathsf{BE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(S^*, \stA) \gets \calA(1^\secpar, n)$
\Comment{$\calA$ commits to $S^* \subseteq [n]$ before seeing $\pp$}
\State $(\pp, \msk) \gets \Setup(1^\secpar, n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(i) := \KeyGen(\msk, i)$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(\pp, \stA)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(i)$ for any $i \in S^*$}
\State $c^* \gets \Enc(\pp, S^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(i)$ for any $i \in S^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A BE scheme $\mathsf{BE}$ is **IND-sBE-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sbe\text{-}cpa}}_{\mathsf{BE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sbe\text{-}cpa}}_{\mathsf{BE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, selectively secure BE denotes a $(1 - \negl(\secpar))$-[[#Correctness|correct]], IND-sBE-CPA-secure scheme. Every IND-BE-CPA-secure scheme is IND-sBE-CPA-secure ([[be-to-be-selective|BE ⇒ Selectively secure BE]]) — folklore.

# Variations

## Revocation schemes

Revocation schemes parametrize by the complement: the set $\mathsf{Rev} \subseteq [n]$ of revoked (excluded) users rather than the authorized set $S$. Efficiency is then measured in $|\mathsf{Rev}|$ rather than $|S|$.

## Public-key broadcast encryption

In the **public-key** setting, anyone can encrypt to any set $S$ using only the public parameters $\pp$; key distribution is the only secret operation. This is the setting of BGW05.

# Other results

- [[abe-to-be|ABE ⇒ BE]]
- BE is orthogonal to [[identity-based-encryption|IBE]] in expressiveness: IBE matches a single identity exactly, while BE handles arbitrary subsets; neither is a special case of the other
- [[bdh-to-be-bgw05|n-BDHE ⇒ Selectively secure BE]]

<!-- BEGIN GENERATED participates-in 0955a1d3f65c -->

## Participates in

**Builds on Broadcast encryption**

- [[be-to-be-selective|BE ⇒ Selectively secure BE]]

**Produces Broadcast encryption**

- [[abe-to-be|ABE ⇒ BE]]
- [[bdh-to-be-bgw05|n-BDHE ⇒ Selectively secure BE]] (via [[broadcast-encryption#ind-sbe-cpa-security-selective|IND-sBE-CPA Security (Selective)]])
- [[be-to-be-selective|BE ⇒ Selectively secure BE]] (via [[broadcast-encryption#ind-sbe-cpa-security-selective|IND-sBE-CPA Security (Selective)]])
- [[evasive-lwe-to-be-wee22|Evasive LWE ⇒ Selectively secure BE]] (via [[broadcast-encryption#ind-sbe-cpa-security-selective|IND-sBE-CPA Security (Selective)]])

<!-- END GENERATED participates-in -->
