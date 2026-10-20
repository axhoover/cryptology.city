---
type: reduction
status: draft
title: Additively homomorphic encryption ⇒ CRHF
aliases: []
id: red-additively-homomorphic-encryption-to-crhf-iko05
kind: implication
hypotheses: [additively-homomorphic-encryption]
conclusion: crhf
class: unstated
model: standard
source:
  - "[[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]]"
security-loss: ""
---

# Additively homomorphic encryption ⇒ CRHF

## Statement

A semantically secure [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme, with fixed-length ciphertexts closed under homomorphic addition, yields a [[hash-function#collision-resistance|collision-resistant hash function]] family — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].

## Notes

- Compression comes from the fixed ciphertext length, against which the parameters are chosen so that the hash output is shorter than its input — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].
- Such schemes also give [[additively-homomorphic-encryption-to-cpir-ste98|single-server PIR]] — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]] — and one-round sublinear PIR gives collision-resistant hashing as well ([[cpir-to-crhf-iko05|one-round sublinear cPIR ⇒ CRHF]]) — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].
