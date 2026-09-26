---
type: reduction
status: draft
title: "BDH ⇒ HVE"
aliases: []
id: red-bdh-to-hve-bw07
kind: implication
hypotheses: [bdh]
conclusion: hve
class: unstated
model: standard
source:
  - "[[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]]"
security-loss: ""
---

# BDH ⇒ HVE

In composite-order bilinear groups, [[bilinear-map-assumptions|DBDH]], bilinear subgroup decision, and C3DH jointly imply [[hidden-vector-encryption|HVE]].

## Statement

In bilinear groups of composite order, [[hidden-vector-encryption|HVE]] — hence conjunctive equality, comparison, subset, and range queries on encrypted data — exists with selective security (payload- and attribute-hiding) under the decisional bilinear Diffie–Hellman ([[bilinear-map-assumptions|DBDH]]), bilinear subgroup decision, and composite 3-party Diffie–Hellman (C3DH, introduced there) assumptions — [[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The BW07 reference filename names the wrong paper; the paper is 'Conjunctive, Subset, and Range Queries on Encrypted Data' (Boneh–Waters, TCC 2007, eprint 2006/287). Filenames are live URLs and are not renamed; the reference page's source URL (eprint 2006/465) is a different paper and needs fixing.
