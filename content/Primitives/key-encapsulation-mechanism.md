---
aliases:
  - KEM
  - DEM
  - KEM-DEM
  - Key encapsulation mechanism
  - Hybrid encryption
title: Key encapsulation mechanism
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

Given an IND-CCA KEM and an IND-CPA SKE (DEM), the following construction achieves IND-CCA [[public-key-encryption|PKE]]:

- $\Enc(\pk, m)$: run $(c_1, k) \gets \mathsf{Encap}(\pk)$; run $c_2 \gets \mathsf{SKE.Enc}(k, m)$; output $(c_1, c_2)$.
- $\Dec(\sk, (c_1, c_2))$: run $k \gets \mathsf{Decap}(\sk, c_1)$; output $\mathsf{SKE.Dec}(k, c_2)$.

This achieves IND-CCA security as long as the KEM is IND-CCA secure and the DEM is IND-CPA secure (or even OT-secure for a one-time pad).

# Variations

## IND-CPA KEM

A weaker KEM where the adversary has no decapsulation oracle. Sufficient for passive adversaries.

## Lattice-based KEM (Kyber / ML-KEM)

Kyber is an IND-CCA KEM based on [[learning-with-errors|Module LWE]] (rank-3 module over a polynomial ring). Standardized by NIST as ML-KEM (FIPS 203). Uses the Fujisaki-Okamoto transform to achieve IND-CCA security from an IND-CPA base scheme.

## RSA-KEM / RSAES-OAEP

RSA-based KEM using OAEP padding. IND-CCA secure in the [[random-oracle-model|random oracle model]].

# Other results

- Any IND-CCA PKE scheme immediately gives an IND-CCA KEM by encapsulating a random key — standard
- The Fujisaki-Okamoto (FO) transform converts any IND-CPA KEM to an IND-CCA KEM in the random oracle model; used in all NIST PQC KEM standards (Kyber, NTRU) — standard
- KEM-DEM achieves IND-CCA PKE from IND-CCA KEM + IND-CPA SKE — standard
- Hybrid encryption (KEM-DEM) is the standard approach in TLS 1.3, Signal, age, and OpenPGP
- KEM with re-randomizable ciphertexts gives anonymous PKE — standard
- KEM implies [[key-exchange|key exchange]]: running Encap with the sender's public key gives an authenticated key exchange — standard
