---
type: reference
status: stub
title: "BDOZ11"
source: https://eprint.iacr.org/2010/514
authors: Rikke Bendlin, Ivan Damgård, Claudio Orlandi, Sarah Zakarias
venue: EUROCRYPT 2011
published: 2011
aliases:
  - BDOZ11
cryptobib_key: EC:BDOZ11
---

# [BDOZ11] Semi-homomorphic Encryption and Multiparty Computation

**Authors:** Rikke Bendlin, Ivan Damgård, Claudio Orlandi, Sarah Zakarias | **Venue:** EUROCRYPT 2011 | [Source](https://eprint.iacr.org/2010/514)

## Abstract

An additively-homomorphic encryption scheme enables us to compute
linear functions of an encrypted input by manipulating only the ciphertexts. We define the relaxed notion of a semi-homomorphic
encryption scheme, where the plaintext can be recovered as long as the
computed function does not increase the size of the input "too
much". We show that a number of existing cryptosystems are
captured by our relaxed notion. In particular, we give examples of semi-homomorphic encryption schemes based on lattices, subset sum and factoring.
We then demonstrate how semi-homomorphic encryption schemes allow us
to construct an efficient multiparty computation protocol for arithmetic circuits, UC-secure against a dishonest majority. The protocol consists of a preprocessing phase and an online phase. Neither the inputs nor the function to be computed have to be known during preprocessing.
Moreover, the online phase is extremely efficient as it requires
no cryptographic operations: the parties only need to exchange additive shares and verify information theoretic MACs.
Our contribution is therefore twofold: from a theoretical point of view, we can base multiparty computation on a variety of different assumptions, while on the practical side we offer a protocol with better efficiency than any previous solution.
