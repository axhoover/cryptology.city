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
  schnorr-signature: "#schnorr-signatures"
  hash-and-sign-signature: "#lattice-based-signatures"
  boneh-lynn-shacham-signature: "#bls-signatures"
  waters-signature: "#waters-signatures"
  eddsa: "#eddsa"
  edl-signature: "#edl-signatures"
  katz-wang-signature: "#katz-wang-signatures"
  aggregate-signature: "#aggregate-signatures"
  structure-preserving-signature: "#structure-preserving-signatures"
  short-structure-preserving-signature: "#optimally-short-structure-preserving-signatures"
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
$(1-\varepsilon)$**-correct** if for all $m \in \calM$,

$$
  \Pr\!\left[\Vrfy(\vk, m, \Sign(\sk, m)) = 1\right] \ge 1-\varepsilon,
$$

over the randomness of $(\sk, \vk) \leftarrow \KeyGen(1^\secpar)$ and
possibly $\Sign.$

### Existential Unforgeability

The following is the **existential unforgeability under chosen
message attacks (EUF-CMA)** game. This security notion requires that an
adversary cannot produce a valid message-signature pair
$(\hat{m},\hat{\sigma})$ for a message $\hat{m}$ it has not submitted to the
signing oracle, even given signatures on adversarially chosen messages.

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

The following is the **strong unforgeability under chosen
message attacks (SUF-CMA)** game. This security notion strengthens the above
EUF-CMA notion and requires $\DS$ to prevent an adversary from "mauling"
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

