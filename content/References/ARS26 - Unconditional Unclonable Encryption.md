---
type: reference
status: stub
title: "ARS26"
source: https://arxiv.org/abs/2607.21551
authors: Prabhanjan Ananth, Seyoon Ragavan, Amit Sahai
venue: arXiv 2026
published: 2026-07-23
aliases:
  - ARS26
bibtex: |
  @misc{ARS26,
    author       = {Prabhanjan Ananth and Seyoon Ragavan and Amit Sahai},
    title        = {Unconditional Unclonable Encryption},
    howpublished = {arXiv:2607.21551},
    year         = {2026},
    url          = {https://arxiv.org/abs/2607.21551}
  }
---

# [ARS26] Unconditional Unclonable Encryption

**Authors:** Prabhanjan Ananth, Seyoon Ragavan, Amit Sahai | **Venue:** arXiv 2026 | [Source](https://arxiv.org/abs/2607.21551)

## Abstract

We give an unconditional construction of information-theoretically secure one-time private-key unclonable encryption for one-bit messages, with efficient encryption and decryption and exponentially small unclonable-indistinguishability advantage. Previous work by Bhattacharyya and Culf (Nature Physics, 2026) and Bhattacharyya, Broadbent, and Culf (arXiv:2603.08916) either only showed inverse-polynomial security loss or required inefficient encryption/decryption operations; we avoid both of these caveats. Our scheme's key is a uniformly random non-identity phase-free Pauli on $n$ qubits, and bit $a$ is encrypted as a random $(-1)^a$ eigenstate of that Pauli. We prove that the probability that both receivers recover the bit is at most $1/2 + O\left(2^{-n/2}\right).$ By a lower bound due to Broadbent, Culf, and Rochette (IACR Communications in Cryptology, 2026), this is the best probability bound achievable with $n$-qubit ciphertexts while ensuring perfect correctness (up to the constant hidden in the $O(\cdot)$).
