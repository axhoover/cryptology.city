---
type: reduction
status: draft
title: UC-secure OT ⇒ OT
aliases: []
id: red-uc-ot-to-ot
kind: implication
hypotheses: [uc-ot]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map, and each privacy distinguisher becomes an environment distinguishing the real from the ideal execution, used as an oracle."
---

# UC-secure OT ⇒ OT

## Statement

A protocol that [[oblivious-transfer#uc-secure-ot|UC-realizes]] $\calF_{\mathrm{OT}}$ in the common reference string model has [[oblivious-transfer#sender-privacy|sender privacy]] and [[oblivious-transfer#receiver-privacy|receiver privacy]] with the same reference string, so it is a semi-honest [[oblivious-transfer|OT]] — folklore. The privacy games let the adversary choose the inputs after seeing $\pp$, and a UC environment can do the same, because it learns the reference string through the adversary.

## Sketch

Receiver privacy: the environment runs a corrupted sender honestly, and its view is simulated without $c$. Sender privacy: by correctness an honestly behaving receiver's view determines $x_c$, while the simulator learns only $x_{c^*}$ for the choice $c^*$ it extracts, so $c^* = c$ except with negligible probability and the view is simulated from $x_c$ alone — standard.

## Notes

- The same extraction argument shows that stand-alone [[oblivious-transfer#malicious-security|malicious security]] gives semi-honest OT for protocols in the plain model — folklore.
- UC security also implies stand-alone malicious security ([[uc-ot-to-malicious-ot-security|UC-secure OT ⇒ malicious OT]]) — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].
