---
type: reduction
status: draft
title: "Mild average-case hardness of Kᵗ ⇔ OWF"
aliases: []
id: red-kt-mild-average-case-hardness-to-owf-lp20
kind: equivalence
hypotheses: [kt-mild-average-case-hardness]
conclusion: owf
class: unstated
model: standard
source:
  - "[[LP20 - On One-way Functions and Kolmogorov Complexity|LP20]]"
security-loss: ""
---

# Mild average-case hardness of Kᵗ ⇔ OWF

## Statement

For every polynomial $t(n) \ge (1+\varepsilon)n$ with a constant $\varepsilon > 0$, [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist if and only if [$K^t$ is mildly hard on average](time-bounded-kolmogorov-complexity): there is a polynomial $p$ such that for every PPT algorithm $\calA$ and all sufficiently large $n$, $\Pr_{x \getsr \bits^n}[\calA(x) = K^t(x)] < 1 - 1/p(n)$ — [[LP20 - On One-way Functions and Kolmogorov Complexity|LP20]].

## Notes

- Both directions hold for every such $t$, so mild average-case hardness of $K^t$ for one polynomial $t(n) \ge (1+\varepsilon)n$ gives it for all of them — [[LP20 - On One-way Functions and Kolmogorov Complexity|LP20]].
