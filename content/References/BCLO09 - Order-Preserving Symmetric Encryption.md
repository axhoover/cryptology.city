---
type: reference
status: stub
title: "BCLO09"
source: https://eprint.iacr.org/2012/624
authors: Alexandra Boldyreva, Nathan Chenette, Younho Lee, Adam O'Neill
venue: EUROCRYPT 2009
published: 2009
aliases:
  - BCLO09
cryptobib_key: EC:BCLO09
---

# [BCLO09] Order-Preserving Symmetric Encryption

**Authors:** Alexandra Boldyreva, Nathan Chenette, Younho Lee, Adam O'Neill | **Venue:** EUROCRYPT 2009 | [Source](https://eprint.iacr.org/2012/624)

## Abstract

We initiate the cryptographic study of order-preserving symmetric encryption (OPE), a primitive suggested in the database community by Agrawal et al. (SIGMOD '04) for allowing efficient range queries on encrypted data. Interestingly, we first show that a straightforward relaxation of standard security notions for encryption such as indistinguishability against chosen-plaintext attack (IND-CPA) is unachievable by a practical OPE scheme. Instead, we propose a security notion in the spirit of pseudorandom functions (PRFs) and related primitives asking that an OPE scheme look “as-random-as-possible” subject to the order-preserving constraint.
We then design an efficient OPE scheme and prove its security under our notion based on pseudorandomness of an underlying blockcipher. Our construction is based on a natural relation we uncover between a random order-preserving function and the hypergeometric probability distribution.
In particular, it makes black-box use of an efficient sampling algorithm for the latter.
