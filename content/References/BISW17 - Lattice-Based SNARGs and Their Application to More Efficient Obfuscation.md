---
type: reference
status: stub
title: "BISW17"
source: https://eprint.iacr.org/2017/240
authors: Dan Boneh, Yuval Ishai, Amit Sahai, David J. Wu
venue: EUROCRYPT 2017
published: 2017
aliases:
  - BISW17
cryptobib_key: EC:BISW17
---

# [BISW17] Lattice-Based SNARGs and Their Application to More Efficient Obfuscation

**Authors:** Dan Boneh, Yuval Ishai, Amit Sahai, David J. Wu | **Venue:** EUROCRYPT 2017 | [Source](https://eprint.iacr.org/2017/240)

## Abstract

Succinct non-interactive arguments (SNARGs) enable verifying NP computations with substantially lower complexity than that required for classical NP verification. In this work, we first construct a lattice-based SNARG candidate with quasi-optimal succinctness (where the argument size is quasilinear in the security parameter). Further extension of our methods yields the first SNARG (from any assumption) that is quasi-optimal in terms of both prover overhead (polylogarithmic in the security parameter) as well as succinctness. Moreover, because our constructions are lattice-based, they plausibly resist quantum attacks. Central to our construction is a new notion of linear-only vector encryption which is a generalization of the notion of linear-only encryption introduced by Bitansky et al. (TCC 2013). We conjecture that variants of Regev encryption satisfy our new linear-only definition. Then, together with new information-theoretic approaches for building statistically-sound linear PCPs over small finite fields, we obtain the first quasi-optimal SNARGs.

We then show a surprising connection between our new lattice-based SNARGs and the concrete efficiency of program obfuscation. All existing obfuscation candidates currently rely on multilinear maps. Among the constructions that make black-box use of the multilinear map, obfuscating a circuit of even moderate depth (say, 100) requires a multilinear map with multilinearity degree in excess of 2^100. In this work, we show that an ideal obfuscation of both the decryption function in a fully homomorphic encryption scheme and a variant of the verification algorithm of our new lattice-based SNARG yields a general-purpose obfuscator for all circuits. Finally, we give some concrete estimates needed to obfuscate this "obfuscation-complete" primitive. We estimate that at 80-bits of security, a (black-box) multilinear map with approximately 2^12 levels of multilinearity suffices. This is over 2^80 times more efficient than existing candidates, and thus, represents an important milestone towards implementable program obfuscation for all circuits.
