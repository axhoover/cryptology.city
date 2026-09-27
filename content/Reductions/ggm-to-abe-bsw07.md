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
---

# Bilinear pairing ⇒ CP-ABE

[[pairings|Bilinear pairing]] implies adaptively secure [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-ABE]] in the generic bilinear group model.

## Statement

In a [[pairings|bilinear group]], the Bethencourt–Sahai–Waters scheme is a ciphertext-policy [[attribute-based-encryption|ABE]] whose policies are monotone trees of threshold gates over attributes, which are arbitrary strings hashed into the group. It is [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]] against adversaries that are generic in the bilinear group, with the hash modeled as a random oracle — [[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]].

## Notes

`class: free`: BSW07 bound the advantage of every generic adversary; per `schema/reduction-classes.yaml` an idealized model goes on the model axis with `class: free`, as on [[bilinear-pairing-to-snark-gro16]].

`model: generic-group`: the proof is in the generic bilinear group model. The hash from attributes to the group is also a random oracle, which the single-valued model field cannot record.

- Selectively secure CP-ABE under non-interactive assumptions in the standard model — [[Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover|Wat11]].
- This file previously recorded "GGM ⇒ ABE", with the generic group model as a hypothesis node. The filename is kept because filenames are live URLs.
