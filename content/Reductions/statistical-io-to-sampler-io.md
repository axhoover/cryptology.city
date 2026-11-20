---
type: reduction
status: draft
title: "Statistical iO ⇒ iO for sampled circuit pairs"
aliases: []
id: red-statistical-io-to-sampler-io
kind: implication
hypotheses: [statistical-io]
conclusion: sampler-io
class: fully-black-box
model: standard
source: folklore
security-loss: "additive: the probability that the sampled pair is not functionally equivalent"
rationale:
  class: "The construction is the identity on obfuscators, and every distinguisher is used unchanged, its advantage bounded by the statistical distance between the two obfuscations."
---

# Statistical iO ⇒ iO for sampled circuit pairs

## Statement

A [[indistinguishability-obfuscation#statistical-io|statistically secure indistinguishability obfuscator]] is [[indistinguishability-obfuscation#io-for-sampled-circuit-pairs|secure for sampled circuit pairs]], even against unbounded distinguishers. Let a polynomial $s$ bound the size of the circuits a sampler outputs. At each $\secpar$ there are finitely many equivalent pairs of equal size at most $s(\secpar)$, so one of them maximizes the statistical distance between its two obfuscations; these maximizers form a pair of circuit families, so the maximum $\delta(\secpar)$ is negligible. Every distinguisher then has advantage at most $\delta(\secpar)$ plus the probability that the sampled pair is not equivalent — standard.
