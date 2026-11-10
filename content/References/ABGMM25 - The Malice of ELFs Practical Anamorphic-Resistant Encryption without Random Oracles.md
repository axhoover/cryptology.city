---
type: reference
status: stub
title: "ABGMM25"
source: https://eprint.iacr.org/2025/305
authors: Gennaro Avitabile, Vincenzo Botta, Emanuele Giunta, Marcin Mielniczuk, Francesco Migliaro
venue: preprint
published: 2025
aliases:
  - ABGMM25
cryptobib_key: EPRINT:ABGMM25
---

# [ABGMM25] The Malice of ELFs: Practical Anamorphic-Resistant Encryption without Random Oracles

**Authors:** Gennaro Avitabile, Vincenzo Botta, Emanuele Giunta, Marcin Mielniczuk, Francesco Migliaro | **Venue:** preprint | [Source](https://eprint.iacr.org/2025/305)

## Abstract

The concept of Anamorphic Encryption (Persiano, Phan, and Yung, EUROCRYPT'22), aims to enable private communication in settings where the usage of encryption is heavily controlled by a central authority (henceforth called the dictator) who can obtain users' secret keys. Since then, various works have improved our understanding of AE in several aspects, including its limitations. In this regard, two recent works at CRYPTO'25 constructed various Anamorphic-Resistant Encryption (ARE) schemes, i.e., schemes admitting at most $O(\log(\lambda))$ bits of covert communication.

However, those results are still unsatisfactory, each coming with at least one of the following issues: (1) use of cryptographic heavy hammers such as indistinguishability obfuscation (iO); (2) abuse of the original definition to define overly powerful dictators; (3) reliance on the Random Oracle Model (ROM). In particular, proofs in the ROM are controversial as they fail to account for anamorphic schemes making non-black-box usage of the hash function used to instantiate the Random Oracle.

In this work, we overcome all of these limitations. First, we describe an anamorphic-resistant encryption scheme approaching practicality by relying only on public-key encryption and Extremely Lossy Functions (ELFs), both known from the (exponential) DDH assumption. Moreover, assuming Fully Unique NIZKs (known from iO), we provide another construction, which we later use to realize the first $\mathit{definitive}$ ARE; that is, a $\mathit{single}$ scheme that $\mathit{simultaneously}$ achieves the strongest level of anamorphic resistance against each of the possible levels of anamorphic security.
