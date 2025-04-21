---
title: New constructions of pseudorandom codes
source: https://arxiv.org/abs/2409.07580
authors: Surendra Ghentiyala, Venkatesan Guruswami
venue: preprint
published: 2024-09-11
aliases:
  - GG24
---
# New constructions of pseudorandom codes
URL: https://arxiv.org/abs/2409.07580
Authors: Surendra Ghentiyala, Venkatesan Guruswami

## Abstract
Introduced in [[CG24 - Pseudorandom Error-Correcting Codes|CG24]], pseudorandom error-correcting codes (PRCs) are a new cryptographic primitive with applications in watermarking generative AI models. These are codes where a collection of polynomially many codewords is computationally indistinguishable from random, except to individuals with the decoding key. In this work, we examine the assumptions under which PRCs with robustness to a constant error rate exist.  
1. We show that if both the planted hyperloop assumption introduced in [BKR23] and security of a version of Goldreich's PRG hold, then there exist public-key PRCs for which no efficient adversary can distinguish a polynomial number of codewords from random with better than o(1) advantage.  
2. We revisit the construction of [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] and show that it can be based on a wider range of assumptions than presented in [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]. To do this, we introduce a weakened version of the planted XOR assumption which we call the weak planted XOR assumption and which may be of independent interest.  
3. We initiate the study of PRCs which are secure against space-bounded adversaries. We show how to construct secret-key PRCs of length O(n) which are unconditionally indistinguishable from random by poly(n) time, O(n1.5−ε) space adversaries.