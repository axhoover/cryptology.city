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
  class: "The stand-alone protocol is the UC protocol with a default output in place of a missing one, and a stand-alone adversary is a special case of a UC adversary with an environment that only supplies inputs and reads outputs."
---

# UC-secure OT ⇒ Malicious OT

## Statement

A protocol that [[oblivious-transfer#uc-secure-ot|UC-realizes]] OT against malicious static adversaries, run with the honest receiver outputting the $c$-th entry of a fixed default pair when the execution gives it no output, is [[oblivious-transfer#malicious-security|maliciously secure]] in the stand-alone sense: UC security implies stand-alone security — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. The default output accounts for the delayed delivery: the UC simulator of a corrupted sender may withhold the receiver's output, while the stand-alone ideal execution has no abort — standard.

## Sketch

For a stand-alone adversary $\calA$, the stand-alone simulator runs the UC simulator $\Sim$ for $\calA$: the environment that hands the parties the inputs $(x_0, x_1)$ and $c$, stays silent during the execution, and applies a stand-alone distinguisher to the output of $\calA$ and the honest party's output distinguishes the real UC execution from the ideal one with the same advantage — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. For a corrupted sender the environment reads a missing receiver output as the default entry, and the stand-alone simulator hands $\calF_{\mathrm{OT}}$ the pair that $\Sim$ submitted if $\Sim$ instructed delivery and the default pair otherwise; the UC version of $\calF_{\mathrm{OT}}$ sends $\Sim$ nothing that depends on $c$, so the stand-alone simulator can run $\Sim$ to the end before it hands $\calF_{\mathrm{OT}}$ a pair — standard. A stand-alone execution delivers every message, so with neither party corrupted the protocol's non-triviality gives the correctness that malicious security requires — standard.
