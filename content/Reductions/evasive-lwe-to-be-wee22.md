---
type: reduction
status: draft
title: "Evasive LWE ⇒ BE"
aliases: []
id: red-evasive-lwe-to-be-wee22
kind: implication
hypotheses: [evasive-lwe]
conclusion: be
class: unstated
model: standard
source:
  - "[[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]"
security-loss: ""
---

# Evasive LWE ⇒ BE

[[learning-with-errors#evasive-lwe|Evasive LWE]] implies [[broadcast-encryption|BE]].

## Statement

[[learning-with-errors#evasive-lwe|Evasive LWE]] together with [[learning-with-errors|LWE]] yields optimal [[broadcast-encryption|BE]]: for $N$ users, the public key, each secret key and the ciphertext have size $\poly(\secpar, \log N)$; security is selective (the adversary fixes the recipient set before seeing the public key). It is the first optimal-BE candidate that is plausibly post-quantum secure — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
