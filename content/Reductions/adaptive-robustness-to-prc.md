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
rationale:
  class: "The construction is the identity on the scheme, and the reduction passes every channel and every pseudorandomness or soundness adversary through unchanged."
---

# Adaptive robustness ⇒ PRC

## Statement

A [[pseudorandom-error-correcting-code|PRC]] with [[pseudorandom-error-correcting-code#adaptive-robustness|adaptive robustness]] is a PRC (pseudorandom, sound and $\varepsilon$-robust for some constant $\varepsilon > 0$) that is in addition adaptively $\delta$-robust, for some constant $\delta > 0$, in the sense of [[AACDG25 - Ideal Pseudorandom Codes|AACDG25]]; dropping adaptive robustness leaves a PRC — folklore.
