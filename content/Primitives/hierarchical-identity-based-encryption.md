---
type: primitive
status: draft
aliases:
  - HIBE
  - Hierarchical identity-based encryption
title: Hierarchical identity-based encryption
id: hibe
variants:
  anonymous-hibe: "#anonymous-hibe"
  constant-depth-selective-hibe: "#constant-depth-selective-security"
  hibe-adaptive-security: "#ind-hibe-cpa-security"
  hibe-selective-security: "#ind-shibe-cpa-security-selective"
  hibe-subexp-selective-security: "#sub-exponential-ind-shibe-cpa-security"
  selective-node-bte: "#binary-tree-encryption"
---

# Hierarchical identity-based encryption

A **hierarchical identity-based encryption (HIBE)** scheme extends [[identity-based-encryption|IBE]] ([[hibe-to-ibe|HIBE ⇒ IBE]]) by organizing identities into a tree: an entity at depth $k$ holds an identity vector $\vec{\mathit{id}} = (\mathit{id}_1, \ldots, \mathit{id}_k)$ where $\mathit{id}_1$ is the root domain and each subsequent component refines the identity. Any node can delegate a decryption key to any of its children without involvement of the root KGC. HIBE models real-world key delegation in organizations and DNS-style identity hierarchies.

## Syntax

An HIBE scheme is a tuple of efficient algorithms $\HIBE = (\Setup, \Extract, \Delegate, \Enc, \Dec)$ with respect to alphabet $\Sigma$, message space $\calM$, and ciphertext space $\calC$, defined for every polynomially bounded maximum depth $d = d(\secpar) \ge 1$, which $\Setup$ takes as input. Identity vectors are tuples $\vec{\mathit{id}} = (\mathit{id}_1, \ldots, \mathit{id}_k)$ with $1 \le k \le d$ and each $\mathit{id}_i \in \Sigma$; $\Sigma^{\le d}$ denotes their set:

- $\Setup(1^\secpar, d) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ (including the depth bound $d$) and master secret key $\msk$,
- $\Extract(\msk, \vec{\mathit{id}}) \to \sk_{\vec{\mathit{id}}},$ is a (possibly randomized) algorithm that takes $\msk$ and an identity vector $\vec{\mathit{id}}$ of any depth, outputting a secret key $\sk_{\vec{\mathit{id}}}$,
- $\Delegate(\sk_{\vec{\mathit{id}}}, \mathit{id}') \to \sk_{\vec{\mathit{id}}\|\mathit{id}'},$ is a (possibly randomized) algorithm that takes a key for $\vec{\mathit{id}}$ and a child identity component $\mathit{id}' \in \Sigma$, outputting a key for the extended identity $\vec{\mathit{id}}\|\mathit{id}'$,
- $\Enc(\pp, \vec{\mathit{id}}, m) \to c,$ is a randomized algorithm that takes $\pp$, an identity vector $\vec{\mathit{id}}$, and $m \in \calM$, outputting $c \in \calC$,
- $\Dec(\sk_{\vec{\mathit{id}}'}, c) \to m,$ is a deterministic algorithm that takes a secret key and ciphertext, outputting $m \in \calM$ or $\bot$.

Correctness requires that a ciphertext for $\vec{\mathit{id}}$ be decrypted by $\sk_{\vec{\mathit{id}}}$, whether $\sk_{\vec{\mathit{id}}}$ is output by $\Extract(\msk, \vec{\mathit{id}})$ or obtained by a sequence of $\Delegate$ calls from the key of an ancestor of $\vec{\mathit{id}}$; a key for a proper prefix of $\vec{\mathit{id}}$ decrypts only after delegating down to $\vec{\mathit{id}}$. Note: keys derived via $\Delegate$ are typically less efficient (larger) than those from $\Extract$; in many constructions key size grows by $O(1)$ group elements per delegation level.

The alphabet $\Sigma$ contains $\bits^{\secpar}$, as the identity space of an [[identity-based-encryption|IBE]] scheme does. With a constant-size alphabet and constant depth there are only constantly many identity vectors, and one [[public-key-encryption|PKE]] key pair per vector, published together, meets the notion — standard. For every $\secpar$, the message space contains two distinct messages of the same length, which an efficient algorithm outputs given the public parameters; otherwise no efficient adversary need be able to submit $m_0 \ne m_1$, and IND-HIBE-CPA is vacuous — standard.

## Properties

### Correctness

An HIBE scheme $\HIBE$ is $(1-\varepsilon)$-**correct at depth** $d = d(\secpar)$ if for all $\secpar \in \NN$, $\vec{\mathit{id}} \in \Sigma^{\le d}$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\Extract(\msk, \vec{\mathit{id}}),\, \Enc(\pp, \vec{\mathit{id}}, m)) = m\right] \ge 1 - \varepsilon(\secpar),
$$

