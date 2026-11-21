---
type: reference
status: stub
title: "BDN18"
source: https://eprint.iacr.org/2018/483
authors: Dan Boneh, Manu Drijvers, Gregory Neven
venue: ASIACRYPT 2018
published: 2018
aliases:
  - BDN18
cryptobib_key: AC:BonDriNev18
---

# [BDN18] Compact Multi-Signatures for Smaller Blockchains

**Authors:** Dan Boneh, Manu Drijvers, Gregory Neven | **Venue:** ASIACRYPT 2018 | [Source](https://eprint.iacr.org/2018/483)

## Abstract

We construct new multi-signature schemes that provide new functionality. Our schemes are designed to reduce the size of the Bitcoin blockchain, but are useful in many other settings where multi-signatures are needed. All our constructions support both signature compression and public-key aggregation. Hence, to verify that a number of parties signed a common message m, the verifier only needs a short multi-signature, a short aggregation of their public keys, and the message m. We give new constructions that are derived from Schnorr signatures and from BLS signatures. Our constructions are in the plain public key model, meaning that users do not need to prove knowledge or possession of their secret key.

In addition, we construct the first short accountable-subgroup multi-signature (ASM) scheme. An ASM scheme enables any subset S of a set of n parties to sign a message m so that a valid signature discloses which subset generated the signature (hence the subset S is accountable for signing m). We construct the first ASM scheme where signature size is only O(k) bits over the description of S, where k is the security parameter. Similarly, the aggregate public key is only O(k) bits, independent of n. The signing process is non-interactive. Our ASM scheme is very practical and well suited for compressing the data needed to spend funds from a t-of-n Multisig Bitcoin address, for any (polynomial size) t and n.
