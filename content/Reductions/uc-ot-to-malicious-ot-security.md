---
type: reduction
status: draft
title: UC-secure OT ⇒ Malicious OT
aliases: []
id: red-uc-ot-to-malicious-ot-security
kind: implication
hypotheses: [uc-ot]
conclusion: malicious-ot-security
class: fully-black-box
model: standard
source:
  - "[[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]"
security-loss: "none"
rationale:
  class: "The construction is the identity on the protocol, and a stand-alone adversary is a special case of a UC adversary with an environment that only supplies inputs and reads outputs."
---

# UC-secure OT ⇒ Malicious OT

## Statement

A protocol that [[oblivious-transfer#uc-secure-ot|UC-realizes]] OT against malicious static adversaries is [[oblivious-transfer#malicious-security|maliciously secure]] in the stand-alone sense: UC security implies stand-alone security — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].
