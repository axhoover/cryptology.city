---
type: reduction
status: draft
title: "Circular security + LWE ⇒ HE"
aliases: []
id: red-circular-security-and-lwe-to-he
kind: implication
hypotheses: [circular-security, lwe]
conclusion: he
class: unstated
model: standard
source:
  - "[[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]]"
security-loss: ""
---

# Circular security + LWE ⇒ HE

[[circular-security|Circular security]] together with [[learning-with-errors|LWE]] implies [[homomorphic-encryption|HE]].

## Statement

Assuming [[learning-with-errors|LWE]] is hard, there is a bootstrappable homomorphic encryption scheme, hence [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]]; if the scheme is additionally [[circular-security|circular secure]], bootstrapping yields [[homomorphic-encryption|FHE]] for circuits of arbitrary depth — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].

## Sketch

BV11 build an LWE-based scheme whose homomorphic multiplication uses relinearization (key switching) to keep ciphertexts linear in the secret key, and apply dimension-modulus reduction to shrink ciphertexts and the decryption circuit until the scheme can evaluate its own decryption (replacing the squashing step of [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]). Publishing encryptions of the secret key then enables bootstrapping: homomorphically evaluating the decryption circuit refreshes ciphertext noise.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Leveled FHE for any a-priori polynomial depth from LWE alone, without bootstrapping, via modulus switching — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]]
- Approximate-eigenvector FHE from LWE: homomorphic operations are matrix operations and no evaluation key is needed — [[GSW13 - Homomorphic Encryption from Learning with Errors Conceptually-Simpler, Asymptotically-Faster, Attribute-Based|GSW13]]
