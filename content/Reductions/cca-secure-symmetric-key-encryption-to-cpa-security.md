---
type: reduction
status: draft
title: "CCA-secure SKE ⇒ CPA-secure SKE"
aliases: []
id: red-cca-secure-symmetric-key-encryption-to-cpa-security
kind: implication
hypotheses: [cca-secure-symmetric-key-encryption]
conclusion: cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the reduction runs any CPA adversary unchanged as a CCA adversary that makes no decryption queries."
---

# CCA-secure SKE ⇒ CPA-secure SKE

## Statement

Every [[symmetric-key-encryption#cca-security|CCA-secure]] [[symmetric-key-encryption|SKE]] scheme is [[symmetric-key-encryption#cpa-security|CPA-secure]]: a CPA adversary is an admissible CCA adversary that makes no decryption queries, against the same left-right oracle, so its advantages in the two games coincide — folklore.
