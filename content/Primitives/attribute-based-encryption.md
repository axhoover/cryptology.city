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
  cp-abe-selective-security: "#selective-cp-abe-security"
  very-selective-cp-abe: "#very-selective-security"
---

# Attribute-based encryption

**Attribute-based encryption (ABE)** generalizes [[identity-based-encryption|IBE]] by replacing exact-identity matching with expressive Boolean access policies ([[abe-to-ibe|ABE ⇒ IBE]]). The decryption relation is a pair $(f, x) \in \calF \times 2^{\calU}$, where $f$ is a monotone Boolean formula over attributes from universe $\calU$ and $x \subseteq \calU$ is an attribute set; decryption succeeds if and only if $f(x) = 1$. ABE comes in two dual flavors depending on which component travels with the key and which with the ciphertext:

| Variant                        | Key holds         | Ciphertext holds  |
| ------------------------------ | ----------------- | ----------------- |
| **KP-ABE** (Key-Policy)        | policy $f$        | attribute set $x$ |
| **CP-ABE** (Ciphertext-Policy) | attribute set $x$ | policy $f$        |

Policies are typically expressed as monotone Boolean formulas, which subsume threshold gates and conjunctions, or more generally as Linear Secret-Sharing Schemes (LSSS), which are strictly more expressive at polynomial size — [[KW93 - On Span Programs|KW93]].

## Syntax

An ABE scheme is a tuple of efficient algorithms $\ABE = (\Setup, \KeyGen, \Enc, \Dec)$ with respect to attribute universe $\calU = [n]$, policy class $\calF = \calF_n$ of monotone Boolean functions on subsets of $[n]$, message space $\calM$, and ciphertext space $\calC$:

- $\Setup(1^\secpar, 1^n) \to (\pp, \msk),$ is a randomized algorithm that takes the universe size $n$ and outputs public parameters $\pp$ and master secret key $\msk$; a large-universe scheme accepts every $n$,
- $\KeyGen(\msk, \cdot) \to \sk,$ is a (possibly randomized) algorithm that takes $\msk$ and either a policy $f \in \calF_n$ (KP-ABE) or an attribute set $x \subseteq [n]$ (CP-ABE), outputting a secret key,
- $\Enc(\pp, \cdot, m) \to c,$ is a randomized algorithm that takes $\pp$, either an attribute set $x \subseteq [n]$ (KP-ABE) or a policy $f \in \calF_n$ (CP-ABE), and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk, c) \to m,$ is a deterministic algorithm that takes a secret key and ciphertext, outputting $m \in \calM$ or $\bot$.

Decryption succeeds if and only if the associated $(f, x)$ pair satisfies $f(x) = 1$.

The policy class $\calF_n$ contains every monotone formula of threshold gates over $[n]$, where a $t$-of-$m$ gate ($1 \le t \le m$) outputs $1$ iff at least $t$ of its $m$ inputs are $1$; AND and OR are the $m$-of-$m$ and $1$-of-$m$ gates. A scheme that bounds the size or depth of its policies takes the bound $1^s$ as a further input to $\Setup$, and for every polynomial $p$ there is a polynomial bound $s = s(\secpar)$ at which its policy class contains every such formula of size at most $p(\secpar)$. For every $\secpar$, the message space contains two distinct messages of equal length that an efficient algorithm outputs given $\pp$; otherwise IND-CPA admits only $m_0 = m_1$ and is vacuous — standard. The correctness condition and every game on this page are required at every polynomial $n = n(\secpar)$, and at every polynomial bound $s = s(\secpar)$ for a scheme that takes one.

As an object, ABE denotes a $(1-\negl(\secpar))$-correct scheme in this syntax that is [[attribute-based-encryption#kp-abe-ind-cpa-security|KP-IND-CPA-secure]] if key-policy and [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]] if ciphertext-policy; every result below that starts from ABE holds for both flavors. The variants on this page have the same syntax and correctness requirement. Without correctness, $\Enc := 0$ meets every notion on this page, and without two such messages so does the scheme that sends $m$ in the clear.

## Properties

### Correctness

An ABE scheme $\ABE$ is $(1-\varepsilon)$-**correct** at $n = n(\secpar)$ if for all $\secpar \in \NN$, policy-attribute pairs $(f, x) \in \calF_n \times 2^{[n]}$ with $f(x) = 1$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\KeyGen(\msk, f_{\mathrm{key}}),\; \Enc(\pp, f_{\mathrm{ct}}, m)) = m\right] \ge 1 - \varepsilon(\secpar),
$$

