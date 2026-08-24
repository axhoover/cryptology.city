---
type: reduction
status: stub
title: "Noise Level ⇒ Noise Level"
aliases: []
id: red-noise-level-to-noise-level
kind: implication
hypotheses: [lpn-low-noise]
conclusion: lpn-constant-noise
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Noise Level ⇒ Noise Level

[[learning-parity-with-noise#noise-level|Noise Level]] implies [[learning-parity-with-noise#noise-level|Noise Level]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Noise Level:

> - **Constant-noise:** $0 < \varepsilon < 1/2$ (weakest assumption)
> - **High-noise**: $\varepsilon = 1/k^\gamma$ for $0 < \gamma < 1/2$
> - **Mid-noise**: $\varepsilon = 1/k^\gamma$ for every $\gamma < 1$
> - **Low-noise**: $\varepsilon = \log^c(k) / k$ for some $c > 1$. (strongest assumption)

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The ordering of the four regimes (weakest to strongest) is conveyed only by parentheticals; the implications between regimes are never stated as reductions and are uncited.
- SUSPECTED DEFINITION ERROR: High-noise is epsilon = 1/k^gamma for 0 < gamma < 1/2 while Mid-noise is epsilon = 1/k^gamma for every gamma < 1, so the mid-noise range strictly contains the high-noise range — the regimes are not disjoint as presented.
- Naming is counterintuitive: the high-noise regime has strictly less noise than the constant-noise regime.
- None of the four regimes has its own page identifier, yet later bullets on the page cite them as distinct hypotheses.
