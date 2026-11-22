---
type: primitive
status: draft
aliases:
  - KEM
  - DEM
  - KEM-DEM
  - Key encapsulation mechanism
  - Hybrid encryption
title: Key encapsulation mechanism
id: kem
variants:
  ind-cca-kem: "#ind-cca-security"
  ind-cpa-kem: "#ind-cpa-kem"
---

# Key encapsulation mechanism

A **key encapsulation mechanism** (KEM) is a public-key primitive that allows a sender to encapsulate a fresh uniformly random symmetric key $k$ into a ciphertext $c$ using a public key $\pk$, such that only the holder of the secret key $\sk$ can recover $k$ by decapsulation. Combined with a symmetric-key data encapsulation mechanism (DEM, i.e., [[symmetric-key-encryption|SKE]]), KEMs give the **KEM-DEM paradigm** for hybrid encryption — the standard approach to asymmetric encryption in practice.

## Syntax

A KEM is a tuple of efficient algorithms $(\KeyGen, \Encap, \Decap)$ with key space $\calK = \calK_\secpar$:

- $\KeyGen(1^\secpar) \to (\pk, \sk),$ is a randomized algorithm that generates a public/secret key pair.
- $\Encap(\pk) \to (c, k),$ is a randomized algorithm that takes a public key and outputs a ciphertext $c$ and a symmetric key $k \in \calK_\secpar$.
- $\Decap(\sk, c) \to k,$ is a deterministic algorithm that recovers the symmetric key from the ciphertext, or outputs $\bot$.

Every KEM on this page is $(1-\varepsilon)$-correct, as defined under [[#Correctness|Correctness]], for a negligible function $\varepsilon(\secpar)$, its key space is $\calK = \calK_\secpar = \bits^{\ell(\secpar)}$ for a polynomial-time computable $\ell$ with $\secpar \le \ell(\secpar) \le \poly(\secpar)$, and its encapsulated key is uniform: for $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and $(c, k) \gets \Encap(\pk)$, $k$ is uniform on $\calK$, over the random oracle too for a KEM in the [[random-oracle-model|random oracle model]]. Without correctness, the scheme with $\Encap(\pk) := (0, k)$ for a uniform $k \in \calK$ and a constant $\Decap$ meets every notion below. With $|\calK| = 1$, so does a scheme with a fixed key. The [[#KEM-DEM hybrid encryption|KEM-DEM hybrid]] needs a uniform key for its correctness: its DEM is correct for keys drawn by its own key generation, which the encapsulated key replaces ([[ind-cpa-kem-and-ske-to-pke-cpa-security|IND-CPA KEM + SKE ⇒ IND-CPA PKE]]). The Diffie–Hellman KEM, which encapsulates under $\pk = g^x$ the key $g^{xy}$ as $c = g^y$, has keys in a group rather than in $\bits^{\ell}$; hashing the group element into $\bits^{\ell}$ with a random oracle gives a KEM of this syntax, hashed ElGamal ([[cdh-to-ind-cpa-kem|CDH ⇒ IND-CPA KEM (hashed ElGamal)]]). As an object, KEM denotes a correct KEM with the key space and key distribution above; its security notions are the variants [[#IND-CCA security|IND-CCA]] and [[#IND-CPA KEM|IND-CPA]].

## Properties

### Correctness

A KEM $(\KeyGen, \Encap, \Decap)$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$,

$$
\Pr\!\left[\Decap(\sk, c) = k\right] \ge 1 - \varepsilon(\secpar),
$$

over $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and $(c, k) \gets \Encap(\pk)$. When $\varepsilon = 0$, the KEM is **perfectly correct**.

### IND-CCA security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar)$
\State $(c^*, k_0) \gets \Encap(\pk)$
\State $k_1 \getsr \calK$
\State $b \getsr \bits$
\State $b' \gets \calA^{\Decap(\sk, \cdot)}(\pk, c^*, k_b)$
\Comment{$\calA$ may not query $\Decap$ on $c^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A KEM is **IND-CCA secure** if for all efficient $\calA$,

$$\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) = 1\right] - 1\right|$$

is negligible. The adversary cannot query the decapsulation oracle on the challenge ciphertext $c^*$, since that would trivially reveal $b$.

## KEM-DEM hybrid encryption

Given an IND-CCA KEM and a one-time IND-CCA SKE (DEM), the following construction achieves IND-CCA [[public-key-encryption|PKE]]:

- $\Enc(\pk, m)$: run $(c_1, k) \gets \Encap(\pk)$; run $c_2 \gets \SKE.\Enc(k, m)$; output $(c_1, c_2)$.
- $\Dec(\sk, (c_1, c_2))$: run $k \gets \Decap(\sk, c_1)$; output $\bot$ if $k = \bot$, and $\SKE.\Dec(k, c_2)$ otherwise.

This achieves IND-CCA security as long as the KEM is IND-CCA secure and the DEM is one-time IND-CCA secure ([[kem-and-ske-to-pke|IND-CCA KEM + CCA-secure SKE ⇒ IND-CCA PKE]]) — [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]]. An IND-CPA DEM does not suffice: with CTR mode as DEM, $\calA$ flips a bit in the masked part of $c_2^*$, queries $\Dec$ on $(c_1^*, c_2')$ for the result $c_2' \neq c_2^*$, and receives $m_b$ with that bit flipped ([[no-prf-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from PRF to CCA-secure SKE (randomized CTR)]]) — standard; [[HHK10 - Some (in)sufficient conditions for secure hybrid encryption|HHK10]] study which KEM/DEM notion pairs suffice.

# Variations

## IND-CPA KEM

The adversary receives $\pk$, a challenge encapsulation $c^*$ and either the key $k_0$ it encapsulates or an independent uniform key $k_1 \in \calK$, and guesses which.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa}}_{\mathrm{KEM},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar)$
\State $(c^*, k_0) \gets \Encap(\pk)$
\State $k_1 \getsr \calK$
\State $b \getsr \bits$
\State $b' \gets \calA(\pk, c^*, k_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A KEM is **IND-CPA secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{cpa}}_{\mathrm{KEM},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cpa}}_{\mathrm{KEM},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The game is the [[#IND-CCA security|IND-CCA]] game without the decapsulation oracle, so IND-CCA security implies IND-CPA security ([[ind-cca-security-to-ind-cpa-kem|IND-CCA security ⇒ IND-CPA KEM]]).

