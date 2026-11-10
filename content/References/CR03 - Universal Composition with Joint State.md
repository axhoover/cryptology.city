---
type: reference
status: stub
title: "CR03"
source: https://eprint.iacr.org/2002/047
authors: Ran Canetti, Tal Rabin
venue: CRYPTO 2003
published: 2003
aliases:
  - CR03
cryptobib_key: C:CanRab03
---

# [CR03] Universal Composition with Joint State

**Authors:** Ran Canetti, Tal Rabin | **Venue:** CRYPTO 2003 | [Source](https://eprint.iacr.org/2002/047)

## Abstract

Cryptographic systems often involve running multiple concurrent instances of some protocol, where the instances have some amount of joint state and randomness. (Examples include systems where multiple protocol instances use the same public-key infrastructure, or the same common reference string.) Rather than attempting to analyze the entire system as a single unit, we would like to be able to analyze each such protocol instance as stand-alone, and then use a general composition theorem to deduce the security of the entire system. However, no known composition theorem applies in this setting, since they all assume that the composed protocol instances have disjoint internal states, and that the internal random choices in the various instances are independent.

We propose a new composition operation that can handle the case where
different components have some amount of joint state and randomness,
and demonstrate sufficient conditions for when the new operation preserves security. The new operation, which is called _universal composition with joint state_ (and is based on the recently proposed universal composition operation), turns out to be very useful in a number of quite different scenarios such as those mentioned above.
