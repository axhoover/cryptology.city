---
type: reduction
status: draft
title: "Sub-exponential LWE ⇒ LWE"
aliases: []
id: red-subexponential-lwe-to-lwe
kind: implication
hypotheses: [subexponential-lwe]
conclusion: lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the LWE distribution, and the reduction forwards any distinguisher unchanged."
---

# Sub-exponential LWE ⇒ LWE

## Statement

[[learning-with-errors#sub-exponential-lwe|Sub-exponential hardness of LWE]] is hardness of [[learning-with-errors|LWE]] for one family of parameters against efficient adversaries, with at most the same advantage — folklore.
