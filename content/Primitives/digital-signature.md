---
type: primitive
status: draft
aliases:
  - DS
  - Signature
  - Digital signature
title: Digital signature
id: ds
variants:
  one-time-signature: "#hash-based-signatures"
  schnorr-identification-protocol: "#schnorr-signatures"
  schnorr-signature: "#schnorr-signatures"
  hash-and-sign-signature: "#lattice-based-signatures"
  xmss: "#hash-based-signatures"
  boneh-lynn-shacham-signature: "#bls-signatures"
  eddsa: "#schnorr-signatures"
  few-time-signature: "#hash-based-signatures"
---

# Digital signature

A **digital signature (DS)** scheme allows a signer holding a secret signing key to produce an unforgeable signature on a message, which anyone can verify using the corresponding public verification key. Digital signatures are the public-key analogue of [[message-authentication-code|MACs]].

## Syntax

A Digital Signature scheme is a tuple of efficient algorithms
$\DS = (\KeyGen, \Sign, \Vrfy)$ with respect to signing keyspace
$\calK_{\mathrm{sk}}$, verification (or public) keyspace $\calK_{\mathrm{pk}}$,
message space $\calM$, and signature space $\calS$:

- $\KeyGen(1^\secpar) \to (\sk, \vk),$ is a randomized algorithm which samples
  a signing key $\sk \in \calK_{\mathrm{sk}}$ and verification (or public)
  key $\vk \in \calK_{\mathrm{pk}}$,
- $\Sign(\sk, m) \to \sigma,$ is a (possibly) randomized algorithm which takes a
  signing key $\sk \in \calK_{\mathrm{sk}}$ and message $m \in \calM$,
  outputting signature $\sigma \in \calS$,
- $\Vrfy(\vk, m, \sigma) \to b,$ is a deterministic algorithm which takes a
  verification key $\vk \in \calK_{\mathrm{vk}},$ a message $m\in \calM,$ and
  a signature $\sigma\in\calS$, outputting a bit $b \in \bits$ indicating
  whether the signature is valid or not.

## Properties

### Correctness

A Digital Signature scheme $\DS = (\KeyGen, \Sign, \Vrfy)$ is
$(1-\varepsilon)$**-correct** if for all $m \in \calM$,

$$
  \Pr\!\left[\Vrfy(\vk, m, \Sign(\sk, m)) = 1\right] \ge 1-\varepsilon,
$$

over the randomness of $(\sk, \vk) \leftarrow \KeyGen(1^\secpar)$ and
possibly $\Sign.$

### Existential Unforgeability

The following is the **existential unforgeability under chosen
message attacks (EUF-CMA)** game. This security notion requires that an
adversary cannot find a message-signature pair $(\hat{m},\hat{\sigma})$ even
given oracle access to signatures on adversarially-chosen messages.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\eufcma}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$\hat{m}\in \calQ$}
\Comment{$\hat{m}$ cannot repeat}
\Return $0$
\EndIf
\Return $[\Vrfy(\vk,\hat{m},\hat{\sigma})]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $\sigma \gets \Sign(\sk,m)$
\State $\calQ \gets \calQ \cup \{m\}$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

A DS scheme $\DS$ is **EUF-CMA unforgeable** if for all efficient $\calA$,

$$
\Adv^{\eufcma}_{\DS,\calA}(\secpar) := \Pr\!\left[\Game^{\eufcma}_{\DS,\calA}(\secpar) = 1\right]
$$

is negligible.

### Strong Unforgeability

The following is the **strongly unforgeability under chosen
message attacks (SUF-CMA)** game. This security notion strenghtens the above
EUF-CMA notation and requires $\DS$ to prevent an adversary from "mauling"
the signature to produce a new signature for the same message. For example,
by rerandomizing the signature into another valid signature.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\sufcma}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$(\hat{m},\hat{\sigma})\in \calQ$}
\Comment{$(\hat{m},\hat{\sigma})$ cannot repeat}
\Return $0$
\EndIf
\Return $[\Vrfy(\vk,\hat{m},\hat{\sigma})]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $\sigma \gets \Sign(\sk,m)$
\State $\calQ \gets \calQ \cup \{(m, \sigma)\}$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

A DS scheme $\DS$ is **SUF-CMA unforgeable** if for all efficient $\calA$,

$$
\Adv^{\sufcma}_{\DS,\calA}(\secpar) := \Pr\!\left[\Game^{\sufcma}_{\DS,\calA}(\secpar) = 1\right]
$$

is negligible.

# Variations

## Schnorr signatures

Schnorr signatures are built from the **Schnorr identification protocol** — a three-message sigma protocol for proving knowledge of a discrete logarithm — compiled to a signature via the Fiat-Shamir transform. To sign $m$ with secret key $x$ (where $\pk = g^x$): sample $r \getsr \ZZ_p$, compute $R = g^r$, $c = H(R \| m)$, $s = r + cx \mod p$; the signature is $(R, s)$. Verification checks $g^s = R \cdot \pk^c$.

