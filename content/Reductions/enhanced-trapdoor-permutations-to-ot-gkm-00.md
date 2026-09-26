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
---

# Enhanced trapdoor permutations ⇒ OT

[[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]] imply [[oblivious-transfer|OT]].

## Statement

An [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutation]] yields 1-out-of-2 [[oblivious-transfer|OT]] secure against semi-honest parties, via the EGL protocol: the sender samples $(f, \td) \gets \Gen(1^\secpar)$ and sends $f$; the receiver with choice bit $c$ picks $x_c$ uniformly, samples $y_{1-c}$ obliviously from the domain, and sends $(y_0, y_1)$ with $y_c = \Eval(f, x_c)$; the sender returns $m_b \oplus h(\Invert(\td, y_b))$ for $b \in \bits$, where $h$ is a hard-core predicate — [[EGL85 - A randomized protocol for signing contracts|EGL85]]. Enhanced one-wayness ($f$ stays hard to invert on an obliviously sampled $y$ even given the sampling coins) keeps $m_{1-c}$ hidden from the receiver, who holds those coins — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

## Sketch

Receiver privacy: $(y_0, y_1)$ are two independent uniform domain elements (up to the sampler's statistical error) whatever $c$ is. Sender privacy: predicting $h(f^{-1}(y_{1-c}))$ from $y_{1-c}$'s sampling coins is predicting a hard-core bit of an obliviously sampled image, and the Goldreich–Levin decoder turns such a predictor into an inverter, contradicting enhanced one-wayness.

## Notes

`class: fully-black-box`: one fixed protocol uses the TDP only through $\Gen$, $\Eval$, $\Invert$ and the domain sampler, plus a Goldreich–Levin predicate. Receiver privacy is statistical; the fixed sender-privacy reduction uses any receiver-view distinguisher only as an oracle, turning it via the black-box Goldreich–Levin decoder into an inverter of the enhanced TDP. RTV04 fully-black-box shape.

- Introduces the enhanced one-wayness hypothesis and proves the EGL protocol secure under it; for a TDP whose domain sampler's coins reveal a preimage, the protocol is insecure — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]]
- Enhanced TDPs suffice for EGL OT, while NIZK needs doubly enhanced TDPs; intermediate notions are separated — [[GR13 - Enhancements of Trapdoor Permutations|GR13]]
