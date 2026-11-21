---
type: reference
status: stub
title: "CCGM25"
source: https://eprint.iacr.org/2025/233
authors: Davide Carnemolla, Dario Catalano, Emanuele Giunta, Francesco Migliaro
venue: CRYPTO 2025
published: 2025
aliases:
  - CCGM25
cryptobib_key: C:CCGM25
---

# [CCGM25] Anamorphic Resistant Encryption: the Good, the Bad and the Ugly

**Authors:** Davide Carnemolla, Dario Catalano, Emanuele Giunta, Francesco Migliaro | **Venue:** CRYPTO 2025 | [Source](https://eprint.iacr.org/2025/233)

## Abstract

Anamorphic encryption (AE), introduced by Persiano, Phan and Yung at Eurocrypt ’22, allows to establish secure communication in scenarios where users might be forced to hand over their decryption keys to some hostile authority. Over the last few years, several works have improved our understanding of the primitive by proposing novel realizations, new security notions and studying inherent limitations.
This work makes progress, mainly, on this last line of research.
We show concrete realizations of public key encryption schemes that, provably, cannot be turned anamorphic. These were called Anamorphic Resistant Encryption (ARE, fort short) in a recent work of Dodis and Goldin.
We also show that, under certain conditions, anamorphic encryption is equivalent to algorithm substitution attacks. This allows to positively reinterpret our AREs as PKE schemes provably resistant to subversion attacks. To the best of our knowledge, these seem to be the first IND-CPA secure schemes achieving subversion resistance without trust assumptions or non-black-box decomposition techniques.
Our two AREs heavily rely, among other things, on a direct usage of extremely lossy functions: here the lossyness property is used in the constructions, rather than just in the proofs. The first construction is in the public parameters model and also requires iO. The second construction eliminates the need of both public parameters and iO, but is in the random oracle and relies on the novel concept of robust extremely lossy functions with group structure, a primitive that we define and (show how to) realize in this paper.
