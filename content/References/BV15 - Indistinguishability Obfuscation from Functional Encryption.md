---
type: reference
status: stub
title: "BV15"
source: https://eprint.iacr.org/2015/163
authors: Nir Bitansky, Vinod Vaikuntanathan
venue: FOCS 2015
published: 2015
aliases:
  - BV15
cryptobib_key: FOCS:BitVai15
---

# [BV15] Indistinguishability Obfuscation from Functional Encryption

**Authors:** Nir Bitansky, Vinod Vaikuntanathan | **Venue:** FOCS 2015 | [Source](https://eprint.iacr.org/2015/163)

## Abstract

Indistinguishability obfuscation (IO) is a tremendous notion, powerful enough to give
rise to almost any known cryptographic object. Prior candidate IO constructions were
based on specific assumptions on algebraic objects called multi-linear graded encodings.
We present a generic construction of indistinguishability obfuscation from public-key
functional encryption with succinct encryption circuits and subexponential security. This
shows the equivalence of indistinguishability obfuscation and public-key functional en-
cryption, a primitive that has previously seemed to be much weaker, lacking the power
and the staggering range of applications of indistinguishability obfuscation.
Our main construction can be based on functional encryption schemes that support a
single functional key, and where the encryption circuit grows sub-linearly in the circuit-size
of the function. We further show that sublinear succinctness in circuit-size for single-key
schemes can be traded with sublinear succinctness in the number of keys (also known
as the collusion-size) for multi-key schemes. We also show that, under the Learning with
Errors assumption, our techniques imply that any indistinguishability obfuscator can be
converted into one where the size of obfuscated circuits is twice that of the original circuit
plus an additive overhead that is polynomial in its depth, input length, and the security
parameter.
