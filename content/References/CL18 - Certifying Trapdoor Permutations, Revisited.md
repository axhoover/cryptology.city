---
type: reference
status: stub
title: "CL18"
source: https://eprint.iacr.org/2017/631
authors: Ran Canetti, Amit Lichtenberg
venue: TCC 2018
published: 2018
aliases:
  - CL18
cryptobib_key: TCC:CanLic18
---

# [CL18] Certifying Trapdoor Permutations, Revisited

**Authors:** Ran Canetti, Amit Lichtenberg | **Venue:** TCC 2018 | [Source](https://eprint.iacr.org/2017/631)

## Abstract

The modeling of trapdoor permutations has evolved over the years. Indeed, finding an appropriate abstraction that bridges between the existing candidate constructions and the needs of applications has proved to be challenging. In particular, the notions of certifying permutations (Bellare and Yung, 96), enhanced and doubly enhanced trapdoor permutations (Goldreich, 04, 08, 11, Goldreich and Rothblum, 13) were added to bridge the gap between the modeling of trapdoor permutations and needs of applications.
We identify an additional gap in the current abstraction of trapdoor permutations: Previous works implicitly assumed that it is easy to recognize elements in the domain, as well as uniformly sample from it, even for illegitimate function indices. We demonstrate this gap by using the (Bitansky-Paneth-Wichs, 16) doubly-enhanced trapdoor permutation family to instantiate the Feige-Lapidot-Shamir (FLS) paradigm for constructing non-interactive zero-knowledge (NIZK) protocols, and show that the resulting proof system is unsound.
To close the gap, we propose a general notion of certifiably injective doubly enhanced trapdoor functions (DECITDFs), which provides a way of certifying that a given key defines an injective function over the domain defined by it, even when that domain is not efficiently recognizable and sampleable. We show that DECITDFs suffice for instantiating the FLS paradigm; more generally, we argue that certifiable injectivity is needed whenever the generation process of the function is not trusted.
We then show two very different ways to construct DECITDFs: One is via the traditional method of RSA/Rabin with the Bellare-Yung certification mechanism, and the other using indistinguishability obfuscation and injective pseudorandom generators. In particular the latter is the first candidate injective trapdoor function, from assumptions other than factoring, that suffices for the FLS paradigm.
Finally we observe that a similar gap appears also in other paths proposed in the literature for instantiating the FLS paradigm, specifically via verifiable pseudorandom generators and verifiable pseudorandom functions. Closing the gap there can be done in similar ways to the ones proposed here.
