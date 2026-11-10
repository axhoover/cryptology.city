---
type: reference
status: stub
title: "KG20"
source: https://eprint.iacr.org/2020/852
authors: Chelsea Komlo, Ian Goldberg
venue: SAC 2020
published: 2020
aliases:
  - KG20
cryptobib_key: SAC:KomGol20
---

# [KG20] FROST: Flexible Round-Optimized Schnorr Threshold Signatures

**Authors:** Chelsea Komlo, Ian Goldberg | **Venue:** SAC 2020 | [Source](https://eprint.iacr.org/2020/852)

## Abstract

Unlike signatures in a single-party setting, threshold signatures require cooperation among a threshold number of signers each holding a share of a common private key. Consequently, generating signatures in a threshold setting imposes overhead due to network rounds among signers, proving costly when secret shares are stored on network-limited devices or when coordination occurs over unreliable networks. In this work, we present FROST, a Flexible Round-Optimized Schnorr Threshold signature scheme that reduces network overhead during signing operations while employing a novel technique to protect against forgery attacks applicable to similar schemes in the literature. FROST improves upon the state of the art in Schnorr threshold signature protocols, as it can be safely used without limiting concurrency of signing operations yet allows for true threshold signing, as only a threshold number of participants are required for signing operations. FROST can be used as either a two-round protocol where signers send and receive two messages in total, or optimized to a single-round signing protocol with a pre-processing stage. FROST achieves its efficiency improvements in part by allowing the protocol to abort in the presence of a misbehaving participant (who is then identified and excluded from future operations)—a reasonable model for practical deployment scenarios. We present proofs of security demonstrating that FROST is secure against chosen-message attacks assuming the discrete logarithm problem is hard and the adversary controls fewer participants than the threshold.
