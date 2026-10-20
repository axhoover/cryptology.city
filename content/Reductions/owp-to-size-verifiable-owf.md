---
type: reduction
status: draft
title: "OWP ⇒ Size-verifiable OWF"
aliases: []
id: red-owp-to-size-verifiable-owf
kind: implication
hypotheses: [owp]
conclusion: size-verifiable-owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on functions, and the reduction forwards any inverter unchanged."
---

# OWP ⇒ Size-verifiable OWF

## Statement

A [[one-way-permutation|one-way permutation]] $f$ is a [[hash-function#size-verifiable-one-wayness|size-verifiable one-way function]], with the same inversion advantage for every adversary: $f$ permutes each $\bits^n$, so $|f^{-1}(y)| = 1$ for every $y$, and the preimage-size problem $\{(y, s) : |f^{-1}(y)| = s\} = \{(y, 1) : y \in \bits^*\}$ lies in $\classP \subseteq \classAM$ — folklore.
