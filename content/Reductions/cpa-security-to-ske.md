---
type: reduction
status: draft
title: "CPA-secure SKE ⇒ SKE"
aliases: []
id: red-cpa-security-to-ske
kind: implication
hypotheses: [cpa-security]
conclusion: ske
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the encryption algorithms, and the reduction forwards any adversary unchanged."
---

# CPA-secure SKE ⇒ SKE

## Statement

A [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|symmetric-key encryption]] scheme, with the same algorithms, is a symmetric-key encryption scheme: the weaker notion only drops security guarantees — folklore.

## Notes

- The converse fails: the one-time pad is a symmetric-key encryption scheme with perfect one-time security but not CPA-secure, which is why [[ske-to-owf-il89|SKE ⇒ OWF]] takes CPA security as its hypothesis — standard.
