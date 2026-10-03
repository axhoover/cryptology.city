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
  one-time-signature: "#one-time-signatures"
  schnorr-signature: "#schnorr-signatures"
  hash-and-sign-signature: "#lattice-based-signatures"
  boneh-lynn-shacham-signature: "#bls-signatures"
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

Schnorr signatures are built from the **[[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]]** — a three-message sigma protocol for proving knowledge of a discrete logarithm — compiled to a signature via the Fiat-Shamir transform. For a generator $g$ of a group of prime order $p$, to sign $m$ with secret key $x$ (where $\pk = g^x$): sample $r \getsr \ZZ_p$, compute $R = g^r$, $c = H(R \| m)$, $s = r + cx \mod p$; the signature is $(R, s)$. Verification checks $g^s = R \cdot \pk^c$.

Schnorr signatures ([[Sch91 - Efficient signature generation by smart cards|Sch91]], via [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]) are **EUF-CMA secure** under the discrete logarithm assumption in the random oracle model — [[PS96 - Security Proofs for Signature Schemes|PS96]], [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. They are the basis for **EdDSA** (e.g. Ed25519) — [[BDLSY11 - High-Speed High-Security Signatures|BDLSY11]]. They support efficient **multi-signatures** and **threshold signatures**.

## BLS signatures

BLS signatures (Boneh-Lynn-Shacham) [[BLS01 - Short Signatures from the Weil Pairing|BLS01]] use a bilinear pairing $e: \GG_1 \times \GG_2 \to \GG_T$ to achieve **unique, deterministic, and aggregatable** signatures. To sign $m$: output $\sigma = H(m)^{\sk} \in \GG_1$ (where $H: \bits^* \to \GG_1$ is a hash-to-curve function). Verification checks $e(\sigma, g_2) = e(H(m), \pk)$.

Key properties:

- **Deterministic**: no per-signature randomness needed
- **Short**: one group element ($\approx 48$ bytes on BLS12-381)
- **Aggregatable**: $n$ signatures on distinct messages can be aggregated into one signature verifiable with $n+1$ pairings, checking $e(\sigma, g_2) = \prod_{i=1}^n e(H(m_i), \pk_i)$ — Boneh, Gentry, Lynn, Shacham (EUROCRYPT 2003)
- [[co-cdh-to-ds|co-CDH ⇒ DS]]

BLS signatures are used in Ethereum 2.0 for validator attestations and threshold BLS is widely used in threshold signature protocols.

## Hash-based signatures

Hash-based signatures need no number-theoretic or lattice assumption: one-time signatures follow from OWF — [[Lam79 - Constructing digital signatures from a one way function|Lam79]] — and many-time signatures from OWF — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].

- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]]
- [[hash-function-to-hash-based-signatures|Hash function + PRF ⇒ DS (XMSS)]]
- SPHINCS+ is stateless: a hypertree of XMSS-style Merkle trees authenticates the keys of the few-time signature FORS at its leaves — [[BHK+19 - The SPHINCS+ Signature Framework|BHK+19]]

### One-time signatures

A one-time signature scheme is EUF-CMA secure against adversaries that make at most one signing query.

- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]

## Lattice-based signatures

Lattice-based signatures achieve post-quantum security under LWE/SIS assumptions.

- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[ntru-to-ds|NTRU + NTRU-SIS ⇒ DS]]
- [[sis-to-ds|SIS ⇒ DS]]

# Other results

- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]]
- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[ds-to-hash-function|DS ⇒ OWF]]

<!-- BEGIN GENERATED participates-in 434f3d4abd8a -->

## Participates in

**Builds on Digital signature**

- [[ds-to-hash-function|DS ⇒ OWF]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]] (via [[digital-signature#one-time-signatures|one-time-signature]])

**Produces Digital signature**

- [[co-cdh-to-ds|co-CDH ⇒ DS]]
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]] (via [[digital-signature#schnorr-signatures|schnorr-signature]])
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]] (via [[digital-signature#bls-signatures|boneh-lynn-shacham-signature]])
- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]] (via [[digital-signature#schnorr-signatures|schnorr-signature]])
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]]
- [[hash-function-and-io-to-ds-sw14|OWF + iO ⇒ DS]]
- [[hash-function-to-ds|OWF ⇒ DS]]
- [[hash-function-to-hash-based-signatures|Hash function + PRF ⇒ DS (XMSS)]]
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]] (via [[digital-signature#one-time-signatures|one-time-signature]])
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[ntru-to-ds|NTRU + NTRU-SIS ⇒ DS]]
- [[sis-to-ds|SIS ⇒ DS]]
- [[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]]

**Barriers**

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]

<!-- END GENERATED participates-in -->
