---
type: reduction
status: draft
title: "CCA-secure PRE ⇒ PRE"
aliases: []
id: red-pre-cca-to-pre
kind: implication
hypotheses: [pre-cca]
conclusion: pre
class: fully-black-box
model: standard
source: folklore
security-loss: "tight — the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs the CPA adversary once, unchanged."
---

# CCA-secure PRE ⇒ PRE

## Statement

Every [[proxy-re-encryption#chosen-ciphertext-security|CCA-secure]] [[proxy-re-encryption|PRE]] scheme is [[proxy-re-encryption#cpa-security|CPA-secure]]: the CCA game is the CPA game with a re-encryption and a decryption oracle added, so a CPA adversary is a CCA adversary that makes no query to either, with the same advantage — folklore.
