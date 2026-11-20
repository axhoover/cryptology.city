---
type: reduction
status: draft
title: "iO for sampled circuit pairs ⇒ iO"
aliases: []
id: red-sampler-io-to-io
kind: implication
hypotheses: [sampler-io]
conclusion: io
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on obfuscators, and an iO adversary for a pair of circuit families is used unchanged as the distinguisher for the sampler that outputs that pair."
---

# iO for sampled circuit pairs ⇒ iO

## Statement

An obfuscator that is [[indistinguishability-obfuscation#io-for-sampled-circuit-pairs|secure for sampled circuit pairs]] is an [[indistinguishability-obfuscation|indistinguishability obfuscator]], with the same advantage. For functionally equivalent circuit families $\{C_{0,\secpar}\}_\secpar, \{C_{1,\secpar}\}_\secpar$ of equal polynomial size, the sampler that hard-wires the pair and outputs $(C_{0,\secpar}, C_{1,\secpar})$ with empty auxiliary output is non-uniform PPT, and an adversary for the pair, uniform or not, is a non-uniform PPT distinguisher for that sampler — folklore.
