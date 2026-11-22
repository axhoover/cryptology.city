---
type: reference
status: draft
title: "Reg05"
source: https://arxiv.org/abs/2401.03703
authors: Oded Regev
venue: STOC 2005
published: 2005-05-01
aliases:
  - Reg05
cryptobib_key: STOC:Regev05
---

# [Reg05] On Lattices, Learning with Errors, Random Linear Codes, and Cryptography

**Authors:** Oded Regev | **Venue:** STOC 2005 | [Source](https://arxiv.org/abs/2401.03703)

## Abstract

Our main result is a reduction from worst-case lattice problems such as GapSVP and SIVP to a certain learning problem. This learning problem is a natural extension of the ‘learning from parity with error’ problem to higher moduli. It can also be viewed as the problem of decoding from a random linear code. This, we believe, gives a strong indication that these problems are hard. Our reduction, however, is quantum. Hence, an efficient solution to the learning problem implies a quantum algorithm for GapSVP and SIVP. A main open question is whether this reduction can be made classical (i.e., non-quantum).

We also present a (classical) public-key cryptosystem whose security is based on the hardness of the learning problem. By the main result, its security is also based on the worst-case quantum hardness of GapSVP and SIVP. The new cryptosystem is much more efficient than previous lattice-based cryptosystems: the public key is of size $\tilde{O}(n^2)$ and encrypting a message increases its size by a factor of $\tilde{O}(n)$ (in previous cryptosystems these values are $\tilde{O}(n^4)$ and $\tilde{O}(n^2)$, respectively). In fact, under the assumption that all parties share a random bit string of length $\tilde{O}(n^2)$, the size of the public key can be reduced to $\tilde{O}(n)$.

# Notes

The source is arXiv 2401.03703v1 (January 2024), the full version published in the Journal of the ACM, vol. 56, no. 6, article 34 (2009); its arXiv comments state that it is identical to the version posted in 2009 apart from a fix to the proof of Claim 3.13. The abstract above is that version's. Theorem and lemma numbers cited on this wiki refer to it; the STOC 2005 paper, which the cryptobib key names, is the conference version.
