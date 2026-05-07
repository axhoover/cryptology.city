---
title: "KSW08"
source: https://eprint.iacr.org/2007/397
authors: Jonathan Katz, Amit Sahai, Brent Waters
venue: Eurocrypt 2008
published: 2008-04-01
aliases:
  - KSW08
tags:
  - Eurocrypt
cryptobib_key: EC:KatSahWat08
---

# [KSW08] Predicate Encryption Supporting Disjunctions, Polynomial Equations, and Inner Products

**Authors:** Jonathan Katz, Amit Sahai, Brent Waters | **Venue:** Eurocrypt 2008 | [Source](https://eprint.iacr.org/2007/397)

## Abstract

Predicate encryption is a new paradigm for public-key encryption that generalizes identity-based and attribute-based encryption. In a predicate encryption scheme, secret keys correspond to predicates and ciphertexts are associated with attributes; a secret key $SK_f$ corresponding to predicate $f$ can decrypt a ciphertext associated with attribute $x$ if and only if $f(x) = 1$. We present the first predicate encryption scheme supporting inner-product predicates: a key for a vector $\mathbf{v}$ decrypts a ciphertext for a vector $\mathbf{x}$ if and only if $\langle \mathbf{v}, \mathbf{x} \rangle = 0$. Our scheme achieves full attribute-hiding security — ciphertexts reveal neither the payload nor the attribute vector. We also demonstrate that inner-product predicates are surprisingly expressive: they suffice for supporting disjunctions, polynomial equations, CNF/DNF formulas, and general polynomial evaluation. The scheme is proved secure in the standard model under the decisional linear assumption over bilinear groups.
