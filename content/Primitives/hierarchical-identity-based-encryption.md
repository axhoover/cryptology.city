---
aliases:
  - HIBE
  - Hierarchical identity-based encryption
title: Hierarchical identity-based encryption
---

# Hierarchical identity-based encryption

A **hierarchical identity-based encryption (HIBE)** scheme extends [[identity-based-encryption|IBE]] by organizing identities into a tree: an entity at depth $k$ holds an identity vector $\vec{\mathit{id}} = (\mathit{id}_1, \ldots, \mathit{id}_k)$ where $\mathit{id}_1$ is the root domain and each subsequent component refines the identity. Any node can delegate a decryption key to any of its children without involvement of the root KGC. HIBE models real-world key delegation in organizations and DNS-style identity hierarchies.

## Syntax

An HIBE scheme is a tuple of efficient algorithms $\HIBE = (\Setup, \Extract, \Delegate, \Enc, \Dec)$ with respect to maximum depth $d$, alphabet $\Sigma$, message space $\calM$, and ciphertext space $\calC$. Identity vectors are tuples $\vec{\mathit{id}} = (\mathit{id}_1, \ldots, \mathit{id}_k) \in \Sigma^{\le d}$:

- $\Setup(1^\secpar, d) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ (including the depth bound $d$) and master secret key $\msk$,
- $\Extract(\msk, \vec{\mathit{id}}) \to \sk_{\vec{\mathit{id}}},$ is a (possibly randomized) algorithm that takes $\msk$ and an identity vector $\vec{\mathit{id}}$ of any depth, outputting a secret key $\sk_{\vec{\mathit{id}}}$,
- $\Delegate(\sk_{\vec{\mathit{id}}}, \mathit{id}') \to \sk_{\vec{\mathit{id}}\|\mathit{id}'},$ is a (possibly randomized) algorithm that takes a key for $\vec{\mathit{id}}$ and a child identity component $\mathit{id}' \in \Sigma$, outputting a key for the extended identity $\vec{\mathit{id}}\|\mathit{id}'$,
- $\Enc(\pp, \vec{\mathit{id}}, m) \to c,$ is a randomized algorithm that takes $\pp$, an identity vector $\vec{\mathit{id}}$, and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk_{\vec{\mathit{id}}'}, c) \to m,$ is a deterministic algorithm that takes a secret key and ciphertext, outputting $m \in \calM$ or $\bot$.

Correctness requires that a ciphertext encrypted for $\vec{\mathit{id}}$ can be decrypted by $\sk_{\vec{\mathit{id}}'}$ for any $\vec{\mathit{id}}' = \vec{\mathit{id}}$, and also by any key derived from $\sk_{\vec{\mathit{id}}'}$ via $\Delegate$. Note: keys derived via $\Delegate$ are typically less efficient (larger) than those from $\Extract$; in many constructions key size grows by $O(1)$ group elements per delegation level.

## Properties

### Correctness

An HIBE scheme $\HIBE$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $\vec{\mathit{id}} \in \Sigma^{\le d}$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\Extract(\msk, \vec{\mathit{id}}),\, \Enc(\pp, \vec{\mathit{id}}, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\pp, \msk) \gets \Setup(1^\secpar, d)$ and the randomness of $\Extract$ and $\Enc$; and similarly for any key obtained by a sequence of $\Delegate$ calls from a root-extracted key.

### IND-HIBE-CPA Security

The adaptive IND-HIBE-CPA game is similar to IBE but with a stronger admissibility constraint: since any key for a prefix $\vec{\mathit{id}}^*[1..k]$ ($k \le |\vec{\mathit{id}}^*|$) can be used to delegate down to $\sk_{\vec{\mathit{id}}^*}$, the adversary may not extract any ancestor (prefix) of the challenge identity, including $\vec{\mathit{id}}^*$ itself.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{hibe\text{-}cpa}}_{\HIBE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, d)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\vec{\mathit{id}}) := \Extract(\msk, \vec{\mathit{id}})$
\State $(\vec{\mathit{id}}^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\vec{\mathit{id}})$ for $\vec{\mathit{id}}$ a prefix of $\vec{\mathit{id}}^*$}
\State $c^* \gets \Enc(\pp, \vec{\mathit{id}}^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\vec{\mathit{id}})$ for $\vec{\mathit{id}}$ a prefix of $\vec{\mathit{id}}^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HIBE scheme $\HIBE$ is **IND-HIBE-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{hibe\text{-}cpa}}_{\HIBE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hibe\text{-}cpa}}_{\HIBE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The prefix constraint is necessary because $\Delegate$ is publicly computable from an ancestor key.

### IND-sHIBE-CPA Security (Selective)

In the **selective** variant, the adversary commits to the challenge identity $\vec{\mathit{id}}^*$ before $\Setup$ runs. The selective–adaptive separation is known to be strict for HIBE: there is no black-box complexity-leveraging argument that avoids an exponential loss in the depth $d$.

# Variations

## Anonymous HIBE

An anonymous HIBE additionally hides the recipient identity $\vec{\mathit{id}}$ from the ciphertext, so an eavesdropper learns neither the payload nor the intended recipient.

# Other results

- HIBE strictly generalizes [[identity-based-encryption|IBE]]: depth-1 hierarchies reduce to IBE (ignoring the $\Delegate$ algorithm)
- HIBE is subsumed by [[attribute-based-encryption|KP-ABE]]: a tree access policy can encode hierarchical delegation, but KP-ABE does not natively expose a $\Delegate$ interface for producing fresh delegated keys
- BBG05 achieves $O(1)$ ciphertext size and $O(d)$ key size — [[BBG05 - Hierarchical Identity Based Encryption with Constant Size Ciphertext|BBG05]]
- The first adaptive HIBE in the standard model under simple assumptions uses dual system encryption — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]
