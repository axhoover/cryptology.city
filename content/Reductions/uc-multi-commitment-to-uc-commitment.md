---
type: reduction
status: draft
title: "UC multi-commitment ⇒ UC commitment"
aliases: []
id: red-uc-multi-commitment-to-uc-commitment
kind: implication
hypotheses: [uc-multi-commitment]
conclusion: uc-commitment
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The protocol runs the multi-commitment protocol as a subroutine under one fixed commitment identifier, and the composition theorem builds its simulator from the multi-commitment simulator, used as a black box."
---

# UC multi-commitment ⇒ UC commitment

## Statement

A protocol that UC-realizes the multi-commitment functionality $\calF_{\mathrm{MCOM}}$ ([[commitment-scheme#uc-multi-commitment|UC multi-commitment]]), run for a single commitment under one fixed commitment identifier, UC-realizes the bit-commitment functionality $\calF_{\mathrm{COM}}$ ([[commitment-scheme#uc-commitment|UC commitment]]), in the same hybrid model and against the same corruptions — folklore.

## Sketch

In the $\calF_{\mathrm{MCOM}}$-hybrid model, let $\rho$ be the protocol in which the committer forwards its Commit and Open inputs to one session of $\calF_{\mathrm{MCOM}}$ under a fixed identifier $\mathit{cid}_0$, and the receiver outputs the first receipt and then the first opening that $\calF_{\mathrm{MCOM}}$ sends it under $\mathit{cid}_0$, with the identifier removed, and ignores every other message. $\rho$ UC-realizes $\calF_{\mathrm{COM}}$: the simulator emulates $\calF_{\mathrm{MCOM}}$ towards the adversary, which it can because nothing $\calF_{\mathrm{MCOM}}$ sends before an opening depends on the committed bit, passes a corrupted committer's first commitment and first opening under $\mathit{cid}_0$ on to $\calF_{\mathrm{COM}}$, and takes an honest committer's receipt and opening from $\calF_{\mathrm{COM}}$. By the [[universal-composability-framework#hybrid-models-and-composition|composition theorem]], $\rho^{\calF_{\mathrm{MCOM}} \to \pi}$ UC-realizes $\calF_{\mathrm{COM}}$ for every $\pi$ that UC-realizes $\calF_{\mathrm{MCOM}}$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]; it is a two-party protocol because each commitment of $\pi$ involves only its committer and its receiver, and its receiver outputs a receipt whenever the receiver of $\pi$ does.
