---
type: primitive
status: draft
aliases:
  - DS
  - Signature
  - Digital signature
  - Signature scheme
title: Digital signature
id: ds
variants:
  one-time-signature: "#one-time-signatures"
  strong-one-time-signature: "#strong-one-time-signatures"
  schnorr-signature: "#schnorr-signatures"
  hash-and-sign-signature: "#hash-and-sign-signatures"
  boneh-lynn-shacham-signature: "#bls-signatures"
  waters-signature: "#waters-signatures"
  eddsa: "#eddsa"
  edl-signature: "#edl-signatures"
  katz-wang-signature: "#katz-wang-signatures"
  aggregate-signature: "#aggregate-signatures"
  structure-preserving-signature: "#structure-preserving-signatures"
  short-structure-preserving-signature: "#optimally-short-structure-preserving-signatures"
  one-time-quantum-public-key-signature: "#one-time-signatures-with-quantum-public-keys"
  post-quantum-ds: "#security-against-quantum-adversaries"
  nonadaptive-post-quantum-ds: "#nonadaptive-queries"
  ds-arbitrary-length: "#arbitrary-length-messages"
  ds-fixed-length: "#fixed-length-messages"
  selective-ds: "#selective-unforgeability"
  suf-cma-ds: "#strong-unforgeability"
  bounded-stateful-ds: "#stateful-signatures"
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
  verification key $\vk \in \calK_{\mathrm{pk}},$ a message $m\in \calM,$ and
  a signature $\sigma\in\calS$, outputting a bit $b \in \bits$ indicating
  whether the signature is valid or not.

## Properties

### Correctness

A Digital Signature scheme $\DS = (\KeyGen, \Sign, \Vrfy)$ is
$(1-\varepsilon)$**-correct** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
  \Pr\!\left[\Vrfy(\vk, m, \Sign(\sk, m)) = 1\right] \ge 1-\varepsilon,
$$

over the randomness of $(\sk, \vk) \leftarrow \KeyGen(1^\secpar)$ and
possibly $\Sign.$ When $\varepsilon = 0$, $\DS$ is **perfectly correct**.

### Existential Unforgeability

In the **existential unforgeability under chosen-message attack (EUF-CMA)** game, $\calA$ receives $\vk$ and a signing oracle $\calO$, and wins with a valid pair $(\hat{m},\hat{\sigma})$ for a message $\hat{m}$ it never submitted to $\calO$ — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]], as credited by [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]] (Section 2.2). Without the restriction on $\hat{m}$, $\calA$ wins with probability at least $1-\varepsilon$ by querying $\calO(m)$ and outputting $(m, \sigma)$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\eufcma}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$\hat{m}\in \calQ$}
\Comment{$\hat{m}$ must not have been queried}
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

The **strong unforgeability under chosen-message attack (SUF-CMA)** game strengthens EUF-CMA: $\calQ$ records message–signature pairs, and $\calA$ wins with any valid pair $(\hat{m},\hat{\sigma})$ that $\calO$ did not return, including a new signature on a message it queried. Without the restriction on $(\hat{m},\hat{\sigma})$, $\calA$ wins with probability at least $1-\varepsilon$ by outputting a pair that $\calO$ returned.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\sufcma}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$(\hat{m},\hat{\sigma})\in \calQ$}
\Comment{$(\hat{m},\hat{\sigma})$ must not have been returned by $\calO$}
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

