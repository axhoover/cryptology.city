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
security-loss: "constant: receiver-privacy advantage at most $2\\varepsilon$ and sender-privacy advantage at most $4\\varepsilon + 2\\delta$, for UC distinguishing advantage $\\varepsilon$ and non-triviality error $\\delta$"
rationale:
  class: "Identity map, and each privacy distinguisher becomes an environment distinguishing the real from the ideal execution, used as an oracle."
---

# UC-secure OT ⇒ OT

## Statement

A protocol that [[oblivious-transfer#uc-secure-ot|UC-realizes]] $\calF_{\mathrm{OT}}$ in the common reference string model has [[oblivious-transfer#sender-privacy|sender privacy]] and [[oblivious-transfer#receiver-privacy|receiver privacy]] with the same reference string, so it is a semi-honest [[oblivious-transfer|OT]] — folklore. The privacy games let the adversary choose the inputs after seeing $\pp$, and a UC environment can do the same, because it learns the reference string through the adversary.

## Sketch

Let $\varepsilon$ bound the advantage with which an environment that runs $\calA$ and one party's code distinguishes the real from the ideal execution, and let $\delta$ be the non-triviality error: with neither party corrupted, every message delivered and the inputs chosen after $\pp$, $R$ outputs $x_c$ except with probability $\delta$, which is correctness. Receiver privacy: the environment runs a corrupted sender honestly, and the simulated view does not depend on $c$, so the advantage is at most $2\varepsilon$. Sender privacy: the environment runs a corrupted receiver honestly on $c$, and the simulator hands $\calF_{\mathrm{OT}}$ a choice $c^*$ before anything it sees depends on $(x_0, x_1)$ and then learns only $x_{c^*}$, so the simulated views for two pairs that agree on $x_c$ coincide unless $c^* = 1 - c$. For two pairs that agree on $x_{1-c}$ and differ on $x_c$, the simulated views coincide when $c^* = 1 - c$, while the output $R$ computes from the view is that pair's $x_c$ except with probability $\delta + \varepsilon$; hence $\Pr[c^* = 1 - c] \le 2(\delta + \varepsilon)$ and the advantage is at most $4\varepsilon + 2\delta$ — standard.

## Notes

- The same extraction argument shows that stand-alone [[oblivious-transfer#malicious-security|malicious security]] gives semi-honest OT for protocols in the plain model — folklore.
- UC security also implies stand-alone malicious security ([[uc-ot-to-malicious-ot-security|UC-secure OT ⇒ malicious OT]]) — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].
