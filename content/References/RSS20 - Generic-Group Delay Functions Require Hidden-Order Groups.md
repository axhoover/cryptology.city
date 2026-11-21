---
type: reference
status: stub
title: "RSS20"
source: https://eprint.iacr.org/2020/225
authors: Lior Rotem, Gil Segev, Ido Shahaf
venue: EUROCRYPT 2020
published: 2020
aliases:
  - RSS20
cryptobib_key: EC:RotSegSha20
---

# [RSS20] Generic-Group Delay Functions Require Hidden-Order Groups

**Authors:** Lior Rotem, Gil Segev, Ido Shahaf | **Venue:** EUROCRYPT 2020 | [Source](https://eprint.iacr.org/2020/225)

## Abstract

Despite the fundamental importance of delay functions, underlying both the classic notion of a time-lock puzzle and the more recent notion of a verifiable delay function, the only known delay function that offers both sufficient structure for realizing these two notions and a realistic level of practicality is the “iterated squaring” construction of Rivest, Shamir and Wagner. This construction, however, is based on rather strong assumptions in groups of hidden orders, such as the RSA group (which requires a trusted setup) or the class group of an imaginary quadratic number field (which is still somewhat insufficiently explored from the cryptographic perspective). For more than two decades, the challenge of constructing delay functions in groups of known orders, admitting a variety of well-studied instantiations, has eluded the cryptography community.

In this work we prove that there are no constructions of generic-group delay functions in cyclic groups of known orders: We show that for any delay function that does not exploit any particular property of the representation of the underlying group, there exists an attacker that completely breaks the function's sequentiality when given the group's order. As any time-lock puzzle and verifiable delay function give rise to a delay function, our result holds for these two notions we well, and explains the lack of success in resolving the above-mentioned long-standing challenge. Moreover, our result holds even if the underlying group is equipped with a $d$-linear map, for any constant $d \geq 2$ (and even for super-constant values of $d$ under certain conditions).
