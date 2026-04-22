---
aliases:
  - IBE
  - Identity-based encryption
title: Identity-based encryption
---

# Identity-based encryption

An **identity-based encryption (IBE)** scheme allows a sender to encrypt to an arbitrary string identity (such as an email address) without requiring the recipient to distribute a public key in advance. A trusted key generation center (KGC) holds a master secret key and issues per-identity decryption keys on demand. IBE eliminates the need for a public-key infrastructure by replacing public keys with identities.

## Syntax

An IBE scheme is a tuple of efficient algorithms $\IBE = (\Setup, \Extract, \Enc, \Dec)$ with respect to identity space $\calI$, message space $\calM$, and ciphertext space $\calC$:

- $\Setup(1^\secpar) \to (\pp, \msk),$ is a randomized algorithm that outputs public parameters $\pp$ and a master secret key $\msk$,
- $\Extract(\msk, \mathit{id}) \to \sk_{\mathit{id}},$ is a (possibly randomized) algorithm that takes the master secret key $\msk$ and an identity $\mathit{id} \in \calI$, outputting a per-identity secret key $\sk_{\mathit{id}}$,
- $\Enc(\pp, \mathit{id}, m) \to c,$ is a randomized algorithm that takes $\pp$, an identity $\mathit{id} \in \calI$, and a message $m \in \calM$, outputting a ciphertext $c \in \calC$,
- $\Dec(\sk_{\mathit{id}}, c) \to m,$ is a deterministic algorithm that takes a secret key $\sk_{\mathit{id}}$ and ciphertext $c \in \calC$, outputting a message $m \in \calM$ or $\bot$ to indicate failure.

## Properties

### Correctness

An IBE scheme $\IBE$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $\mathit{id} \in \calI$, and $m \in \calM$,

$$
\Pr\!\left[\Dec(\Extract(\msk, \mathit{id}),\, \Enc(\pp, \mathit{id}, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\pp, \msk) \gets \Setup(1^\secpar)$ and the randomness of $\Extract$ and $\Enc$. When $\varepsilon = 0$, we say $\IBE$ is **perfectly correct**.

### IND-ID-CPA Security

In the **adaptive** IND-ID-CPA game, the adversary may query the key extraction oracle $\calO_{\mathrm{ext}}$ for any identity of its choice throughout both phases. The only constraint is admissibility: it may not extract a key for the challenge identity $\mathit{id}^*$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{id\text{-}cpa}}_{\IBE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\mathit{id}) := \Extract(\msk, \mathit{id})$
\State $(\mathit{id}^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(1^\secpar, \pp)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$}
\State $c^* \gets \Enc(\pp, \mathit{id}^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An IBE scheme $\IBE$ is **IND-ID-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{id\text{-}cpa}}_{\IBE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{id\text{-}cpa}}_{\IBE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The admissibility constraint is necessary: without it, $\calA$ trivially wins by extracting $\sk_{\mathit{id}^*}$ and decrypting.

### IND-sID-CPA Security (Selective)

In the **selective** variant, the adversary must commit to the challenge identity $\mathit{id}^*$ before the public parameters are generated. This is a strictly weaker notion than adaptive IND-ID-CPA.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sid\text{-}cpa}}_{\IBE,\calA}(\secpar)$}
\begin{algorithmic}
\State $\mathit{id}^* \gets \calA(1^\secpar)$
\Comment{$\calA$ commits to challenge identity before seeing $\pp$}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{ext}}(\mathit{id}) := \Extract(\msk, \mathit{id})$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{ext}}}(\pp)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$}
\State $c^* \gets \Enc(\pp, \mathit{id}^*, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{ext}}}(c^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An IBE scheme $\IBE$ is **IND-sID-CPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sid\text{-}cpa}}_{\IBE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sid\text{-}cpa}}_{\IBE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Any IND-ID-CPA-secure scheme is also IND-sID-CPA-secure; the converse requires a complexity-leveraging argument that incurs a polynomial security loss in $|\calI|$.

# Variations

## IND-ID-CCA Security

Analogously to [[public-key-encryption|PKE]], the CCA variant additionally provides the adversary with a decryption oracle $\calD(c) := \Dec(\sk_{\mathit{id}^*}, c)$ in both phases. The admissibility condition extends to: the adversary may not query $\calO_{\mathrm{ext}}(\mathit{id}^*)$, and may not query $\calD(c^*)$ after the challenge is issued.

# Other results

- IBE implies [[public-key-encryption|PKE]]: set the public key to $\pp$ and the per-user public key to $\mathit{id}$; the KGC plays the role of a CA but without issuing certificates
- IBE is generalized by [[hierarchical-identity-based-encryption|HIBE]], which adds a delegation algorithm allowing any identity to issue keys for its sub-identities
- IBE is generalized by [[fuzzy-identity-based-encryption|Fuzzy IBE]], which allows partial identity matching via a threshold overlap condition
- IBE is a special case of both [[attribute-based-encryption|KP-ABE]] and [[attribute-based-encryption|CP-ABE]] with singleton policies
- The first practical IBE construction uses Weil pairings and is CCA-secure in the random oracle model under CBDH — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]
- The first adaptive IBE in the standard model under simple assumptions uses the dual system encryption technique — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]
