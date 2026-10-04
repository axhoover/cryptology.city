---
type: reduction
status: draft
title: "High-noise LPN ⇒ Constant-noise LPN"
aliases: []
id: red-lpn-high-noise-to-lpn-constant-noise
kind: implication
hypotheses: [lpn-high-noise]
conclusion: lpn-constant-noise
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: advantage-preserving, one oracle call"
rationale:
  class: "A fixed sample map (add independent Bernoulli noise to each label) feeds the higher-noise distinguisher, which the reduction runs once as an oracle without using its code."
---

# High-noise LPN ⇒ Constant-noise LPN

## Statement

If $(k,\varepsilon)$-[[learning-parity-with-noise|LPN]] is hard at noise rate $\varepsilon = k^{-\gamma}$ for a constant $0 < \gamma < 1/2$ (the [[learning-parity-with-noise#high-noise-lpn|high-noise regime]]), then $(k,\varepsilon')$-LPN is hard at every constant noise rate $\varepsilon' \in (0, 1/2)$ (the [[learning-parity-with-noise#constant-noise-lpn|constant-noise regime]]): $\varepsilon < \varepsilon'$ for all large $k$, and LPN hardness is monotone in the noise rate — folklore.

## Sketch

Map an instance $(\mathbf{A}, \mathbf{v})$ to $(\mathbf{A}, \mathbf{v} + \mathbf{e}')$ with $\mathbf{e}' \getsr \mathrm{Ber}(\tau)^m$ and $\tau = (\varepsilon' - \varepsilon)/(1 - 2\varepsilon)$, so that each coordinate of $\mathbf{e} + \mathbf{e}'$ is $1$ with probability $\varepsilon(1-\tau) + \tau(1-\varepsilon) = \varepsilon'$. Rate-$\varepsilon$ instances become rate-$\varepsilon'$ instances with the same $\mathbf{A}$ and $\mathbf{s}$, and uniform $\mathbf{v}$ stays uniform, so a distinguisher for the noisier problem breaks the less noisy one with the same advantage; the same map works for search LPN.

## Notes

- Despite the names, the high-noise regime has strictly less noise than the constant-noise regime.
