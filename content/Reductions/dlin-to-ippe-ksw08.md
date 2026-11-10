---
type: reduction
status: draft
title: "Bilinear pairing + DLIN ⇒ IPPE"
aliases: []
id: red-dlin-to-ippe-ksw08
kind: implication
hypotheses: [bilinear-pairing, decisional-linear]
conclusion: ippe
class: unstated
model: standard
source:
  - "[[OT12 - Adaptively Attribute-Hiding (Hierarchical) Inner Product Encryption|OT12]]"
security-loss: "polynomial: the dual-system hybrid changes the secret keys one at a time, a factor linear in the number of key queries"
rationale:
  security-loss: "OT12 extend dual system encryption, whose hybrid moves each queried secret key to semi-functional form in turn, each move reducing to DLIN."
---

# Bilinear pairing + DLIN ⇒ IPPE

## Statement

If [[decisional-diffie-hellman#dlin|DLIN]] holds in prime-order [[pairings|bilinear groups]], there is an [[inner-product-predicate-encryption|inner-product predicate encryption]] scheme that is adaptively secure and [[inner-product-predicate-encryption#full-attribute-hiding-security|fully attribute-hiding]] in the sense of [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]], in the standard model — [[OT12 - Adaptively Attribute-Hiding (Hierarchical) Inner Product Encryption|OT12]].

## Notes

- The first IPPE scheme, [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]], works in composite-order bilinear groups and is only selectively attribute-hiding, under two new assumptions that KSW08 justify in the generic group model; it is not a DLIN result.
