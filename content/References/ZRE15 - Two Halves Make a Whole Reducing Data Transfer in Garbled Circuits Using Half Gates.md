---
type: reference
status: stub
title: "ZRE15"
source: https://eprint.iacr.org/2014/756
authors: Samee Zahur, Mike Rosulek, David Evans
venue: EUROCRYPT 2015
published: 2015
aliases:
  - ZRE15
cryptobib_key: EC:ZahRosEva15
---

# [ZRE15] Two Halves Make a Whole: Reducing Data Transfer in Garbled Circuits Using Half Gates

**Authors:** Samee Zahur, Mike Rosulek, David Evans | **Venue:** EUROCRYPT 2015 | [Source](https://eprint.iacr.org/2014/756)

## Abstract

The well-known classical constructions of garbled circuits use four
ciphertexts per gate, although various methods have been proposed to
reduce this cost. The best previously known methods for optimizing AND
gates (two ciphertexts; Pinkas et al., ASIACRYPT 2009) and XOR gates
(zero ciphertexts; Kolesnikov & Schneider, ICALP 2008) were
incompatible, so most implementations used the best known method
compatible with free-XOR gates (three ciphertexts; Kolesnikov &
Schneider, ICALP 2008). In this work we show how to simultaneously
garble AND gates using two ciphertexts and XOR gates using zero
ciphertexts, resulting in smaller garbled circuits than any prior
scheme. The main idea behind our construction is to break an AND gate
into two half-gates --- AND gates for which one party knows one
input. Each half-gate can be garbled with a single ciphertext, so our
construction uses two ciphertexts for each AND gate while being
compatible with free-XOR gates. The price for the reduction in size is that the evaluator must perform two cryptographic operations per AND gate, rather than one as in previous schemes. We experimentally
demonstrate that our garbling scheme leads to an overall decrease in
time (up to 25%), bandwidth (up to 33%), and energy use (up to 20%)
over several benchmark applications. We also initiate a study of lower bounds for garbled gate size, and show that our construction is optimal for a large class of garbling schemes encompassing all known practical garbling techniques.
