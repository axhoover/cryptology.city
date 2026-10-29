---
type: reduction
status: draft
title: Two-round UC-secure OT ⇒ Two-round OT
aliases: []
id: red-two-round-uc-ot-to-two-round-ot
kind: implication
hypotheses: [two-round-uc-ot]
conclusion: two-round-ot
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map, and each privacy distinguisher becomes an environment distinguishing the real from the ideal execution, used as an oracle."
---

# Two-round UC-secure OT ⇒ Two-round OT

## Statement

A two-message protocol that UC-realizes $\calF_{\mathrm{OT}}$ in the common reference string model ([[oblivious-transfer#two-round-uc-secure-ot|two-round UC-secure OT]]) is a two-message semi-honest OT with the same reference string ([[oblivious-transfer#two-round-ot|two-round OT]]), by the argument of [[uc-ot-to-ot|UC-secure OT ⇒ OT]] — folklore.
