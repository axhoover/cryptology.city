---
type: reduction
status: draft
title: "Mid-noise LPN ⇒ High-noise LPN"
aliases: []
id: red-lpn-mid-noise-to-lpn-high-noise
kind: implication
hypotheses: [lpn-mid-noise]
conclusion: lpn-high-noise
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: advantage-preserving, one oracle call"
---

# Mid-noise LPN ⇒ High-noise LPN

[[learning-parity-with-noise#mid-noise-lpn|Mid-noise LPN]] implies [[learning-parity-with-noise#high-noise-lpn|high-noise LPN]].

## Statement

If $(k,\varepsilon)$-[[learning-parity-with-noise|LPN]] is hard at noise rate $\varepsilon = k^{-\gamma}$ for a constant $1/2 \le \gamma < 1$ (the mid-noise regime), then $(k,\varepsilon')$-LPN is hard at noise rate $\varepsilon' = k^{-\gamma'}$ for every constant $0 < \gamma' < 1/2$ (the high-noise regime): $\varepsilon < \varepsilon'$, and LPN hardness is monotone in the noise rate — folklore.

## Sketch

Map each sample $(\mathbf{a}, b)$ to $(\mathbf{a}, b + e')$ with fresh $e' \getsr \mathrm{Ber}(\tau)$, where $\varepsilon(1-\tau) + \tau(1-\varepsilon) = \varepsilon'$. Rate-$\varepsilon$ samples become rate-$\varepsilon'$ samples with the same secret and uniform samples stay uniform, so a distinguisher for the noisier problem breaks the less noisy one with the same advantage; the same map works for search LPN.

## Notes

`class: fully-black-box`: One fixed sample transformation (add independent Bernoulli noise to each label) and one fixed reduction that runs the higher-noise distinguisher once as an oracle on the transformed samples. RTV04 fully-black-box shape, degenerate for an assumption-to-assumption edge.