over $(\pp, \msk) \gets \Setup(1^\secpar, d)$ and the randomness of $\Extract$ and $\Enc$, and the same bound holds when the key for $\vec{\mathit{id}}$ is obtained instead by a sequence of $\Delegate$ calls from a key that $\Extract$ outputs for a prefix of $\vec{\mathit{id}}$. It is $(1-\negl(\secpar))$-**correct** if for every polynomially bounded $d = d(\secpar) \ge 1$ it is $(1-\varepsilon)$-correct at depth $d$ for some negligible $\varepsilon$, which may depend on $d$. When $\varepsilon = 0$ at every depth, $\HIBE$ is **perfectly correct**.

As an object, HIBE denotes a $(1-\negl(\secpar))$-correct, IND-HIBE-CPA-secure scheme; each security notion below denotes a $(1-\negl(\secpar))$-correct scheme with that security, except constant-depth selective security, which asks for correctness and security at constant depths only.

### IND-HIBE-CPA Security

The adaptive IND-HIBE-CPA game is similar to IBE but with a stronger admissibility constraint: since any key for a prefix $\vec{\mathit{id}}^*[1..k]$ ($k \le |\vec{\mathit{id}}^*|$) can be used to delegate down to $\sk_{\vec{\mathit{id}}^*}$, the adversary may not extract any ancestor (prefix) of the challenge identity, including $\vec{\mathit{id}}^*$ itself. An **admissible** adversary also outputs $\vec{\mathit{id}}^* \in \Sigma^{\le d}$ and $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$, since otherwise ciphertext length may reveal $b$; the selective games below have the same admissibility conditions.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{hibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, d)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\vec{\mathit{id}}) := \Extract(\msk, \vec{\mathit{id}})$
\State $(\vec{\mathit{id}}^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\vec{\mathit{id}})$ for $\vec{\mathit{id}}$ a prefix of $\vec{\mathit{id}}^*$; $m_0, m_1 \in \calM$, $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pp, \vec{\mathit{id}}^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\vec{\mathit{id}})$ for $\vec{\mathit{id}}$ a prefix of $\vec{\mathit{id}}^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HIBE scheme $\HIBE$ is **IND-HIBE-CPA-secure** if for every polynomially bounded $d = d(\secpar) \ge 1$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{hibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{hibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The prefix constraint is necessary because $\Delegate$ is publicly computable from an ancestor key.

### IND-sHIBE-CPA Security (Selective)

In the **selective** variant, the adversary commits to the challenge identity $\vec{\mathit{id}}^*$ before $\Setup$ runs.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{shibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\vec{\mathit{id}}^*, \stA) \gets \calA(1^\secpar, d)$
\Comment{$\calA$ commits to $\vec{\mathit{id}}^* \in \Sigma^{\le d}$ before seeing $\pp$}
\State $(\pp, \msk) \gets \Setup(1^\secpar, d)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\vec{\mathit{id}}) := \Extract(\msk, \vec{\mathit{id}})$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(\pp, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\vec{\mathit{id}})$ for $\vec{\mathit{id}}$ a prefix of $\vec{\mathit{id}}^*$; $m_0, m_1 \in \calM$, $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pp, \vec{\mathit{id}}^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\vec{\mathit{id}})$ for $\vec{\mathit{id}}$ a prefix of $\vec{\mathit{id}}^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HIBE scheme $\HIBE$ is **IND-sHIBE-CPA-secure** if for every polynomially bounded $d = d(\secpar) \ge 1$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{shibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{shibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. When $|\Sigma^{\le d}|$ is superpolynomial, selective security of a scheme does not imply its adaptive security ([[no-ind-shibe-cpa-security-selective-to-ind-hibe-cpa-security|No fixed-construction reduction from IND-sHIBE-CPA Security (Selective) to IND-HIBE-CPA Security]]), and guessing $\vec{\mathit{id}}^*$ recovers adaptive security only at a loss factor of $|\Sigma^{\le d}|$ ([[subexp-selective-hibe-to-adaptive-hibe|Sub-exponentially selective HIBE ⇒ adaptive HIBE]]) — folklore. For HIBE schemes with a checkability property on keys and ciphertexts, any simple black-box reduction proving adaptive security from a non-interactive assumption loses a factor exponential in $d$ — [[LW14 - Why Proving HIBE Systems Secure Is Difficult|LW14]]. An adaptively secure HIBE can be built from any selectively secure IBE ([[ind-sid-cpa-security-selective-to-hibe-gkr25|IND-sID-CPA Security (Selective) ⇒ HIBE]]) — [[GKR25 - A Note on Adaptive Security in Hierarchical Identity-Based Encryption|GKR25]].

#### Sub-exponential IND-sHIBE-CPA Security

An HIBE scheme $\HIBE$ is **sub-exponentially IND-sHIBE-CPA-secure** if there is a constant $\epsilon > 0$ such that for every polynomially bounded $d = d(\secpar) \ge 1$ and all sufficiently large $\secpar$, every admissible selective adversary $\calA$ of size at most $2^{\secpar^{\epsilon}}$ against $\Setup(1^\secpar, d)$ has $\Adv^{\mathrm{shibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar) \le 2^{-\secpar^{\epsilon}}$.

#### Constant-depth selective security

An HIBE scheme $\HIBE$ is **IND-sHIBE-CPA-secure at constant depth** if for every constant $d \ge 1$ it is $(1-\varepsilon)$-correct at depth $d$ for a negligible $\varepsilon$, and for all efficient admissible selective $\calA$ against $\Setup(1^\secpar, d)$, $\Adv^{\mathrm{shibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar)$ is negligible. Every constant is a polynomially bounded depth, so IND-sHIBE-CPA security implies it ([[hibe-selective-security-to-constant-depth-selective-hibe|Selectively secure HIBE ⇒ constant-depth selectively secure HIBE]]) — folklore.

# Variations

## Anonymous HIBE

A ciphertext hides the identity vector it was encrypted to: given two identity vectors of the same length and a message, no efficient adversary can tell to which vector the challenge ciphertext was encrypted, even with keys for every identity vector that is a prefix of neither. [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]] propose anonymous HIBE as an extension of [[identity-based-encryption#anonymous-ibe|anonymous IBE]]. The game is the hierarchical analogue of ANO-ID-CPA.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ano\text{-}hibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar, d)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\vec{\mathit{id}}) := \Extract(\msk, \vec{\mathit{id}})$
\State $(\vec{\mathit{id}}_0, \vec{\mathit{id}}_1, m, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}$ on a prefix of $\vec{\mathit{id}}_0$ or of $\vec{\mathit{id}}_1$; $|\vec{\mathit{id}}_0| = |\vec{\mathit{id}}_1|$, $m \in \calM$}
\State $c^* \gets \Enc(\pp, \vec{\mathit{id}}_b, m)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}$ on a prefix of $\vec{\mathit{id}}_0$ or of $\vec{\mathit{id}}_1$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An HIBE scheme $\HIBE$ is **ANO-HIBE-CPA-secure** if for every polynomially bounded $d = d(\secpar) \ge 1$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ano\text{-}hibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ano\text{-}hibe\text{-}cpa}}_{\HIBE,d,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The prefix restriction is necessary because a key for a prefix of $\vec{\mathit{id}}_0$ delegates to $\sk_{\vec{\mathit{id}}_0}$, which test-decrypts $c^*$. As an object, anonymous HIBE denotes a $(1-\negl(\secpar))$-correct scheme that is both IND-HIBE-CPA-secure and ANO-HIBE-CPA-secure ([[anonymous-hibe-to-hibe|Anonymous HIBE ⇒ HIBE]]).

## Binary tree encryption

A binary tree encryption (BTE) scheme of depth $\ell$ has as its nodes the strings $w \in \bits^{\le \ell}$, the root being the empty string $\epsilon$; every key is derived from the root key, and there is no extraction algorithm — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. It is a tuple of efficient algorithms $\mathsf{BTE} = (\KeyGen, \Delegate, \Enc, \Dec)$ with message space $\calM$:

- $\KeyGen(1^\secpar, \ell) \to (\pk, \sk_\epsilon)$, a randomized algorithm outputting a public key $\pk$ and the key $\sk_\epsilon$ of the root,
- $\Delegate(\pk, w, \sk_w) \to (\sk_{w0}, \sk_{w1})$, a randomized algorithm which, for $|w| < \ell$, takes the key of $w$ and outputs the keys of both children of $w$ (CHK03 call it Der),
- $\Enc(\pk, w, m) \to c$, a randomized algorithm encrypting $m \in \calM$ for a node $w \in \bits^{\le \ell}$,
- $\Dec(\pk, w, \sk_w, c) \to m$, a deterministic algorithm outputting $m \in \calM$ or $\bot$.

A BTE scheme is **correct** if $\Dec(\pk, w, \sk_w, \Enc(\pk, w, m)) = m$ with probability $1$ for all $(\pk, \sk_\epsilon)$ output by $\KeyGen(1^\secpar, \ell)$, all nodes $w$, all keys $\sk_w$ obtained from $\sk_\epsilon$ by $|w|$ applications of $\Delegate$, and all $m \in \calM$ — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].

### Selective-node security

The adversary names a target node $w^* = w^*_1 \cdots w^*_k \in \bits^{\le \ell}$ before $\KeyGen$ runs. It then receives $\pk$, the keys of the siblings of the nodes on the path from the root to $w^*$, including the sibling of $w^*$, and, if $k < \ell$, the keys of $w^* 0$ and $w^* 1$, all derived from $\sk_\epsilon$ by $\Delegate$ along that path; it names two messages and receives an encryption of one of them for $w^*$ — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. Writing $w^*_{\le i}$ for the prefix of length $i$ and $\bar{w}^*_i := 1 - w^*_i$, the sibling of $w^*_{\le i}$ is $w^*_{\le i-1} \bar{w}^*_i$. An admissible $\calA$ submits $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sn\text{-}cpa}}_{\mathsf{BTE},\ell,\calA}(\secpar)$}
\begin{algorithmic}
\State $(w^*, \stA) \gets \calA(1^\secpar, \ell)$; $k := |w^*|$; $b \getsr \bits$
\State $(\pk, \sk_\epsilon) \gets \KeyGen(1^\secpar, \ell)$
\For{$i = 0, \ldots, \min(k, \ell - 1)$}
\State $(\sk_{w^*_{\le i} 0}, \sk_{w^*_{\le i} 1}) \gets \Delegate(\pk, w^*_{\le i}, \sk_{w^*_{\le i}})$
\EndFor
\State $K := \{\sk_{w^*_{\le i-1} \bar{w}^*_i} : 1 \le i \le k\}$
\If{$k < \ell$}
\State $K := K \cup \{\sk_{w^* 0}, \sk_{w^* 1}\}$
\EndIf
\State $(m_0, m_1, \stA) \gets \calA(\pk, K, \stA)$
\State $c^* \gets \Enc(\pk, w^*, m_b)$
\State $b' \gets \calA(c^*, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A BTE scheme $\mathsf{BTE}$ is **selective-node secure** (SN-CPA-secure) if for all polynomially bounded $\ell = \ell(\secpar)$ and all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sn\text{-}cpa}}_{\mathsf{BTE},\ell,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sn\text{-}cpa}}_{\mathsf{BTE},\ell,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. The key of every node that is not a prefix of $w^*$ follows from $K$ by $\Delegate$; the key of a prefix of $w^*$ is withheld because it yields $\sk_{w^*}$ by $\Delegate$. As an object, BTE denotes a correct and selective-node-secure scheme.

