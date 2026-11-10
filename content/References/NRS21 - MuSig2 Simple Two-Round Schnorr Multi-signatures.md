---
type: reference
status: stub
title: "NRS21"
source: https://eprint.iacr.org/2020/1261
authors: Jonas Nick, Tim Ruffing, Yannick Seurin
venue: CRYPTO 2021
published: 2021
aliases:
  - NRS21
cryptobib_key: C:NicRufSeu21
---

# [NRS21] MuSig2: Simple Two-Round Schnorr Multi-signatures

**Authors:** Jonas Nick, Tim Ruffing, Yannick Seurin | **Venue:** CRYPTO 2021 | [Source](https://eprint.iacr.org/2020/1261)

## Abstract

Multi-signatures enable a group of signers to produce a joint signature on a joint message. Recently, Drijvers et al. (S&P'19) showed that all thus far proposed two-round multi-signature schemes in the pure DL setting (without pairings) are insecure under concurrent signing sessions. While Drijvers et al. proposed a secure two-round scheme, this efficiency in terms of rounds comes with the price of having signatures that are more than twice as large as Schnorr signatures, which are becoming popular in cryptographic systems due to their practicality (e.g., they will likely be adopted in Bitcoin). If one needs a multi-signature scheme that can be used as a drop-in replacement for Schnorr signatures, then one is forced to resort either to a three-round scheme or to sequential signing sessions, both of which are undesirable options in practice.

In this work, we propose MuSig2, a simple and highly practical two-round multi-signature scheme. This is the first scheme that simultaneously i) is secure under concurrent signing sessions, ii) supports key aggregation, iii) outputs ordinary Schnorr signatures, iv) needs only two communication rounds, and v) has similar signer complexity as ordinary Schnorr signatures. Furthermore, it is the first multi-signature scheme in the pure DL setting that supports preprocessing of all but one rounds, effectively enabling a non-interactive signing process without forgoing security under concurrent sessions. We prove the security of MuSig2 in the random oracle model, and the security of a more efficient variant in the combination of the random oracle and the algebraic group model. Both our proofs rely on a weaker variant of the OMDL assumption.
