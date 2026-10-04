---
type: reduction
status: draft
title: "Strong RSA + CRHF ⇒ DS"
aliases: []
id: red-strong-rsa-to-ds
kind: implication
hypotheses: [strong-rsa, crhf]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[CS99 - Signature Schemes Based on the Strong RSA Assumption|CS99]]"
security-loss: ""
rationale:
  class: "The scheme uses only the RSA modulus generator and the hash function, and the reduction runs any forger as an oracle and, in each forgery case, outputs a strong-RSA solution or a hash collision."
---

# Strong RSA + CRHF ⇒ DS

## Statement

If [[rsa-assumption#strong-rsa|strong RSA]] is hard and the hash function is [[hash-function#collision-resistance|collision resistant]], the Cramer–Shoup [[digital-signature|signature scheme]] is [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable in the standard model: it signs each message under a fresh random prime exponent, and any forger yields a strong-RSA solution or a hash collision — [[CS99 - Signature Schemes Based on the Strong RSA Assumption|CS99]].

## Sketch

Each signature is an $e$-th root, for a fresh random prime $e$, of a value determined by the public key and the message. The reduction plants the strong-RSA challenge $z$ in the public key as $z$ raised to the product of the primes it will use to answer signing queries, so it signs without computing roots; a forgery under a new prime $e^*$ gives $y^{e^*} = z^{a}$ with $\gcd(e^*, a) = 1$, and Bézout coefficients yield $z^{1/e^*}$ (Shamir's trick). A forgery that reuses a signing prime $e_j$ is handled by guessing $j$ in advance and embedding $z$ so that the forgery yields a root of $z$ or a hash collision.

## Notes

- Concurrently and independently, a hash-and-sign scheme from strong RSA together with a division-intractable hash function — [[GHR99 - Secure Hash-and-Sign Signatures Without the Random Oracle|GHR99]].
- A variant with signatures of roughly half the size and faster signing and verification, still under strong RSA — [[Fis03 - The Cramer-Shoup Strong-RSA Signature Scheme Revisited|Fis03]].
