---
type: reduction
status: draft
title: "Differing-inputs obfuscation (diO) ⇒ iO for sampled circuit pairs"
aliases: []
id: red-differing-inputs-obfuscation-to-sampler-io
kind: implication
hypotheses: [differing-inputs-obfuscation]
conclusion: sampler-io
class: fully-black-box
model: standard
source: folklore
security-loss: "additive: the probability that the sampled pair is not functionally equivalent"
rationale:
  class: "The construction is the identity on obfuscators, and the reduction uses the circuit-pair sampler, with its auxiliary output as auxiliary input, as the diO sampler and the distinguisher unchanged."
---

# Differing-inputs obfuscation (diO) ⇒ iO for sampled circuit pairs

## Statement

Take [[indistinguishability-obfuscation#differing-inputs-obfuscation-dio|differing-inputs obfuscation]] against non-uniform samplers, difference-finders and distinguishers. Then a differing-inputs obfuscator is [[indistinguishability-obfuscation#io-for-sampled-circuit-pairs|secure for sampled circuit pairs]]. Given a sampler $\calS$, the diO sampler runs $\calS$ and outputs its pair $(C_0, C_1)$ with $\sigma$ as auxiliary input when $|C_0| = |C_1|$, and $(C_0, C_0)$ with $\sigma$ otherwise. Its pairs have equal size and have a differing input only when the pair of $\calS$ is not equivalent, which has negligible probability, so no difference-finder succeeds except with negligible probability. The diO guarantee for this sampler, with the distinguisher $\calA(\sigma, \cdot)$, bounds the advantage of $\calA$ for $\calS$ by the diO advantage plus the probability of a non-equivalent pair — standard.
