---
type: reference
status: stub
title: "CF13"
source: https://eprint.iacr.org/2011/495
authors: Dario Catalano, Dario Fiore
venue: PKC 2013
published: 2013
aliases:
  - CF13
cryptobib_key: PKC:CatFio13
---

# [CF13] Vector Commitments and Their Applications

**Authors:** Dario Catalano, Dario Fiore | **Venue:** PKC 2013 | [Source](https://eprint.iacr.org/2011/495)

## Abstract

We put forward the study of a new primitive that we call _Vector Commitment_ (VC, for short). Informally, VCs allow to commit to an ordered sequence of $q$ values $(m_1, \ldots, m_q)$ in such a way that one can later open the commitment at specific positions (e.g., prove that $m_i$ is the $i$-th committed message). For security, Vector Commitments are required to satisfy a notion that we call _position binding_ which states that an adversary should not be able to open a commitment to two different values at the same position. Moreover, what makes our primitive interesting is that we require VCs to be _concise_, i.e. the size of the commitment string and of its openings has to be independent of the vector length.

We show two realizations of VCs based on standard and well established assumptions, such as RSA, and Computational Diffie-Hellman (in bilinear groups). Next, we turn our attention to applications and we show that Vector Commitments are useful in a variety of contexts, as they allow for compact and efficient solutions which significantly improve previous works either in terms of efficiency of the resulting solutions, or in terms of "quality" of the underlying assumption, or both. These applications include: Verifiable Databases with Efficient Updates, Updatable Zero-Knowledge Databases, and Universal Dynamic Accumulators.
