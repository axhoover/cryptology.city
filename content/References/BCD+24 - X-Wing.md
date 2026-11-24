---
type: reference
status: draft
title: "BCD+24"
source: https://eprint.iacr.org/2024/039
authors: Manuel Barbosa, Deirdre Connolly, João Diogo Duarte, Aaron Kaiser, Peter Schwabe, Karoline Varner, Bas Westerbaan
venue: IACR Communications in Cryptology (CiC) 2024
published: 2024
aliases:
  - BCD+24
cryptobib_key: CiC:BCDKSV24
---

# [BCD+24] X-Wing

**Authors:** Manuel Barbosa, Deirdre Connolly, João Diogo Duarte, Aaron Kaiser, Peter Schwabe, Karoline Varner, Bas Westerbaan | **Venue:** IACR Communications in Cryptology (CiC) 2024 | [Source](https://eprint.iacr.org/2024/039)

## Abstract

X-Wing is a hybrid key-encapsulation mechanism based on X25519 and ML-KEM-768. It is designed to be the sensible choice for most applications. The concrete choice of X25519 and ML-KEM-768 allows X-Wing to achieve improved efficiency compared to using a generic KEM combiner. In this paper, we introduce the X-Wing hybrid KEM construction and provide a proof of security. We show (1) that X-Wing is a classically IND-CCA secure KEM if the strong Diffie-Hellman assumption holds in the X25519 nominal group, and (2) that X-Wing is a post-quantum IND-CCA secure KEM if ML-KEM-768 is itself an IND-CCA secure KEM and SHA3-256 is secure when used as a pseudorandom function. The first result is proved in the ROM, whereas the second one holds in the standard model. Loosely speaking, this means X-Wing is secure if either X25519 or ML-KEM-768 is secure. We stress that these security gaurantees and optimizations are only possible due to the concrete choices that were made, and it may not apply in the general case.

# Notes

The ePrint version is titled "X-Wing: The Hybrid KEM You've Been Looking For"; the journal version appeared in CiC volume 1, issue 1 (DOI 10.62056/a3qj89n4e).