## Lattice-based KEM (Kyber / ML-KEM)

Kyber is an IND-CCA KEM from [[learning-with-errors#module-lwe|Module LWE]]: a variant of the Fujisaki–Okamoto transform turns a CPA-secure public-key encryption scheme over module lattices into a CCA-secure KEM — [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]] ([[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]]). ML-KEM, standardized by NIST in FIPS 203, is derived from the round-three CRYSTALS-Kyber submission, a scheme first described in [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]]. It applies a Fujisaki–Okamoto transform with implicit rejection to the encryption scheme K-PKE, which is not IND-CCA2-secure and is approved only as a component of ML-KEM — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Sections 1.1, 3.2, 3.3 and 6).

### K-PKE

K-PKE works over $R_q = \ZZ_q[X]/(X^n + 1)$ with $n = 256$ and $q = 3329$, at module rank $k$. $D_\eta(R_q)$ draws each of the $n$ coefficients independently from the centered binomial distribution, as $x - y$ for $x$ and $y$ sums of $\eta$ uniform bits. For $d < 12$, $\mathrm{Compress}_d(x) := \lceil (2^d/q) \cdot x \rfloor \bmod 2^d$ maps $\ZZ_q$ to $\ZZ_{2^d}$ and $\mathrm{Decompress}_d(y) := \lceil (q/2^d) \cdot y \rfloor$ maps back, both coefficientwise, where $\lceil \cdot \rfloor$ rounds to the nearest integer with ties rounded up; a message $m \in \bits^{256}$ is the polynomial whose coefficients are its bits. $G$ is SHA3-512 with its output split into two 256-bit halves, $H$ is SHA3-256, $J$ is SHAKE256 with 256-bit output, $\mathbf{A}$ is expanded from a 256-bit seed by SHAKE128, and the small elements are sampled from coins $\PRF(\sigma, N) = \mathrm{SHAKE256}(\sigma \,\|\, N)$ for a counter $N$ — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Sections 2.3, 4.1, 4.2 and 5). The pseudocode shows the ring operations, which FIPS 203 carries out in the number-theoretic-transform domain, and omits the byte encodings.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{K\text{-}PKE}.\KeyGen(d)$}
\begin{algorithmic}
\State $(\rho, \sigma) \gets G(d \,\|\, k)$
\Comment{$d \in \bits^{256}$}
\State $\mathbf{A} \gets \mathrm{SHAKE128}(\rho) \in R_q^{k \times k}$
\Comment{Rejection sampling in the NTT domain}
\State $\mathbf{s} \gets D_{\eta_1}(R_q)^k$ ; $\mathbf{e} \gets D_{\eta_1}(R_q)^k$
\Comment{Coins $\PRF(\sigma, \cdot)$}
\State $\mathbf{t} \gets \mathbf{A}\mathbf{s} + \mathbf{e}$
\Return $(\pk, \sk) := ((\mathbf{t}, \rho), \mathbf{s})$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{K\text{-}PKE}.\Enc(\pk, m; r)$}
\begin{algorithmic}
\State $(\mathbf{t}, \rho) \gets \pk$ ; $\mathbf{A} \gets \mathrm{SHAKE128}(\rho)$
\State $\mathbf{y} \gets D_{\eta_1}(R_q)^k$ ; $\mathbf{e}_1 \gets D_{\eta_2}(R_q)^k$ ; $e_2 \gets D_{\eta_2}(R_q)$
\Comment{Coins $\PRF(r, \cdot)$}
\State $\mathbf{u} \gets \mathbf{A}^\top \mathbf{y} + \mathbf{e}_1$
\State $v \gets \mathbf{t}^\top \mathbf{y} + e_2 + \mathrm{Decompress}_1(m)$
\Return $c := (\mathrm{Compress}_{d_u}(\mathbf{u}), \mathrm{Compress}_{d_v}(v))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{K\text{-}PKE}.\Dec(\sk, c)$}
\begin{algorithmic}
\State $(c_1, c_2) \gets c$
\State $\mathbf{u}' \gets \mathrm{Decompress}_{d_u}(c_1)$ ; $v' \gets \mathrm{Decompress}_{d_v}(c_2)$
\State $w \gets v' - \mathbf{s}^\top \mathbf{u}'$
\Return $m := \mathrm{Compress}_1(w)$
\end{algorithmic}
\end{algorithm}
```

Write $\mathbf{u}' = \mathbf{u} + \mathbf{c}_u$ and $v' = v + c_v$, with $\mathbf{c}_u$ and $c_v$ the rounding errors of compression followed by decompression. Then $w = \mathrm{Decompress}_1(m) + \mathbf{e}^\top \mathbf{y} + e_2 + c_v - \mathbf{s}^\top(\mathbf{e}_1 + \mathbf{c}_u)$, and $\mathrm{Compress}_1$ returns bit $i$ of $m$ whenever coefficient $i$ of $w - \mathrm{Decompress}_1(m)$, as an integer in $(-q/2, q/2)$, lies in $[-q/4, q/4 - 1/2)$ — standard.

### ML-KEM

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{ML\text{-}KEM}.\KeyGen()$}
\begin{algorithmic}
\State $d \getsr \bits^{256}$ ; $z \getsr \bits^{256}$
\State $(\pk, \sk') \gets \mathrm{K\text{-}PKE}.\KeyGen(d)$
\Return $(\pk, \sk) := (\pk, (\sk', \pk, H(\pk), z))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{ML\text{-}KEM}.\Encap(\pk)$}
\begin{algorithmic}
\State $m \getsr \bits^{256}$
\State $(K, r) \gets G(m \,\|\, H(\pk))$
\State $c \gets \mathrm{K\text{-}PKE}.\Enc(\pk, m; r)$
\Return $(c, K)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\mathrm{ML\text{-}KEM}.\Decap(\sk, c)$}
\begin{algorithmic}
\State $(\sk', \pk, h, z) \gets \sk$
\State $m' \gets \mathrm{K\text{-}PKE}.\Dec(\sk', c)$
\State $(K', r') \gets G(m' \,\|\, h)$ ; $\bar{K} \gets J(z \,\|\, c)$
\If{$c \ne \mathrm{K\text{-}PKE}.\Enc(\pk, m'; r')$}
\State $K' \gets \bar{K}$
\Comment{Implicit rejection}
\EndIf
\Return $K'$
\end{algorithmic}
\end{algorithm}
```

