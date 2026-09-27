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

A KEM is a tuple of efficient algorithms $(\KeyGen, \mathsf{Encap}, \mathsf{Decap})$ with key space $\calK$:

- $\KeyGen(1^\secpar) \to (\pk, \sk),$ is a randomized algorithm that generates a public/secret key pair.
- $\mathsf{Encap}(\pk) \to (c, k),$ is a randomized algorithm that takes a public key and outputs a ciphertext $c$ and a symmetric key $k \in \calK$.
- $\mathsf{Decap}(\sk, c) \to k,$ is a deterministic algorithm that recovers the symmetric key from the ciphertext.

## Properties

### Correctness

For all $\secpar \in \NN$ and $(\pk, \sk) \gets \KeyGen(1^\secpar)$:
$$\Pr[(c, k) \gets \mathsf{Encap}(\pk) : \mathsf{Decap}(\sk, c) = k] = 1.$$

### IND-CCA security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar)$
\State $(c^*, k_0) \gets \mathsf{Encap}(\pk)$
\State $k_1 \getsr \calK$
\State $b \getsr \bits$
\State $b' \gets \calA^{\mathsf{Decap}(\sk, \cdot)}(\pk, c^*, k_b)$
\Comment{$\calA$ may not query $\mathsf{Decap}$ on $c^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A KEM is **IND-CCA secure** if for all efficient $\calA$,

$$\Adv^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cca}}_{\mathrm{KEM},\calA}(\secpar) = 1\right] - 1\right|$$

is negligible. The adversary cannot query the decapsulation oracle on the challenge ciphertext $c^*$, since that would trivially reveal $b$.

## KEM-DEM hybrid encryption

Given an IND-CCA KEM and a one-time IND-CCA SKE (DEM), the following construction achieves IND-CCA [[public-key-encryption|PKE]]:

- $\Enc(\pk, m)$: run $(c_1, k) \gets \mathsf{Encap}(\pk)$; run $c_2 \gets \mathsf{SKE.Enc}(k, m)$; output $(c_1, c_2)$.
- $\Dec(\sk, (c_1, c_2))$: run $k \gets \mathsf{Decap}(\sk, c_1)$; output $\mathsf{SKE.Dec}(k, c_2)$.

This achieves IND-CCA security as long as the KEM is IND-CCA secure and the DEM is one-time IND-CCA secure — [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]]. An IND-CPA DEM does not suffice: with CTR mode as DEM, $\calA$ flips a bit in the masked part of $c_2^*$, queries $\Dec$ on $(c_1^*, c_2')$ for the result $c_2' \neq c_2^*$, and receives $m_b$ with that bit flipped; [[HHK10 - Some (in)sufficient conditions for secure hybrid encryption|HHK10]] study which KEM/DEM notion pairs suffice.

# Variations

## IND-CPA KEM

A weaker KEM where the adversary has no decapsulation oracle. Sufficient for passive adversaries.

## Lattice-based KEM (Kyber / ML-KEM)

Kyber is an IND-CCA KEM based on [[learning-with-errors|Module LWE]] (module rank 2, 3, 4 over $\ZZ_q[X]/(X^{256}+1)$ for Kyber-512, -768, -1024) — [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]]. Standardized by NIST as ML-KEM (FIPS 203). Uses the Fujisaki-Okamoto transform to achieve IND-CCA security from an IND-CPA base scheme.

## RSA-KEM / RSAES-OAEP

RSA-KEM samples $r \getsr \ZZ_N$, sends $c = r^e \bmod N$ with no padding, and derives $k = \hash(r)$; it is IND-CCA secure under [[rsa-assumption|RSA]] in the [[random-oracle-model|random oracle model]] — [[Sho01b - A Proposal for an ISO Standard for Public Key Encryption|Sho01b]]. RSAES-OAEP is a [[public-key-encryption|PKE]], not a KEM; it is IND-CCA secure under RSA in the random oracle model — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].

# Other results

- [[pke-to-kem|PKE ⇒ KEM]]
- [[ind-cpa-kem-to-ind-cca-security|IND-CPA KEM ⇒ IND-CCA security]]
- [[kem-and-ske-to-pke|KEM + SKE ⇒ PKE]]
- The KEM-DEM paradigm is standardized as HPKE (RFC 9180) — [[BBLW22 - Hybrid Public Key Encryption|BBLW22]]
- [[kem-to-ke|KEM ⇒ KE]]

<!-- BEGIN GENERATED participates-in af8a13f02623 -->

## Participates in

**Builds on Key encapsulation mechanism**

- [[kem-and-ske-to-pke|KEM + SKE ⇒ PKE]]
- [[kem-to-ke|KEM ⇒ KE]]

**Produces Key encapsulation mechanism**

- [[pke-to-kem|PKE ⇒ KEM]]

<!-- END GENERATED participates-in -->
