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

[[rsa-assumption|RSA]] implies [[public-key-encryption|PKE]].

## Statement

The [[rsa-assumption|RSA assumption]] implies [[public-key-encryption|PKE]]. The scheme of [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]], $\Enc(\pk, m) = m^e \bmod n$ and $\Dec(\sk, c) = c^d \bmod n$, is one-way under the RSA assumption but deterministic, hence not CPA-secure; CPA security for one-bit messages follows by encrypting $b$ as $(x^e \bmod n,\; b \oplus h(x))$ for $x \getsr \ZZ_n^*$ and a hard-core predicate $h$ of the RSA function — [[ACGS88 - RSA and Rabin Functions Certain Parts are as Hard as the Whole|ACGS88]], [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].

## Sketch

The ciphertext $(y,\, b \oplus h(x))$ with $y = x^e \bmod n$ hides $b$ exactly as well as $h(x)$ is unpredictable from $y$; decryption recovers $x = y^d \bmod n$ with the trapdoor $d$. A CPA distinguisher is a predictor for $h$, which the hard-core reduction turns into an RSA inverter.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The least-significant bit of the RSA function is hard-core: predicting it from $x^e \bmod n$ with advantage $1/\poly(\secpar)$ yields an RSA inverter — [[ACGS88 - RSA and Rabin Functions Certain Parts are as Hard as the Whole|ACGS88]].
- A hard-core predicate for every one-way function, giving the same bit encryption without an RSA-specific argument — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].