Decapsulation returns $K' = K$ whenever K-PKE decryption returns $m$, since re-encryption with $r' = r$ then reproduces $c$ — standard. Unlike the transform of [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]], whose key is $H(m, c)$, ML-KEM derives the key and the encryption coins together from $m$ and $H(\pk)$, and rejects implicitly with $J(z \,\|\, c)$. The approved parameter sets all have $n = 256$, $q = 3329$ and a 256-bit shared key — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Section 8, Tables 1–3):

| Parameter set | $k$ | $\eta_1$ | $\eta_2$ | $d_u$ | $d_v$ | Claimed security category | $\pk$ (bytes) | $c$ (bytes) | Decapsulation failure rate |
| ------------- | --- | -------- | -------- | ----- | ----- | ------------------------- | ------------- | ----------- | -------------------------- |
| ML-KEM-512    | 2   | 3        | 2        | 10    | 4     | 1                         | 800           | 768         | $2^{-138.8}$               |
| ML-KEM-768    | 3   | 2        | 2        | 10    | 4     | 3                         | 1184          | 1088        | $2^{-164.8}$               |
| ML-KEM-1024   | 4   | 2        | 2        | 11    | 5     | 5                         | 1568          | 1568        | $2^{-174.8}$               |

The decapsulation failure rate is the probability over $d$, $z$ and $m$ that $\Decap$ returns $K' \neq K$, with the hash functions and the XOF modelled as uniformly random functions; for the details, [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Section 3.2) refers to Theorem 1 of [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]] and to the Kyber security-estimation scripts. In input-output behaviour ML-KEM differs from the round-three Kyber specification as follows: its shared key has a fixed length of 256 bits; encapsulation no longer hashes the ciphertext into the shared key, and decapsulation is adjusted to match; encapsulation uses the sampled $m$ directly instead of first replacing it by $H(m)$; encapsulation and decapsulation check their inputs; and key generation hashes the rank $k$ together with the seed $d$, a domain separation between the three parameter sets added after the initial public draft — [[NIST24 - Module-Lattice-Based Key-Encapsulation Mechanism Standard|NIST24]] (Appendix C).

