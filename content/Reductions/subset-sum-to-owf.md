---
type: reduction
status: draft
title: Subset sum ⇒ OWF
aliases: []
id: red-subset-sum-to-owf
kind: implication
hypotheses: [subset-sum]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "One fixed function $f$ uses only the instance sampler, and the reduction forwards its challenge to any inverter as an oracle."
---

# Subset sum ⇒ OWF

## Statement

The function $f(\mathbf{a}, \mathbf{s}) = (\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle)$ on $\ZZ_M^n \times \bits^n$ is a [[hash-function#preimage-resistance-one-wayness|one-way function]] exactly when [[subset-sum|subset sum]] is hard for $(n, M)$, since its inversion game is the search game: a preimage of $(\mathbf{a}, t)$ is $(\mathbf{a}, \mathbf{s}')$ with $\langle \mathbf{a}, \mathbf{s}' \rangle = t$ — folklore.
