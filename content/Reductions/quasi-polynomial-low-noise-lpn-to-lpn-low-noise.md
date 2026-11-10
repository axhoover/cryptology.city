---
type: reduction
status: draft
title: Quasi-polynomially hard low-noise LPN ⇒ Low-noise LPN
aliases: []
id: red-quasi-polynomial-low-noise-lpn-to-lpn-low-noise
kind: implication
hypotheses: [quasi-polynomial-low-noise-lpn]
conclusion: lpn-low-noise
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the LPN problem up to a fixed sample map that adds independent Bernoulli noise to each label, and the reduction forwards any distinguisher unchanged through that map."
---

# Quasi-polynomially hard low-noise LPN ⇒ Low-noise LPN

## Statement

[[learning-parity-with-noise#quasi-polynomially-hard-low-noise-lpn|Quasi-polynomially hard low-noise LPN]] at noise rate $\varepsilon \le C \log^{1+\beta}(k)/k$, for constants $C > 0$ and $\beta \in (0,1)$, implies [[learning-parity-with-noise#low-noise-lpn|low-noise LPN]] at noise rate $\log^c(k)/k$ for every constant $c > 1 + \beta$ — folklore. Quasi-polynomial hardness bounds every polynomial-time adversary; $\varepsilon \le \log^c(k)/k$ for all large $k$, since $C \le \log^{c-1-\beta}(k)$ eventually; and hardness at lower noise implies hardness at higher noise, with the same advantage, by adding independent Bernoulli noise to each label — folklore.
