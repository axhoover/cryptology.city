---
type: reference
status: stub
title: "KRW15"
source: https://eprint.iacr.org/2013/683
authors: Venkata Koppula, Kim Ramchen, Brent Waters
venue: TCC 2015
published: 2015
aliases:
  - KRW15
cryptobib_key: TCC:KopRamWat15
---

# [KRW15] Separations in Circular Security for Arbitrary Length Key Cycles

**Authors:** Venkata Koppula, Kim Ramchen, Brent Waters | **Venue:** TCC 2015 | [Source](https://eprint.iacr.org/2013/683)

## Abstract

While standard notions of security suffice to protect any message supplied by an adversary, in some situations stronger notions of security are required. One such notion is n-circular security, where ciphertexts Enc(pk1, sk2), Enc(pk2, sk3), ..., Enc(pkn, sk1) should be indistinguishable from encryptions of zero.

In this work we prove the following results for n-circular security, based upon recent candidate constructions of indistinguishability obfuscation [GGH+ 13b, CLT13]:

- For any n there exists an encryption scheme that is IND-CPA secure but not n-circular secure.

- There exists a bit encryption scheme that is IND-CPA secure, but not 1-circular secure.

- If there exists an encryption system where an attacker can distinguish a key encryption cycle from an encryption of zeroes, then in a transformed cryptosystem there exists an attacker which recovers secret keys from the encryption cycles.

Our last result is generic and applies to any such cryptosystem.