is negligible. A winning EUF-CMA output is a pair that $\calO$ never returned, so a SUF-CMA-unforgeable scheme is EUF-CMA-unforgeable with no loss ([[suf-cma-ds-to-ds|SUF-CMA DS ⇒ DS]]) — folklore. Schemes whose signatures re-randomize publicly, such as [[#Waters signatures|Waters signatures]], are not SUF-CMA-unforgeable, and neither is [[#ECDSA|ECDSA]] — standard.

As an object, a DS scheme denotes a $(1-\negl(\secpar))$-[[#Correctness|correct]], [[#Existential Unforgeability|EUF-CMA-unforgeable]] scheme whose message space $\calM_\secpar$ is **non-trivial**: for every $\secpar$ it contains two distinct messages that an efficient algorithm outputs on input $1^\secpar$, or on input $\vk$ when the message space depends on the key, in which case correctness is required for the messages so computed. A **SUF-CMA DS** denotes a $(1-\negl(\secpar))$-correct, SUF-CMA-unforgeable scheme with a non-trivial message space, as for DS. Without correctness, $\Vrfy := 0$ meets EUF-CMA and SUF-CMA — standard.

# Variations

## Schnorr signatures

Schnorr signatures are built from the **[[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]]** — a three-message [[sigma-protocol|sigma protocol]] for proving knowledge of a discrete logarithm — compiled to a signature via the Fiat-Shamir transform ([[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]]). For a generator $g$ of a group of prime order $p$, to sign $m$ with secret key $x$ (where $\pk = g^x$): sample $r \getsr \ZZ_p$, compute $R = g^r$, $c = H(R \| m)$ with $H : \bits^* \to C$ for a challenge space $C \subseteq \ZZ_p$ with $1/|C|$ negligible ($C = \ZZ_p$ allowed), as for the [[identification-scheme#schnorr-identification-protocol|identification protocol]], and $s = r + cx \mod p$; the signature is $(R, s)$. Verification checks $g^s = R \cdot \pk^c$.

Schnorr signatures ([[Sch91 - Efficient signature generation by smart cards|Sch91]], via [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]) are **EUF-CMA secure** under the [[discrete-logarithm|discrete logarithm assumption]] in the [[random-oracle-model|random oracle model]] ([[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]) — [[PS96 - Security Proofs for Signature Schemes|PS96]], [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. They support efficient **multi-signatures** whose signatures verify as Schnorr signatures, with the key included in the hash, under an aggregate public key ([[multi-signature#musig|MuSig]], [[multi-signature#musig2|MuSig2]]) — [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]], [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]], and [[threshold-signature|threshold signatures]] whose output is a Schnorr signature with the public key included in the hash ([[threshold-signature#frost|FROST]]) — [[KG20 - FROST Flexible Round-Optimized Schnorr Threshold Signatures|KG20]]. Blinding the signer's commitment and the challenge gives [[blind-signature#blind-schnorr-signatures|blind Schnorr signatures]], analysed by [[Sch01 - Security of Blind Discrete Log Signatures against Interactive Attacks|Sch01]] and [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

For groups with compact encodings, such as elliptic-curve groups, two properties of the hash function, random-prefix preimage resistance and random-prefix second-preimage resistance, are necessary for the security of Schnorr signatures and are claimed sufficient in the generic group model; collision resistance is not among them — [[NSW09 - Hash Function Requirements for Schnorr Signatures|NSW09]]. The sufficiency theorem needs a further condition on how group elements are encoded as bit strings: a defective encoding of curve points meets its hypotheses while making Schnorr signatures insecure — [[Bro15 - A Flaw in a Theorem About Schnorr Signatures|Bro15]].

### EdDSA

EdDSA works in the subgroup of prime order $L$ generated by a base point $B$ of a twisted Edwards curve, written additively, with a hash function $H$ (SHA-512 for Ed25519). The secret key is a seed $k$ with $H(k) = (h, \mathit{prefix})$, from which a clamped scalar $a$ is read off $h$; the public key is $A = aB$. To sign $m$, set $r = H(\mathit{prefix} \| m) \bmod L$, $R = rB$ and $S = r + H(R \| A \| m)\, a \bmod L$, and output $(R, S)$. Verification checks $SB = R + H(R \| A \| m)\, A$, or the same equation multiplied by the curve's cofactor — [[BDLSY11 - High-Speed High-Security Signatures|BDLSY11]]. EdDSA is the Schnorr scheme with the public key included in the hash and nonces derived deterministically from the secret key and the message — standard.

A nonce must never sign two messages. If $(R, S_1)$ and $(R, S_2)$ are signatures on $m_1$ and $m_2$ with the same $r$, and their challenges $c_i = H(R \| A \| m_i)$ satisfy $c_1 \not\equiv c_2 \pmod L$, then $S_1 - S_2 \equiv (c_1 - c_2)\, a \pmod L$, so $a \equiv (S_1 - S_2)(c_1 - c_2)^{-1} \pmod L$; knowing $a \bmod L$, anyone signs any message with a nonce of its choice, since verification checks only $SB = R + H(R \| A \| m)\, A$ — standard. A nonce computable from public data fails in the same way: one signature $(R, S)$ with challenge $c \not\equiv 0 \pmod L$ gives $a \equiv (S - r)\, c^{-1} \pmod L$ — standard. Deriving $r$ from the secret $\mathit{prefix}$ and $m$ rules out both: signing a message twice repeats the whole signature, two messages share a nonce only if $H(\mathit{prefix} \| m_1) \equiv H(\mathit{prefix} \| m_2) \pmod L$, and signing consumes no fresh randomness, which protects against signing with bad randomness, whose effects can range up to full key compromise — [[JL17 - Edwards-Curve Digital Signature Algorithm (EdDSA)|JL17]] (Sections 3.3 and 8.2).

## BLS signatures

BLS signatures (Boneh-Lynn-Shacham) [[BLS01 - Short Signatures from the Weil Pairing|BLS01]] use a bilinear pairing $e: \GG_1 \times \GG_2 \to \GG_T$ to achieve **unique** and **deterministic** signatures. To sign $m$: output $\sigma = H(m)^{\sk} \in \GG_1$ (where $H: \bits^* \to \GG_1$ is a hash-to-curve function, $g_2$ generates $\GG_2$, $\sk \getsr \ZZ_p$, and $\pk = g_2^{\sk}$). Verification checks $e(\sigma, g_2) = e(H(m), \pk)$.

Key properties:

- **Short**: one group element of $\GG_1$ — [[BLS01 - Short Signatures from the Weil Pairing|BLS01]]
- **Aggregatable**: $n$ signatures on distinct messages can be aggregated into one signature verifiable with $n+1$ pairings, checking $e(\sigma, g_2) = \prod_{i=1}^n e(H(m_i), \pk_i)$ — [[BGLS03 - Aggregate and Verifiably Encrypted Signatures from Bilinear Maps|BGLS03]]
- [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]]

In [[threshold-signature#threshold-bls|threshold BLS]], any $t+1$ signature shares $H(m)^{x_i}$, where $x_i = f(i)$ for a polynomial $f$ of degree $t$ with $f(0) = \sk$, combine by Lagrange interpolation in the exponent into the BLS signature $H(m)^{\sk}$ — [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]].

## Aggregate signatures

An aggregate signature scheme is a DS scheme $(\KeyGen, \Sign, \Vrfy)$ with two further algorithms. $\Agg((\pk_1, m_1, \sigma_1), \ldots, (\pk_n, m_n, \sigma_n)) \to \sigma$ combines $n$ signatures, by possibly different signers on possibly different messages, into one, and $\AggVrfy((\pk_1, m_1), \ldots, (\pk_n, m_n), \sigma) \to b$ checks an aggregate. Restrictions such as pairwise-distinct messages belong to a scheme's $\AggVrfy$, not to the game. In the **aggregate chosen-key model** the adversary gets one honest key $\pk^*$ and a signing oracle for it, chooses every other key itself with no registration, and wins with an aggregate that verifies on a list whose first entry is $(\pk^*, m_1)$ for a message $m_1$ it never queried — [[BGLS03 - Aggregate and Verifiably Encrypted Signatures from Bilinear Maps|BGLS03]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{agg}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk^*, \pk^*) \gets \KeyGen(1^\secpar)$; $\calQ \gets \{\}$
\State $((\pk_i, m_i)_{i \le n}, \sigma) \gets \calA^{\calO}(1^\secpar, \pk^*)$
\Comment{$\pk_2, \ldots, \pk_n$ are arbitrary}
\If{$\pk_1 \ne \pk^*$ or $m_1 \in \calQ$}
\Return $0$
\EndIf
\Return $[\AggVrfy((\pk_i, m_i)_{i \le n}, \sigma)]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $\sigma \gets \Sign(\sk^*, m)$
\State $\calQ \gets \calQ \cup \{m\}$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

An aggregate signature scheme $\Pi$ is **unforgeable in the aggregate chosen-key model** if for all efficient $\calA$,

$$
\Adv^{\mathrm{agg}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{agg}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible.

An aggregate signature scheme $\Pi$ is **correct** if for every polynomial $n = n(\secpar) \ge 1$ and all pairwise-distinct $m_1, \ldots, m_n \in \calM$,

$$
\Pr\!\left[\AggVrfy\big((\pk_i, m_i)_{i \le n}, \Agg((\pk_i, m_i, \sigma_i)_{i \le n})\big) = 1\right] \ge 1 - \negl(\secpar),
$$

over $(\sk_i, \pk_i) \gets \KeyGen(1^\secpar)$, $\sigma_i \gets \Sign(\sk_i, m_i)$ and the coins of $\Agg$. As an object, an aggregate signature scheme denotes a correct scheme that is unforgeable in the aggregate chosen-key model. Without correctness, an $\AggVrfy$ that rejects every list meets the game — standard.

## Waters signatures

In a [[pairings#type-1|symmetric bilinear group]] $(\GG, \GG_T, p, g, e)$, the Waters scheme for $n$-bit messages has $\vk = (g, g_1 = g^{\alpha}, g_2, u', u_1, \ldots, u_n)$ with $\alpha \getsr \ZZ_p$ and $g_2, u', u_i \getsr \GG$, and $\sk = g_2^{\alpha}$. With $U(m) = u' \prod_{i : m_i = 1} u_i$, $\Sign(\sk, m)$ samples $r \getsr \ZZ_p$ and outputs $(\sigma_1, \sigma_2) = (g_2^{\alpha} U(m)^r, g^r)$, and $\Vrfy(\vk, m, \sigma)$ accepts iff $e(\sigma_1, g) = e(g_1, g_2) \cdot e(U(m), \sigma_2)$ — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]]. Signatures re-randomize publicly: for $t \getsr \ZZ_p$, $(\sigma_1 U(m)^t, \sigma_2 g^t)$ is a uniformly random valid signature on $m$ — standard.

## Tight Diffie-Hellman signatures

Signatures whose security reduces tightly, without forking, to a Diffie–Hellman problem in a group of prime order $p$, with a hash modeled as a random oracle ([[prime-order-cdh-to-edl-signature-gj03|Prime-order CDH ⇒ EDL signatures]], [[prime-order-ddh-to-katz-wang-signature-kw03|Prime-order DDH ⇒ Katz–Wang signatures]]).

### EDL signatures

The public key is $y = g^x$. To sign $m$, sample a salt $r \getsr \bits^{k}$, for a salt length $k = k(\secpar)$ with $2^{-k}$ negligible, set $h = H(m, r) \in \GG$ and $z = h^x$, and output $(z, r, \pi)$, where $\pi$ is a Fiat–Shamir Chaum–Pedersen proof that $\log_g y = \log_h z$ whose challenge lies in a challenge space $C \subseteq \ZZ_p$ with $1/|C|$ negligible, as for [[#Schnorr signatures|Schnorr signatures]] — [[GJ03 - A Signature Scheme as Secure as the Diffie-Hellman Problem|GJ03]].

TODO: confirm against [[GJ03 - A Signature Scheme as Secure as the Diffie-Hellman Problem|GJ03]] and its journal version [[GJKW07 - Efficient Signature Schemes with Tight Reductions to the Diffie-Hellman Problems|GJKW07]] the salt length $k$ and the exact additive term of the tight reduction from a signing salt colliding with an earlier $H$-query.

### Katz-Wang signatures

The public key is $\pk = (g, h, y_1, y_2)$ with $y_1 = g^x$ and $y_2 = h^x$. To sign $m$, sample $r \getsr \ZZ_p$ and output $(c, s)$ with $c = H(\pk, g^r, h^r, m) \in C$, for a challenge space $C \subseteq \ZZ_p$ with $1/|C|$ negligible as for [[#Schnorr signatures|Schnorr signatures]], and $s = r + cx \bmod p$. Verification checks $c = H(\pk, g^s y_1^{-c}, h^s y_2^{-c}, m)$. A signature is a Fiat–Shamir proof that $(g, h, y_1, y_2)$ is a Diffie–Hellman tuple — [[KW03 - Efficiency Improvements for Signature Schemes with Tight Security Reductions|KW03]], [[GJKW07 - Efficient Signature Schemes with Tight Reductions to the Diffie-Hellman Problems|GJKW07]].

## Structure-preserving signatures

A DS scheme over a bilinear group $(\GG_1, \GG_2, \GG_T, p, e)$ is **structure-preserving** if its verification keys, messages and signatures are vectors of elements of $\GG_1$ and $\GG_2$, and $\Vrfy$ only checks group membership and a conjunction of pairing-product equations $\prod_{i,j} e(A_i, B_j)^{\gamma_{ij}} = 1$, where the $A_i \in \GG_1$ and $B_j \in \GG_2$ are key, message and signature elements and public constants, and the $\gamma_{ij} \in \ZZ_p$ are public — [[AFG+10 - Structure-Preserving Signatures and Commitments to Group Elements|AFG+10]]. As an object, a structure-preserving signature scheme denotes a $(1-\negl(\secpar))$-[[#Correctness|correct]], [[#Existential Unforgeability|EUF-CMA-unforgeable]] one whose messages are vectors of at least one group element. In a Type 3 bilinear group, every correct EUF-CMA-secure structure-preserving signature scheme whose signer uses only generic group operations has signatures of at least three group elements — [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]].

### Optimally short structure-preserving signatures

Structure-preserving signature schemes in a [[pairings#type-3|Type 3]] bilinear group whose signatures consist of three group elements, the minimum for a signer that uses only generic group operations — [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]]. As an object, an optimally short structure-preserving signature scheme denotes a $(1-\negl(\secpar))$-[[#Correctness|correct]], [[#Existential Unforgeability|EUF-CMA-unforgeable]] structure-preserving signature scheme in a Type 3 bilinear group whose signatures consist of three group elements.

## ECDSA

ECDSA works in a subgroup of prime order $q$ generated by a point $G$ of an elliptic curve, with secret key $x \in \ZZ_q$ and public key $X = xG$. To sign $m$, sample $k \getsr \ZZ_q^*$, set $r = f(kG)$, where the conversion function $f$ reduces the $x$-coordinate of a point modulo $q$, and $s = k^{-1}(H(m) + rx) \bmod q$, and output $(r, s)$, resampling if $r = 0$ or $s = 0$. Verification checks $r = f(s^{-1}H(m)\,G + s^{-1}r\,X)$. DSA is the same scheme in a subgroup of prime order $q$ of $\ZZ_P^*$, with $f$ reducing the group element modulo $q$ — standard. Since $kG$ and $-kG$ have the same $x$-coordinate, $(r, -s \bmod q)$ is again a valid ECDSA signature on $m$, so ECDSA is not strongly unforgeable — standard. Reusing $k$ on messages $m_1, m_2$ with $H(m_1) \not\equiv H(m_2) \pmod q$ reveals $x$: both signatures carry the same $r$, $s_1 - s_2 \equiv k^{-1}(H(m_1) - H(m_2)) \pmod q$ gives $k = (H(m_1) - H(m_2))(s_1 - s_2)^{-1} \bmod q$, and then $x = (s_1 k - H(m_1))\, r^{-1} \bmod q$ — standard.

- ECDSA is EUF-CMA secure if the hash function is collision-resistant and has a uniformity property, the ephemeral-key generator is pseudorandom, the group is treated generically, and a further condition holds on the map from ephemeral public keys to scalars. That condition seems to fail for DSA — [[Bro05 - Generic Groups, Collision Resistance, and ECDSA|Bro05]].
- Prior generic-group analyses of ECDSA in fact establish strong unforgeability, which ECDSA does not have, so their abstraction of the conversion function does not describe ECDSA faithfully — [[SPMS02 - Flaws in Applying Proof Methodologies to Signature Schemes|SPMS02]], [[FKP16 - On the Provable Security of (EC)DSA Signatures|FKP16]].
- With the conversion function modeled as two algebraic outer maps around an inner bijective random oracle, unmodified DSA and ECDSA are as hard to forge as DLOG, without assuming generic group behavior — [[FKP16 - On the Provable Security of (EC)DSA Signatures|FKP16]].
- An algebraic security reduction for ECDSA can exist only if it programs the conversion function — [[HK23 - Limits in the Provable Security of ECDSA Signatures|HK23]].
- If [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, no algebraic reduction from DLOG proves DSA or ECDSA secure in the standard model ([[no-prime-order-dlog-to-schnorr-signature-pv05|the barrier for Schnorr signatures]]) — [[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]].

## Stateful signatures

A **stateful** signature scheme for $T = T(\secpar)$ signatures updates its signing key with every signature and needs to sign only $T$ messages. It is a tuple of efficient algorithms $\DS = (\KeyGen, \Sign, \Vrfy)$ with message space $\calM$:

- $\KeyGen(1^\secpar) \to (\sk_0, \vk)$, a randomized algorithm outputting an initial signing key $\sk_0$ and a verification key $\vk$,
- $\Sign(\sk, m) \to (\sigma, \sk')$, a (possibly) randomized algorithm which takes the current signing key $\sk$ and a message $m \in \calM$, outputting a signature $\sigma$ and the next signing key $\sk'$,
- $\Vrfy(\vk, m, \sigma) \to b$, a deterministic algorithm outputting a bit $b \in \bits$.

Signing $m_1, \ldots, m_q$ in turn computes $(\sigma_i, \sk_i) \gets \Sign(\sk_{i-1}, m_i)$. $\DS$ is $(1-\varepsilon)$-**correct for $T$ signatures** if for all $\secpar \in \NN$, $q \le T$ and $m_1, \ldots, m_q \in \calM$,

$$
\Pr\!\left[\Vrfy(\vk, m_i, \sigma_i) = 1 \text{ for all } i \le q\right] \ge 1-\varepsilon,
$$

over $(\sk_0, \vk) \gets \KeyGen(1^\secpar)$ and the coins of $\Sign$.

In the game, the signing oracle carries the signing key from one query to the next and answers at most $T$ queries, since a scheme for $T$ signatures need not sign more: a Merkle tree over $T$ one-time keys has no key left for a further message. The restriction on $\hat{m}$ is that of [[#Existential Unforgeability|EUF-CMA]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{st\text{-}cma}}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$; $\calQ \gets \{\}$; $c \gets 0$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$\hat{m}\in \calQ$}
\Comment{$\hat{m}$ must not have been queried}
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
\If{$c = T$}
\Comment{$\calA$ gets at most $T$ signatures}
\Return $\bot$
\EndIf
\State $c \gets c + 1$
\State $(\sigma, \sk) \gets \Sign(\sk, m)$
\Comment{the signing key is updated}
\State $\calQ \gets \calQ \cup \{m\}$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

$\DS$ is **unforgeable for $T$ signatures** if for all efficient $\calA$,

$$
\Adv^{\mathrm{st\text{-}cma}}_{\DS,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{st\text{-}cma}}_{\DS,\calA}(\secpar) = 1\right]
$$

is negligible. As an object, a stateful DS denotes, for every polynomial $T = T(\secpar) \ge 1$, a $(1-\negl(\secpar))$-correct stateful scheme for $T$ signatures that is unforgeable for $T$ signatures, with a non-trivial message space as for a DS scheme. The scheme is chosen after $T$ because a tree computed at key generation fixes the number of signatures: an efficient $\KeyGen$ computes the root of a Merkle tree over $2^h$ one-time keys only for $2^h \le \poly(\secpar)$, and the tree then signs $2^h$ messages ([[hash-function-and-hash-based-signatures-to-ds-mer89|Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)]], [[hash-function-to-hash-based-signatures|SPR hash + PRF ⇒ Stateful DS (XMSS)]]) — standard. A DS scheme whose signing key never changes is a stateful DS for every $T$ ([[ds-to-bounded-stateful-ds|DS ⇒ Stateful DS]]) — folklore.

TODO: no edge yet leads from stateful signatures, or from one-time signatures and a PRF, to a stateless DS. The construction with a tree of depth $\secpar$ whose one-time keys are derived with a PRF and whose leaf is chosen at random, credited to Goldreich, needs a readable source.

## Hash-based signatures

Hash-based signatures need no number-theoretic or lattice assumption: one-time signatures follow from [[hash-function#preimage-resistance-one-wayness|OWF]] ([[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]) — [[Lam79 - Constructing digital signatures from a one way function|Lam79]] — and many-time signatures from OWF ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]. A Merkle tree over one-time keys, computed at key generation, gives a [[#Stateful signatures|stateful scheme]] that signs as many messages as the tree has leaves (Merkle and XMSS below); [[#SLH-DSA|SLH-DSA]] is stateless.

- [[hash-function-and-hash-based-signatures-to-ds-mer89|Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)]]
- [[hash-function-to-hash-based-signatures|SPR hash + PRF ⇒ Stateful DS (XMSS)]]
- [[uowhf-and-ots-to-ds-ny89|UOWHF + One-time signature ⇒ DS (Naor–Yung)]]
- NIST approves two stateful hash-based schemes, LMS and XMSS, with their multi-tree variants HSS and XMSS$^{\mathrm{MT}}$. Since signatures on two messages under one one-time key make forgeries feasible, the signer must never use a one-time key twice, which requires careful state management — [[CAD+20 - Recommendation for Stateful Hash-Based Signature Schemes|CAD+20]] (Sections 1, 1.1 and 1.2).

### One-time signatures

In the **one-time** game, $\calO$ answers only the first signing query, and $\calA$ wins with a valid pair $(\hat{m},\hat{\sigma})$ for a message $\hat{m}$ other than the one it queried. Without the restriction on $\hat{m}$, $\calA$ wins with probability at least $1-\varepsilon$ by outputting the pair it received. The bound of one query is necessary for Lamport's scheme ([[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]), whose signatures on two complementary messages reveal the whole signing key — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ots}}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$\hat{m}\in \calQ$}
\Comment{$\hat{m}$ must not have been queried}
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
\If{$|\calQ| \ge 1$}
\Comment{$\calA$ gets at most one signature}
\Return $\bot$
\EndIf
\State $\sigma \gets \Sign(\sk,m)$
\State $\calQ \gets \{m\}$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

A DS scheme $\DS$ is **one-time unforgeable** if for all efficient $\calA$,

$$
\Adv^{\mathrm{ots}}_{\DS,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{ots}}_{\DS,\calA}(\secpar) = 1\right]
$$

is negligible. As an object, a one-time signature denotes, for every polynomial $\ell = \ell(\secpar) \ge 1$, a $(1-\negl(\secpar))$-[[#Correctness|correct]] scheme with $\calM = \bits^{\ell}$ that is one-time unforgeable: EUF-CMA-unforgeable against all efficient adversaries making at most one signing query.

- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]

### Strong one-time signatures

In the **strong one-time** game, $\calQ$ records the pair $\calO$ returned, and $\calA$ wins with any valid pair $(\hat{m},\hat{\sigma})$ other than that one, including a new signature on the message it queried. Without the restriction, $\calA$ wins with probability at least $1-\varepsilon$ by outputting the pair it received.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sots}}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$(\hat{m},\hat{\sigma})\in \calQ$}
\Comment{$(\hat{m},\hat{\sigma})$ must not have been returned by $\calO$}
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
\If{$|\calQ| \ge 1$}
\Comment{$\calA$ gets at most one signature}
\Return $\bot$
\EndIf
\State $\sigma \gets \Sign(\sk,m)$
\State $\calQ \gets \{(m, \sigma)\}$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

A DS scheme $\DS$ is **strongly one-time unforgeable** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sots}}_{\DS,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{sots}}_{\DS,\calA}(\secpar) = 1\right]
$$

is negligible. As an object, a strong one-time signature denotes, for every polynomial $\ell = \ell(\secpar) \ge 1$, a $(1-\negl(\secpar))$-[[#Correctness|correct]] scheme with $\calM = \bits^{\ell}$ that is strongly one-time unforgeable. A winning one-time output is a pair that $\calO$ never returned, so a strong one-time signature is a one-time signature with no loss ([[strong-one-time-signature-to-one-time-signature|Strong one-time signature ⇒ One-time signature]]) — folklore.

TODO: add a producer of strong one-time signatures from one-way functions; the Notes of the [[ind-sid-cpa-to-pke-cca2-security-chk04|CHK transform]] credit the construction to [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]], which is unread.

### SLH-DSA

SLH-DSA, specified in FIPS 205, is a stateless hash-based signature scheme: a hypertree of Merkle trees of WOTS+ one-time keys authenticates the keys of the few-time signature scheme FORS, and each signature selects one FORS key pseudorandomly from the message; its security rests on the presumed difficulty of finding preimages for hash functions and on related properties of the same functions — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Sections 1.1 and 3). SLH-DSA is SPHINCS+, the stateless scheme selected in the NIST post-quantum standardization process, based on version 3.1 of its specification and with minor modifications relative to version 3, the version submitted for the third round — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Section 1.2 and Appendix A). SPHINCS+, with the few-time signature FORS and a security reduction through tweakable hash functions, is presented in [[BHK+19 - The SPHINCS+ Signature Framework|BHK+19]].

With security parameter $n$ bytes, the components are, in [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]]:

- **WOTS+** (Section 5), a one-time signature on $8n$-bit messages. The secret key is $\mathit{len} = 2n + 3$ values, derived from a secret seed by a PRF; each starts a hash chain of length $w = 16$, and the public key is a hash of the chain ends. A signature reveals, for each base-$16$ digit of the message and of its checksum, the chain value at that digit's position.
- **XMSS** (Section 6), a Merkle tree of height $h'$ over $2^{h'}$ WOTS+ public keys. Its root is the XMSS public key, and a signature is a WOTS+ signature with an authentication path of $h'$ nodes, so one XMSS key signs $2^{h'}$ messages. These WOTS+ and XMSS differ from those of RFC 8391 and SP 800-208 (Section 3).
- **The hypertree** (Section 7), $d$ layers of XMSS trees of total height $h = d h'$. The single tree of the top layer has the public root $\mathit{PK.root}$, every lower XMSS key is signed by a WOTS+ key of the layer above, and the $2^h$ WOTS+ keys of layer $0$ sign FORS public keys.
- **FORS** (Section 8), a few-time signature on $ka$-bit digests. Its secret key is $k$ sets of $t = 2^a$ values; each set forms the leaves of a Merkle tree, and the $k$ roots hash to the FORS public key. A signature reveals one value per set, selected by $a$ bits of the digest, with its authentication path. Unlike WOTS+, where two signatures under one key make forgeries feasible, the security of a FORS key degrades gradually as the number of signatures under it grows.

A key pair holds $2^h$ FORS keys, $2^{63}$ to $2^{68}$ for the approved parameter sets, all derived from the seed $\mathit{SK.seed}$. Signing keeps no state: a randomizer $R$ and the randomized message digest select the FORS key, through an XMSS tree index $i_{\mathrm{tree}}$ of $h - h'$ bits and a leaf index $i_{\mathrm{leaf}}$ of $h'$ bits — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Sections 3, 9 and 9.2). Since the selection is pseudorandom, two messages can select the same FORS key — standard; FORS lets each key safely sign a small number of messages — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Section 3).

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{SLH\text{-}DSA}.\KeyGen()$}
\begin{algorithmic}
\State $\mathit{SK.seed} \getsr \bits^{8n}$; $\mathit{SK.prf} \getsr \bits^{8n}$; $\mathit{PK.seed} \getsr \bits^{8n}$
\State $\mathit{PK.root} \gets$ root of the top-layer XMSS tree, computed from $\mathit{SK.seed}$ and $\mathit{PK.seed}$
\Return $(\sk, \pk) := ((\mathit{SK.seed}, \mathit{SK.prf}, \mathit{PK.seed}, \mathit{PK.root}), (\mathit{PK.seed}, \mathit{PK.root}))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{SLH\text{-}DSA}.\Sign(\sk, M)$}
\begin{algorithmic}
\State $(\mathit{SK.seed}, \mathit{SK.prf}, \mathit{PK.seed}, \mathit{PK.root}) \gets \sk$
\State $\mathit{opt} \getsr \bits^{8n}$
\Comment{$\mathit{opt} := \mathit{PK.seed}$ in the deterministic variant}
\State $R \gets \PRF_{\mathrm{msg}}(\mathit{SK.prf}, \mathit{opt}, M)$
\State $(\mathit{md}, i_{\mathrm{tree}}, i_{\mathrm{leaf}}) \gets \hash_{\mathrm{msg}}(R, \mathit{PK.seed}, \mathit{PK.root}, M)$
\State $\sigma_F \gets$ FORS signature on $\mathit{md}$ under the FORS key at $(i_{\mathrm{tree}}, i_{\mathrm{leaf}})$
\State $\pk_F \gets$ FORS public key computed from $\sigma_F$ and $\mathit{md}$
\State $\sigma_H \gets$ hypertree signature on $\pk_F$ by WOTS+ key $i_{\mathrm{leaf}}$ of layer-$0$ XMSS tree $i_{\mathrm{tree}}$
\Return $(R, \sigma_F, \sigma_H)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{SLH\text{-}DSA}.\Vrfy(\pk, M, (R, \sigma_F, \sigma_H))$}
\begin{algorithmic}
\State $(\mathit{PK.seed}, \mathit{PK.root}) \gets \pk$
\If{$(R, \sigma_F, \sigma_H)$ is not $(1 + k(1 + a) + h + d \cdot \mathit{len}) \cdot n$ bytes long}
\Return $0$
\EndIf
\State $(\mathit{md}, i_{\mathrm{tree}}, i_{\mathrm{leaf}}) \gets \hash_{\mathrm{msg}}(R, \mathit{PK.seed}, \mathit{PK.root}, M)$
\State $\pk_F \gets$ FORS public key computed from $\sigma_F$ and $\mathit{md}$
\State $b \gets$ whether $\sigma_H$ is a hypertree signature on $\pk_F$ at $(i_{\mathrm{tree}}, i_{\mathrm{leaf}})$ that leads to $\mathit{PK.root}$
\Return $b$
\end{algorithmic}
\end{algorithm}
```

The public key has $2n$ bytes and the secret key $4n$; a signature is the $n$-byte $R$, a FORS signature of $k(1 + a)n$ bytes and a hypertree signature of $(h + d \cdot \mathit{len})n$ bytes. In the default hedged variant $\mathit{opt}$ is fresh randomness; the deterministic variant, for platforms without a random bit generator, sets $\mathit{opt} := \mathit{PK.seed}$, so that signing a message twice gives the same signature — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Sections 3.1, 9.1 and 9.2). The algorithms above follow the internal functions (Algorithms 18–20), which take their random values as inputs, with those values sampled as the external functions sample them — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Sections 9 and 10). For a context string $\mathit{ctx}$ of at most $255$ bytes, pure SLH-DSA runs them on $M' = 0 \,\|\, |\mathit{ctx}| \,\|\, \mathit{ctx} \,\|\, M$, whose first two components are single bytes, and HashSLH-DSA on $M' = 1 \,\|\, |\mathit{ctx}| \,\|\, \mathit{ctx} \,\|\, \mathrm{OID} \,\|\, \mathrm{PH}(M)$ for a hash function $\mathrm{PH}$ with DER-encoded identifier $\mathrm{OID}$ — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Sections 10.2 and 10.3).

FIPS 205 approves twelve parameter sets, SLH-DSA-SHA2-$x$ and SLH-DSA-SHAKE-$x$ for each $x$ below, which differ only in the hash functions instantiating $\hash_{\mathrm{msg}}$, $\PRF$, $\PRF_{\mathrm{msg}}$ and the chain, tree and compression hashes $F$, $H$ and $T_\ell$. All have $w = 16$; sets ending in s give relatively small signatures and sets ending in f relatively fast signing. They are designed to meet NIST security categories 1, 3 and 5 for EUF-CMA when each key pair signs at most $2^{64}$ messages — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Section 11, Table 2):

| $x$  | $n$ | $h$ | $d$ | $h'$ | $a$ | $k$ | Security category | $\pk$ (bytes) | Signature (bytes) |
| ---- | --- | --- | --- | ---- | --- | --- | ----------------- | ------------- | ----------------- |
| 128s | 16  | 63  | 7   | 9    | 12  | 14  | 1                 | 32            | 7856              |
| 128f | 16  | 66  | 22  | 3    | 6   | 33  | 1                 | 32            | 17088             |
| 192s | 24  | 63  | 7   | 9    | 14  | 17  | 3                 | 48            | 16224             |
| 192f | 24  | 66  | 22  | 3    | 8   | 33  | 3                 | 48            | 35664             |
| 256s | 32  | 64  | 8   | 8    | 14  | 22  | 5                 | 64            | 29792             |
| 256f | 32  | 68  | 17  | 4    | 9   | 35  | 5                 | 64            | 49856             |

With $\mathit{len} = 2n + 3$, the signature sizes are $(1 + k(1 + a) + h + d \cdot \mathit{len}) \cdot n$ bytes — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Sections 5 and 9.3).

## Hash-and-sign signatures

Textbook RSA signatures sign $m \in \ZZ_n^*$ as $\sigma = m^d \bmod n$ and accept iff $m, \sigma \in \ZZ_n^*$ and $\sigma^e \equiv m \pmod n$, for $(n, e, d)$ output by an [[rsa-assumption|RSA]] generator. They are perfectly correct and, for every generator, not EUF-CMA-unforgeable: $(\sigma^e \bmod n, \sigma)$ is a forgery for every $\sigma \in \ZZ_n^*$, with no signing query, and since signatures multiply, those on $m_1 \getsr \ZZ_n^* \setminus \{1, m^*\}$ and on $m^* m_1^{-1} \bmod n$ give one on any chosen $m^* \in \ZZ_n^*$ when $\phi(n) \ge 3$, with two signing queries; each forger succeeds with probability $1$ ([[no-rsa-to-ds-textbook-rsa|the barrier for textbook RSA signatures]]) — [[GB08 - Lecture Notes on Cryptography|GB08]], Section 10.5.5.

Full-domain hash signs $m$ as $\sigma = f^{-1}(H(m))$ for a [[trapdoor-permutation|trapdoor permutation]] $f$, with $H$ a random oracle onto the domain of $f$, and is EUF-CMA-unforgeable in the [[random-oracle-model|random-oracle model]], by a reduction that plants its challenge in one guessed hash answer and so loses a factor of the number of hash queries ([[tdp-to-ds-br93|TDP ⇒ DS]]) — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]]. RSA-PSS hashes $m$ together with a fresh random seed and has a tight reduction from RSA in the random-oracle model, which embeds the challenge in every image point it defines for a hash query and so guesses no query ([[rsa-to-ds-pss-br96|RSA ⇒ DS (RSA-PSS)]]) — [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]]. With $f$ the [[lattice-trapdoor#preimage-sampling-and-inversion|preimage sampleable function]] $\mathbf{e} \mapsto \mathbf{A}\mathbf{e} \bmod q$ instead, $\Sign$ uses a trapdoor for $\mathbf{A}$ to sample a short preimage of $H(m)$ whose distribution is, up to negligible statistical distance, independent of the trapdoor. With the sampler derandomized, so that signing $m$ twice gives the same signature, the scheme is SUF-CMA-unforgeable in the random-oracle model if [[shortest-integer-solution#sis-at-trapdoor-sampling-parameters|SIS is hard at trapdoor-sampling parameters]] ([[sis-to-ds|SIS ⇒ SUF-CMA DS]]) — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]], [[BDF+11 - Random Oracles in a Quantum World|BDF+11]].

## Lattice-based signatures

Lattice-based signatures rest on [[learning-with-errors|LWE]]-, [[shortest-integer-solution|SIS]]- and [[ntru|NTRU]]-type assumptions, conjectured hard for quantum algorithms — standard.

- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ SUF-CMA DS]]
- GPV hash-and-sign signatures over NTRU lattices, instantiated as Falcon, resting on [[ntru#sis-over-ntru-lattices|SIS over NTRU lattices]] — [[DLP14 - Efficient Identity-Based Encryption over NTRU Lattices|DLP14]], [[FHK+20 - Falcon Fast-Fourier Lattice-based Compact Signatures over NTRU|FHK+20]]
- [[sis-to-ds|SIS ⇒ SUF-CMA DS]]

### Fiat–Shamir with aborts

A Fiat–Shamir-with-aborts signature applies the [[fiat-shamir-heuristic#signatures-from-identification-schemes|Fiat–Shamir transform]] to an identification protocol whose prover aborts with non-negligible probability: the signer repeats the protocol with fresh coins until an iteration does not abort — [[DFPS23 - A Detailed Analysis of Fiat-Shamir with Aborts|DFPS23]]. The paradigm is Lyubashevsky's — [[Lyu09 - Fiat-Shamir with Aborts Applications to Lattice and Factoring-Based Signatures|Lyu09]], [[Lyu12 - Lattice Signatures Without Trapdoors|Lyu12]], as credited by [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Sections 3 and 6.2). In ML-DSA and similar lattice schemes the public key is $(\mathbf{A}, \mathbf{t} = \mathbf{A}\mathbf{s}_1 + \mathbf{s}_2)$ with $\mathbf{s}_1$ and $\mathbf{s}_2$ short. The signer samples a masking vector $\mathbf{y}$ with moderately short coefficients, commits to $\mathbf{w} = \mathbf{A}\mathbf{y}$ (in ML-DSA, to its high bits), derives a short challenge $c$ from a hash of the commitment and the message, and outputs $\mathbf{z} = \mathbf{y} + c\mathbf{s}_1$ only if $\mathbf{z}$ is short enough, restarting with a fresh $\mathbf{y}$ otherwise; without the rejection, $\mathbf{z}$ is biased in a direction related to $\mathbf{s}_1$ — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Section 3.3).

The rejection makes $\mathbf{z}$ independent of the secret. Suppose the coefficients of $\mathbf{y}$ are independent and uniform on $[-\gamma_1 + 1, \gamma_1]$, the challenge $c$ is fixed independently of $\mathbf{y}$, as in the identification protocol, $\|c\mathbf{s}_1\|_\infty \le \beta$, and the signer accepts iff $\|\mathbf{z}\|_\infty < \gamma_1 - \beta$. Each accepted $\mathbf{z}$ then arises from exactly one $\mathbf{y} = \mathbf{z} - c\mathbf{s}_1$, whose coefficients lie in $[-\gamma_1 + 1, \gamma_1 - 1]$, so conditioned on acceptance $\mathbf{z}$ is uniform on $\{\mathbf{z} : \|\mathbf{z}\|_\infty < \gamma_1 - \beta\}$ whatever $\mathbf{s}_1$ and $c$ are — standard. Combining the random oracle with the signing loop complicates the analysis of correctness, run time and security, whether the number of iterations is bounded or, as in Dilithium, unbounded; [[DFPS23 - A Detailed Analysis of Fiat-Shamir with Aborts|DFPS23]] finds errors in all earlier analyses and gives detailed analyses of the bounded case in the quantum random-oracle model and of the unbounded case. A gap in the CMA-to-NMA step of several ROM and QROM proofs, Dilithium's among them, is fixed in [[BBD+23 - Fixing and Mechanizing the Security Proof of Fiat-Shamir with Aborts and Dilithium|BBD+23]].

#### ML-DSA

ML-DSA, the scheme of FIPS 204, is a Fiat–Shamir-with-aborts scheme derived from CRYSTALS-Dilithium ([[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ SUF-CMA DS]]), over $R_q = \ZZ_q[X]/(X^{256} + 1)$ with $q = 2^{23} - 2^{13} + 1 = 8380417$ — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Sections 2.3 and 3). $\mathbf{A} \in R_q^{k \times \ell}$ is expanded from a 256-bit seed $\rho$, and $\mathbf{s}_1 \in R_q^{\ell}$, $\mathbf{s}_2 \in R_q^{k}$ have coefficients in $[-\eta, \eta]$. $\mathrm{Power2Round}$ splits $\mathbf{t}$ as $\mathbf{t}_1 \cdot 2^d + \mathbf{t}_0$ with $d = 13$, and only $\mathbf{t}_1$ is published; $\mathrm{HighBits}$ rounds each coefficient to a nearby multiple of $2\gamma_2$ and $\mathrm{LowBits}$ returns the part rounded off; $\mathrm{SampleInBall}$ maps the commitment hash $\tilde{c}$, of $2\lambda$ bits, to a challenge $c$ with exactly $\tau$ coefficients in $\{-1, 1\}$ and the others $0$, so $\|c\mathbf{s}_1\|_\infty \le \tau\eta = \beta$; and $H$ is SHAKE256, with 512-bit outputs $\mathit{tr}$, $\mu$ and $\rho''$ — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Sections 6 and 7). The message representative $\mu$ hashes $H(\pk)$ with the formatted message $M'$, which is $M$ prefixed by a zero byte, the length of a context string of at most 255 bytes, and the context string — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Algorithms 2 and 7). The pseudocode follows Algorithms 1–3 and 6–8, with ring arithmetic in place of the number-theoretic transform and without byte encodings.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{ML\text{-}DSA}.\KeyGen()$}
\begin{algorithmic}
\State $\xi \getsr \bits^{256}$
\State $(\rho, \rho', K) \gets H(\xi \,\|\, k \,\|\, \ell)$
\Comment{Seeds of 256, 512 and 256 bits}
\State $\mathbf{A} \gets \mathrm{ExpandA}(\rho)$ ; $(\mathbf{s}_1, \mathbf{s}_2) \gets \mathrm{ExpandS}(\rho')$
\Comment{$\mathbf{s}_1, \mathbf{s}_2$ have coefficients in $[-\eta, \eta]$}
\State $\mathbf{t} \gets \mathbf{A}\mathbf{s}_1 + \mathbf{s}_2$ ; $(\mathbf{t}_1, \mathbf{t}_0) \gets \mathrm{Power2Round}(\mathbf{t})$
\State $\pk \gets (\rho, \mathbf{t}_1)$ ; $\mathit{tr} \gets H(\pk)$
\Return $(\pk, \sk) := (\pk, (\rho, K, \mathit{tr}, \mathbf{s}_1, \mathbf{s}_2, \mathbf{t}_0))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{ML\text{-}DSA}.\Sign(\sk, M)$}
\begin{algorithmic}
\State $(\rho, K, \mathit{tr}, \mathbf{s}_1, \mathbf{s}_2, \mathbf{t}_0) \gets \sk$ ; $\mathbf{A} \gets \mathrm{ExpandA}(\rho)$
\State $\mu \gets H(\mathit{tr} \,\|\, M')$
\Comment{Message representative}
\State $\mathit{rnd} \getsr \bits^{256}$ ; $\rho'' \gets H(K \,\|\, \mathit{rnd} \,\|\, \mu)$ ; $\kappa \gets 0$
\Comment{Deterministic variant: $\mathit{rnd} := 0^{256}$}
\While{true}
\State $\mathbf{y} \gets \mathrm{ExpandMask}(\rho'', \kappa)$ ; $\kappa \gets \kappa + \ell$
\Comment{Coefficients in $[-\gamma_1 + 1, \gamma_1]$}
\State $\mathbf{w} \gets \mathbf{A}\mathbf{y}$ ; $\mathbf{w}_1 \gets \mathrm{HighBits}(\mathbf{w})$
\Comment{Commitment}
\State $\tilde{c} \gets H(\mu \,\|\, \mathbf{w}_1)$ ; $c \gets \mathrm{SampleInBall}(\tilde{c})$
\Comment{Challenge}
\State $\mathbf{z} \gets \mathbf{y} + c\mathbf{s}_1$ ; $\mathbf{r}_0 \gets \mathrm{LowBits}(\mathbf{w} - c\mathbf{s}_2)$
\Comment{Response}
\If{$\|\mathbf{z}\|_\infty < \gamma_1 - \beta$ and $\|\mathbf{r}_0\|_\infty < \gamma_2 - \beta$}
\State $\mathbf{h} \gets \mathrm{MakeHint}(-c\mathbf{t}_0, \mathbf{w} - c\mathbf{s}_2 + c\mathbf{t}_0)$
\If{$\|c\mathbf{t}_0\|_\infty < \gamma_2$ and $\mathbf{h}$ has at most $\omega$ ones}
\Return $\sigma := (\tilde{c}, \mathbf{z}, \mathbf{h})$
\EndIf
\EndIf
\EndWhile
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{ML\text{-}DSA}.\Vrfy(\pk, M, \sigma)$}
\begin{algorithmic}
\State $(\rho, \mathbf{t}_1) \gets \pk$ ; $(\tilde{c}, \mathbf{z}, \mathbf{h}) \gets \sigma$
\If{the encoding of $\mathbf{h}$ is malformed}
\Return $0$
\Comment{Check of Algorithm 21, restored in the final standard}
\EndIf
\State $\mathbf{A} \gets \mathrm{ExpandA}(\rho)$ ; $\mu \gets H(H(\pk) \,\|\, M')$ ; $c \gets \mathrm{SampleInBall}(\tilde{c})$
\State $\mathbf{w}'_1 \gets \mathrm{UseHint}(\mathbf{h}, \mathbf{A}\mathbf{z} - c\mathbf{t}_1 \cdot 2^d)$
\Comment{Recovers $\mathbf{w}_1$}
\Return $[\|\mathbf{z}\|_\infty < \gamma_1 - \beta] \wedge [\tilde{c} = H(\mu \,\|\, \mathbf{w}'_1)]$
\end{algorithmic}
\end{algorithm}
```

The checks on $\mathbf{z}$ and $\mathbf{r}_0$ correct the bias of the response towards $\mathbf{s}_1$ and of the rounding remainder towards $\mathbf{s}_2$, and the checks on $c\mathbf{t}_0$ and $\mathbf{h}$ ensure correctness — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Section 3.3). Since $\mathbf{t} = \mathbf{t}_1 \cdot 2^d + \mathbf{t}_0$, the verifier's $\mathbf{A}\mathbf{z} - c\mathbf{t}_1 \cdot 2^d$ equals $\mathbf{w} - c\mathbf{s}_2 + c\mathbf{t}_0$ — standard — and the hint lets the verifier recover $\mathbf{w}_1$ from it — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Section 6.3). The initial public draft of the standard omitted the check for a malformed hint encoding, without which ML-DSA is not strongly unforgeable — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Appendices D.2 and D.3). The default signer is hedged: $\rho''$ depends on fresh randomness $\mathit{rnd}$, which helps against side-channel attacks, and on the secret $K$ and $\mu$, which protects against a flawed random number generator; the deterministic variant fixes $\mathit{rnd} = 0^{256}$. Either way $\mathbf{y}$ must not sign two messages and must not be easy to guess — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Section 3.4). As for EdDSA, a masking vector reused under two challenges $c_1 \ne c_2$ gives $\mathbf{z}_1 - \mathbf{z}_2 = (c_1 - c_2)\mathbf{s}_1$, hence $\mathbf{s}_1$ whenever $c_1 - c_2$ is invertible in $R_q$ — standard. The three parameter sets share $q$ and $d$ — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Section 4, Tables 1 and 2):

|                                    | ML-DSA-44    | ML-DSA-65    | ML-DSA-87    |
| ---------------------------------- | ------------ | ------------ | ------------ |
| $(k, \ell)$                        | $(4, 4)$     | $(6, 5)$     | $(8, 7)$     |
| $\eta$                             | 2            | 4            | 2            |
| $\tau$                             | 39           | 49           | 60           |
| $\beta = \tau\eta$                 | 78           | 196          | 120          |
| $\gamma_1$                         | $2^{17}$     | $2^{19}$     | $2^{19}$     |
| $\gamma_2$                         | $(q - 1)/88$ | $(q - 1)/32$ | $(q - 1)/32$ |
| $\omega$                           | 80           | 55           | 75           |
| $\lambda$                          | 128          | 192          | 256          |
| Expected signing-loop iterations   | 4.25         | 5.1          | 3.85         |
| Claimed security strength category | 2            | 3            | 5            |
| Public key (bytes)                 | 1312         | 1952         | 2592         |
| Private key (bytes)                | 2560         | 4032         | 4896         |
| Signature (bytes)                  | 2420         | 3309         | 4627         |

## Fixed-length messages

A signature scheme for **messages of length $n$**, for a length function $n = n(\secpar)$, has a message space that contains $\bits^{n(\secpar)}$ for every $\secpar$ and every key, with $\Sign$ and $\Vrfy$ running in time polynomial in $\secpar$ on such messages. As an object, a DS for fixed-length messages denotes, for every $n$ with $1 \le n(\secpar) \le \poly(\secpar)$ that is computable from $1^\secpar$ in polynomial time, such a scheme that is $(1-\negl(\secpar))$-[[#Correctness|correct]] and [[#Existential Unforgeability|EUF-CMA-unforgeable]]. The length is quantified before the scheme, and over every polynomially bounded length computable in polynomial time, because a construction may fix it from another primitive: [[arbitrary-length-crhf-and-ds-fixed-length-to-ds-arbitrary-length-rog06|hash-then-sign]] signs hash values whose length its hash family fixes. Taking $n = 1$ gives a DS ([[ds-fixed-length-to-ds|DS for fixed-length messages ⇒ DS]]) — folklore.

TODO: no edge produces this variant except from [[#Arbitrary-length messages|arbitrary-length signatures]], which hash-then-sign in turn produces from it and a CRHF, so neither is reached from an assumption. Retarget a producer whose source signs $\bits^{n(\secpar)}$ for every $n$ (e.g. [[#Waters signatures|Waters signatures]]) or $\bits^*$ (e.g. [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]'s OWF ⇒ DS, once read). OWF ⇒ IBS needs the latter, or a domain extension by universal one-way hashing, since one-way functions are not known to give a CRHF.

## Arbitrary-length messages

A signature scheme for **arbitrary-length messages** has message space $\calM = \bits^*$, with $\Sign$ and $\Vrfy$ running in time polynomial in $\secpar$ and $|m|$. As an object, it denotes such a scheme that is $(1-\negl(\secpar))$-[[#Correctness|correct]] and [[#Existential Unforgeability|EUF-CMA-unforgeable]]. Such a scheme signs messages of every fixed length ([[ds-arbitrary-length-to-ds-fixed-length|DS for arbitrary-length messages ⇒ DS for fixed-length messages]]) — folklore.

**Hash-then-sign** builds one from a [[#Fixed-length messages|fixed-length scheme]] and an [[hash-function#arbitrary-length-collision-resistance|arbitrary-length CRHF]] $\hash$: the hash key $k$ is part of both keys, and $m$ is signed by signing $\hash(k, m)$ with the fixed-length scheme. A forgery is a forgery for the fixed-length scheme on a hash value never signed, or yields a collision of $\hash(k, \cdot)$ with a signed message, so the forging advantage is at most the sum of the two advantages ([[arbitrary-length-crhf-and-ds-fixed-length-to-ds-arbitrary-length-rog06|Arbitrary-length CRHF + fixed-length DS ⇒ DS for arbitrary-length messages]]) — [[Rog06 - Formalizing Human Ignorance|Rog06]] (Theorem 6). The paradigm goes back to Rabin's signatures, as credited by [[Rog06 - Formalizing Human Ignorance|Rog06]] (Section 5). TODO: check what [[Dam87 - Collision Free Hash Functions and Public Key Signature Schemes|Dam87]] proves about signing with collision-free hashing, and cite it (unread).

## Selective unforgeability

In the selective game $\calA$ commits to its target message $m^*$ before it sees $\vk$, and may then query signatures on every other message, as in [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]. The message space $\calM_\secpar$ depends on $\secpar$ only, so that $m^*$ is checked against it before $\vk$ exists. Without this requirement, a $\vk$ of $\secpar$ uniform bits with message space $\{\vk \| 0, \vk \| 1\}$, $\Sign(\sk, m) := m$ and $\Vrfy(\vk, m, \sigma) := [m \in \{\vk \| 0, \vk \| 1\} \wedge \sigma = m]$ is correct and meets the game unconditionally, since $m^*$ lies outside the message space except with probability at most $2^{1-\secpar}$ — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sel}}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(m^*, \stA) \gets \calA(1^\secpar)$
\Comment{$\calA$ commits to $m^*$ before seeing $\vk$}
\If{$m^* \notin \calM_\secpar$}
\Comment{$m^*$ must be a message of the scheme}
\Return $0$
\EndIf
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$
\State $\hat{\sigma} \gets \calA^{\calO}(\stA, \vk)$
\Return $[\Vrfy(\vk, m^*, \hat{\sigma})]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\If{$m = m^*$}
\Comment{$\calO$ refuses to sign $m^*$}
\Return $\bot$
\EndIf
\Return $\Sign(\sk, m)$
\end{algorithmic}
\end{algorithm}
```

A DS scheme $\DS$ is **selectively unforgeable** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sel}}_{\DS,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{sel}}_{\DS,\calA}(\secpar) = 1\right]
$$

is negligible. As an object, a selectively unforgeable DS denotes a $(1-\negl(\secpar))$-[[#Correctness|correct]], selectively unforgeable scheme whose message space $\calM_\secpar$ depends on $\secpar$ only and contains, for every $\secpar$, two distinct messages that an efficient algorithm outputs on input $1^\secpar$. An EUF-CMA forger can run a selective forger, which fixes its message first, so an EUF-CMA-unforgeable scheme with a key-independent message space is selectively unforgeable; a scheme whose message space depends on $\vk$ restricts to the two messages it computes from $\vk$, indexed by one bit ([[ds-to-selective-ds|DS ⇒ Selectively unforgeable DS]]) — folklore.

## Security against quantum adversaries

$\DS = (\KeyGen, \Sign, \Vrfy)$ is a classical scheme, and the game is $\Game^{\eufcma}_{\DS,\calA}$ of [[#Existential Unforgeability|existential unforgeability]] with $\calA$ quantum: $\calA$ queries the signing oracle $\calO$ classically, and its queries may be adaptive. $\DS$ is **post-quantum EUF-CMA unforgeable** if for all efficient quantum $\calA$,

$$
\Adv^{\eufcma}_{\DS,\calA}(\secpar) := \Pr\!\left[\Game^{\eufcma}_{\DS,\calA}(\secpar) = 1\right]
$$

is negligible — standard. As an object, a post-quantum DS denotes a $(1-\negl(\secpar))$-[[#Correctness|correct]], post-quantum EUF-CMA-unforgeable scheme with a non-trivial message space, as for DS. [[AC12 - Quantum Money from Hidden Subspaces|AC12]] (arXiv v3, Definition 1) use the weaker nonadaptive form below, in which the forger submits one classical list of messages.

### Nonadaptive queries

A quantum forger with **nonadaptive** classical queries submits one classical list of messages to the signing oracle, receives a signature on each, and outputs a forgery.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{na\text{-}cma}}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$
\State $((m_1, \ldots, m_q), \stA) \gets \calA(1^\secpar, \vk)$
\Comment{one classical list, chosen before any signature is seen}
\State $\sigma_i \gets \Sign(\sk, m_i)$ for each $i \in [q]$
\State $(\hat{m}, \hat{\sigma}) \gets \calA(\stA, \sigma_1, \ldots, \sigma_q)$
\If{$\hat{m} \in \{m_1, \ldots, m_q\}$}
\Comment{$\hat{m}$ cannot repeat}
\Return $0$
\EndIf
\Return $[\Vrfy(\vk,\hat{m},\hat{\sigma})]$
\end{algorithmic}
\end{algorithm}
```

$\DS$ is **secure against nonadaptive quantum chosen-message attacks** if for all efficient quantum $\calA$,

$$
\Adv^{\mathrm{na\text{-}cma}}_{\DS,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{na\text{-}cma}}_{\DS,\calA}(\secpar) = 1\right]
$$

is negligible — [[AC12 - Quantum Money from Hidden Subspaces|AC12]] (arXiv v3, Definition 1). [[AC12 - Quantum Money from Hidden Subspaces|AC12]] also require completeness error at most $1/3$. As an object, it denotes a $(1-\negl(\secpar))$-[[#Correctness|correct]] scheme with this security. A nonadaptive forger is an adaptive one that makes all its queries at once, so post-quantum EUF-CMA unforgeability implies this notion ([[post-quantum-ds-to-nonadaptive-post-quantum-ds|Post-quantum DS ⇒ Nonadaptive post-quantum DS]]) — folklore.

## One-time signatures with quantum public keys

A signature scheme with quantum public keys for one-bit messages is a tuple of quantum polynomial-time algorithms $\DS = (\KeyGen, \mathsf{PKGen}, \Sign, \Vrfy)$:

- $\KeyGen(1^\secpar) \to \sk$, outputting a classical secret key;
- $\mathsf{PKGen}(\sk) \to \pk$, outputting a quantum public key, so that $t$ independent runs give $\pk^{\otimes t}$;
- $\Sign(\sk, m) \to \sigma$ for $m \in \bits$, outputting a classical signature;
- $\Vrfy(\pk, m, \sigma) \to \top/\bot$ for $m \in \bits$.

Correctness requires $\Pr[\Vrfy(\pk, m, \sigma) = \top : \sk \gets \KeyGen(1^\secpar),\ \pk \gets \mathsf{PKGen}(\sk),\ \sigma \gets \Sign(\sk, m)] \ge 1 - \negl(\secpar)$ for every $m \in \bits$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{qpk\text{-}ots}}_{\DS,\calA,t}(\secpar)$}
\begin{algorithmic}
\State $\sk \gets \KeyGen(1^\secpar)$
\State run $\mathsf{PKGen}(\sk)$ $t+1$ times, obtaining $\pk^{\otimes (t+1)}$
\State $(m, \stA) \gets \calA(1^\secpar, \pk^{\otimes t})$
\Comment{$\calA$ receives $t$ of the copies; $m \in \bits$}
\State $\sigma \gets \Sign(\sk, m)$
\State $(m', \sigma') \gets \calA(\stA, \sigma)$
\Comment{$m' \in \bits$}
\State $d \gets \Vrfy(\pk, m', \sigma')$
\Comment{run on the remaining copy}
\Return $[d = \top \wedge m' \ne m]$
\end{algorithmic}
\end{algorithm}
```

$\DS$ is **one-time secure** if for all efficient quantum $\calA$ and all polynomials $t$,

$$
\Adv^{\mathrm{qpk\text{-}ots}}_{\DS,\calA,t}(\secpar) := \Pr\!\left[\Game^{\mathrm{qpk\text{-}ots}}_{\DS,\calA,t}(\secpar) = 1\right]
$$

is negligible — [[MY22 - One-Wayness in Quantum Cryptography|MY22]] (arXiv v3, Definition 4.1). That definition leaves the message space open, and both directions of the equivalence with [[one-way-state-generator|one-way state generators]] are proved for one-bit messages — [[MY22 - One-Wayness in Quantum Cryptography|MY22]] (arXiv v3, Theorem 4.4). In the original definition of [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]], $\KeyGen$ is classical, $\Sign$ is classical and deterministic, and correctness is perfect. One-time-secure schemes yield $q$-time-secure ones over the same message space, which allow $q$ signing queries and a forgery on a fresh message, for every polynomial $q$ — [[MY22 - One-Wayness in Quantum Cryptography|MY22]] (arXiv v3, Theorem 4.3).

- [[owsg-to-quantum-public-key-signature-my22|OWSG ⇔ one-time signatures with quantum public keys]]

# Other results

- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[ds-to-hash-function|DS ⇒ Distributional OWF]], so signatures imply one-way functions ([[distributional-owf-to-owf-il89|Distributional OWF ⇒ OWF]]) — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]
- [[forward-secure-signature|Forward-secure signatures]] evolve the signing key over $T$ periods so that exposing the key of one period does not allow forging for earlier periods — [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]].
- A [[chameleon-hash-function|chameleon hash]] turns a signature scheme into an online/offline one: offline, sign the chameleon hash of a random message; online, use the trapdoor to find a collision with the actual message — [[ST01 - Improved Online-Offline Signature Schemes|ST01]].
- For Waters signatures, whose signatures re-randomize publicly, every simple reduction of EUF-CMA security to a non-interactive hardness assumption, one that runs the forger only as straight-line instances one after another — [[MP18 - On the Security Loss of Unique Signatures|MP18]] — loses a factor $\Omega(q_S)$ for $q_S$ signing queries, unless the assumption is false ([[no-tight-non-interactive-assumption-to-waters-signature-hjk12|the barrier for Waters signatures]]) — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]]. Coron's earlier meta-reduction, stated for schemes with unique signatures, gives the corresponding bound for BLS signatures in the random-oracle model ([[no-tight-non-interactive-assumption-to-boneh-lynn-shacham-signature-cor02|the barrier for BLS signatures]]) — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]], [[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]].
- For signature schemes whose relation between verification and signing keys is unique or re-randomizable, the security loss of passing from single-user EUF-CMA to multi-user EUF-CMA with adaptive corruptions cannot be avoided by simple reductions from any non-interactive assumption in a very general class, unless that assumption is false — [[BJLS16 - On the Impossibility of Tight Cryptographic Reductions|BJLS16]]. Their meta-reduction refines the one of [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]].

<!-- BEGIN GENERATED participates-in b807c8947c53 -->

## Participates in

**Builds on Digital signature**

- [[arbitrary-length-crhf-and-ds-fixed-length-to-ds-arbitrary-length-rog06|Arbitrary-length CRHF + fixed-length DS ⇒ DS for arbitrary-length messages (hash-then-sign)]] (via [[digital-signature#fixed-length-messages|Fixed-length messages]])
- [[boneh-lynn-shacham-signature-to-ds|BLS signatures ⇒ DS]] (via [[digital-signature#bls-signatures|BLS signatures]])
- [[ds-arbitrary-length-to-ds|DS for arbitrary-length messages ⇒ DS]] (via [[digital-signature#arbitrary-length-messages|Arbitrary-length messages]])
- [[ds-arbitrary-length-to-ds-fixed-length|DS for arbitrary-length messages ⇒ DS for fixed-length messages]] (via [[digital-signature#arbitrary-length-messages|Arbitrary-length messages]])
- [[ds-fixed-length-to-ds|DS for fixed-length messages ⇒ DS]] (via [[digital-signature#fixed-length-messages|Fixed-length messages]])
- [[ds-to-bounded-stateful-ds|DS ⇒ Stateful DS]]
- [[ds-to-byzantine-broadcast-ds83|Digital signatures ⇒ Byzantine broadcast (Dolev–Strong)]]
- [[ds-to-hash-function|DS ⇒ Distributional OWF]]
- [[ds-to-forward-secure-signature|DS ⇔ Forward-secure signature]]
- [[ds-to-identity-based-signature-bnn04|DS ⇒ IBS (certificates)]] (via [[digital-signature#arbitrary-length-messages|Arbitrary-length messages]])
- [[ds-to-selective-ds|DS ⇒ Selectively unforgeable DS]]
- [[eddsa-to-ds|EdDSA ⇒ DS]] (via [[digital-signature#eddsa|EdDSA]])
- [[edl-signature-to-ds|EDL signatures ⇒ DS]] (via [[digital-signature#edl-signatures|EDL signatures]])
- [[hash-function-and-hash-based-signatures-to-ds-mer89|Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)]] (via [[digital-signature#one-time-signatures|One-time signatures]])
- [[katz-wang-signature-to-ds|Katz–Wang signatures ⇒ DS]] (via [[digital-signature#katz-wang-signatures|Katz-Wang signatures]])
- [[post-quantum-ds-to-ds|Post-quantum DS ⇒ DS]] (via [[digital-signature#security-against-quantum-adversaries|Security against quantum adversaries]])
- [[post-quantum-ds-to-nonadaptive-post-quantum-ds|Post-quantum DS ⇒ Nonadaptive post-quantum DS]] (via [[digital-signature#security-against-quantum-adversaries|Security against quantum adversaries]])
- [[quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12|Mini-scheme + DS ⇒ Public-key QM]] (via [[digital-signature#nonadaptive-queries|Nonadaptive queries]])
- [[schnorr-signature-to-ds|Schnorr signatures ⇒ DS]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]])
- [[short-structure-preserving-signature-to-structure-preserving-signature|Optimally short structure-preserving signatures ⇒ Structure-preserving signatures]] (via [[digital-signature#optimally-short-structure-preserving-signatures|Optimally short structure-preserving signatures]])
- [[strong-one-time-signature-to-one-time-signature|Strong one-time signature ⇒ One-time signature]] (via [[digital-signature#strong-one-time-signatures|Strong one-time signatures]])
- [[structure-preserving-signature-to-ds|Structure-preserving signatures ⇒ DS]] (via [[digital-signature#structure-preserving-signatures|Structure-preserving signatures]])
- [[suf-cma-ds-to-ds|SUF-CMA DS ⇒ DS]] (via [[digital-signature#strong-unforgeability|Strong Unforgeability]])
- [[uowhf-and-ots-to-ds-ny89|UOWHF + One-time signature ⇒ DS (Naor–Yung)]] (via [[digital-signature#one-time-signatures|One-time signatures]])
- [[waters-signature-to-ds|Waters signatures ⇒ DS]] (via [[digital-signature#waters-signatures|Waters signatures]])

**Produces Digital signature**

- [[arbitrary-length-crhf-and-ds-fixed-length-to-ds-arbitrary-length-rog06|Arbitrary-length CRHF + fixed-length DS ⇒ DS for arbitrary-length messages (hash-then-sign)]] (via [[digital-signature#arbitrary-length-messages|Arbitrary-length messages]])
- [[bilinear-pairing-and-q-sdh-to-ds-bb04a|Bilinear pairing + q-SDH ⇒ DS (Boneh–Boyen)]]
- [[boneh-lynn-shacham-signature-to-ds|BLS signatures ⇒ DS]]
- [[co-cdh-to-aggregate-signature-bgls03|co-CDH ⇒ Aggregate signatures (BGLS)]] (via [[digital-signature#aggregate-signatures|Aggregate signatures]])
- [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]] (via [[digital-signature#bls-signatures|BLS signatures]])
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]])
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]] (via [[digital-signature#bls-signatures|BLS signatures]])
- [[ds-arbitrary-length-to-ds|DS for arbitrary-length messages ⇒ DS]]
- [[ds-arbitrary-length-to-ds-fixed-length|DS for arbitrary-length messages ⇒ DS for fixed-length messages]] (via [[digital-signature#fixed-length-messages|Fixed-length messages]])
- [[ds-fixed-length-to-ds|DS for fixed-length messages ⇒ DS]]
- [[ds-to-bounded-stateful-ds|DS ⇒ Stateful DS]] (via [[digital-signature#stateful-signatures|Stateful signatures]])
- [[ds-to-selective-ds|DS ⇒ Selectively unforgeable DS]] (via [[digital-signature#selective-unforgeability|Selective unforgeability]])
- [[eddsa-to-ds|EdDSA ⇒ DS]]
- [[edl-signature-to-ds|EDL signatures ⇒ DS]]
- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)]] (via [[digital-signature#stateful-signatures|Stateful signatures]])
- [[hash-function-and-io-to-ds-sw14|OWF + iO ⇒ Selectively unforgeable DS]] (via [[digital-signature#selective-unforgeability|Selective unforgeability]])
- [[hash-function-to-ds|OWF ⇒ DS]]
- [[hash-function-to-hash-based-signatures|SPR hash + PRF ⇒ Stateful DS (XMSS)]] (via [[digital-signature#stateful-signatures|Stateful signatures]])
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]] (via [[digital-signature#one-time-signatures|One-time signatures]])
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[identity-based-signature-to-ds|IBS ⇒ DS]]
- [[katz-wang-signature-to-ds|Katz–Wang signatures ⇒ DS]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ SUF-CMA DS]] (via [[digital-signature#strong-unforgeability|Strong Unforgeability]])
- [[owsg-to-quantum-public-key-signature-my22|OWSG ⇔ one-time signatures with quantum public keys]] (via [[digital-signature#one-time-signatures-with-quantum-public-keys|One-time signatures with quantum public keys]])
- [[phi-hiding-to-ds-kk12|Φ-Hiding ⇒ DS (RSA full-domain hash, tight)]]
- [[post-quantum-ds-to-ds|Post-quantum DS ⇒ DS]]
- [[post-quantum-ds-to-nonadaptive-post-quantum-ds|Post-quantum DS ⇒ Nonadaptive post-quantum DS]] (via [[digital-signature#nonadaptive-queries|Nonadaptive queries]])
- [[post-quantum-owf-to-nonadaptive-post-quantum-ds-ac12|Quantum-secure OWF ⇒ Nonadaptive post-quantum DS]] (via [[digital-signature#nonadaptive-queries|Nonadaptive queries]])
- [[prime-order-cdh-to-edl-signature-gj03|Prime-order CDH ⇒ EDL signatures]] (via [[digital-signature#edl-signatures|EDL signatures]])
- [[prime-order-ddh-to-katz-wang-signature-kw03|Prime-order DDH ⇒ Katz–Wang signatures]] (via [[digital-signature#katz-wang-signatures|Katz-Wang signatures]])
- [[prime-order-dlog-to-eddsa-bcjz21|DLOG ⇒ EdDSA]] (via [[digital-signature#eddsa|EdDSA]])
- [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]])
- [[rsa-to-ds-pss-br96|RSA ⇒ DS (RSA-PSS, random oracle model)]]
- [[rsa-to-ds-hw09|RSA ⇒ DS (Hohenberger–Waters, short and stateless)]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]])
- [[schnorr-signature-to-ds|Schnorr signatures ⇒ DS]]
- [[short-structure-preserving-signature-to-structure-preserving-signature|Optimally short structure-preserving signatures ⇒ Structure-preserving signatures]] (via [[digital-signature#structure-preserving-signatures|Structure-preserving signatures]])
- [[sis-to-ds|SIS ⇒ SUF-CMA DS]] (via [[digital-signature#strong-unforgeability|Strong Unforgeability]])
- [[strong-one-time-signature-to-one-time-signature|Strong one-time signature ⇒ One-time signature]] (via [[digital-signature#one-time-signatures|One-time signatures]])
- [[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]]
- [[structure-preserving-signature-to-ds|Structure-preserving signatures ⇒ DS]]
- [[suf-cma-ds-to-ds|SUF-CMA DS ⇒ DS]]
- [[sxdh-to-structure-preserving-signature-kpw15|SXDH ⇒ Structure-preserving signatures (Kiltz–Pan–Wee)]] (via [[digital-signature#structure-preserving-signatures|Structure-preserving signatures]])
- [[tdp-to-ds-br93|TDP ⇒ DS (full-domain hash, random oracle model)]]
- [[type-1-pairing-and-cdh-to-ds-wat05|Type 1 pairing + CDH ⇒ Waters signatures]] (via [[digital-signature#waters-signatures|Waters signatures]])
- [[type-1-pairing-and-dlin-to-structure-preserving-signature-hj12|Type 1 pairing + DLIN ⇒ Structure-preserving signatures, tightly (Hofheinz–Jager)]] (via [[digital-signature#structure-preserving-signatures|Structure-preserving signatures]])
- [[type-1-pairing-and-lrsw-to-ds-cl04|Type 1 pairing + LRSW ⇒ DS (Camenisch–Lysyanskaya)]]
- [[type-3-pairing-to-ds-ps16|Type 3 pairing ⇒ DS (Pointcheval–Sanders)]]
- [[type-3-pairing-to-short-structure-preserving-signature-agho11|Type 3 pairing ⇒ Optimally short structure-preserving signatures (AGHO)]] (via [[digital-signature#optimally-short-structure-preserving-signatures|Optimally short structure-preserving signatures]])
- [[uowhf-and-ots-to-ds-ny89|UOWHF + One-time signature ⇒ DS (Naor–Yung)]]
- [[waters-signature-to-ds|Waters signatures ⇒ DS]]

**Barriers**

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-hash-function-to-ds-cgh98|No fixed-construction reduction from Hash function to DS (random-oracle instantiation)]]
- [[no-tight-non-interactive-assumption-to-boneh-lynn-shacham-signature-cor02|No tight simple reduction from non-interactive assumptions to BLS signatures]] (via [[digital-signature#bls-signatures|BLS signatures]]) — circumvented by [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]], [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[no-non-interactive-assumption-to-short-structure-preserving-signature-ago11|No algebraic reduction from non-interactive assumptions to optimally short structure-preserving signatures]] (via [[digital-signature#optimally-short-structure-preserving-signatures|Optimally short structure-preserving signatures]])
- [[no-tight-non-interactive-assumption-to-waters-signature-hjk12|No tight simple reduction from non-interactive assumptions to Waters signatures]] (via [[digital-signature#waters-signatures|Waters signatures]]) — circumvented by [[type-1-pairing-and-cdh-to-ds-wat05|Type 1 pairing + CDH ⇒ Waters signatures]]
- [[no-prime-order-dlog-to-schnorr-signature-ff13|No single-instance reduction from DLOG to Schnorr signatures in the non-programmable ROM]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]]) — circumvented by [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]], [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[no-tight-prime-order-dlog-to-schnorr-signature-fjs19|No tight generic reduction from DLOG to Schnorr signatures]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]]) — circumvented by [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]], [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[no-prime-order-dlog-to-schnorr-signature-pv05|No algebraic reduction from DLOG to Schnorr signatures in the standard model]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]]) — circumvented by [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]], [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[no-tight-prime-order-dlog-to-schnorr-signature-seu12|No tight algebraic reduction from DLOG to Schnorr signatures in the ROM]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]]) — circumvented by [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]], [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[no-rsa-to-ds-textbook-rsa|No fixed-construction reduction from RSA to DS (textbook RSA signatures)]] — circumvented by [[rsa-to-ds-pss-br96|RSA ⇒ DS (RSA-PSS, random oracle model)]], [[rsa-to-ds-hw09|RSA ⇒ DS (Hohenberger–Waters, short and stateless)]]

<!-- END GENERATED participates-in -->
