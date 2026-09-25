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

## Sketch

Restrict the adaptive guarantee to channel choices that do not depend on the codeword; nothing else changes.

## Notes

`class: fully-black-box`: Identity construction: the same $(\Gen, \Enc, \Dec)$. The reduction is the identity: a channel against plain robustness is an adaptive channel whose choice is constant in the codeword, and a pseudorandomness or soundness adversary is unchanged.
