---
type: reduction
status: draft
title: Two-round UC-secure OT ⇒ UC-secure OT
aliases: []
id: red-two-round-uc-ot-to-uc-ot
kind: implication
hypotheses: [two-round-uc-ot]
conclusion: uc-ot
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the protocol and its UC simulator are unchanged."
---

# Two-round UC-secure OT ⇒ UC-secure OT

## Statement

A two-message protocol that UC-realizes $\calF_{\mathrm{OT}}$ in the common reference string model ([[oblivious-transfer#two-round-uc-secure-ot|two-round UC-secure OT]]) is a [[oblivious-transfer#uc-secure-ot|UC-secure OT]] — folklore.
