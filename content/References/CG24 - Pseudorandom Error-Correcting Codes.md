---
title: "CG24"
source: https://eprint.iacr.org/2024/235
authors: Miranda Christ, Sam Gunn
venue: CRYPTO 2024
published: 2024-02-14
aliases:
  - CG24
tags:
  - CRYPTO

---
# [CG24] Pseudorandom Error-Correcting Codes

**Authors:** Miranda Christ, Sam Gunn | **Venue:** CRYPTO 2024 | [Source](https://eprint.iacr.org/2024/235)

## Abstract
We construct pseudorandom error-correcting codes (or simply pseudorandom codes), which are error-correcting codes with the property that any polynomial number of codewords are pseudorandom to any computationally-bounded adversary. Efficient decoding of corrupted codewords is possible with the help of a decoding key.

We build pseudorandom codes that are robust to substitution and deletion errors, where pseudorandomness rests on standard cryptographic assumptions. Specifically, pseudorandomness is based on either $2^{O(\sqrt{n})}$-hardness of LPN, or polynomial hardness of LPN and the planted XOR problem at low density. 

As our primary application of pseudorandom codes, we present an undetectable watermarking scheme for outputs of language models that is robust to cropping and a constant rate of random substitutions and deletions. The watermark is undetectable in the sense that any number of samples of watermarked text are computationally indistinguishable from text output by the original model. This is the first undetectable watermarking scheme that can tolerate a constant rate of errors.

Our second application is to steganography, where a secret message is hidden in innocent-looking content. We present a constant-rate stateless steganography scheme with robustness to a constant rate of substitutions. Ours is the first stateless steganography scheme with provable steganographic security and any robustness to errors.