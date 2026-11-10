---
type: reference
status: stub
title: "BKM06"
source: https://eprint.iacr.org/2005/304
authors: Adam Bender, Jonathan Katz, Ruggero Morselli
venue: TCC 2006
published: 2006
aliases:
  - BKM06
cryptobib_key: TCC:BenKatMor06
---

# [BKM06] Ring Signatures: Stronger Definitions, and Constructions Without Random Oracles

**Authors:** Adam Bender, Jonathan Katz, Ruggero Morselli | **Venue:** TCC 2006 | [Source](https://eprint.iacr.org/2005/304)

## Abstract

Ring signatures, first introduced by Rivest, Shamir, and Tauman, enable a user to sign a message so that a ring of possible signers (of which the user is a member) is identified, without revealing exactly which member of that ring actually generated the signature. In contrast to group signatures, ring signatures are completely “ad-hoc” and do not require any central authority or coordination among the various users (indeed, users do not even need to be aware of each other); furthermore, ring signature schemes grant users fine-grained control over the level of anonymity associated with any particular signature.

This paper has two main areas of focus. First, we examine previous definitions of security for ring signature schemes and suggest that most of these prior definitions are too weak, in the sense that they do not take into account certain realistic attacks. We propose new definitions of anonymity and unforgeability which address these threats, and give separation results proving that our new notions are strictly stronger than previous ones. Second, we show the first constructions of ring signature schemes in the standard model. One scheme is based on generic assumptions and satisfies our strongest definitions of security. Two additional schemes are more efficient, but achieve weaker security guarantees and more limited functionality.
