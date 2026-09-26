---
type: reduction
status: draft
title: "Evasive LWE ⇒ ABE"
aliases: []
id: red-evasive-lwe-to-abe-wee22
kind: implication
hypotheses: [evasive-lwe]
conclusion: abe
class: unstated
model: standard
source:
  - "[[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]"
security-loss: ""
---

# Evasive LWE ⇒ ABE

[[learning-with-errors#evasive-lwe|Evasive LWE]], together with tensor LWE, implies ciphertext-policy [[attribute-based-encryption|ABE]].

## Statement

[[learning-with-errors#evasive-lwe|Evasive LWE]] together with tensor LWE (introduced in the same work) and [[learning-with-errors|LWE]] yields ciphertext-policy [[attribute-based-encryption|ABE]] for circuits of a-priori bounded polynomial depth, with parameter sizes independent of the circuit size; security is very selective (the adversary fixes the challenge policy and all key queries in advance) — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
