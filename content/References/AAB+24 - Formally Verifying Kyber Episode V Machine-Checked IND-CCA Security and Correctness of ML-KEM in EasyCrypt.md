---
type: reference
status: draft
title: "AAB+24"
source: https://eprint.iacr.org/2024/843
authors: José Bacelar Almeida, Santiago Arranz Olmos, Manuel Barbosa, Gilles Barthe, François Dupressoir, Benjamin Grégoire, Vincent Laporte, Jean-Christophe Léchenet, Cameron Low, Tiago Oliveira, Hugo Pacheco, Miguel Quaresma, Peter Schwabe, Pierre-Yves Strub
venue: CRYPTO 2024
published: 2024
aliases:
  - AAB+24
cryptobib_key: C:AOBBDG24
---

# [AAB+24] Formally Verifying Kyber - Episode V: Machine-Checked IND-CCA Security and Correctness of ML-KEM in EasyCrypt

**Authors:** José Bacelar Almeida, Santiago Arranz Olmos, Manuel Barbosa, Gilles Barthe, François Dupressoir, Benjamin Grégoire, Vincent Laporte, Jean-Christophe Léchenet, Cameron Low, Tiago Oliveira, Hugo Pacheco, Miguel Quaresma, Peter Schwabe, Pierre-Yves Strub | **Venue:** CRYPTO 2024 | [Source](https://eprint.iacr.org/2024/843)

## Abstract

We present a formally verified proof of the correctness and IND-CCA security of ML-KEM, the Kyber-based Key Encapsulation Mechanism (KEM) undergoing standardization by NIST.

The proof is machine-checked in EasyCrypt and it includes:

1. A formalization of the correctness (decryption failure probability) and IND-CPA security of the Kyber base public-key encryption scheme, following Bos et al. at Euro S&P 2018;
2. A formalization of the relevant variant of the Fujisaki-Okamoto transform in the Random Oracle Model (ROM), which follows closely (but not exactly) Hofheinz, Hovelmanns and Kiltz at TCC 2017;
3. A proof that the IND-CCA security of the ML-KEM specification and its correctness as a KEM follows from the previous results;
4. Two formally verified implementations of ML-KEM written in Jasmin that are provably constant-time, functionally equivalent to the ML-KEM specification and, for this reason, inherit the provable security guarantees established in the previous points.

The top-level theorems give self-contained concrete bounds for the correctness and security of MLKEM down to (a variant of) Module-LWE. We discuss how they are built modularly by leveraging various EasyCrypt features.

# Notes

The ePrint version is a major revision of the CRYPTO 2024 paper.
