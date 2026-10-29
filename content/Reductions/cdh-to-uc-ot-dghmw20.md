---
type: reduction
status: draft
title: "CDH ⇒ Two-round UC-secure OT (DGHMW)"
aliases: []
id: red-cdh-to-uc-ot-dghmw20
kind: implication
hypotheses: [cdh]
conclusion: two-round-uc-ot
class: unstated
model: crs
source:
  - "[[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]]"
security-loss: ""
rationale:
  model: "Two-round universally composable OT is proved in the common reference string model."
---

# CDH ⇒ Two-round UC-secure OT (DGHMW)

## Statement

If [[computational-diffie-hellman|CDH]] is hard for some group generator (no pairing is needed), there is a two-round 1-out-of-2 [[oblivious-transfer|oblivious transfer]] protocol in the common reference string model that is [[oblivious-transfer#two-round-uc-secure-ot|UC-secure]] against static malicious corruptions — [[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]]. The paper builds a basic two-round notion, elementary OT, from CDH and upgrades any elementary OT to UC-secure two-round OT by a generic sequence of transformations — [[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]].

## Notes

- The same transformations apply to an elementary OT from LPN, and the paper obtains two-round malicious 2PC and MPC under either assumption — [[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]].
- Two-message UC-secure OT from DDH, the stronger decisional assumption, is [[ddh-to-malicious-ot-security-pvw08|DDH ⇒ two-round UC-secure OT (PVW)]] — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]].
