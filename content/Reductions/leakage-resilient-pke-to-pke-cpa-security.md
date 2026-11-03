---
type: reduction
status: draft
title: "LR-PKE ⇒ CPA-secure PKE"
aliases: []
id: red-leakage-resilient-pke-to-pke-cpa-security
kind: implication
hypotheses: [leakage-resilient-pke]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs any CPA adversary unchanged as a leakage-resilient CPA adversary that makes no leakage queries."
---

# LR-PKE ⇒ CPA-secure PKE

## Statement

Every [$\ell$-leakage-resilient](leakage-resilient-public-key-encryption#leakage-resilient-cpa-security) [[public-key-encryption|PKE]] scheme is [[public-key-encryption#cpa-security|CPA-secure]]: a CPA adversary is a leakage-resilient CPA adversary that makes no leakage queries, so its advantages in the two games against the same scheme coincide — folklore.
