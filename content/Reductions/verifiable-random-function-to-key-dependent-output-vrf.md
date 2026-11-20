---
type: reduction
status: draft
title: "VRF ⇒ VRF with key-dependent outputs"
aliases: []
id: red-verifiable-random-function-to-key-dependent-output-vrf
kind: implication
hypotheses: [verifiable-random-function]
conclusion: key-dependent-output-vrf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme itself with Y_pk := Y_lambda, and the reduction forwards the adversary unchanged."
---

# VRF ⇒ VRF with key-dependent outputs

## Statement

A [[verifiable-random-function|VRF]] with output space $\calY_\secpar$ is a [[verifiable-random-function#key-dependent-output-spaces|VRF with key-dependent outputs]] for $\calY_{\pk} := \calY_\secpar$: the sampler for $\calY_\secpar$ ignores $\pk$, and provability, unique provability and the pseudorandomness game are unchanged — folklore.
