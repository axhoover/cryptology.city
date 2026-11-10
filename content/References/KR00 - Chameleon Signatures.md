---
type: reference
status: stub
title: "KR00"
source: https://eprint.iacr.org/1998/010
authors: Hugo Krawczyk, Tal Rabin
venue: NDSS 2000
published: 2000
aliases:
  - KR00
cryptobib_key: NDSS:KraRab00
---

# [KR00] Chameleon Signatures

**Authors:** Hugo Krawczyk, Tal Rabin | **Venue:** NDSS 2000 | [Source](https://eprint.iacr.org/1998/010)

## Abstract

We introduce CHAMELEON SIGNATURES that provide with an undeniable
commitment of the signer to the contents of the signed document (as regular
digital signatures do) but, at the same time, do not allow the recipient
of the signature to disclose the contents of the signed information to any
third party without the signer's consent. These signatures are closely
related to Chaum's "undeniable signatures", but chameleon signatures allow
for simpler and more efficient realizations than the latter.
In particular, they are essentially non-interactive and do not involve the
design and complexity of zero-knowledge proofs on which traditional undeniable
signatures are based. Instead, chameleon signatures are generated
under the standard method of hash-then-sign. Yet, the hash functions
which are used are CHAMELEON HASH FUNCTIONS. These hash functions are
characterized by the non-standard property of being collision-resistant
for the signer but collision tractable for the recipient.

We present simple and efficient constructions of chameleon hashing and
chameleon signatures. The former can be constructed based on standard
cryptographic assumptions (such as the hardness of factoring or discrete
logarithms) and have efficient realizations based on these assumptions.
For the signature part we can use any digital signature (such as RSA or DSS)
and prove the unforgeability property of the resultant chameleon signatures
solely based on the unforgeability of the underlying digital signature
in use.