## RSA-KEM / RSAES-OAEP

RSA-KEM samples $r \getsr \ZZ_N$, sends $c = r^e \bmod N$ with no padding, and derives $k = \hash(r)$; it is IND-CCA secure under [[rsa-assumption|RSA]] in the [[random-oracle-model|random oracle model]] ([[rsa-to-ind-cca-security|RSA ⇒ IND-CCA KEM]]) — [[Sho01b - A Proposal for an ISO Standard for Public Key Encryption|Sho01b]]. RSAES-OAEP is a [[public-key-encryption|PKE]], not a KEM; it is IND-CCA secure under RSA in the random oracle model — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].

# Other results

- [[pke-to-kem|PKE ⇒ KEM]]
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]]
- [[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]], in the random oracle model: Kyber — [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]]; ML-KEM, machine-checked down to a variant of Module LWE — [[AAB+24 - Formally Verifying Kyber Episode V Machine-Checked IND-CCA Security and Correctness of ML-KEM in EasyCrypt|AAB+24]]
- [[kem-and-ske-to-pke|KEM + SKE ⇒ PKE]]
- [[ind-cpa-kem-to-pke-cpa-security|IND-CPA KEM ⇒ IND-CPA PKE]], with the one-time pad as DEM — folklore
- [[cdh-to-ind-cpa-kem|CDH ⇒ IND-CPA KEM (hashed ElGamal)]], in the random oracle model — folklore
- The KEM-DEM paradigm is standardized as HPKE (RFC 9180) — [[BBLW22 - Hybrid Public Key Encryption|BBLW22]]
- [[kem-to-ke|KEM ⇒ KE with bit-string keys]]

<!-- BEGIN GENERATED participates-in 6aa89f1cca1e -->

## Participates in

**Builds on Key encapsulation mechanism**

- [[ind-cca-security-to-ind-cpa-kem|IND-CCA security ⇒ IND-CPA KEM]] (via [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]])
- [[ind-cpa-kem-and-ske-to-pke-cpa-security|IND-CPA KEM + SKE ⇒ IND-CPA PKE]] (via [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]])
- [[ind-cpa-kem-to-pke-cpa-security|IND-CPA KEM ⇒ IND-CPA PKE]] (via [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]])
- [[kem-and-ske-to-pke|IND-CCA KEM + CCA-secure SKE ⇒ IND-CCA PKE]] (via [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]])
- [[kem-to-ke|KEM ⇒ KE with bit-string keys]] (via [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]])

**Produces Key encapsulation mechanism**

- [[cdh-to-ind-cpa-kem|CDH ⇒ IND-CPA KEM (hashed ElGamal)]] (via [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]])
- [[ind-cca-security-to-ind-cpa-kem|IND-CCA security ⇒ IND-CPA KEM]] (via [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]])
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]] (via [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]])
- [[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]] (via [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]])
- [[ntru-to-kem|NTRU ⇒ IND-CCA KEM]] (via [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]])
- [[pke-to-kem|PKE ⇒ KEM]] (via [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]])
- [[rsa-to-ind-cca-security|RSA ⇒ IND-CCA KEM]] (via [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]])

<!-- END GENERATED participates-in -->
