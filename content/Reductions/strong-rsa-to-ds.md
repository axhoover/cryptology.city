---
type: reduction
status: draft
title: "Strong RSA ⇒ DS"
aliases: []
id: red-strong-rsa-to-ds
kind: implication
hypotheses: [strong-rsa]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[CS99 - Signature Schemes Based on the Strong RSA Assumption|CS99]]"
security-loss: ""
---

# Strong RSA ⇒ DS

[[rsa-assumption#strong-rsa|Strong RSA]], together with a [[hash-function#collision-resistance|collision-resistant hash function]], implies [[digital-signature|DS]] in the standard model.

## Statement

[[rsa-assumption#strong-rsa|Strong RSA]], together with a collision-resistant hash function, implies EUF-CMA-secure [[digital-signature|digital signatures]] in the standard model: the Cramer-Shoup scheme signs each message under a fresh random prime exponent, and any forger yields a strong-RSA solution or a hash collision — [[CS99 - Signature Schemes Based on the Strong RSA Assumption|CS99]].

## Sketch

Each signature is an $e$-th root, for a fresh random prime $e$, of a value determined by the public key and the message. The reduction plants the strong-RSA challenge $z$ in the public key as $z$ raised to the product of the primes it will use to answer signing queries, so it signs without computing roots; a forgery under a prime $e^*$ not used in signing gives $y^{e^*} = z^{a}$ with $\gcd(e^*, a) = 1$, and Bézout coefficients yield $z^{1/e^*}$ (Shamir's trick). A forgery that reuses a signing prime $e_j$ is handled by reductions that guess $j$ in advance and embed $z$ so that the forgery yields a root of $z$ or a hash collision.

## Notes

`class: fully-black-box`: One fixed scheme from the RSA modulus generator, and one fixed reduction: the Cramer-Shoup proof splits on whether the forgery reuses a prime exponent issued during signing and, in each case, runs the forger as an oracle and outputs a pair $(\hat{x}, \hat{e})$ with $\hat{e} > 1$ solving the strong-RSA challenge (or a hash collision).

- Concurrently and independently, a hash-and-sign scheme from strong RSA together with a division-intractable hash function — [[GHR99 - Secure Hash-and-Sign Signatures Without the Random Oracle|GHR99]]
- A variant with signatures of roughly half the size and faster signing and verification, still under strong RSA — [[Fis03 - The Cramer-Shoup Strong-RSA Signature Scheme Revisited|Fis03]]
