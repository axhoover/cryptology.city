---
type: reference
status: stub
title: "BV14"
source: https://eprint.iacr.org/2013/541
authors: Zvika Brakerski, Vinod Vaikuntanathan
venue: ITCS 2014
published: 2014
aliases:
  - BV14
cryptobib_key: ITCS:BraVai14
---

# [BV14] Lattice-based FHE as secure as PKE

**Authors:** Zvika Brakerski, Vinod Vaikuntanathan | **Venue:** ITCS 2014 | [Source](https://eprint.iacr.org/2013/541)

## Abstract

We show that (leveled) fully homomorphic encryption (FHE) can be based on the hardness of $\tilde{O}(n^{1.5+\epsilon})$-approximation for lattice problems (such as GapSVP) under quantum reductions for any $\epsilon>0$ (or $\tilde{O}(n^{2+\epsilon})$-approximation under classical reductions). This matches the best known hardness for “regular” (non-homomorphic) lattice based public-key encryption up to the $\epsilon$ factor. A number of previous methods had hit a roadblock at quasipolynomial approximation. (As usual, a circular security assumption can be used to achieve a non-leveled FHE scheme.)

Our approach consists of three main ideas: Noise-bounded sequential evaluation of
high fan-in operations; Circuit sequentialization using Barrington's Theorem; and finally,
successive dimension-modulus reduction.
