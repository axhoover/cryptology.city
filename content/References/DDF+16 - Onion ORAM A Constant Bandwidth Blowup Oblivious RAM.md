---
type: reference
status: stub
title: "DDF+16"
source: https://eprint.iacr.org/2015/005
authors: Srinivas Devadas, Marten van Dijk, Christopher W. Fletcher, Ling Ren, Elaine Shi, Daniel Wichs
venue: TCC 2016-A
published: 2016
aliases:
  - DDF+16
  - Onion ORAM
cryptobib_key: TCC:DDFRSW16
---

# [DDF+16] Onion ORAM: A Constant Bandwidth Blowup Oblivious RAM

**Authors:** Srinivas Devadas, Marten van Dijk, Christopher W. Fletcher, Ling Ren, Elaine Shi, Daniel Wichs | **Venue:** TCC 2016-A | [Source](https://eprint.iacr.org/2015/005)

## Abstract

We present Onion ORAM, an Oblivious RAM (ORAM) with constant worst-case bandwidth blowup that leverages poly-logarithmic server computation to circumvent the logarithmic lower bound on ORAM bandwidth blowup. Our construction does not require fully homomorphic encryption, but employs an additively homomorphic encryption scheme such as the Damgard-Jurik cryptosystem, or alternatively a BGV-style somewhat homomorphic encryption scheme without bootstrapping. At the core of our construction is an ORAM scheme that has "shallow circuit depth" over the entire history of ORAM accesses. We also propose novel techniques to achieve security against a malicious server, without resorting to expensive and non-standard techniques such as SNARKs. To the best of our knowledge, Onion ORAM is the first concrete instantiation of a constant bandwidth blowup ORAM under standard assumptions (even for the
semi-honest setting).
