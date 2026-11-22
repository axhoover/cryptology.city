---
type: reference
status: draft
title: "BBF+19"
source: https://eprint.iacr.org/2018/903
authors: Nina Bindel, Jacqueline Brendel, Marc Fischlin, Brian Goncalves, Douglas Stebila
venue: PQCrypto 2019
published: 2019
aliases:
  - BBF+19
cryptobib_key: PQCRYPTO:BBFGS19
---

# [BBF+19] Hybrid Key Encapsulation Mechanisms and Authenticated Key Exchange

**Authors:** Nina Bindel, Jacqueline Brendel, Marc Fischlin, Brian Goncalves, Douglas Stebila | **Venue:** PQCrypto 2019 | [Source](https://eprint.iacr.org/2018/903)

## Abstract

Concerns about the impact of quantum computers on currently deployed public key cryptography have instigated research into not only quantum-resistant cryptographic primitives but also how to transition applications from classical to quantum-resistant solutions. One approach to mitigate the risk of quantum attacks and to preserve common security guarantees are hybrid schemes, which combine classically secure and quantum-resistant schemes.
Various academic and industry experiments and draft standards related to the Transport Layer Security (TLS) protocol already use some form of hybrid key exchange; however sound theoretical approaches to substantiate the design and security of such hybrid key exchange protocols are missing so far.

We initiate the modeling of hybrid authenticated key exchange protocols. We consider security against adversaries with varying levels of quantum power over time, such as adversaries who may become quantum in the future or are quantum in the present. We reach our goal using a three-step approach: First, we introduce security notions for key encapsulation mechanisms (KEMs) that enable a fine-grained distinction between different quantum scenarios. Second, we propose several combiners for constructing hybrid KEMs that correspond closely to recently proposed Internet-Drafts for hybrid key exchange in TLS 1.3. Finally, we present a provably sound design for hybrid key exchange using KEMs as building blocks.
