---
type: reduction
status: draft
title: "DBDH ⇒ Binary tree encryption (Canetti–Halevi–Katz)"
aliases: []
id: red-dbdh-to-selective-node-bte-chk03
kind: implication
hypotheses: [dbdh]
conclusion: selective-node-bte
class: fully-black-box
model: standard
source:
  - "[[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]"
security-loss: ""
rationale:
  class: "The scheme is one fixed construction over the pairing group, and the reduction runs the selective-node adversary only as an oracle on parameters built from its DBDH tuple."
---

# DBDH ⇒ Binary tree encryption (Canetti–Halevi–Katz)

## Statement

If [[bilinear-map-assumptions#decisional-bdh|DBDH]] is hard in a symmetric pairing group, then there is a [[hierarchical-identity-based-encryption#binary-tree-encryption|selective-node-secure binary tree encryption]] scheme in the standard model: CHK03 construct a pairing-based binary tree encryption scheme and prove it selective-node secure under DBDH — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].
