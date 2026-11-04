---
type: reduction
status: draft
title: "DBDH ⇒ Forward-secure PKE (Canetti–Halevi–Katz)"
aliases: []
id: red-dbdh-to-forward-secure-pke-chk03
kind: implication
hypotheses: [dbdh]
conclusion: forward-secure-pke
class: fully-black-box
model: standard
source:
  - "[[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]"
security-loss: ""
rationale:
  class: "The scheme is one fixed construction over the pairing group, and the reduction runs the forward-security adversary only as an oracle, after guessing its challenge period, on parameters built from its DBDH tuple."
---

# DBDH ⇒ Forward-secure PKE (Canetti–Halevi–Katz)

## Statement

If [[bilinear-map-assumptions#decisional-bdh|DBDH]] is hard in a symmetric pairing group, then there is a [[forward-secure-public-key-encryption|forward-secure PKE]] scheme in the standard model — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. CHK03 construct a pairing-based binary tree encryption scheme, prove it selective-node secure under DBDH, and apply the tree construction of [[hibe-selective-security-to-forward-secure-pke-chk03|Selectively secure HIBE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]] — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].
