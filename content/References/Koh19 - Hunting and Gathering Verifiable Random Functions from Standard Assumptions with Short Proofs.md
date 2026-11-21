---
type: reference
status: stub
title: "Koh19"
source: https://eprint.iacr.org/2019/042
authors: Lisa Kohl
venue: PKC 2019
published: 2019
aliases:
  - Koh19
cryptobib_key: PKC:Kohl19
---

# [Koh19] Hunting and Gathering - Verifiable Random Functions from Standard Assumptions with Short Proofs

**Authors:** Lisa Kohl | **Venue:** PKC 2019 | [Source](https://eprint.iacr.org/2019/042)

## Abstract

A verifiable random function (VRF) is a pseudorandom function, where outputs can be publicly verified. That is, given an output value together with a proof, one can check that the function was indeed correctly evaluated on the corresponding input. At the same time, the output of the function is computationally indistinguishable from random for all non-queried inputs.
We present the first construction of a VRF which meets the following properties at once: It supports an exponential-sized input space, it achieves full adaptive security based on a non-interactive constant-size assumption and its proofs consist of only a logarithmic number of group elements for inputs of arbitrary polynomial length.
Our construction can be instantiated in symmetric bilinear groups with security based on the decision linear assumption.
We build on the work of Hofheinz and Jager (TCC 2016), who were the first to construct a verifiable random function with security based on a non-interactive constant-size assumption. Basically, their VRF is a matrix product in the exponent, where each matrix is chosen according to one bit of the input. In order to allow verification given a symmetric bilinear map, a proof consists of all intermediary results. This entails a proof size of Omega(L) group elements, where L is the bit-length of the input.
Our key technique, which we call hunting and gathering, allows us to break this barrier by rearranging the function, which - combined with the partitioning techniques of Bitansky (TCC 2017) - results in a proof size of l group elements for arbitrary l in omega(1).
