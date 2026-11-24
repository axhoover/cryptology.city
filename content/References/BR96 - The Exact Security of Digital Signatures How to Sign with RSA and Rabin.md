---
type: reference
status: draft
title: "BR96"
source: https://doi.org/10.1007/3-540-68339-9_34
authors: Mihir Bellare, Phillip Rogaway
venue: EUROCRYPT 1996
published: 1996
aliases:
  - BR96
cryptobib_key: EC:BelRog96
---

# [BR96] The Exact Security of Digital Signatures: How to Sign with RSA and Rabin

**Authors:** Mihir Bellare, Phillip Rogaway | **Venue:** EUROCRYPT 1996 | [Source](https://doi.org/10.1007/3-540-68339-9_34)

## Abstract

We describe an RSA-based signing scheme called PSS which combines essentially optimal efficiency with attractive security properties. Signing takes one RSA decryption plus some hashing, verification takes one RSA encryption plus some hashing, and the size of the signature is the size of the modulus. Assuming the underlying hash functions are ideal, our schemes are not only provably secure, but are so in a tight way—an ability to forge signatures with a certain amount of computational resources implies the ability to invert RSA (on the same size modulus) with about the same computational effort. Furthermore, we provide a second scheme which maintains all of the above features and in addition provides message recovery. These ideas extend to provide schemes for Rabin signatures with analogous properties; in particular their security can be tightly related to the hardness of factoring.

# Notes

- The abstract is that of the authors' copy at https://cseweb.ucsd.edu/~mihir/papers/exactsigs.pdf, dated March 14, 1996, which states that the paper appears in Advances in Cryptology – Eurocrypt 96 Proceedings, Lecture Notes in Computer Science Vol. 1070.
