---
type: reference
status: stub
title: "BCIOP13"
source: https://eprint.iacr.org/2012/718
authors: Nir Bitansky, Alessandro Chiesa, Yuval Ishai, Rafail Ostrovsky, Omer Paneth
venue: TCC 2013
published: 2013
aliases:
  - BCIOP13
cryptobib_key: TCC:BCIOP13
---

# [BCIOP13] Succinct Non-interactive Arguments via Linear Interactive Proofs

**Authors:** Nir Bitansky, Alessandro Chiesa, Yuval Ishai, Rafail Ostrovsky, Omer Paneth | **Venue:** TCC 2013 | [Source](https://eprint.iacr.org/2012/718)

## Abstract

_Succinct non-interactive arguments_ (SNARGs) enable verifying NP statements with lower complexity than required for classical NP verification. Traditionally, the focus has been on minimizing the length of such arguments; nowadays researches have focused also on minimizing verification time, by drawing motivation from the problem of delegating computation.

A common relaxation is a _preprocessing_ SNARG, which allows the verifier to conduct an expensive offline phase that is independent of the statement to be proven later. Recent constructions of preprocessing SNARGs have achieved attractive features: they are publicly-verifiable, proofs consist of only $O(1)$ encrypted (or encoded) field elements, and verification is via arithmetic circuits of size linear in the NP statement. Additionally, these constructions seem to have “escaped the hegemony” of probabilistically-checkable proofs (PCPs) as a basic building block of succinct arguments.

We present a general methodology for the construction of preprocessing SNARGs, as well as resulting concrete efficiency improvements. Our contribution is three-fold:

(1)
We introduce and study a natural extension of the interactive proof model that considers _algebraically-bounded_ provers; this new setting is analogous to the common study of algebraically-bounded “adversaries” in other fields, such as pseudorandomness and randomness extraction. More concretely, in this work we focus on linear (or affine) provers, and provide several constructions of (succinct two-message) _linear-interactive proofs_ (LIPs) for NP. Our constructions are based on general transformations applied to both _linear_ PCPs (LPCPs) and traditional “unstructured” PCPs.

(2)
We give conceptually simple cryptographic transformations from LIPs to preprocessing SNARGs, whose security can be based on different forms of _linear targeted malleability_ (implied by previous knowledge assumptions). Our transformations convert arbitrary (two-message) LIPs into designated-verifier SNARGs, and LIPs with degree-bounded verifiers into publicly-verifiable SNARGs. We also extend our methodology to obtain _zero-knowledge_ LIPs and SNARGs. Our techniques yield SNARGs _of knowledge_ and thus can benefit from known recursive composition and bootstrapping techniques.

(3)
Following this methodology, we exhibit several constructions achieving new efficiency features, such as “single-ciphertext preprocessing SNARGs” and improved succinctness-soundness tradeoffs. We also offer a new perspective on existing constructions of preprocessing SNARGs, revealing a direct connection of these to LPCPs and LIPs.
