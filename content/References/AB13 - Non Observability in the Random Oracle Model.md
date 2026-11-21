---
type: reference
status: draft
title: "AB13"
source: https://eprint.iacr.org/2012/710
authors: Prabhanjan Ananth, Raghav Bhaskar
venue: ProvSec 2013
published: 2013
aliases:
  - AB13
cryptobib_key: PROVSEC:AnaBha13
---

# [AB13] Non Observability in the Random Oracle Model

**Authors:** Prabhanjan Ananth, Raghav Bhaskar | **Venue:** ProvSec 2013 | [Source](https://eprint.iacr.org/2012/710)

## Abstract

The Random Oracle Model, introduced by Bellare and Rogaway, provides a method to heuristically argue about the security of cryptographic primitives and protocols. The basis of this heuristic is that secure hash functions are close enough to random functions in their behavior, and so, a primitive that is secure using a random function should continue to remain secure even when the random function is replaced by a real hash function. In the security proof, this setting is realized by modeling the hash function as a random oracle. However, this approach in particular also enables any reduction, reducing a hard problem to the existence of an adversary, to _observe_ the queries the adversary makes to its random oracle and to _program_ the responses that the oracle provides to these queries. While, the issue of programmability of query responses has received a lot of attention in the literature, to the best of our knowledge, observability of the adversary's queries has not been identified as an artificial artefact of the Random Oracle Model. In this work, we study the security of several popular schemes when the security reduction cannot “observe” the adversary's queries to the random oracle, but can (possibly) continue to “program” the query responses. We first show that RSA-PFDH and Schnorr's signatures continue to remain secure when the security reduction is non observing (NO reductions), which is not surprising as their proofs in the random oracle model rely on programmability. We also provide two example schemes, namely, Fischlin's NIZK-PoK [Fischlin05] and non interactive extractable commitment scheme, extractor algorithms of which seem to rely on observability in the random oracle model. While we prove that Fischlin's online extractors cannot exist when they are non observing, our extractable commitment scheme continues to be secure even when the extractors are non observing. We also introduce Non Observing Non Programming reductions which we believe are closest to standard model reductions.
