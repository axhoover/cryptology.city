---
aliases:
  - Fuzzy IBE
  - FIBE
  - Fuzzy identity-based encryption
title: Fuzzy identity-based encryption
---

# Fuzzy identity-based encryption

**Fuzzy identity-based encryption (Fuzzy IBE)** is an extension of [[identity-based-encryption|IBE]] in which identities are represented as sets of descriptive attributes drawn from a universe $\calU$. A key for attribute set $\omega$ can decrypt a ciphertext encrypted under attribute set $\omega'$ if and only if the two sets overlap by at least $t$ attributes: $|\omega \cap \omega'| \ge t$. This threshold-based partial matching makes Fuzzy IBE suitable for biometric identities, where noise prevents exact matching. Sahai and Waters (2005) introduced Fuzzy IBE as the conceptual precursor to attribute-based encryption.

## Syntax

A Fuzzy IBE scheme is a tuple of efficient algorithms $\mathsf{FIBE} = (\Setup, \KeyGen, \Enc, \Dec)$ with respect to attribute universe $\calU$, threshold $t \in \mathbb{N}$, message space $\calM$, and ciphertext space $\calC$:

- $\Setup(1^\secpar, \calU, t) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ and master secret key $\msk$,
- $\KeyGen(\msk, \omega) \to \sk_\omega,$ is a (possibly randomized) algorithm that takes $\msk$ and an attribute set $\omega \subseteq \calU$, outputting a secret key $\sk_\omega$,
- $\Enc(\pp, \omega', m) \to c,$ is a randomized algorithm that takes $\pp$, an attribute set $\omega' \subseteq \calU$ used as the encryption identity, and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk_\omega, c) \to m,$ is a deterministic algorithm that takes $\sk_\omega$ and $c$, outputting $m \in \calM$ or $\bot$.

Decryption succeeds if and only if $|\omega \cap \omega'| \ge t$.

## Properties

### Correctness

A Fuzzy IBE scheme is $(1-\varepsilon)$-**correct** if for all $\secpar \in \mathbb{N}$, attribute sets $\omega, \omega' \subseteq \calU$ with $|\omega \cap \omega'| \ge t$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\KeyGen(\msk, \omega),\, \Enc(\pp, \omega', m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\pp, \msk) \gets \Setup(1^\secpar, \calU, t)$ and randomness of $\KeyGen$ and $\Enc$.

### IND-FIBE-CPA Security

The adversary queries the key generation oracle for attribute sets of its choice. Admissibility requires that no queried set $\omega$ has $|\omega \cap \omega^*| \ge t$, since such a key would decrypt the challenge ciphertext.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{fibe\text{-}cpa}}_{\mathsf{FIBE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, \calU, t)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(\omega) := \KeyGen(\msk, \omega)$
\State $(\omega^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(\omega)$ for $|\omega \cap \omega^*| \ge t$}
\State $c^* \gets \Enc(\pp, \omega^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(\omega)$ for $|\omega \cap \omega^*| \ge t$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A Fuzzy IBE scheme $\mathsf{FIBE}$ is **IND-FIBE-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{fibe\text{-}cpa}}_{\mathsf{FIBE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{fibe\text{-}cpa}}_{\mathsf{FIBE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### IND-sFIBE-CPA Security (Selective)

In the **selective** variant, the adversary commits to $\omega^*$ before $\Setup$ runs.

# Variations

## Small-universe vs. large-universe

In **small-universe** Fuzzy IBE, the attribute universe $\calU$ is fixed and encoded into $\pp$ at $\Setup$ time. In **large-universe** variants, attributes can be arbitrary strings drawn lazily, typically at the cost of larger parameters.

# Other results

- Fuzzy IBE generalizes [[identity-based-encryption|IBE]]: setting $t = 1$ and $|\omega| = |\omega'| = 1$ recovers exact-identity matching
- Fuzzy IBE is subsumed by [[attribute-based-encryption|KP-ABE]]: a threshold-$t$ formula over $|\calU|$ attributes is expressible as a monotone Boolean formula
- SW05 introduced Fuzzy IBE and gave the first construction under the Selective-ID security model — [[SW05 - Fuzzy Identity-Based Encryption|SW05]]
