---
type: reduction
status: draft
title: "Extractable PCS ⇒ PCS"
aliases: []
id: red-extractable-pcs-to-pcs
kind: implication
hypotheses: [extractable-pcs]
conclusion: pcs
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on polynomial commitment schemes, and the reduction forwards any evaluation-binding adversary unchanged."
---

# Extractable PCS ⇒ PCS

## Statement

Every [[polynomial-commitment#extractability|extractable polynomial commitment scheme]] is a [[polynomial-commitment|polynomial commitment scheme]]: an extractable PCS is a succinct, perfectly correct and evaluation-binding scheme that also meets the extractability, verification-time and field-size requirements, so the same algorithms meet the base notion with the same evaluation-binding advantage — folklore.
