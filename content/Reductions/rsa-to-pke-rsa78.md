---
type: reduction
status: draft
title: "RSA ⇒ PKE"
aliases: []
id: red-rsa-to-pke-rsa78
kind: implication
hypotheses: [rsa]
conclusion: pke
class: unstated
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: ""
---

# RSA ⇒ PKE

## Statement

The [[rsa-assumption|RSA assumption]] implies [[public-key-encryption|PKE]]. The scheme of [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]], $\Enc(\pk, m) = m^e \bmod n$ and $\Dec(\sk, c) = c^d \bmod n$, is one-way under the RSA assumption but deterministic, hence not [[public-key-encryption#cpa-security|CPA-secure]]. Encrypting a bit $b$ as $(x^e \bmod n,\; b \oplus h(x))$ for $x \getsr \ZZ_n^*$ is CPA-secure under the RSA assumption when $h$ is a hard-core predicate of the RSA function; the least-significant bit is one, since predicting it from $(n, e, x^e \bmod n)$ with non-negligible advantage yields an RSA inverter — [[ACGS88 - RSA and Rabin Functions Certain Parts are as Hard as the Whole|ACGS88]].

## Sketch

Decryption recovers $x = y^d \bmod n$ from $y = x^e \bmod n$ with the trapdoor $d$. A CPA adversary distinguishing encryptions of $0$ and $1$ is a predictor for $h(x)$ given $(n, e, y)$, which the hard-core reduction turns into an RSA inverter.

## Notes

- The Goldreich–Levin bit $\langle x, r \rangle \bmod 2$ is hard-core for $(x, r) \mapsto (x^e \bmod n, r)$, which gives the same bit encryption, with $r$ sent in the clear, without an RSA-specific argument — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]; for an arbitrary trapdoor permutation this is [[tdp-to-pke|TDP ⇒ PKE]].
