---
type: reference
status: stub
title: "CLTV15"
source: https://eprint.iacr.org/2014/882
authors: Ran Canetti, Huijia Lin, Stefano Tessaro, Vinod Vaikuntanathan
venue: TCC 2015
published: 2015
aliases:
  - CLTV15
cryptobib_key: TCC:CLTV15
---

# [CLTV15] Obfuscation of Probabilistic Circuits and Applications

**Authors:** Ran Canetti, Huijia Lin, Stefano Tessaro, Vinod Vaikuntanathan | **Venue:** TCC 2015 | [Source](https://eprint.iacr.org/2014/882)

## Abstract

This paper studies the question of how to define, construct, and use obfuscators for probabilistic programs. Such obfuscators compile a possibly randomized program into a deterministic one, which achieves computationally indistinguishable behavior from the original program as long as it is run on each input at most once. For obfuscation, we propose a notion that extends indistinguishability obfuscation to probabilistic circuits: It should be hard to distinguish between the obfuscations of any two circuits whose output distributions at each input are computationally indistinguishable, possibly in presence of some auxiliary input. We call the resulting notion probabilistic indistinguishability obfuscation (pIO).

We define several variants of pIO, using different approaches to formalizing the above security requirement, and study non-trivial relations among them. Moreover, we give a construction of one of our pIO variants from sub-exponentially hard indistinguishability obfuscation (for deterministic circuits) and one-way functions, and conjecture this construction to be a good candidate for other pIO variants.

We then move on to show a number of applications of pIO:

- We give a general and natural methodology to achieve leveled homomorphic encryption (LHE) from variants of semantically secure encryption schemes and of pIO. In particular, we propose instantiations from lossy and re-randomizable encryption schemes, assuming the two weakest notions of pIO.

- We enhance the above constructions to obtain a full-fledged (i.e., non-leveled) FHE scheme under the same (or slightly stronger) assumptions. In particular, this constitutes the first construction of full-fledged FHE that does not rely on encryption with circular security.

- Finally, we show that assuming sub-exponentially secure puncturable PRFs computable in NC1, sub-exponentially-secure indistinguishability obfuscation for (deterministic) NC1 circuits can be bootstrapped to obtain indistinguishability obfuscation for arbitrary (deterministic) poly-size circuits.
