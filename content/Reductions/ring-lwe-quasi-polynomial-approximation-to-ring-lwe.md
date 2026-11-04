---
type: reduction
status: draft
title: Ring-LWE with quasi-polynomial factors ⇒ Ring LWE
aliases: []
id: red-ring-lwe-quasi-polynomial-approximation-to-ring-lwe
kind: implication
hypotheses: [ring-lwe-quasi-polynomial-approximation]
conclusion: ring-lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the Ring LWE distribution, and the reduction forwards any distinguisher unchanged."
---

# Ring-LWE with quasi-polynomial factors ⇒ Ring LWE

## Statement

Hardness of [[learning-with-errors#ring-lwe-with-quasi-polynomial-approximation-factors|Ring LWE with quasi-polynomial approximation factors]] is hardness of [[learning-with-errors#ring-lwe|Ring LWE]] for one family of parameters, with the same advantage — folklore.
