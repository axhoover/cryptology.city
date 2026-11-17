---
type: reduction
status: draft
title: "Evasive LWE + LWE ⇒ Selectively secure BE"
aliases: []
id: red-evasive-lwe-to-be-wee22
kind: implication
hypotheses: [evasive-lwe, lwe]
conclusion: be-selective
class: unstated
model: standard
source:
  - "[[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]"
security-loss: ""
---

# Evasive LWE + LWE ⇒ Selectively secure BE

## Statement

[[learning-with-errors#evasive-lwe|Evasive LWE]] together with [[learning-with-errors|LWE]] yields optimal [[broadcast-encryption|BE]]: for $N$ users, the public key, each secret key and the ciphertext have size $\poly(\secpar, \log N)$, and the scheme is correct and [[broadcast-encryption#ind-sbe-cpa-security-selective|selectively secure]], the adversary fixing the recipient set before seeing the public key — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].

## Notes

- First candidate optimal BE that is plausibly post-quantum secure — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]].
