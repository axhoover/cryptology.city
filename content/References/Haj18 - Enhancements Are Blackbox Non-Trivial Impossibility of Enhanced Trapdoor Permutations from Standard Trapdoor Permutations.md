---
type: reference
status: stub
title: "Haj18"
source: https://eprint.iacr.org/2018/900
authors: Mohammad Hajiabadi
venue: TCC 2018
published: 2018
aliases:
  - Haj18
cryptobib_key: TCC:Hajiabadi18
---

# [Haj18] Enhancements Are Blackbox Non-Trivial: Impossibility of Enhanced Trapdoor Permutations from Standard Trapdoor Permutations

**Authors:** Mohammad Hajiabadi | **Venue:** TCC 2018 | [Source](https://eprint.iacr.org/2018/900)

## Abstract

Trapdoor permutations (TDP) are a fundamental primitive in cryptography. Over the years, several variants of this notion have emerged as a result of various applications. However, it is not clear whether these variants may be based on the standard notion of TDPs.

We study the question of whether enhanced trapdoor permutations can be based on classical trapdoor permutations. The main motivation of our work is in the context of existing TDP-based constructions of oblivious transfer and non-interactive zero-knowledge protocols, which require enhancements to the classical TDP notion. We prove that these enhancements are non-trivial, in the sense that there does not exist fully blackbox constructions of enhanced TDPs from classical TDPs.

At a technical level, we show that the enhanced TDP security of any construction in the random TDP oracle world can be broken via a polynomial number of queries to the TDP oracle as well as a weakening oracle, which provides inversion with respect to randomness. We also show that the standard one-wayness of a random TDP oracle stays intact in the presence of this weakening oracle.
