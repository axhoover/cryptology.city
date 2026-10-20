---
type: reduction
status: draft
title: "Sub-exponentially hard LWE at sub-exponential ratio ⇒ LWE with sub-exponential ratio"
aliases: []
id: red-subexponential-lwe-subexponential-ratio-to-subexponential-modulus-lwe
kind: implication
hypotheses: [subexponential-lwe-subexponential-ratio]
conclusion: subexponential-modulus-lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and the reduction forwards any adversary unchanged."
---

# Sub-exponentially hard LWE at sub-exponential ratio ⇒ LWE with sub-exponential ratio

## Statement

[[learning-with-errors#sub-exponential-hardness-at-sub-exponential-ratio|Sub-exponential hardness]] of LWE with sub-exponential modulus-to-noise ratio implies its [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|hardness against efficient adversaries]], with the same parameters — folklore.
