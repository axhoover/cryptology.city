---
type: reduction
status: draft
title: Sub-exponential injective OWF ⇒ Sub-exponential OWF
aliases: []
id: red-subexponential-injective-owf-to-subexponential-owf
kind: implication
hypotheses: [subexponential-injective-owf]
conclusion: subexponential-owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function, and the reduction forwards any inverter unchanged."
---

# Sub-exponential injective OWF ⇒ Sub-exponential OWF

## Statement

A [[injective-one-way-function#sub-exponential-one-wayness|sub-exponentially one-way]] injective function is [[hash-function#sub-exponential-one-wayness|sub-exponentially one-way]] as a function, with the same $\varepsilon$ and the same advantage for every adversary: by injectivity, an output $\hat{x}$ with $f(\hat{x}) = f(x)$ is $x$ itself — folklore.
