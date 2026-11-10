---
type: reference
status: stub
title: "Rot13"
source: https://eprint.iacr.org/2012/102
authors: Ron Rothblum
venue: TCC 2013
published: 2013
aliases:
  - Rot13
cryptobib_key: TCC:Rothblum13
---

# [Rot13] On the Circular Security of Bit-Encryption

**Authors:** Ron Rothblum | **Venue:** TCC 2013 | [Source](https://eprint.iacr.org/2012/102)

## Abstract

Motivated by recent developments in fully homomorphic encryption, we consider the folklore conjecture that every semantically-secure bit-encryption scheme is circular secure, or in other words, that every bit-encryption scheme remains secure even when the adversary is given encryptions of the individual bits of the private-key. We show the following obstacles to proving this conjecture:

1. We construct a public-key bit-encryption scheme that is plausibly semantically secure, but is not circular secure. The circular security attack manages to fully recover the private-key. The construction is based on an extension of the Symmetric External Diffie-Hellman assumption (SXDH) from bilinear groups, to $\ell$-multilinear groups of order $p$ where $\ell \geq c \cdot \log p$ for some $c>1$.

While there do exist $\ell$-multilinear groups (unconditionally), for $\ell \geq 3$ there are no known candidates for which the SXDH problem is believed to be hard. Nevertheless, there is also no evidence that such groups do not exist. Our result shows that in order to prove the folklore conjecture, one must rule out the possibility that there exist $\ell$-multilinear groups for which SXDH is hard.

2. We show that the folklore conjecture cannot be proved using a black-box reduction. That is, there is no reduction of circular security of a bit-encryption scheme to semantic security of that very same scheme that uses both the encryption scheme and the adversary as black-boxes.

Both of our negative results extend also to the (seemingly) weaker conjecture that every CCA secure bit-encryption scheme is circular secure.

As a final contribution, we show an equivalence between three seemingly distinct notions of circular security for public-key bit-encryption schemes. In particular, we give a general search to decision reduction that shows that an adversary that distinguishes between encryptions of the bits of the private-key and encryptions of zeros can be used to actually recover the private-key.
