---
type: reference
status: stub
title: "KMY20"
source: https://eprint.iacr.org/2020/649
authors: Fuyuki Kitagawa, Takahiro Matsuda, Takashi Yamakawa
venue: TCC 2020
published: 2020
aliases:
  - KMY20
cryptobib_key: TCC:KitMatYam20
---

# [KMY20] NIZK from SNARG

**Authors:** Fuyuki Kitagawa, Takahiro Matsuda, Takashi Yamakawa | **Venue:** TCC 2020 | [Source](https://eprint.iacr.org/2020/649)

## Abstract

We give a construction of a non-interactive zero-knowledge (NIZK) argument for all NP languages based on a succinct non-interactive argument (SNARG) for all NP languages and a one-way function. The succinctness requirement for the SNARG is rather mild: We only require that the proof size be $|\pi|=\mathsf{poly}(\lambda)(|x|+|w|)^\delta$ for some constant $\delta<1$, where $|x|$ is the statement length, $|w|$ is the witness length, and $\lambda$ is the security parameter. Especially, we do not require anything about the efficiency of the verification.

Based on this result, we also give a generic conversion from a SNARK to a zero-knowledge SNARG assuming the existence of one-way functions where SNARK is a SNARG with the knowledge-extractability. For this conversion, we require the SNARK to be fully succinct, i.e., the proof size is $\mathsf{poly}(\lambda)(|x|+|w|)^{o(1)}$. Before this work, such a conversion was only known if we additionally assume the existence of a NIZK.

Along the way of obtaining our result, we give a generic compiler to upgrade a NIZK for all NP languages with non-adaptive zero-knowledge to one with adaptive zero-knowledge. Though this can be shown by carefully combining known results, to the best of our knowledge, no explicit proof of this generic conversion has been presented.
