---
type: reference
status: stub
title: "Rag26"
source: https://arxiv.org/abs/2607.21811
authors: Seyoon Ragavan
venue: arXiv 2026
published: 2026-07-23
aliases:
  - Rag26
bibtex: |
  @misc{Rag26,
    author       = {Seyoon Ragavan},
    title        = {Efficient Unclonable Encryption from Pauli Eigenstates},
    howpublished = {arXiv:2607.21811},
    year         = {2026},
    url          = {https://arxiv.org/abs/2607.21811}
  }
---

# [Rag26] Efficient Unclonable Encryption from Pauli Eigenstates

**Authors:** Seyoon Ragavan | **Venue:** arXiv 2026 | [Source](https://arxiv.org/abs/2607.21811)

## Abstract

We give, to our knowledge, the first plain-model, one-time information-theoretically secure, efficient unclonable encryption scheme for one classical bit. Previous work by Bhattacharyya and Culf (Nature Physics, 2026) and Bhattacharyya, Broadbent, and Culf either only showed $1/\mathsf{poly}(\lambda)$ security loss or required inefficient encryption/decryption operations. We avoid both of these caveats; in doing so, we obtain (to our knowledge) the first plain-model construction of many-time secure $1 \to 2$ unclonable encryption for arbitrary polynomial-length messages, assuming the existence of pseudorandom function-like states (Bartusek and Goldin). The key is a uniformly random non-identity phase-free Pauli on $n$ qubits, and bit $a$ is encrypted as a random $(-1)^a$ eigenstate of that Pauli. The scheme is exponentially secure; we prove that the probability that both receivers recover the bit is at most $\frac{1}{2}+\frac{1}{2}\sqrt{{2^n}/({4^n-1})} = \frac{1}{2} + O\left(2^{-n/2}\right).$ By a lower bound due to Broadbent, Culf, and Rochette, this is the best probability bound achievable with $n$-qubit ciphertexts (up to the constant hidden in the $O(\cdot)$). The main conceptual idea is to leverage, in a precise spectral sense, the balanced commutation-anticommutation structure of the Pauli group. The proof is intricate but completely elementary and makes use of standard spectral bound techniques. The main technical workhorse is a standalone linear-algebraic lemma that informally relates the positivity of two different operators, each capturing the intuition that if the two receivers can individually decrypt unusually often then they must also disagree often. GPT-5.6 Sol Ultra found this proof in an extended conversation with the author and drafted a preliminary version of this paper. The author is fully accountable for the correctness of this paper.
