---
type: reduction
status: draft
title: "Consistent PEKS ⇒ PEKS"
aliases: []
id: red-consistent-peks-to-peks
kind: implication
hypotheses: [consistent-peks]
conclusion: peks
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on PEKS schemes, and the reduction forwards any adversary unchanged."
---

# Consistent PEKS ⇒ PEKS

## Statement

A [[public-key-encryption-with-keyword-search#consistency|consistent]] [[public-key-encryption-with-keyword-search|PEKS]] scheme, with the same algorithms, is a correct and IND-CKA-secure PEKS scheme: consistency only adds a requirement — folklore.
