---
type: primitive
status: draft
aliases:
  - IBS
  - Identity-based signature
  - Identity-based signatures
title: Identity-based signature
id: identity-based-signature
---

# Identity-based signature

An identity-based signature scheme is a signature scheme in which a user's verification key is its identity string: an authority holding a master secret key issues each identity its signing key, and signatures verify under the identity and the authority's master public key — [[Sha84 - Identity-Based Cryptosystems and Signature Schemes|Sha84]].

## Syntax

An identity-based signature scheme is a tuple of efficient algorithms $\Pi = (\Setup, \Extract, \Sign, \Vrfy)$ with respect to identity space $\calI$ and message space $\calM$ — [[BNN04 - Security Proofs for Identity-Based Identification and Signature Schemes|BNN04]]:

- $\Setup(1^\secpar) \to (\mpk, \msk)$, a randomized algorithm that outputs a master public key $\mpk$ and a master secret key $\msk$,
- $\Extract(\msk, \mathit{id}) \to \sk_{\mathit{id}}$, a (possibly randomized) algorithm that outputs a signing key for the identity $\mathit{id} \in \calI$,
- $\Sign(\sk_{\mathit{id}}, m) \to \sigma$, a (possibly randomized) algorithm that outputs a signature on $m \in \calM$,
- $\Vrfy(\mpk, \mathit{id}, m, \sigma) \to b$, a deterministic algorithm outputting a bit $b \in \bits$.

## Properties

### Correctness

An identity-based signature scheme $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\mathit{id} \in \calI$ and $m \in \calM$,

$$
\Pr\!\left[\Vrfy(\mpk, \mathit{id}, m, \Sign(\sk_{\mathit{id}}, m)) = 1\right] \ge 1 - \varepsilon,
$$

over the randomness of $(\mpk, \msk) \gets \Setup(1^\secpar)$, $\sk_{\mathit{id}} \gets \Extract(\msk, \mathit{id})$ and $\Sign$. When $\varepsilon = 0$, $\Pi$ is **perfectly correct**.

### Existential unforgeability

The adversary receives $\mpk$, may obtain the signing key of any identity, and has a signing oracle for every identity; each identity's key is extracted once and reused. It wins with a valid signature on a message $m^*$ for an identity $\mathit{id}^*$ whose key it never obtained, provided it never asked for a signature on $m^*$ by $\mathit{id}^*$ — [[BNN04 - Security Proofs for Identity-Based Identification and Signature Schemes|BNN04]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{euf-id-cma}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\mpk, \msk) \gets \Setup(1^\secpar)$; $C \gets \{\}$; $\calQ \gets \{\}$
\State $(\mathit{id}^*, m^*, \sigma^*) \gets \calA^{\calO_{\Extract}, \calO_{\Sign}}(1^\secpar, \mpk)$
\If{$\mathit{id}^* \in C$ or $(\mathit{id}^*, m^*) \in \calQ$}
\Return $0$
\EndIf
\Return $[\Vrfy(\mpk, \mathit{id}^*, m^*, \sigma^*)]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\Extract}(\mathit{id})$}
\begin{algorithmic}
\If{$\sk_{\mathit{id}}$ is undefined}
\State $\sk_{\mathit{id}} \gets \Extract(\msk, \mathit{id})$
\EndIf
\State $C \gets C \cup \{\mathit{id}\}$
\Return $\sk_{\mathit{id}}$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\Sign}(\mathit{id}, m)$}
\begin{algorithmic}
\If{$\sk_{\mathit{id}}$ is undefined}
\State $\sk_{\mathit{id}} \gets \Extract(\msk, \mathit{id})$
\EndIf
\State $\calQ \gets \calQ \cup \{(\mathit{id}, m)\}$
\Return $\Sign(\sk_{\mathit{id}}, m)$
\end{algorithmic}
\end{algorithm}
```

An identity-based signature scheme $\Pi$ is **EUF-ID-CMA unforgeable** if for all efficient $\calA$,

$$
\Adv^{\text{euf-id-cma}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\text{euf-id-cma}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible.

# Other results

- Identity-based signatures were proposed together with identity-based encryption, with a signature scheme based on RSA — [[Sha84 - Identity-Based Cryptosystems and Signature Schemes|Sha84]].
- Every EUF-CMA [[digital-signature|signature scheme]] yields an EUF-ID-CMA identity-based signature scheme without random oracles, by certifying a fresh key pair for each identity under the master key ([[ds-to-identity-based-signature-bnn04|DS ⇒ IBS]]) — [[BNN04 - Security Proofs for Identity-Based Identification and Signature Schemes|BNN04]].
- Conversely, an identity-based signature scheme with one identity fixed is a signature scheme with verification key $\mpk$ — folklore.

<!-- BEGIN GENERATED participates-in 31a59c3fcb64 -->

## Participates in

**Produces Identity-based signature**

- [[ds-to-identity-based-signature-bnn04|DS ⇒ IBS (certificates)]]

<!-- END GENERATED participates-in -->