Schnorr signatures are **EUF-CMA secure** under the discrete logarithm assumption in the random oracle model — [[Sch91 - Efficient signature generation by smart cards|Sch91]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]. They are the basis for **EdDSA** (Ed25519, the standard in TLS, SSH, and Signal) and support efficient **multi-signatures** and **threshold signatures**.

## BLS signatures

BLS signatures (Boneh-Lynn-Shacham) use a bilinear pairing $e: \GG_1 \times \GG_2 \to \GG_T$ to achieve **unique, deterministic, and aggregatable** signatures. To sign $m$: output $\sigma = H(m)^{\sk} \in \GG_1$ (where $H: \bits^* \to \GG_1$ is a hash-to-curve function). Verification checks $e(\sigma, g_2) = e(H(m), \pk)$.

Key properties:

- **Deterministic**: no per-signature randomness needed
- **Short**: one group element ($\approx 48$ bytes on BLS12-381)
- **Aggregatable**: $n$ signatures on different messages can be aggregated into one signature verifiable with $n$ pairings
- [[co-cdh-to-ds|co-CDH ⇒ DS]]

BLS signatures are used in Ethereum 2.0 for validator attestations and threshold BLS is widely used in threshold signature protocols.

## Hash-based signatures

Hash-based signatures achieve **post-quantum security** from collision-resistant hash functions alone — no number-theoretic assumptions.

- [[hash-function-to-hash-based-signatures-lam79|Hash function ⇒ Hash-based signatures]]
- [[hash-function-to-hash-based-signatures-lam79|Hash function ⇒ Hash-based signatures]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|Hash function + Hash-based signatures ⇒ DS]]
- [[hash-function-to-hash-based-signatures|Hash function ⇒ Hash-based signatures]]
- [[hash-based-signatures-and-hash-based-signatures-to-ds|Hash-based signatures + Hash-based signatures ⇒ DS]]

Security reduces to second-preimage resistance and pseudorandomness of the underlying hash function — no lattice or number-theoretic assumptions.

## Lattice-based signatures

Lattice-based signatures achieve post-quantum security under LWE/SIS assumptions.

- [[lwe-and-sis-to-ds-ls15|LWE + SIS ⇒ DS]]
- [[ntru-to-ds|NTRU ⇒ DS]]
- [[sis-to-ds|SIS ⇒ DS]]

# Other results

- [[hash-function-to-hash-based-signatures-lam79|Hash function ⇒ Hash-based signatures]]
- [[hash-function-to-hash-based-signatures-lam79|Hash function ⇒ Hash-based signatures]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|Hash function + Hash-based signatures ⇒ DS]]
- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[ds-to-hash-function|DS ⇒ Hash function]]

<!-- BEGIN GENERATED participates-in 98a79d714c0e -->

## Participates in

**Builds on Digital signature**

- [[ds-to-hash-function|DS ⇒ Hash function]]

**Produces Digital signature**

- [[bdh-to-ds|BDH ⇒ DS]]
- [[bilinear-pairing-to-ds|Bilinear pairing ⇒ DS]]
- [[co-cdh-to-ds|co-CDH ⇒ DS]]
- [[dlog-to-ds-sch91|DLOG ⇒ DS]]
- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[fiat-shamir-and-schnorr-signatures-to-ds|Fiat-Shamir + Schnorr signatures ⇒ DS]]
- [[hash-based-signatures-and-hash-based-signatures-to-ds|Hash-based signatures + Hash-based signatures ⇒ DS]]
- [[hash-based-signatures-to-ds-mer89|Hash-based signatures ⇒ DS]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|Hash function + Hash-based signatures ⇒ DS]]
- [[hash-function-and-io-to-ds-sw14|Hash function + iO ⇒ DS]]
- [[hash-function-to-ds|Hash function ⇒ DS]]
- [[id-and-rom-to-ds|ID + ROM ⇒ DS]]
- [[isis-inhomogeneous-sis-to-ds-gpv08|ISIS (Inhomogeneous SIS) ⇒ DS]]
- [[lwe-and-sis-to-ds-ls15|LWE + SIS ⇒ DS]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[module-sis-to-ds|Module-SIS ⇒ DS]]
- [[ntru-to-ds|NTRU ⇒ DS]]
- [[rom-and-zkp-to-ds-fs86|ROM + ZKP ⇒ DS]]
- [[sis-to-ds|SIS ⇒ DS]]
- [[strong-rsa-to-ds|Strong RSA ⇒ DS]]

**Barriers**

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No reduction from Fiat-Shamir + Hash function to DS]]

<!-- END GENERATED participates-in -->
