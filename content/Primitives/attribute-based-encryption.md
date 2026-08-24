---
type: primitive
status: draft
aliases:
  - ABE
  - KP-ABE
  - CP-ABE
  - Key-policy ABE
  - Ciphertext-policy ABE
  - Attribute-based encryption
title: Attribute-based encryption
id: abe
variants:
  abe-selective-security: "#selective-security"
  symmetric-cp-abe: "#symmetric-cp-abe"
  cp-abe-adaptive-security: "#cp-abe-ind-cpa-security"
  kp-abe-selective-security: "#selective-security"
---

# Attribute-based encryption

**Attribute-based encryption (ABE)** generalizes [[identity-based-encryption|IBE]] by replacing exact-identity matching with expressive Boolean access policies. The decryption relation is a pair $(f, x) \in \calF \times \calU^*$, where $f$ is a monotone Boolean formula over attributes from universe $\calU$ and $x \subseteq \calU$ is an attribute set; decryption succeeds if and only if $f(x) = 1$. ABE comes in two dual flavors depending on which component travels with the key and which with the ciphertext:

| Variant                        | Key holds         | Ciphertext holds  |
| ------------------------------ | ----------------- | ----------------- |
| **KP-ABE** (Key-Policy)        | policy $f$        | attribute set $x$ |
| **CP-ABE** (Ciphertext-Policy) | attribute set $x$ | policy $f$        |

Policies are typically expressed as monotone Boolean formulas (or equivalently, as Linear Secret-Sharing Schemes (LSSS)), which subsume threshold gates and conjunctions.

## Syntax

An ABE scheme is a tuple of efficient algorithms $\ABE = (\Setup, \KeyGen, \Enc, \Dec)$ with respect to attribute universe $\calU$, policy class $\calF$, message space $\calM$, and ciphertext space $\calC$:

- $\Setup(1^\secpar) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ and master secret key $\msk$,
- $\KeyGen(\msk, \cdot) \to \sk,$ is a (possibly randomized) algorithm that takes $\msk$ and either a policy $f \in \calF$ (KP-ABE) or an attribute set $x \subseteq \calU$ (CP-ABE), outputting a secret key,
- $\Enc(\pp, \cdot, m) \to c,$ is a randomized algorithm that takes $\pp$, either an attribute set $x \subseteq \calU$ (KP-ABE) or a policy $f \in \calF$ (CP-ABE), and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk, c) \to m,$ is a deterministic algorithm that takes a secret key and ciphertext, outputting $m \in \calM$ or $\bot$.

Decryption succeeds if and only if the associated $(f, x)$ pair satisfies $f(x) = 1$.

## Properties

### Correctness

An ABE scheme $\ABE$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, policy-attribute pairs $(f, x)$ with $f(x) = 1$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\KeyGen(\msk, f_{\mathrm{key}}),\; \Enc(\pp, f_{\mathrm{ct}}, m)) = m\right] \ge 1 - \varepsilon,
$$

where $f_{\mathrm{key}}$ and $f_{\mathrm{ct}}$ denote whichever of $\{f, x\}$ is placed in the key vs. ciphertext by the variant, over $(\pp, \msk) \gets \Setup(1^\secpar)$ and randomness of $\KeyGen$ and $\Enc$.

### KP-ABE: IND-CPA Security

