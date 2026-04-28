---
aliases:
  - DS
  - Signature
  - Digital signature
title: Digital signature
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
- $\Sign(\sk, m) \to c,$ is a (possibly) randomized algorithm which takes a
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
  \Pr[\Vrfy(\vk, m, \Sign(\sk, m)) = 1] \ge 1-\varepsilon,
$$

over the randomness of $(\sk, \vk) \leftarrow \KeyGen(1^\secpar)$ and
possibly $\Sign.$

### Existential Unforgeability

The following is the **existential unforgeability under chosen
message attacks (EUF-CMA)** game. This security notion requires that an
adversary cannot find a message signature pair $(\hat{m},\hat{\sigma})$ even
given many samples

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
\Adv^{\eufcma}_{\DS,\calA}(\secpar) := \Pr[\Game^{\eufcma}_{\DS,\calA}(\secpar) = 1]
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

A DS scheme $\DS$ is **SU-CMA unforgeable** if for all efficient $\calA$,

$$
\Adv^{\sufcma}_{\DS,\calA}(\secpar) := \Pr[\Game^{\sufcma}_{\DS,\calA}(\secpar) = 1]
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
- **Security**: EUF-CMA under the co-CDH assumption in the random oracle model

BLS signatures are used in Ethereum 2.0 for validator attestations and threshold BLS is widely used in threshold signature protocols.

## Hash-based signatures

Hash-based signatures achieve **post-quantum security** from collision-resistant hash functions alone — no number-theoretic assumptions.

- **Lamport signatures** (one-time): sign one bit per hash chain; $O(\secpar)$-size signatures, keys usable only once — [[Lam79 - Constructing digital signatures from a one way function|Lam79]]
- **XMSS** (eXtended Merkle Signature Scheme): stateful many-time scheme; uses a Merkle tree of Lamport/Winternitz one-time keys; standardized in RFC 8391
- **SPHINCS+**: stateless hash-based signatures; uses a hyper-tree of XMSS instances and a few-time signature at the leaves; standardized by NIST as SLH-DSA (FIPS 205); signatures are $\sim 8$–50 KB

Security reduces to second-preimage resistance and pseudorandomness of the underlying hash function — no lattice or number-theoretic assumptions.

## Lattice-based signatures

Lattice-based signatures achieve post-quantum security under LWE/SIS assumptions.

- **Dilithium / ML-DSA** (FIPS 204): NIST post-quantum standard; based on Module LWE and Module SIS; "Fiat-Shamir with aborts" paradigm — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]
- **Falcon**: based on NTRU lattices; smaller signatures than Dilithium ($\sim 666$ bytes) but more complex to implement securely
- **GPV signatures**: hash-and-sign paradigm using trapdoor lattice sampling; security in the ROM from SIS — standard

# Other results

- [[hash-function|OWFs]] imply one-time digital signatures via Lamport's scheme — [[Lam79 - Constructing digital signatures from a one way function|Lam79]]
  - Lamport signatures are single-use; a single key pair signs at most one message securely
- Many-time signatures from OWFs are obtained by authenticating a collection of one-time verification keys using a Merkle hash tree, giving $O(\secpar)$-size signatures with a $\poly(\secpar)$-size public key — [[Mer89 - A Certified Digital Signature|Mer89]]
- The foundational EUF-CMA security definition was introduced alongside the first construction of a many-time signature scheme secure under adaptive chosen-message attacks, based on factoring — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]
- Digital signatures imply [[hash-function|OWFs]]: if signing is hard to forge, the signing algorithm is a one-way function (knowing the message and signature reveals nothing useful about the key)
