---
type: reduction
status: draft
title: "Low-noise LPN ⇒ Mid-noise LPN"
aliases: []
id: red-noise-level-to-noise-level
kind: implication
hypotheses: [lpn-low-noise]
conclusion: lpn-mid-noise
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: advantage-preserving, one oracle call"
rationale:
  class: "A fixed sample map (add independent Bernoulli noise to each label) feeds the higher-noise distinguisher, which the reduction runs once as an oracle without using its code."
---

# Low-noise LPN ⇒ Mid-noise LPN

## Statement

If $(k,\varepsilon)$-[[learning-parity-with-noise|LPN]] is hard at noise rate $\varepsilon = \log^c(k)/k$ for a constant $c > 1$ (the [[learning-parity-with-noise#low-noise-lpn|low-noise regime]]), then $(k,\varepsilon')$-LPN is hard at noise rate $\varepsilon' = k^{-\gamma}$ for every constant $1/2 \le \gamma < 1$ (the [[learning-parity-with-noise#mid-noise-lpn|mid-noise regime]]): $\varepsilon < \varepsilon'$ for all large $k$, and LPN hardness is monotone in the noise rate — folklore.

## Sketch

Map an instance $(\mathbf{A}, \mathbf{v})$ to $(\mathbf{A}, \mathbf{v} + \mathbf{e}')$ with $\mathbf{e}' \getsr \mathrm{Ber}(\tau)^m$ and $\tau = (\varepsilon' - \varepsilon)/(1 - 2\varepsilon)$, so that each coordinate of $\mathbf{e} + \mathbf{e}'$ is $1$ with probability $\varepsilon(1-\tau) + \tau(1-\varepsilon) = \varepsilon'$. Rate-$\varepsilon$ instances become rate-$\varepsilon'$ instances with the same $\mathbf{A}$ and $\mathbf{s}$, and uniform $\mathbf{v}$ stays uniform, so a distinguisher for the noisier problem breaks the less noisy one with the same advantage; the same map works for search LPN.
