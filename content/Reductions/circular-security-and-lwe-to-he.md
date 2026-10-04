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

## Statement

Assuming [[learning-with-errors|LWE]] is hard, there is a [[homomorphic-encryption#bootstrappable-she|bootstrappable]] somewhat homomorphic encryption scheme, hence [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]]; if the scheme is additionally [[circular-security|circular secure]], bootstrapping yields [[homomorphic-encryption|FHE]] for circuits of arbitrary depth — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].

## Notes

- The passage from a bootstrappable scheme to leveled FHE, and with circular security to FHE, is Gentry's bootstrapping theorem ([[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular security + Bootstrappable SHE ⇒ HE]]) — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].
- Leveled FHE for any a-priori polynomial depth follows from LWE alone without bootstrapping, via modulus switching — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].
