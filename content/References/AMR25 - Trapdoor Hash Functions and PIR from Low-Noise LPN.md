---
title: Trapdoor Hash Functions and PIR from Low-Noise LPN
source: https://eprint.iacr.org/2025/416
authors: Damiano Abram, Giulio Malavolta, Lawrence Roy
venue: preprint
published: 2025-03-04
aliases:
  - AMR25
---
# Trapdoor Hash Functions and PIR from Low-Noise LPN
URL: https://eprint.iacr.org/2025/416
Authors: Damiano Abram, Giulio Malavolta, Lawrence Roy

## Abstract
Trapdoor hash functions (TDHs) are compressing hash functions, with an additional trapdoor functionality: Given a encoding key for a function \(f\), a hash on \(x\) together with a (small) input encoding allow one to recover \(f(x)\). TDHs are a versatile tool and a useful building block for more complex cryptographic protocols.

In this work, we propose the first TDH construction assuming the (quasi-polynomial) hardness of the LPN problem with noise rate \(ϵ=O(\log^{1+β}n/n)\) for \(β>0\), i.e., in the so-called low-noise regime. The construction achieves \(2^{\Theta(\log^{1-β}λ)}\) compression factor. As an application, we obtain a private-information retrieval (PIR) with communication complexity \(L/2^{\Theta(\log^{1-β}L)}\), for a database of size L. This is the first PIR scheme with non-trivial communication complexity (asymptotically smaller than \(L\)) from any code-based assumption.