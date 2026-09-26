---
type: reduction
status: draft
title: "Noise Level ⇒ Noise Level"
aliases: []
id: red-noise-level-to-noise-level
kind: implication
hypotheses: [lpn-low-noise]
conclusion: lpn-constant-noise
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: advantage-preserving, one oracle call"
---

# Noise Level ⇒ Noise Level

[[learning-parity-with-noise#noise-level|Low-noise LPN]] implies [[learning-parity-with-noise#noise-level|constant-noise LPN]].

## Statement

If $(k,\varepsilon)$-[[learning-parity-with-noise|LPN]] is hard at noise rate $\varepsilon = \log^c(k)/k$ for a constant $c > 1$ (the low-noise regime), then $(k,\varepsilon')$-LPN is hard at every noise rate $\varepsilon' \in (\varepsilon, 1/2)$, in particular at every constant $\varepsilon' < 1/2$: LPN hardness is monotone in the noise rate — folklore.

Migrated verbatim from [[learning-parity-with-noise]] § Noise Level:

> - **Constant-noise:** $0 < \varepsilon < 1/2$ (weakest assumption)
> - **High-noise**: $\varepsilon = 1/k^\gamma$ for $0 < \gamma < 1/2$
> - **Mid-noise**: $\varepsilon = 1/k^\gamma$ for every $\gamma < 1$
> - **Low-noise**: $\varepsilon = \log^c(k) / k$ for some $c > 1$. (strongest assumption)

## Sketch

Map each sample $(\mathbf{a}, b)$ to $(\mathbf{a}, b + e')$ with fresh $e' \getsr \mathrm{Ber}(\tau)$, where $\varepsilon(1-\tau) + \tau(1-\varepsilon) = \varepsilon'$. Rate-$\varepsilon$ samples become rate-$\varepsilon'$ samples with the same secret and uniform samples stay uniform, so a distinguisher for the noisier problem breaks the less noisy one with the same advantage; the same map works for search LPN.

## Notes

`class: fully-black-box`: One fixed sample transformation (add independent Bernoulli noise to each label) and one fixed reduction that runs the higher-noise distinguisher once as an oracle on the transformed samples. RTV04 fully-black-box shape, degenerate for an assumption-to-assumption edge.

- The regime names are counterintuitive: the high-noise regime has strictly less noise than the constant-noise regime.
- SUSPECTED DEFINITION ERROR in the regimes above (also in suspected-errors.json): the mid-noise range ($\gamma < 1$) strictly contains the high-noise range ($\gamma < 1/2$), so the regimes are not disjoint as presented.
