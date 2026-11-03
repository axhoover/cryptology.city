---
type: reduction
status: draft
title: "DBDH ⇒ Forward-secure PKE (Canetti–Halevi–Katz)"
aliases: []
id: red-dbdh-to-forward-secure-pke-chk03
kind: implication
hypotheses: [dbdh]
conclusion: forward-secure-pke
class: unstated
model: standard
source:
  - "[[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]"
security-loss: ""
---

# DBDH ⇒ Forward-secure PKE (Canetti–Halevi–Katz)

## Statement

If [[bilinear-map-assumptions#decisional-bdh|DBDH]] is hard in a symmetric pairing group, then for every polynomially bounded $T$ there is a [[forward-secure-public-key-encryption|forward-secure PKE]] scheme with $T$ periods in the standard model — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. CHK03 construct a pairing-based binary tree encryption scheme, prove it selective-node secure under DBDH without random oracles, and apply the tree construction of [[hibe-selective-security-to-forward-secure-pke-chk03|Selectively secure HIBE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]] — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].
