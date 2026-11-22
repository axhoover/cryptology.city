---
type: reference
status: draft
title: "BR94"
source: https://doi.org/10.1007/BFb0053428
authors: Mihir Bellare, Phillip Rogaway
venue: EUROCRYPT 1994
published: 1995
aliases:
  - BR94
cryptobib_key: EC:BelRog94
---

# [BR94] Optimal Asymmetric Encryption

**Authors:** Mihir Bellare, Phillip Rogaway | **Venue:** EUROCRYPT 1994 | [Source](https://doi.org/10.1007/BFb0053428)

## Abstract

Given an arbitrary $k$-bit to $k$-bit trapdoor permutation $f$ and a hash function, we exhibit an encryption scheme for which (i) any string $x$ of length slightly less than $k$ bits can be encrypted as $f(r_x)$, where $r_x$ is a simple probabilistic encoding of $x$ depending on the hash function; and (ii) the scheme can be proven semantically secure assuming the hash function is “ideal.” Moreover, a slightly enhanced scheme is shown to have the property that the adversary can create ciphertexts only of strings for which she “knows” the corresponding plaintexts—such a scheme is not only semantically secure but also non-malleable and secure against chosen-ciphertext attack.

# Notes

- The abstract is that of the authors' full version, "Optimal Asymmetric Encryption — How to Encrypt with RSA", at https://cseweb.ucsd.edu/~mihir/papers/oaep.pdf, dated November 19, 1995, which states that a preliminary version appeared in the Eurocrypt 94 proceedings, LNCS 950. Its Section 1.8 (Updates) cites later work, including the journal versions of Sho01a and FOPS01.
