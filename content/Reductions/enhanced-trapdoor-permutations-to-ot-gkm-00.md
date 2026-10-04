---
type: reduction
status: draft
title: "Enhanced trapdoor permutations ⇒ OT"
aliases: []
id: red-enhanced-trapdoor-permutations-to-ot-gkm-00
kind: implication
hypotheses: [enhanced-trapdoor-permutation]
conclusion: ot
class: fully-black-box
model: standard
source:
  - "[[EGL85 - A randomized protocol for signing contracts|EGL85]]"
security-loss: ""
rationale:
  class: "The EGL protocol uses the TDP only through its generation, evaluation, inversion and domain-sampling algorithms, and the sender-privacy reduction turns any receiver-view distinguisher, used only as an oracle, into an inverter via the black-box Goldreich–Levin decoder."
---

# Enhanced trapdoor permutations ⇒ OT

## Statement

An [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutation]] yields 1-out-of-2 [[oblivious-transfer|OT]] on bits secure against semi-honest parties, via the EGL protocol: the sender, holding $(x_0, x_1)$, samples $(f, \td) \gets \Gen(1^\secpar)$ and sends $f$; the receiver, holding $c$, picks $z \getsr \calD$, sets $y_c = \Eval(f, z)$, samples $y_{1-c}$ obliviously from the domain, and sends $(y_0, y_1)$; the sender returns $x_b \oplus h(\Invert(\td, y_b))$ for $b \in \bits$, where $h$ is a hard-core predicate, and the receiver unmasks $x_c$ with $h(z)$ — [[EGL85 - A randomized protocol for signing contracts|EGL85]]. Enhanced one-wayness ($f$ stays hard to invert on an obliviously sampled $y$ even given the sampling coins) keeps $x_{1-c}$ hidden from the receiver, who holds those coins — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

## Sketch

Receiver privacy is statistical: $(y_0, y_1)$ are two independent uniform domain elements, up to the sampler's statistical error, whatever $c$ is. Sender privacy: predicting $h(f^{-1}(y_{1-c}))$ from the sampling coins of $y_{1-c}$ is predicting a hard-core bit of an obliviously sampled image, and the Goldreich–Levin decoder turns such a predictor into an inverter, contradicting enhanced one-wayness.

## Notes

- Gol04 introduces enhanced one-wayness; for a TDP whose domain sampler's coins reveal a preimage, the protocol is insecure — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].
- Enhanced TDPs suffice for EGL OT, while NIZK needs doubly enhanced TDPs; intermediate notions are separated — [[GR13 - Enhancements of Trapdoor Permutations|GR13]].