where $f_{\mathrm{key}}$ and $f_{\mathrm{ct}}$ denote whichever of $\{f, x\}$ is placed in the key vs. ciphertext by the variant, over $(\pp, \msk) \gets \Setup(1^\secpar, 1^n)$ and randomness of $\KeyGen$ and $\Enc$. It is $(1-\negl(\secpar))$-correct if for every polynomial $n$ it is $(1-\varepsilon)$-correct at $n$ for a negligible $\varepsilon$. When $\varepsilon = 0$ at every $n$, $\ABE$ is **perfectly correct**.

### KP-ABE: IND-CPA Security

In KP-ABE, the adversary queries keys for policies of its choice. The challenge is an attribute set $x^*$ and two messages. Admissibility: no queried policy $f$ may satisfy $f(x^*) = 1$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{kp\text{-}cpa}}_{\ABE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, 1^n)$; $b \getsr \bits$
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

A KP-ABE scheme $\ABE$ is **KP-IND-CPA-secure** if for every polynomial $n = n(\secpar)$ and all efficient admissible $\calA$,

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
\State $(\pp, \msk) \gets \Setup(1^\secpar, 1^n)$; $b \getsr \bits$
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

A CP-ABE scheme $\ABE$ is **CP-IND-CPA-secure** if for every polynomial $n = n(\secpar)$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{cp\text{-}cpa}}_{\ABE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cp\text{-}cpa}}_{\ABE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Selective Security

In both KP-ABE and CP-ABE, the **selective** variant requires the adversary to commit to the challenge ($x^*$ in KP-ABE, $f^*$ in CP-ABE) before $\Setup$ runs. If selectively secure schemes for a superpolynomial-size policy family (CP-ABE) or attribute family (KP-ABE) exist, selective security does not imply adaptive security — folklore. [[complexity-leveraging|Complexity leveraging]] [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]] converts one to the other at a loss factor of $2^{|\calU|}$ for KP-ABE, but the conversion for CP-ABE can incur exponential loss in the formula size.

#### Selective CP-ABE security

