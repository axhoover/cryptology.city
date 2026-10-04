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
  cp-abe-adaptive-security: "#cp-abe-ind-cpa-security"
---

# Attribute-based encryption

**Attribute-based encryption (ABE)** generalizes [[identity-based-encryption|IBE]] by replacing exact-identity matching with expressive Boolean access policies. The decryption relation is a pair $(f, x) \in \calF \times 2^{\calU}$, where $f$ is a monotone Boolean formula over attributes from universe $\calU$ and $x \subseteq \calU$ is an attribute set; decryption succeeds if and only if $f(x) = 1$. ABE comes in two dual flavors depending on which component travels with the key and which with the ciphertext:

| Variant                        | Key holds         | Ciphertext holds  |
| ------------------------------ | ----------------- | ----------------- |
| **KP-ABE** (Key-Policy)        | policy $f$        | attribute set $x$ |
| **CP-ABE** (Ciphertext-Policy) | attribute set $x$ | policy $f$        |

Policies are typically expressed as monotone Boolean formulas, which subsume threshold gates and conjunctions, or more generally as Linear Secret-Sharing Schemes (LSSS), which are strictly more expressive at polynomial size — [[KW93 - On Span Programs|KW93]].

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

In both KP-ABE and CP-ABE, the **selective** variant requires the adversary to commit to the challenge ($x^*$ in KP-ABE, $f^*$ in CP-ABE) before $\Setup$ runs. Selective security is strictly weaker than adaptive security; complexity leveraging [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04]] converts one to the other at a loss factor of $2^{|\calU|}$ for KP-ABE, but the conversion for CP-ABE can incur exponential loss in the formula size.

# Variations

## Syntactic Duality of KP-ABE and CP-ABE

KP-ABE and CP-ABE are syntactically dual: swapping the roles of $\KeyGen$ and $\Enc$ converts one definition into the other. The correspondence is between definitions, not a transformation of schemes. Selective security does not imply adaptive security in either flavor — folklore; see [[no-selective-security-to-cp-abe-ind-cpa-security]].

## Large-Universe ABE

In **small-universe** ABE, all supported attributes are registered at $\Setup$ time and embedded into the public parameters; the universe size is bounded a priori. In **large-universe** constructions, attributes can be arbitrary strings not known at $\Setup$; keys and ciphertexts for new attributes can be created at any time without re-running $\Setup$. Large-universe constructions are necessary for real-world deployments where the set of possible attributes cannot be fixed in advance — [[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]].

## Policy Hiding

Standard KP-ABE and CP-ABE leak the access policy: in KP-ABE the policy $f$ is visible in the key, and in CP-ABE the policy $f^*$ is visible in the ciphertext. Hiding the policy from unauthorized parties requires additional techniques. [[inner-product-predicate-encryption|IPPE]] is a key stepping stone toward full policy hiding, since inner-product predicates are both expressive and attribute-hiding.

# Other results

- [[abe-to-fuzzy-ibe|ABE ⇒ Fuzzy IBE]]
- The [[bdh-to-abe-gpsw06|GPSW06 KP-ABE]] supports delegation of private keys, which subsumes [[hierarchical-identity-based-encryption|HIBE]] — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]]
- [[abe-to-be|ABE ⇒ BE]]
- [[bdh-to-abe-gpsw06|BDH ⇒ ABE]]
- [[ggm-to-abe-bsw07|Bilinear pairing ⇒ CP-ABE]] (generic bilinear group model)
- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]]
- [[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]]
- [$k$-Linear assumption ⇒ ABE](k-linear-assumption-to-abe-rw13)
- Large-universe KP-ABE and CP-ABE in prime-order bilinear groups, selectively secure in the standard model under two $q$-type assumptions — [[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]]

<!-- BEGIN GENERATED participates-in 42caa111c99b -->

## Participates in

**Builds on Attribute-based encryption**

- [[abe-to-be|ABE ⇒ BE]]
- [[abe-to-fuzzy-ibe|ABE ⇒ Fuzzy IBE]]
- [[abe-to-ibe|ABE ⇒ IBE]]

**Produces Attribute-based encryption**

- [[bdh-to-abe-gpsw06|BDH ⇒ ABE]]
- [[ggm-to-abe-bsw07|Bilinear pairing ⇒ CP-ABE]] (via [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-ABE: IND-CPA Security]])
- [[evasive-lwe-to-abe|Evasive circular LWE ⇒ ABE]]
- [[evasive-lwe-to-abe-wee22|Evasive LWE + Tensor LWE ⇒ ABE]]
- [$k$-Linear assumption ⇒ ABE](k-linear-assumption-to-abe-rw13)
- [[succinct-lwe-to-abe-wee25|Succinct LWE ⇒ ABE]]

**Barriers**

- [[no-selective-security-to-cp-abe-ind-cpa-security|No fixed-construction reduction from selective to adaptive CP-ABE security]] (via [[attribute-based-encryption#selective-security|Selective Security]], [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-ABE: IND-CPA Security]])

<!-- END GENERATED participates-in -->
