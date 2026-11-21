---
type: reference
status: stub
title: "HIKLP10"
source: https://eprint.iacr.org/2010/164
authors: Iftach Haitner, Yuval Ishai, Eyal Kushilevitz, Yehuda Lindell, Erez Petrank
venue: ePrint 2010
published: 2010
aliases:
  - HIKLP10
cryptobib_key: EPRINT:HIKLP10
---

# [HIKLP10] Black-Box Constructions of Protocols for Secure Computation

**Authors:** Iftach Haitner, Yuval Ishai, Eyal Kushilevitz, Yehuda Lindell, Erez Petrank | **Venue:** ePrint 2010 | [Source](https://eprint.iacr.org/2010/164)

## Abstract

It is well known that secure computation without an honest majority requires computational assumptions. An interesting question that therefore arises relates to the way such computational assumptions are used. Specifically, can the secure protocol use the underlying primitive (e.g., a one-way trapdoor permutation) in a _black-box_ way, treating it as an oracle, or must it be _nonblack-box_ (by referring to the code that computes the primitive)? Despite the fact that many general constructions of cryptographic schemes refer to the underlying primitive in a black-box wayonly, there are some constructions that are inherently nonblack-box. Indeed, all known constructions of protocols for general secure computation that are secure in the presence of a malicious adversary and without an honest majority use the underlying primitive in a nonblack-box way (requiring to prove in zero-knowledge statements that relate to the primitive).

In this paper, we study whether such nonblack-box use is essential. We answer this question in the negative. Concretely, we present a _fully black-box reduction_ from oblivious transfer with security against malicious parties to oblivious transfer with security against semi-honest parties. As a corollary, we get the first constructions of general multiparty protocols (with security against malicious adversaries and without an honest majority) which only make a _black-box_ use of semi-honest oblivious transfer, or alternatively a black-box use of lower-level primitives such as enhanced trapdoor permutations or homomorphic encryption.
