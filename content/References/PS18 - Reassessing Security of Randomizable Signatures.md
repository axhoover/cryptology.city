---
type: reference
status: stub
title: "PS18"
source: https://eprint.iacr.org/2017/1197
authors: David Pointcheval, Olivier Sanders
venue: CT-RSA 2018
published: 2018
aliases:
  - PS18
cryptobib_key: RSA:PoiSan18
---

# [PS18] Reassessing Security of Randomizable Signatures

**Authors:** David Pointcheval, Olivier Sanders | **Venue:** CT-RSA 2018 | [Source](https://eprint.iacr.org/2017/1197)

## Abstract

The Camenisch-Lysyanskaya (CL) signature is a very popular tool in cryptography, especially among privacy-preserving constructions. Indeed, the latter benefit from their numerous features such as randomizability.
Following the evolution of pairing-based cryptography, with the move from symmetric pairings to asymmetric pairings, Pointcheval and Sanders (PS) proposed at CT-RSA '16 an alternative scheme which improves performances while keeping the same properties.
Unfortunately, CL and PS signatures raise concerns in the cryptographic community because they both rely on interactive assumptions that essentially state their EUF-CMA security. This lack of precise security assessment is obviously a barrier to a widespread use of these signatures and a reason for preferring other constructions, such as the ones relying on $q$-type assumptions.

In this paper, we study more thoroughly the security of these signatures and prove that it actually relies, for both constructions, on simple variants of the $\textsf{SDH}$ assumption, assuming a slight modification of the original constructions. Our work thus shows that the CL and PS signature schemes offer similar security guarantees as those provided by several other constructions using bilinear groups, and so that one can benefit from their interesting features without jeopardizing security.
