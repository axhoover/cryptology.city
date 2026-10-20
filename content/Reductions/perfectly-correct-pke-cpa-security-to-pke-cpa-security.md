---
type: reduction
status: draft
title: Perfectly correct CPA-secure PKE ⇒ CPA-secure PKE
aliases: []
id: red-perfectly-correct-pke-cpa-security-to-pke-cpa-security
kind: implication
hypotheses: [perfectly-correct-pke-cpa-security]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any CPA adversary unchanged."
---

# Perfectly correct CPA-secure PKE ⇒ CPA-secure PKE

## Statement

A [[public-key-encryption#perfectly-correct-cpa-secure-pke|perfectly correct IND-CPA-secure]] PKE scheme is [[public-key-encryption#cpa-security|IND-CPA-secure]] — folklore.
