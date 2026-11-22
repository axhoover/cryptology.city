---
type: reference
status: draft
title: "GHP18"
source: https://eprint.iacr.org/2018/024
authors: Federico Giacon, Felix Heuer, Bertram Poettering
venue: PKC 2018
published: 2018
aliases:
  - GHP18
cryptobib_key: PKC:GiaHeuPoe18
---

# [GHP18] KEM Combiners

**Authors:** Federico Giacon, Felix Heuer, Bertram Poettering | **Venue:** PKC 2018 | [Source](https://eprint.iacr.org/2018/024)

## Abstract

Key-encapsulation mechanisms (KEMs) are a common stepping stone for constructing public-key encryption. Secure KEMs can be built from diverse assumptions, including ones related to integer factorization, discrete logarithms, error correcting codes, or lattices. In light of the recent NIST call for post-quantum secure PKE, the zoo of KEMs that are believed to be secure continues to grow. Yet, on the question of which is the most secure KEM opinions are divided. While using the best candidate might actually not seem necessary to survive everyday life situations, placing a wrong bet can actually be devastating, should the employed KEM eventually turn out to be vulnerable.

We introduce KEM combiners as a way to garner trust from different KEM constructions, rather than relying on a single one: We present efficient black-box constructions that, given any set of \`ingredient' KEMs, yield a new KEM that is (CCA) secure as long as at least one of the ingredient KEMs is.

As building blocks our constructions use cryptographic hash functions and blockciphers. Some corresponding security proofs require idealized models for these primitives, others get along on standard assumptions.

# Notes

The ePrint version is a minor revision of the PKC 2018 paper (LNCS 10769, pp. 190–218).
