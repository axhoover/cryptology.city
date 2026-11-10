---
type: reference
status: stub
title: "CSBB24"
source: https://eprint.iacr.org/2024/116
authors: Marina Checri, Renaud Sirdey, Aymen Boudguiga, Jean-Paul Bultel
venue: CRYPTO 2024
published: 2024
aliases:
  - CSBB24
cryptobib_key: C:CSBB24
---

# [CSBB24] On the Practical CPA$^{D}$ Security of “exact” and Threshold FHE Schemes and Libraries

**Authors:** Marina Checri, Renaud Sirdey, Aymen Boudguiga, Jean-Paul Bultel | **Venue:** CRYPTO 2024 | [Source](https://eprint.iacr.org/2024/116)

## Abstract

In their 2021 seminal paper, Li and Micciancio presented a passive attack against the CKKS approximate FHE scheme and introduced the notion of CPAD security. The current status quo is that this line of attacks does not apply to “exact” FHE. In this paper, we challenge this status quo by exhibiting a CPAD key recovery attack on the linearly homomorphic Regev cryptosystem which easily generalizes to other xHE schemes such as BFV, BGV and TFHE showing that these cryptosystems are not CPAD secure in their basic form. We also show that existing threshold variants of BFV, BGV and CKKS are particularily exposed to CPAD attackers and would be CPAD-insecure without smudging noise addition after partial decryption. Finally we successfully implement our attack against several mainstream FHE libraries and discuss a number of natural countermeasures as well as their consequences in terms of FHE practice, security and efficiency. The attack itself is quite practical as it typically takes less than an hour on an average laptop PC, requiring a few thousand ciphertexts as well as up to around a million evaluations/decryptions, to perform a full key recovery.
