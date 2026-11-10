---
type: reference
status: stub
title: "Wat15"
source: https://eprint.iacr.org/2014/588
authors: Brent Waters
venue: CRYPTO 2015
published: 2015
aliases:
  - Wat15
cryptobib_key: C:Waters15
---

# [Wat15] A Punctured Programming Approach to Adaptively Secure Functional Encryption

**Authors:** Brent Waters | **Venue:** CRYPTO 2015 | [Source](https://eprint.iacr.org/2014/588)

## Abstract

We propose the first construction for achieving adaptively secure functional encryption (FE) for poly-sized circuits (without complexity leveraging) from indistinguishability obfuscation (iO). Our reduction has polynomial loss to the
underlying primitives. We develop a "punctured programming” approach to constructing and proving systems where outside of obfuscation we rely only on primitives realizable from pseudo random generators.

Our work consists of two constructions.
Our first FE construction is provably secure
against any attacker that is limited to making all of its private key
queries after it sees the challenge ciphertext. (This notion implies selective security.)
Our construction makes use of an we introduce called puncturable deterministic
encryption (PDE) which may be of independent. With this primitive in place we show a simpleconstruction FE construction.

We then provide a second construction that achieves adaptive security from indistinguishability obfuscation. Our central idea is to achieve an adaptively secure functional encryption by bootstrapping from a one-bounded FE scheme that is adaptively secure. By using bootstrapping we can use "selective-ish” techniques at the outer
level obfuscation level and push down the challenge of dealing with
adaptive security is then FE scheme, where it has been already been solved.
We combine our bootstrapping framework with a new "key signaling” technique
to achieve our construction and proof.