Schnorr signatures ([[Sch91 - Efficient signature generation by smart cards|Sch91]], via [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]) are **EUF-CMA secure** under the discrete logarithm assumption in the random oracle model — [[PS96 - Security Proofs for Signature Schemes|PS96]], [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. They support efficient **multi-signatures** whose signatures verify as Schnorr signatures, with the key included in the hash, under an aggregate public key ([[multi-signature#musig|MuSig]], [[multi-signature#musig2|MuSig2]]) — [[MPSW19 - Simple Schnorr Multi-Signatures with Applications to Bitcoin|MPSW19]], [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]], and **threshold signatures**. Blinding the signer's commitment and the challenge gives [[blind-signature#blind-schnorr-signatures|blind Schnorr signatures]], analysed by [[Sch01 - Security of Blind Discrete Log Signatures against Interactive Attacks|Sch01]] and [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

For groups with compact encodings, such as elliptic-curve groups, two properties of the hash function, random-prefix preimage resistance and random-prefix second-preimage resistance, are necessary for the security of Schnorr signatures and, in the generic group model, sufficient; collision resistance is not among them — [[NSW09 - Hash Function Requirements for Schnorr Signatures|NSW09]]. The sufficiency theorem needs a further condition on how group elements are encoded as bit strings: a defective encoding of curve points meets its hypotheses while making Schnorr signatures insecure — [[Bro15 - A Flaw in a Theorem About Schnorr Signatures|Bro15]].

### EdDSA

EdDSA works in the subgroup of prime order $L$ generated by a base point $B$ of a twisted Edwards curve, written additively, with a hash function $H$ (SHA-512 for Ed25519). The secret key is a seed $k$ with $H(k) = (h, \mathit{prefix})$, from which a clamped scalar $a$ is read off $h$; the public key is $A = aB$. To sign $m$, set $r = H(\mathit{prefix} \| m) \bmod L$, $R = rB$ and $S = r + H(R \| A \| m)\, a \bmod L$, and output $(R, S)$. Verification checks $SB = R + H(R \| A \| m)\, A$, or the same equation multiplied by the curve's cofactor — [[BDLSY11 - High-Speed High-Security Signatures|BDLSY11]]. EdDSA is the Schnorr scheme with the public key included in the hash and nonces derived deterministically from the secret key and the message — standard.

## BLS signatures

BLS signatures (Boneh-Lynn-Shacham) [[BLS01 - Short Signatures from the Weil Pairing|BLS01]] use a bilinear pairing $e: \GG_1 \times \GG_2 \to \GG_T$ to achieve **unique, deterministic, and aggregatable** signatures. To sign $m$: output $\sigma = H(m)^{\sk} \in \GG_1$ (where $H: \bits^* \to \GG_1$ is a hash-to-curve function). Verification checks $e(\sigma, g_2) = e(H(m), \pk)$.

Key properties:

- **Deterministic**: no per-signature randomness needed
- **Short**: one group element ($\approx 48$ bytes on BLS12-381)
- **Aggregatable**: $n$ signatures on distinct messages can be aggregated into one signature verifiable with $n+1$ pairings, checking $e(\sigma, g_2) = \prod_{i=1}^n e(H(m_i), \pk_i)$ — [[BGLS03 - Aggregate and Verifiably Encrypted Signatures from Bilinear Maps|BGLS03]]
- [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]]

BLS signatures are used in Ethereum 2.0 for validator attestations and threshold BLS is widely used in threshold signature protocols.

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

## Waters signatures

In a [[pairings#type-1|symmetric bilinear group]] $(\GG, \GG_T, p, g, e)$, the Waters scheme for $n$-bit messages has $\vk = (g, g_1 = g^{\alpha}, g_2, u', u_1, \ldots, u_n)$ with $\alpha \getsr \ZZ_p$ and $g_2, u', u_i \getsr \GG$, and $\sk = g_2^{\alpha}$. With $U(m) = u' \prod_{i : m_i = 1} u_i$, $\Sign(\sk, m)$ samples $r \getsr \ZZ_p$ and outputs $(\sigma_1, \sigma_2) = (g_2^{\alpha} U(m)^r, g^r)$, and $\Vrfy(\vk, m, \sigma)$ accepts iff $e(\sigma_1, g) = e(g_1, g_2) \cdot e(U(m), \sigma_2)$ — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]]. Signatures re-randomize publicly: for $t \getsr \ZZ_p$, $(\sigma_1 U(m)^t, \sigma_2 g^t)$ is a uniformly random valid signature on $m$ — standard.

## Tight Diffie-Hellman signatures

Signatures whose security reduces tightly, without forking, to a Diffie–Hellman problem in a group of prime order $p$, with a hash modeled as a random oracle.

### EDL signatures

The public key is $y = g^x$. To sign $m$, pick a random salt $r$, set $h = H(m, r) \in \GG$ and $z = h^x$, and output $(z, r, \pi)$, where $\pi$ is a Fiat–Shamir Chaum–Pedersen proof that $\log_g y = \log_h z$ — [[GJ03 - A Signature Scheme as Secure as the Diffie-Hellman Problem|GJ03]].

### Katz-Wang signatures

The public key is $\pk = (g, h, y_1, y_2)$ with $y_1 = g^x$ and $y_2 = h^x$. To sign $m$, sample $r \getsr \ZZ_p$ and output $(c, s)$ with $c = H(\pk, g^r, h^r, m)$ and $s = r + cx \bmod p$. Verification checks $c = H(\pk, g^s y_1^{-c}, h^s y_2^{-c}, m)$. A signature is a Fiat–Shamir proof that $(g, h, y_1, y_2)$ is a Diffie–Hellman tuple — [[KW03 - Efficiency Improvements for Signature Schemes with Tight Security Reductions|KW03]], [[GJKW07 - Efficient Signature Schemes with Tight Reductions to the Diffie-Hellman Problems|GJKW07]].

## Structure-preserving signatures

A DS scheme over a bilinear group $(\GG_1, \GG_2, \GG_T, p, e)$ is **structure-preserving** if its verification keys, messages and signatures are vectors of elements of $\GG_1$ and $\GG_2$, and $\Vrfy$ only checks group membership and a conjunction of pairing-product equations $\prod_{i,j} e(A_i, B_j)^{\gamma_{ij}} = 1$, where the $A_i \in \GG_1$ and $B_j \in \GG_2$ are key, message and signature elements and public constants, and the $\gamma_{ij} \in \ZZ_p$ are public — [[AFG+10 - Structure-Preserving Signatures and Commitments to Group Elements|AFG+10]]. Security is EUF-CMA. In a Type 3 bilinear group, every structure-preserving signature scheme whose signer uses only generic group operations has signatures of at least three group elements — [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]].

### Optimally short structure-preserving signatures

Structure-preserving signature schemes in a [[pairings#type-3|Type 3]] bilinear group whose signatures consist of three group elements, the minimum for a signer that uses only generic group operations — [[AGHO11 - Optimal Structure-Preserving Signatures in Asymmetric Bilinear Groups|AGHO11]].

## ECDSA

ECDSA works in a subgroup of prime order $q$ generated by a point $G$ of an elliptic curve, with secret key $x \in \ZZ_q$ and public key $X = xG$. To sign $m$, sample $k \getsr \ZZ_q^*$, set $r = f(kG)$, where the conversion function $f$ reduces the $x$-coordinate of a point modulo $q$, and $s = k^{-1}(H(m) + rx) \bmod q$, and output $(r, s)$, resampling if $r = 0$ or $s = 0$. Verification checks $r = f(s^{-1}H(m)\,G + s^{-1}r\,X)$. DSA is the same scheme in a subgroup of prime order $q$ of $\ZZ_P^*$, with $f$ reducing the group element modulo $q$ — standard. Since $kG$ and $-kG$ have the same $x$-coordinate, $(r, -s \bmod q)$ is again a valid ECDSA signature on $m$, so ECDSA is not strongly unforgeable — standard.

- ECDSA is EUF-CMA secure if the hash function is collision-resistant and has a uniformity property, the ephemeral-key generator is pseudorandom, the group is treated generically, and a further condition holds on the map from ephemeral public keys to scalars. That condition seems to fail for DSA — [[Bro05 - Generic Groups, Collision Resistance, and ECDSA|Bro05]].
- Prior generic-group analyses of ECDSA in fact establish strong unforgeability, which ECDSA does not have, so their abstraction of the conversion function does not describe ECDSA faithfully — [[FKP16 - On the Provable Security of (EC)DSA Signatures|FKP16]].
- With the conversion function modeled as two algebraic outer maps around an inner bijective random oracle, unmodified DSA and ECDSA are as hard to forge as DLOG, without assuming generic group behavior — [[FKP16 - On the Provable Security of (EC)DSA Signatures|FKP16]].
- An algebraic security reduction for ECDSA can exist only if it programs the conversion function — [[HK23 - Limits in the Provable Security of ECDSA Signatures|HK23]].
- If [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, no algebraic reduction from DLOG proves DSA or ECDSA secure in the standard model ([[no-prime-order-dlog-to-schnorr-signature-pv05|the barrier for Schnorr signatures]]) — [[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]].

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
- For Waters signatures, whose signatures re-randomize publicly, every simple reduction of EUF-CMA security to a non-interactive hardness assumption, one that runs the forger only as straight-line instances one after another — [[MP18 - On the Security Loss of Unique Signatures|MP18]] — loses a factor $\Omega(q_S)$ for $q_S$ signing queries, unless the assumption is false ([[no-tight-non-interactive-assumption-to-waters-signature-hjk12|the barrier for Waters signatures]]) — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]]. Coron's earlier meta-reduction, stated for schemes with unique signatures, gives the corresponding bound for BLS signatures in the random-oracle model ([[no-tight-non-interactive-assumption-to-boneh-lynn-shacham-signature-cor02|the barrier for BLS signatures]]) — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]].
- For signature schemes whose relation between verification and signing keys is unique or re-randomizable, the security loss of passing from single-user EUF-CMA to multi-user EUF-CMA with adaptive corruptions cannot be avoided by reductions from a very general class of non-interactive assumptions — [[BJLS16 - On the Impossibility of Tight Cryptographic Reductions|BJLS16]]. Their meta-reduction refines the one of [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]].

<!-- BEGIN GENERATED participates-in 076c853ecdbe -->

## Participates in

**Builds on Digital signature**

- [[boneh-lynn-shacham-signature-to-ds|BLS signatures ⇒ DS]] (via [[digital-signature#bls-signatures|BLS signatures]])
- [[ds-to-hash-function|DS ⇒ OWF]]
- [[eddsa-to-ds|EdDSA ⇒ DS]] (via [[digital-signature#eddsa|EdDSA]])
- [[edl-signature-to-ds|EDL signatures ⇒ DS]] (via [[digital-signature#edl-signatures|EDL signatures]])
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]] (via [[digital-signature#one-time-signatures|One-time signatures]])
- [[katz-wang-signature-to-ds|Katz–Wang signatures ⇒ DS]] (via [[digital-signature#katz-wang-signatures|Katz-Wang signatures]])
- [[schnorr-signature-to-ds|Schnorr signatures ⇒ DS]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]])
- [[short-structure-preserving-signature-to-structure-preserving-signature|Optimally short structure-preserving signatures ⇒ Structure-preserving signatures]] (via [[digital-signature#optimally-short-structure-preserving-signatures|Optimally short structure-preserving signatures]])
- [[structure-preserving-signature-to-ds|Structure-preserving signatures ⇒ DS]] (via [[digital-signature#structure-preserving-signatures|Structure-preserving signatures]])
- [[uowhf-and-ots-to-ds-ny89|UOWHF + One-time signature ⇒ DS (Naor–Yung)]] (via [[digital-signature#one-time-signatures|One-time signatures]])
- [[waters-signature-to-ds|Waters signatures ⇒ DS]] (via [[digital-signature#waters-signatures|Waters signatures]])

**Produces Digital signature**

- [[bilinear-pairing-and-q-sdh-to-ds-bb04a|Bilinear pairing + q-SDH ⇒ DS (Boneh–Boyen)]]
- [[boneh-lynn-shacham-signature-to-ds|BLS signatures ⇒ DS]]
- [[co-cdh-to-aggregate-signature-bgls03|co-CDH ⇒ Aggregate signatures (BGLS)]] (via [[digital-signature#aggregate-signatures|Aggregate signatures]])
- [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]] (via [[digital-signature#bls-signatures|BLS signatures]])
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]])
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]] (via [[digital-signature#bls-signatures|BLS signatures]])
- [[eddsa-to-ds|EdDSA ⇒ DS]]
- [[edl-signature-to-ds|EDL signatures ⇒ DS]]
- [[fac-to-ds-gmr88|FAC ⇒ DS]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ DS]]
- [[hash-function-and-io-to-ds-sw14|OWF + iO ⇒ DS]]
- [[hash-function-to-ds|OWF ⇒ DS]]
- [[hash-function-to-hash-based-signatures|Hash function + PRF ⇒ DS (XMSS)]]
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]] (via [[digital-signature#one-time-signatures|One-time signatures]])
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[katz-wang-signature-to-ds|Katz–Wang signatures ⇒ DS]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[ntru-to-ds|NTRU + NTRU-SIS ⇒ DS]]
- [[phi-hiding-to-ds-kk12|Φ-Hiding ⇒ DS (RSA full-domain hash, tight)]]
- [[prime-order-cdh-to-edl-signature-gj03|Prime-order CDH ⇒ EDL signatures]] (via [[digital-signature#edl-signatures|EDL signatures]])
- [[prime-order-ddh-to-katz-wang-signature-kw03|Prime-order DDH ⇒ Katz–Wang signatures]] (via [[digital-signature#katz-wang-signatures|Katz-Wang signatures]])
- [[prime-order-dlog-to-eddsa-bcjz21|DLOG ⇒ EdDSA]] (via [[digital-signature#eddsa|EdDSA]])
- [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]])
- [[rsa-to-ds-hw09|RSA ⇒ DS (Hohenberger–Waters, short and stateless)]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]])
- [[schnorr-signature-to-ds|Schnorr signatures ⇒ DS]]
- [[short-structure-preserving-signature-to-structure-preserving-signature|Optimally short structure-preserving signatures ⇒ Structure-preserving signatures]] (via [[digital-signature#structure-preserving-signatures|Structure-preserving signatures]])
- [[sis-to-ds|SIS ⇒ DS]]
- [[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]]
- [[structure-preserving-signature-to-ds|Structure-preserving signatures ⇒ DS]]
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
- [[no-tight-non-interactive-assumption-to-boneh-lynn-shacham-signature-cor02|No tight simple reduction from non-interactive assumptions to BLS signatures]] (via [[digital-signature#bls-signatures|BLS signatures]]) — circumvented by [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]], [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[no-non-interactive-assumption-to-short-structure-preserving-signature-ago11|No algebraic reduction from non-interactive assumptions to optimally short structure-preserving signatures]] (via [[digital-signature#optimally-short-structure-preserving-signatures|Optimally short structure-preserving signatures]])
- [[no-tight-non-interactive-assumption-to-waters-signature-hjk12|No tight simple reduction from non-interactive assumptions to Waters signatures]] (via [[digital-signature#waters-signatures|Waters signatures]]) — circumvented by [[type-1-pairing-and-cdh-to-ds-wat05|Type 1 pairing + CDH ⇒ Waters signatures]]
- [[no-prime-order-dlog-to-schnorr-signature-ff13|No single-instance reduction from DLOG to Schnorr signatures in the non-programmable ROM]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]]) — circumvented by [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]], [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[no-tight-prime-order-dlog-to-schnorr-signature-fjs19|No tight generic reduction from DLOG to Schnorr signatures]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]]) — circumvented by [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]], [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[no-prime-order-dlog-to-schnorr-signature-pv05|No algebraic reduction from DLOG to Schnorr signatures in the standard model]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]]) — circumvented by [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]], [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]
- [[no-tight-prime-order-dlog-to-schnorr-signature-seu12|No tight algebraic reduction from DLOG to Schnorr signatures in the ROM]] (via [[digital-signature#schnorr-signatures|Schnorr signatures]]) — circumvented by [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]], [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]

<!-- END GENERATED participates-in -->
