---
type: reference
status: stub
title: "Rog04a"
source: https://doi.org/10.1007/978-3-540-30539-2_2
authors: Phillip Rogaway
venue: Asiacrypt 2004
published: 2004
aliases:
  - Rog04a
cryptobib_key: AC:Rogaway04
---

# [Rog04a] Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC

**Authors:** Phillip Rogaway | **Venue:** Asiacrypt 2004 | [Source](https://doi.org/10.1007/978-3-540-30539-2_2)

## Abstract

TODO — abstract of the Asiacrypt 2004 version (DOI-only); the full version's abstract is under Notes.

# Notes

- The author hosts a full version (September 24, 2004) at https://web.cs.ucdavis.edu/~rogaway/papers/offsets.pdf; theorem, definition and section numbers cited on this wiki are those of the full version.
- Abstract of the full version (September 24, 2004), verbatim; the Asiacrypt 2004 abstract may differ:

  > We describe highly efficient constructions, XE and XEX, that turn a blockcipher $E : \calK \times \bits^n \to \bits^n$ into a tweakable blockcipher $\tilde E : \calK \times \calT \times \bits^n \to \bits^n$ having tweak space $\calT = \bits^n \times \mathbb{I}$ where $\mathbb{I}$ is a set of tuples of integers such as $\mathbb{I} = [1 \,..\, 2^{n/2}] \times [0 \,..\, 10]$. When tweak $T$ is obtained from tweak $S$ by incrementing one if its numerical components, the cost to compute $\tilde E_K^T(M)$ having already computed some $\tilde E_K^S(M')$ is one blockcipher call plus a small and constant number of elementary machine operations. Our constructions work by associating to the $i$th coordinate of $\mathbb{I}$ an element $\alpha_i \in \FF_{2^n}^*$ and multiplying by $\alpha_i$ when one increments that component of the tweak. We illustrate the use of this approach by refining the authenticated-encryption scheme OCB and the message authentication code PMAC, yielding variants of these algorithms that are simpler and faster than the original schemes, and yet have simpler proofs. Our results bolster the thesis of Liskov, Rivest, and Wagner [11] that a desirable approach for designing modes of operation is to start from a tweakable blockcipher. We elaborate on their idea, suggesting the kind of tweak space, usage-discipline, and blockcipher-based instantiations that give rise to simple and efficient modes.
