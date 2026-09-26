---
type: reduction
status: draft
title: "Adaptive robustness ⇒ PRC"
aliases: []
id: red-adaptive-robustness-to-prc
kind: implication
hypotheses: [adaptively-robust-prc]
conclusion: prc
class: fully-black-box
model: standard
source: folklore
security-loss: "none (property restriction on the same object)"
---

# Adaptive robustness ⇒ PRC

[[pseudorandom-error-correcting-code#adaptive-robustness|Adaptive robustness]] implies [[pseudorandom-error-correcting-code|PRC]].

## Statement

A [[pseudorandom-error-correcting-code|PRC]] with [[pseudorandom-error-correcting-code#adaptive-robustness|adaptive robustness]] is a PRC: robustness quantifies over $\varepsilon$-bounded channels fixed before the codeword, adaptive robustness over channels chosen after seeing it, and a fixed channel is the adaptive choice that is constant in the codeword; pseudorandomness and soundness are the same properties in both notions — folklore.

## Notes

`class: fully-black-box`: The construction is the identity on $(\Gen, \Enc, \Dec)$; the reduction passes every channel and every pseudorandomness or soundness adversary through unchanged.