# Other results

- [[hibe-to-ibe|HIBE ⇒ IBE]]
- [[ind-sid-cpa-security-selective-to-hibe-gkr25|IND-sID-CPA Security (Selective) ⇒ HIBE]]
- BBG05 achieves $O(1)$ ciphertext size and $O(d)$ key size — [[BBG05 - Hierarchical Identity Based Encryption with Constant Size Ciphertext|BBG05]]
- The first adaptive HIBE in the standard model under simple assumptions uses dual system encryption ([[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]]) — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]

<!-- BEGIN GENERATED participates-in be18bf4883ad -->

## Participates in

**Builds on Hierarchical identity-based encryption**

- [[anonymous-hibe-to-hibe|Anonymous HIBE ⇒ HIBE]] (via [[hierarchical-identity-based-encryption#anonymous-hibe|Anonymous HIBE]])
- [[hibe-adaptive-security-to-hibe|IND-HIBE-CPA-secure HIBE ⇔ HIBE]] (via [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA Security]])
- [[hibe-selective-security-to-constant-depth-selective-hibe|Selectively secure HIBE ⇒ constant-depth selectively secure HIBE]] (via [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA Security (Selective)]])
- [[hibe-selective-security-to-ind-sid-cpa|Selectively secure HIBE ⇒ Selectively secure IBE]] (via [[hierarchical-identity-based-encryption#constant-depth-selective-security|Constant-depth selective security]])
- [[hibe-subexp-selective-security-to-hibe-selective-security|Sub-exponentially selective HIBE ⇒ Selectively secure HIBE]] (via [[hierarchical-identity-based-encryption#sub-exponential-ind-shibe-cpa-security|Sub-exponential IND-sHIBE-CPA Security]])
- [[hibe-to-hibe-selective-security|HIBE ⇒ Selectively secure HIBE]]
- [[hibe-to-ibe|HIBE ⇒ IBE]]
- [[hibe-selective-security-to-forward-secure-pke-chk03|Selective-node-secure BTE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]] (via [[hierarchical-identity-based-encryption#binary-tree-encryption|Binary tree encryption]])
- [[subexp-selective-hibe-to-adaptive-hibe|Sub-exponentially selective HIBE ⇒ adaptive HIBE]] (via [[hierarchical-identity-based-encryption#sub-exponential-ind-shibe-cpa-security|Sub-exponential IND-sHIBE-CPA Security]])

**Produces Hierarchical identity-based encryption**

- [[anonymous-hibe-to-hibe|Anonymous HIBE ⇒ HIBE]]
- [[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]]
- [[dbdh-to-selective-node-bte-chk03|DBDH ⇒ Binary tree encryption (Canetti–Halevi–Katz)]] (via [[hierarchical-identity-based-encryption#binary-tree-encryption|Binary tree encryption]])
- [[hibe-adaptive-security-to-hibe|IND-HIBE-CPA-secure HIBE ⇔ HIBE]]
- [[hibe-selective-security-to-constant-depth-selective-hibe|Selectively secure HIBE ⇒ constant-depth selectively secure HIBE]] (via [[hierarchical-identity-based-encryption#constant-depth-selective-security|Constant-depth selective security]])
- [[hibe-subexp-selective-security-to-hibe-selective-security|Sub-exponentially selective HIBE ⇒ Selectively secure HIBE]] (via [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA Security (Selective)]])
- [[hibe-to-hibe-selective-security|HIBE ⇒ Selectively secure HIBE]] (via [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA Security (Selective)]])
- [[ind-sid-cpa-security-selective-to-hibe-gkr25|IND-sID-CPA Security (Selective) ⇒ HIBE]]
- [[lwe-to-hibe-selective-security-chkp10|LWE ⇒ Selectively secure HIBE (bonsai trees)]] (via [[hierarchical-identity-based-encryption#constant-depth-selective-security|Constant-depth selective security]])
- [[subexp-selective-hibe-to-adaptive-hibe|Sub-exponentially selective HIBE ⇒ adaptive HIBE]] (via [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA Security]])

**Barriers**

- [[no-ind-shibe-cpa-security-selective-to-ind-hibe-cpa-security|No fixed-construction reduction from IND-sHIBE-CPA Security (Selective) to IND-HIBE-CPA Security]] (via [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA Security]], [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA Security (Selective)]])

<!-- END GENERATED participates-in -->