In KP-ABE, the adversary queries keys for policies of its choice. The challenge is an attribute set $x^*$ and two messages. Admissibility: no queried policy $f$ may satisfy $f(x^*) = 1$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{kp\text{-}cpa}}_{\ABE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(f) := \KeyGen(\msk, f)$
\State $(x^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(f)$ for $f(x^*) = 1$}
\State $c^* \gets \Enc(\pp, x^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(f)$ for $f(x^*) = 1$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A KP-ABE scheme $\ABE$ is **KP-IND-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{kp\text{-}cpa}}_{\ABE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{kp\text{-}cpa}}_{\ABE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### CP-ABE: IND-CPA Security

In CP-ABE, the adversary queries keys for attribute sets of its choice. The challenge is a policy $f^*$ and two messages. Admissibility: no queried attribute set $x$ may satisfy $f^*(x) = 1$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cp\text{-}cpa}}_{\ABE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(x) := \KeyGen(\msk, x)$
\State $(f^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(x)$ for $f^*(x) = 1$}
\State $c^* \gets \Enc(\pp, f^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(x)$ for $f^*(x) = 1$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A CP-ABE scheme $\ABE$ is **CP-IND-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{cp\text{-}cpa}}_{\ABE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cp\text{-}cpa}}_{\ABE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Selective Security

In both KP-ABE and CP-ABE, the **selective** variant requires the adversary to commit to the challenge ($x^*$ in KP-ABE, $f^*$ in CP-ABE) before $\Setup$ runs. Selective security is strictly weaker than adaptive security; complexity leveraging converts one to the other at a polynomial cost in $|\calU|$ for KP-ABE, but the conversion for CP-ABE can incur exponential loss in the formula size.

# Variations

## Syntactic Duality of KP-ABE and CP-ABE

KP-ABE and CP-ABE are syntactically dual: swapping the roles of $\KeyGen$ and $\Enc$ converts one definition into the other. This structural observation is useful for intuition but does **not** give a black-box security reduction. In particular, a selective KP-ABE security proof does not imply adaptive CP-ABE security via the syntactic swap, because the two games have different admissibility constraints and different distributions of challenge objects.

## Large-Universe ABE

In **small-universe** ABE, all supported attributes are registered at $\Setup$ time and embedded into the public parameters; the universe size is bounded a priori. In **large-universe** constructions, attributes can be arbitrary strings not known at $\Setup$; keys and ciphertexts for new attributes can be created at any time without re-running $\Setup$. Large-universe constructions are necessary for real-world deployments where the set of possible attributes cannot be fixed in advance — [[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]].

## Policy Hiding

Standard KP-ABE and CP-ABE leak the access policy: in KP-ABE the policy $f$ is visible in the key, and in CP-ABE the policy $f^*$ is visible in the ciphertext. Hiding the policy from unauthorized parties requires additional techniques. [[inner-product-predicate-encryption|IPPE]] is a key stepping stone toward full policy hiding, since inner-product predicates are both expressive and attribute-hiding.

## Symmetric CP-ABE

In **symmetric CP-ABE** (_secret-key CP-ABE_), there are no public parameters: all parties must hold a key from the authority. Encryption takes the encryptor's key $\sk_{x_e}$ and may only embed a policy $f$ that the encryptor's own attribute set satisfies, $f(x_e) = 1$.

A symmetric CP-ABE scheme is a tuple $\ABE = (\Setup, \KeyGen, \Enc, \Dec)$ with respect to attribute universe $\calU$, policy class $\calF$, and message space $\calM$:

- $\Setup(1^\secpar) \to \msk,$ outputs a master secret key with no public parameters.
- $\KeyGen(\msk, x) \to \sk_x,$ takes $\msk$ and $x \subseteq \calU$, outputting a key bound to $x$.
- $\Enc(\sk_x, f, m) \to c,$ takes an encryptor key $\sk_x$, a policy $f \in \calF$ with $f(x) = 1$, and $m \in \calM$.
- $\Dec(\sk_{x'}, c) \to m \in \calM$ or $\bot,$ succeeds when the decryptor's attribute set $x'$ satisfies the ciphertext policy.

The IND-CCA2 game adds an encryption oracle $\calO_{\mathrm{enc}}$ absent from standard CP-ABE: since encryption requires a key, the adversary can query encryptions under keys it legitimately holds. The key oracle's admissibility constraint — no queried $\sk_x$ with $f^*(x) = 1$ — also bounds what the adversary can submit to $\calO_{\mathrm{enc}}$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sym\text{-}cca2}}_{\ABE,\calA}(\secpar)$}
\begin{algorithmic}
\State $\msk \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(x) := \KeyGen(\msk, x)$
\State $\calO_{\mathrm{enc}}(\sk_x, f, m) := \Enc(\sk_x, f, m)$
\Comment{$\sk_x$ must be a prior output of $\calO_{\mathrm{key}}$}
\State $\calO_{\mathrm{dec}}(\sk_x, c) := \Dec(\sk_x, c)$
\State $(f^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}, \calO_{\mathrm{enc}}, \calO_{\mathrm{dec}}}(1^\secpar)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(x)$ for $f^*(x) = 1$}
\State $\sk_{x_e} \gets \KeyGen(\msk, x_e)$
\Comment{Challenger-chosen $x_e \subseteq \calU$ with $f^*(x_e) = 1$}
\State $c^* \gets \Enc(\sk_{x_e}, f^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}, \calO_{\mathrm{enc}}, \calO_{\mathrm{dec}}}(c^*, \stA)$
\Comment{No $\calO_{\mathrm{key}}(x)$ with $f^*(x) = 1$; no $\calO_{\mathrm{dec}}(\cdot, c^*)$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A symmetric CP-ABE scheme $\ABE$ is **sym-CP-IND-CCA2-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sym\text{-}cca2}}_{\ABE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sym\text{-}cca2}}_{\ABE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Other results

- [[abe-to-fuzzy-ibe|ABE ⇒ Fuzzy IBE]]
- [[abe-to-hibe|ABE ⇒ HIBE]]
- [[abe-to-be|ABE ⇒ BE]]
- ABE is incomparable to [[inner-product-predicate-encryption|IPPE]]: IPPE achieves attribute-hiding but only captures inner-product predicates; KP/CP-ABE handles arbitrary monotone formulas but leaks the policy
- [[bdh-to-abe-gpsw06|BDH ⇒ ABE]]
- [[ggm-to-abe-bsw07|GGM ⇒ ABE]]
- [[bdh-to-abe-gpsw06|BDH ⇒ ABE]]
- [[bdh-to-ibe-wat09|BDH ⇒ IBE]]
- [[bdh-to-abe-gpsw06|BDH ⇒ ABE]]
- [[bdh-to-hibe-wat09|BDH ⇒ HIBE]]
- [[k-linear-assumption-to-abe-rw13|$k$-Linear assumption ⇒ ABE]]
- [[hash-function-and-prf-to-symmetric-cp-abe-ls26|Hash function + PRF ⇒ Symmetric CP-ABE]]
