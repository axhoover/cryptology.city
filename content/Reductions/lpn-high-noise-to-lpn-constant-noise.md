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
---

# High-noise LPN ⇒ Constant-noise LPN

[[learning-parity-with-noise#high-noise-lpn|High-noise LPN]] implies [[learning-parity-with-noise#constant-noise-lpn|constant-noise LPN]].

## Statement

If $(k,\varepsilon)$-[[learning-parity-with-noise|LPN]] is hard at noise rate $\varepsilon = k^{-\gamma}$ for a constant $0 < \gamma < 1/2$ (the high-noise regime), then $(k,\varepsilon')$-LPN is hard at every constant noise rate $\varepsilon' \in (0, 1/2)$: $\varepsilon < \varepsilon'$ for all large $k$, and LPN hardness is monotone in the noise rate — folklore.

## Sketch

Map each sample $(\mathbf{a}, b)$ to $(\mathbf{a}, b + e')$ with fresh $e' \getsr \mathrm{Ber}(\tau)$, where $\varepsilon(1-\tau) + \tau(1-\varepsilon) = \varepsilon'$. Rate-$\varepsilon$ samples become rate-$\varepsilon'$ samples with the same secret and uniform samples stay uniform, so a distinguisher for the noisier problem breaks the less noisy one with the same advantage; the same map works for search LPN.

## Notes

`class: fully-black-box`: One fixed sample transformation (add independent Bernoulli noise to each label) and one fixed reduction that runs the higher-noise distinguisher once as an oracle on the transformed samples. RTV04 fully-black-box shape, degenerate for an assumption-to-assumption edge.

- The regime names are counterintuitive: the high-noise regime has strictly less noise than the constant-noise regime.
