---
type: reference
status: stub
title: "PS16"
source: https://eprint.iacr.org/2015/525
authors: David Pointcheval, Olivier Sanders
venue: CT-RSA 2016
published: 2016
aliases:
  - PS16
cryptobib_key: RSA:PoiSan16
---

# [PS16] Short Randomizable Signatures

**Authors:** David Pointcheval, Olivier Sanders | **Venue:** CT-RSA 2016 | [Source](https://eprint.iacr.org/2015/525)

## Abstract

Digital signature is a fundamental primitive with numerous applications. Following the development of pairing-based cryptography, several taking advantage of this setting have been proposed. Among them, the Camenisch-Lysyanskaya (CL) signature scheme is one of the most flexible and has been used as a building block for many other protocols. Unfortunately, this scheme suffers from a linear size in the number of messages to be signed which limits its use in many situations.

In this paper, we propose a new signature scheme with the same features as CL-signatures but without the linear-size drawback: our signature consists of only two elements, whatever the message length, and our algorithms are more efficient. This construction takes advantage of using type 3 pairings, that are already widely used for security and efficiency reasons.

We prove the security of our scheme without random oracles but in the generic group model. Finally, we show that protocols using CL-signatures can easily be instantiated with ours, leading to much more efficient constructions.
