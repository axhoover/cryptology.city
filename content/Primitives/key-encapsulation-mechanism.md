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

Kyber is an IND-CCA KEM based on [[learning-with-errors|Module LWE]] (module rank 2, 3, 4 over $\ZZ_q[X]/(X^{256}+1)$ for Kyber-512, -768, -1024) — [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]] ([[module-lwe-to-kem|Module LWE ⇒ IND-CCA KEM]]). Standardized by NIST as ML-KEM (FIPS 203). Uses the Fujisaki-Okamoto transform to achieve IND-CCA security from an IND-CPA base scheme ([[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]]).

## RSA-KEM / RSAES-OAEP

RSA-KEM samples $r \getsr \ZZ_N$, sends $c = r^e \bmod N$ with no padding, and derives $k = \hash(r)$; it is IND-CCA secure under [[rsa-assumption|RSA]] in the [[random-oracle-model|random oracle model]] ([[rsa-to-ind-cca-security|RSA ⇒ IND-CCA KEM]]) — [[Sho01b - A Proposal for an ISO Standard for Public Key Encryption|Sho01b]]. RSAES-OAEP is a [[public-key-encryption|PKE]], not a KEM; it is IND-CCA secure under RSA in the random oracle model — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].

# Other results

- [[pke-to-kem|PKE ⇒ KEM]]
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA PKE ⇒ IND-CCA KEM (Fujisaki–Okamoto)]]
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
