---
type: reference
status: stub
title: "ACGS88"
source: https://doi.org/10.1137/0217013
authors: Werner Alexi, Benny Chor, Oded Goldreich, Claus P. Schnorr
venue: SIAM Journal on Computing 1988
published: 1988
aliases:
  - ACGS88
bibtex: |
  @article{ACGS88,
    author  = {Werner Alexi and Benny Chor and Oded Goldreich and Claus P. Schnorr},
    title   = {{RSA} and {Rabin} Functions: Certain Parts are as Hard as the Whole},
    journal = {SIAM Journal on Computing},
    volume  = {17},
    number  = {2},
    pages   = {194--209},
    year    = {1988},
    doi     = {10.1137/0217013},
  }
---

# [ACGS88] RSA and Rabin Functions: Certain Parts are as Hard as the Whole

**Authors:** Werner Alexi, Benny Chor, Oded Goldreich, Claus P. Schnorr | **Venue:** SIAM Journal on Computing 1988 | [Source](https://doi.org/10.1137/0217013)

## Abstract

The RSA and Rabin encryption functions $E_N(\cdot)$ are respectively defined by raising $x \in Z_N$ to the power $e$ (where $e$ is relatively prime to $\varphi(N)$) and squaring modulo $N$ (i.e., $E_N(x) = x^e \pmod N$, $E_N(x) = x^2 \pmod N$, respectively). We prove that for both functions, the following problems are computationally equivalent (each is probabilistic polynomial-time reducible to the other): (1) Given $E_N(x)$, find $x$. (2) Given $E_N(x)$, guess the least-significant bit of $x$ with success probability $\frac{1}{2} + 1/\poly(n)$ (where $n$ is the length of the modulus $N$). This equivalence implies that an adversary, given the RSA/Rabin ciphertext, cannot have a non-negligible advantage (over a random coin flip) in guessing the least-significant bit of the plaintext, unless he can invert RSA/factor $N$. The proof techniques also yield the simultaneous security of the $\log n$ least-significant bits. Our results improve the efficiency of pseudorandom number generation and probabilistic encryption schemes based on the intractability of factoring.
