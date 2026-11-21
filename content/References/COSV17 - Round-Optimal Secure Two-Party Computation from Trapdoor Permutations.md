---
type: reference
status: stub
title: "COSV17"
source: https://eprint.iacr.org/2017/920
authors: Michele Ciampi, Rafail Ostrovsky, Luisa Siniscalchi, Ivan Visconti
venue: TCC 2017
published: 2017
aliases:
  - COSV17
cryptobib_key: TCC:COSV17a
---

# [COSV17] Round-Optimal Secure Two-Party Computation from Trapdoor Permutations

**Authors:** Michele Ciampi, Rafail Ostrovsky, Luisa Siniscalchi, Ivan Visconti | **Venue:** TCC 2017 | [Source](https://eprint.iacr.org/2017/920)

## Abstract

In this work we continue the study on the round complexity of secure two-party computation with black-box simulation.
Katz and Ostrovsky in CRYPTO 2004 showed a 5 (optimal) round construction assuming trapdoor permutations for the general case where both players receive the output.
They also proved that their result is round optimal. This lower bound has been recently revisited by Garg et al. in Eurocrypt 2016 where a 4 (optimal) round protocol is showed assuming a simultaneous message exchange channel. Unfortunately there is no instantiation of the protocol of Garg et al. under standard polynomial-time hardness assumptions.
In this work we close the above gap by showing a 4 (optimal) round construction for secure two-party computation in the simultaneous message channel model with black-box simulation, assuming trapdoor permutations against polynomial-time adversaries.
Our construction for secure two-party computation relies on a special 4-round protocol for oblivious transfer that nicely composes with other protocols in parallel. We define and construct such special oblivious transfer protocol from trapdoor permutations. This building block is clearly interesting on its own. Our construction also makes use of a recent advance on non-malleability: a delayed-input 4-round non-malleable zero knowledge argument.
