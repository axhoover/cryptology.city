---
type: reduction
status: draft
title: "LWE ⇒ IND-CPA KEM"
aliases: []
id: red-lwe-to-ind-cpa-kem
kind: implication
hypotheses: [lwe]
conclusion: ind-cpa-kem
class: fully-black-box
model: standard
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: ""
---

# LWE ⇒ IND-CPA KEM

[[learning-with-errors|LWE]] implies [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]].

## Statement

Hardness of decision [[learning-with-errors|LWE]] implies an [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]]: encapsulation samples a uniformly random session key and encrypts it bit by bit under Regev's LWE encryption scheme — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].

## Sketch

A distinguisher between the encapsulated key and an independent random key is an IND-CPA adversary against the bitwise Regev encryption of the key, hence, by a hybrid over the key bits, a decision-LWE distinguisher.

## Notes

`class: fully-black-box`: Regev's fixed construction composed with the generic PKE-to-KEM step; the reduction runs the KEM adversary once, as an oracle, to break IND-CPA of the bitwise encryption and hence, through Regev's reduction, decision LWE. Fully-black-box reductions compose.
