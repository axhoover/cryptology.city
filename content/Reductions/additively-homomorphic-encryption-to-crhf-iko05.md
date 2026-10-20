---
type: reduction
status: draft
title: Homomorphic encryption ⇒ CRHF
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

# Homomorphic encryption ⇒ CRHF

## Statement

A semantically secure [[homomorphic-encryption#additively-homomorphic-encryption|homomorphic encryption]] scheme, whose ciphertexts can be combined into an encryption of the sum of the plaintexts, yields a [[hash-function#collision-resistance|collision-resistant hash function]] family — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].

## Notes

- Such schemes also give [[additively-homomorphic-encryption-to-cpir-ste98|single-server PIR]] — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]] — and one-round PIR gives collision-resistant hashing as well ([[cpir-to-crhf-iko05|one-round cPIR ⇒ CRHF]]) — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].
