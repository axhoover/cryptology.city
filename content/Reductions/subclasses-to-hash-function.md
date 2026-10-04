---
type: reduction
status: draft
title: "OWF + iO ⇒ PPAD hardness"
aliases: []
id: red-subclasses-to-hash-function
kind: implication
hypotheses: [owf, io]
conclusion: ppad-hardness
class: free
model: standard
source:
  - "[[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]]"
security-loss: ""
rationale:
  class: "The obfuscated circuits contain the code of a puncturable PRF built from the one-way function, making the construction non-black-box in the one-way function; BPR15 state no reduction notion, so the broadest class is recorded."
---

# OWF + iO ⇒ PPAD hardness

## Statement

If sub-exponentially secure [[indistinguishability-obfuscation|iO]] and sub-exponentially secure [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, then [[total-function-np#subclasses|PPAD is hard]] on average: there is an efficiently sampleable distribution over PPAD instances such that for all efficient $\calA$, the probability that $\calA$ outputs a solution is negligible — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]].
