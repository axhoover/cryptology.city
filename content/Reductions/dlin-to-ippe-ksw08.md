---
type: reduction
status: draft
title: "DLIN ⇒ IPPE"
aliases: []
id: red-dlin-to-ippe-ksw08
kind: implication
hypotheses: [decisional-linear]
conclusion: ippe
class: free
model: standard
source:
  - "[[OT12 - Adaptively Attribute-Hiding (Hierarchical) Inner Product Encryption|OT12]]"
security-loss: ""
---

# DLIN ⇒ IPPE

[[decisional-diffie-hellman#dlin|DLIN]] implies adaptively secure, fully attribute-hiding [[inner-product-predicate-encryption|IPPE]].

## Statement

Under [[decisional-diffie-hellman#dlin|DLIN]] on prime-order bilinear groups, there is an [[inner-product-predicate-encryption|inner-product predicate encryption]] scheme that is adaptively secure and fully attribute-hiding in the sense of [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]], in the standard model — [[OT12 - Adaptively Attribute-Hiding (Hierarchical) Inner Product Encryption|OT12]].

## Notes

`class: free`: records the proven implication. OT12 do not place their proof in the RTV taxonomy.

- The first IPPE scheme, [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]], works in composite-order bilinear groups and is only selectively attribute-hiding, under two new assumptions that KSW08 justify in the generic group model. It is not a DLIN result, and those assumptions have no wiki node.
- Sourcing pass (2026-09): this page previously credited the edge to KSW08, migrated from [[inner-product-predicate-encryption]] § Other results.
