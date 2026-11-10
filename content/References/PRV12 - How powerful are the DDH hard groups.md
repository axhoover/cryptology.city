---
type: reference
status: stub
title: "PRV12"
source: https://eprint.iacr.org/2012/653
authors: Periklis A. Papakonstantinou, Charles W. Rackoff, Yevgeniy Vahlis
venue: ePrint 2012
published: 2012
aliases:
  - PRV12
cryptobib_key: EPRINT:PapRacVah12
---

# [PRV12] How powerful are the DDH hard groups?

**Authors:** Periklis A. Papakonstantinou, Charles W. Rackoff, Yevgeniy Vahlis | **Venue:** ePrint 2012 | [Source](https://eprint.iacr.org/2012/653)

## Abstract

The question whether Identity-Based Encryption (IBE) can be based on the Decisional Diffie-Hellman (DDH) assumption is one of the most prominent questions in Cryptography related to DDH. We study limitations on the use of the DDH assumption in cryptographic constructions, and show that it is impossible to construct a secure Identity-Based Encryption system using, in a black box way, only the DDH (or similar) assumption about a group. Our impossibility result is set in the generic groups model, where we describe an attack on any IBE construction that relies on oracle access to the group operation of randomly labelled group elements – a model that formalizes naturally DDH hardness.

The vast majority of existing separation results typically give separation from general primitives, whereas we separate a primitive from a class of number theoretic hardness assumptions. Accordingly, we face challenges in creating an attack algorithm that will work against constructions which leverage the underlying algebraic structure of the group. In fact, we know that this algebraic structure is powerful enough to provide generic constructions for several powerful primitives including oblivious transfer and chosen ciphertext secure public-key cryptosystems (note that an IBE generalizes such systems). Technically, we explore statistical properties of the group algebra associated with a DDH oracle, which can be of independent interest.
