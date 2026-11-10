---
type: reference
status: stub
title: "HR03"
source: https://eprint.iacr.org/2003/148
authors: Shai Halevi, Phillip Rogaway
venue: CRYPTO 2003
published: 2003
aliases:
  - HR03
cryptobib_key: C:HalRog03
---

# [HR03] A Tweakable Enciphering Mode

**Authors:** Shai Halevi, Phillip Rogaway | **Venue:** CRYPTO 2003 | [Source](https://eprint.iacr.org/2003/148)

## Abstract

We describe a block-cipher mode of operation, CMC, that turns an n-bit block cipher into a tweakable enciphering scheme that acts on strings of mn bits, where m>=2. When the underlying block cipher is secure in the sense of a strong pseudorandom permutation (PRP), our scheme is secure in the sense of tweakable, strong PRP. Such an object can be used to encipher the sectors of a disk, in-place, offering security as good as can be obtained in this setting. CMC makes a pass of CBC encryption, xors in a mask, and then makes a pass of CBC decryption; no universal hashing, nor any other non-trivial operation beyond the block-cipher calls, is employed.

Besides proving the security of CMC we initiate a more general investigation of tweakable enciphering schemes, considering issues like the non-malleability of these objects.
