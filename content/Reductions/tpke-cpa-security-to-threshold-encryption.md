---
type: reduction
status: draft
title: "TPKE CPA Security ⇒ TPKE"
aliases: []
id: red-tpke-cpa-security-to-threshold-encryption
kind: implication
hypotheses: [tpke-cpa-security]
conclusion: threshold-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the threshold encryption algorithms, and the reduction forwards any adversary unchanged."
---

# TPKE CPA Security ⇒ TPKE

## Statement

A [[threshold-encryption#cpa-security|CPA-secure]] [[threshold-encryption|threshold encryption]] scheme, with the same algorithms, is a threshold encryption scheme: the identity carries correctness and the message space over, and an admissible adversary that makes no $\calE$ query is an admissible adversary in the CPA game, so its advantage is negligible — folklore.
