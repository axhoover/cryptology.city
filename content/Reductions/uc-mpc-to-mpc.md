---
type: reduction
status: draft
title: UC MPC ⇒ MPC
aliases: []
id: red-uc-mpc-to-mpc
kind: implication
hypotheses: [uc-mpc]
conclusion: mpc
class: fully-black-box
model: standard
source:
  - "[[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]"
security-loss: "none"
rationale:
  class: "The construction runs the UC protocol unchanged and adds one broadcast round, and a stand-alone adversary is a UC adversary whose environment only supplies inputs and reads outputs, so the UC simulator is used as a black box."
---

# UC MPC ⇒ MPC

## Statement

Let a protocol UC-realize the functionality that computes $f$ and lets the adversary withhold any honest party's output, against static malicious corruption of up to $n - 1$ parties ([[secure-multi-party-computation#universal-composability-uc|UC MPC]]). Run in synchronous rounds, it securely computes $f$ in the stand-alone sense with that per-party abort: UC security implies stand-alone security — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. Followed by one round in which every party broadcasts whether it received its output, every honest party outputting its value only if all parties announced success, it securely computes $f$ with unanimous abort ([[secure-multi-party-computation#security-with-abort|MPC]]) — folklore.

## Sketch

For a stand-alone adversary $\calA$, the stand-alone simulator is the UC simulator for $\calA$: the environment that hands the parties the inputs chosen by a stand-alone distinguisher $\calD$, stays silent during the execution, and applies $\calD$ to the output of $\calA$ and the honest parties' outputs distinguishes the real UC execution from the ideal one with the advantage of $\calD$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. In the final round the simulator announces success for the honest parties whose outputs the UC simulator releases, sees the corrupted parties' announcements, and lets the trusted party deliver to all honest parties exactly when every announcement is a success — standard.
