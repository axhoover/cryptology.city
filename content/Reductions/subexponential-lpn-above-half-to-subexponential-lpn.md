---
type: reduction
status: draft
title: Subexponential LPN with exponent above 1/2 ⇒ Subexponential LPN
aliases: []
id: red-subexponential-lpn-above-half-to-subexponential-lpn
kind: implication
hypotheses: [subexponential-lpn-above-half]
conclusion: subexponential-lpn
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on LPN instances, and the reduction forwards any distinguisher unchanged."
---

# Subexponential LPN with exponent above 1/2 ⇒ Subexponential LPN

## Statement

If there are constants $\varepsilon \in (0, 1/2)$ and $\delta > 0$ such that $(k,\varepsilon)$-[[learning-parity-with-noise|LPN]] is $2^{k^{1/2+\delta}}$-hard ([[learning-parity-with-noise#subexponential-lpn-with-exponent-above-12|subexponential LPN with exponent above 1/2]]), then [[learning-parity-with-noise#subexponential-lpn|subexponential LPN]] holds with the same $\varepsilon$ and $f(k) = k^{1/2+\delta} = \omega(\sqrt{k})$ — standard.
