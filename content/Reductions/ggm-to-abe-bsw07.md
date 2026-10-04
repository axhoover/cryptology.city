---
type: reduction
status: draft
title: "Bilinear pairing ⇒ CP-ABE"
aliases: []
id: red-bilinear-pairing-to-cp-abe-adaptive-security-bsw07
kind: implication
hypotheses: [bilinear-pairing]
conclusion: cp-abe-adaptive-security
class: free
model: generic-group
source:
  - "[[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]]"
security-loss: ""
rationale:
  class: "BSW07 bound the advantage of every generic adversary, so the result holds for all algorithms in the model rather than through a reduction to a hardness assumption."
  model: "The proof bounds adversaries that are generic in the bilinear group, with the hash from attribute strings to the group also modeled as a random oracle."
---

# Bilinear pairing ⇒ CP-ABE

## Statement

In a [[pairings|bilinear group]], the Bethencourt–Sahai–Waters scheme is a ciphertext-policy [[attribute-based-encryption|ABE]] whose policies are monotone trees of threshold gates over attributes, which are arbitrary strings hashed into the group. It is [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]] against adversaries that are generic in the bilinear group, with the hash modeled as a random oracle — [[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]].

## Notes

- Selectively secure CP-ABE for monotone formulas exists in the standard model under the non-interactive decisional $q$-parallel BDHE assumption, and less efficiently under DBDH — [[Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover|Wat11]].
