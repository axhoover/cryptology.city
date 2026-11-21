---
type: reduction
status: draft
title: "Universal-2 HPS ⇒ HPS"
aliases: []
id: red-universal2-hash-proof-system-to-hash-proof-system
kind: implication
hypotheses: [universal2-hash-proof-system]
conclusion: hash-proof-system
class: fully-black-box
model: standard
source: folklore
security-loss: "tight — the smooth component is unchanged"
rationale:
  class: "The construction keeps the smooth component of the pair, and the identity reduction runs any subset-membership adversary unchanged."
---

# Universal-2 HPS ⇒ HPS

## Statement

A [[hash-proof-system#universal-2-hash-proof-systems|universal-2 hash proof system]] is a pair of a smooth [[hash-proof-system|hash proof system]] and an extended universal-2 one for the same hard subset membership problem, so its first component is a smooth hash proof system for a hard subset membership problem — folklore.
