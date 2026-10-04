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

## Statement

[[learning-with-errors#evasive-lwe|Evasive LWE]] together with [[learning-with-errors|LWE]] yields optimal [[broadcast-encryption|BE]]: for $N$ users, the public key, each secret key and the ciphertext have size $\poly(\secpar, \log N)$, and security is [[broadcast-encryption#ind-sbe-cpa-security-selective|selective]], the adversary fixing the recipient set before seeing the public key — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].

## Notes

- First candidate optimal BE that is plausibly post-quantum secure — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].
