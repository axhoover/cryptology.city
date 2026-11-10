---
type: reference
status: stub
title: "FHS19"
source: https://eprint.iacr.org/2014/944
authors: Georg Fuchsbauer, Christian Hanser, Daniel Slamanig
venue: Journal of Cryptology 32(2)
published: 2019
aliases:
  - FHS19
cryptobib_key: JC:FucHanSla19
---

# [FHS19] Structure-Preserving Signatures on Equivalence Classes and Constant-Size Anonymous Credentials

**Authors:** Georg Fuchsbauer, Christian Hanser, Daniel Slamanig | **Venue:** Journal of Cryptology 32(2) | [Source](https://eprint.iacr.org/2014/944)

## Abstract

Structure-preserving signatures (SPS) are a powerful building block for cryptographic protocols. We introduce SPS on equivalence classes (SPS-EQ), which allow joint randomization of messages and signatures. Messages are projective equivalence classes defined on group element vectors, so multiplying a vector by a scalar yields a different representative of the same class. Our scheme lets one adapt a signature for one representative to a signature for another representative without knowledge of any secret. Moreover, given a signature, an adapted signature for a different representative is indistinguishable from a fresh signature on a random message. We propose a definitional framework for SPS-EQ and an efficient construction in Type-3 bilinear groups, which we prove secure against generic forgers.

We also introduce set-commitment schemes that let one open subsets of the committed set. From this and SPS-EQ we then build an efficient multi-show attribute-based anonymous credential system for an arbitrary number of attributes. Our ABC system avoids costly zero-knowledge proofs and only requires a short interactive proof to thwart replay attacks. It is the first credential system whose bandwidth required for credential showing is independent of the number of its attributes, i.e., constant-size. We propose strengthened game-based security definitions for ABC and prove our scheme anonymous against malicious organizations in the standard model; finally, we discuss a concurrently secure variant in the CRS model.