In the selective CP-IND-CPA game, $\calA$ outputs the challenge policy $f^*$ before $\Setup$ runs and then plays the [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA game]] with that challenge policy.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sel\text{-}cp\text{-}cpa}}_{\ABE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(f^*, \stA) \gets \calA(1^\secpar)$
\State $(\pp, \msk) \gets \Setup(1^\secpar, 1^n)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(x) := \KeyGen(\msk, x)$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(\pp, \stA)$
\Comment{$\calA$ may not have queried $\calO_{\mathrm{key}}(x)$ for $f^*(x) = 1$}
\State $c^* \gets \Enc(\pp, f^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{key}}(x)$ for $f^*(x) = 1$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A CP-ABE scheme $\ABE$ is **selectively CP-IND-CPA-secure** if for every polynomial $n = n(\secpar)$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sel\text{-}cp\text{-}cpa}}_{\ABE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sel\text{-}cp\text{-}cpa}}_{\ABE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, selectively secure CP-ABE denotes a $(1-\negl(\secpar))$-correct CP-ABE scheme in the syntax above with this property.

### Very selective security

In **very selective** CP-ABE security, $\calA$ fixes the challenge policy $f^*$ and all its key queries $x_1, \ldots, x_q$, with $f^*(x_j) = 0$ for every $j$, before $\Setup$ runs, and makes no further key queries — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]. In the game below $\calA$ also fixes the challenge messages before $\Setup$. For the message space $\bits$ the order makes no difference: an adversary that chooses $m_0 \ne m_1$ after seeing its keys is run against the fixed pair $(0, 1)$, with its guess flipped when it chooses $(1, 0)$, at the same advantage — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{vsel\text{-}cp\text{-}cpa}}_{\ABE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(f^*, x_1, \ldots, x_q, m_0, m_1, \stA) \gets \calA(1^\secpar)$
\Comment{$f^*(x_j) = 0$ for every $j \in [q]$, and $|m_0| = |m_1|$}
\State $(\pp, \msk) \gets \Setup(1^\secpar, 1^n)$; $b \getsr \bits$
\State $\sk_j \gets \KeyGen(\msk, x_j)$ for every $j \in [q]$
\State $c^* \gets \Enc(\pp, f^*, m_b)$
\State $b' \gets \calA(\pp, \sk_1, \ldots, \sk_q, c^*, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A CP-ABE scheme $\ABE$ is **very selectively CP-IND-CPA-secure** if for every polynomial $n = n(\secpar)$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{vsel\text{-}cp\text{-}cpa}}_{\ABE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{vsel\text{-}cp\text{-}cpa}}_{\ABE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, very selectively secure CP-ABE denotes a $(1-\negl(\secpar))$-correct CP-ABE scheme in the syntax above with this property.

# Variations

## Syntactic Duality of KP-ABE and CP-ABE

KP-ABE and CP-ABE are syntactically dual: swapping the roles of $\KeyGen$ and $\Enc$ converts one definition into the other. The correspondence is between definitions, not a transformation of schemes. If selectively secure schemes for a superpolynomial-size policy or attribute family exist, selective security does not imply adaptive security in either flavor — folklore; see [[no-selective-security-to-cp-abe-ind-cpa-security]] for CP-ABE.

## Large-Universe ABE

In **small-universe** ABE, all supported attributes are registered at $\Setup$ time and embedded into the public parameters; the universe size is bounded a priori. In **large-universe** constructions, attributes can be arbitrary strings not known at $\Setup$; keys and ciphertexts for new attributes can be created at any time without re-running $\Setup$. Large-universe constructions are necessary for real-world deployments where the set of possible attributes cannot be fixed in advance — [[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]].

## Policy Hiding

Standard KP-ABE and CP-ABE leak the access policy: in KP-ABE the policy $f$ is visible in the key, and in CP-ABE the policy $f^*$ is visible in the ciphertext. Hiding the policy from unauthorized parties requires additional techniques. [[inner-product-predicate-encryption|IPPE]] is a key stepping stone toward full policy hiding, since inner-product predicates are both expressive and attribute-hiding.

# Other results

- [[abe-to-fuzzy-ibe|ABE ⇒ Fuzzy IBE]]
- The [[bdh-to-abe-gpsw06|GPSW06 KP-ABE]] supports delegation of private keys, which subsumes [[hierarchical-identity-based-encryption|HIBE]] — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]]
- [[abe-to-be|ABE ⇒ BE]]
- [[bdh-to-abe-gpsw06|DBDH ⇒ Selectively secure ABE]]
- [[ggm-to-abe-bsw07|Bilinear pairing ⇒ CP-ABE]] (generic bilinear group model)
- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]]
- [[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]]
- [$k$-Linear assumption ⇒ ABE](k-linear-assumption-to-abe-rw13)
- Large-universe KP-ABE and CP-ABE in prime-order bilinear groups, selectively secure in the standard model under two $q$-type assumptions — [[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]]

<!-- BEGIN GENERATED participates-in 1d650ed0d88d -->

## Participates in

**Builds on Attribute-based encryption**

- [[abe-to-be|ABE ⇒ BE]]
- [[abe-to-fuzzy-ibe|ABE ⇒ Fuzzy IBE]]
- [[abe-to-ibe|ABE ⇒ IBE]]

**Produces Attribute-based encryption**

- [[bdh-to-abe-gpsw06|DBDH ⇒ Selectively secure ABE]] (via [[attribute-based-encryption#selective-security|Selective Security]])
- [[ggm-to-abe-bsw07|Bilinear pairing ⇒ CP-ABE]] (via [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-ABE: IND-CPA Security]])
- [[evasive-lwe-to-abe|Evasive circular LWE ⇒ ABE]]
- [[evasive-lwe-to-abe-wee22|Evasive LWE + Tensor LWE ⇒ Very selectively secure CP-ABE]] (via [[attribute-based-encryption#very-selective-security|Very selective security]])
- [$k$-Linear assumption ⇒ ABE](k-linear-assumption-to-abe-rw13)
- [[subexponential-modulus-lwe-to-abe-selective-security-gvw13|LWE with sub-exponential ratio ⇒ Selectively secure ABE for circuits (GVW)]] (via [[attribute-based-encryption#selective-security|Selective Security]])
- [[succinct-lwe-to-abe-wee25|Succinct LWE ⇒ ABE]]

**Barriers**

- [[no-selective-security-to-cp-abe-ind-cpa-security|No fixed-construction reduction from selective to adaptive CP-ABE security]] (via [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-ABE: IND-CPA Security]], [[attribute-based-encryption#selective-cp-abe-security|Selective CP-ABE security]])

<!-- END GENERATED participates-in -->
