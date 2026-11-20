---
type: reduction
status: draft
title: "Sub-exponentially secure iO ⇒ iO for sampled circuit pairs"
aliases: []
id: red-subexponential-io-to-sampler-io
kind: implication
hypotheses: [subexponential-io]
conclusion: sampler-io
class: fully-black-box
model: standard
source: folklore
security-loss: "additive: the probability that the sampled pair is not functionally equivalent"
rationale:
  class: "The construction is the identity on obfuscators, and the reduction runs the distinguisher unchanged with one equivalent pair of the sampler and its auxiliary output hard-wired."
---

# Sub-exponentially secure iO ⇒ iO for sampled circuit pairs

## Statement

A [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure]] indistinguishability obfuscator is [[indistinguishability-obfuscation#io-for-sampled-circuit-pairs|secure for sampled circuit pairs]]. Its adversaries are circuits of size $2^{\secpar^{\varepsilon}}$, hence non-uniform. For a non-uniform PPT sampler $\calS$ and distinguisher $\calA$, averaging over the coins of $\calS$ gives at each $\secpar$ an equivalent pair and its auxiliary output $\sigma$ on which the advantage of $\calA$ is at least its overall advantage minus the probability of a non-equivalent pair. These pairs form a pair of circuit families of polynomial size, and $\calA$ with $\sigma$ hard-wired is a circuit of polynomial size, below $2^{\secpar^{\varepsilon}}$ for large $\secpar$, so its advantage on them is at most $2^{-\secpar^{\varepsilon}}$ — standard.
