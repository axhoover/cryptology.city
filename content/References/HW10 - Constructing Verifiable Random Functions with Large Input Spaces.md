---
type: reference
status: stub
title: "HW10"
source: https://eprint.iacr.org/2010/102
authors: Susan Hohenberger, Brent Waters
venue: EUROCRYPT 2010
published: 2010
aliases:
  - HW10
cryptobib_key: EC:HohWat10
---

# [HW10] Constructing Verifiable Random Functions with Large Input Spaces

**Authors:** Susan Hohenberger, Brent Waters | **Venue:** EUROCRYPT 2010 | [Source](https://eprint.iacr.org/2010/102)

## Abstract

We present a family of verifiable random functions which are provably secure for exponentially-large input spaces under a non-interactive complexity assumption. Prior constructions required either an interactive complexity assumption or one that could tolerate a factor 2^n security loss for n-bit inputs. Our construction is practical and inspired by the pseudorandom functions of Naor and Reingold and the verifiable random functions of Lysyanskaya. Set in a bilinear group, where the Decisional Diffie-Hellman problem is easy to solve, we require the Decisional Diffie-Hellman Exponent assumption in the standard model, without a common reference string. Our core idea is to apply a simulation technique where the large space of VRF inputs is collapsed into a small (polynomial-size) input in the view of the reduction algorithm. This view, however, is information-theoretically hidden from the attacker. Since the input space is exponentially large, we can first apply a collision-resistant hash function to handle arbitrarily-large inputs.
