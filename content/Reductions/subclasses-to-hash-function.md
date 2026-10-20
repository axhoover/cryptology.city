---
type: reduction
status: draft
title: "Sub-exponential OWF + iO ⇒ PPAD hardness"
aliases: []
id: red-subclasses-to-hash-function
kind: implication
hypotheses: [subexponential-owf, subexponential-io]
conclusion: ppad-hardness
class: free
model: standard
source:
  - "[[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]]"
security-loss: ""
rationale:
  class: "The obfuscated circuits contain the code of a puncturable PRF built from the one-way function, making the construction non-black-box in the one-way function; BPR15 state no reduction notion, so the broadest class is recorded."
---

# Sub-exponential OWF + iO ⇒ PPAD hardness

## Statement

If [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure iO]] and [[hash-function#sub-exponential-one-wayness|sub-exponentially secure one-way functions]] exist, then [[total-function-np#ppad|PPAD is hard]] on average: there is an efficiently sampleable distribution over PPAD instances such that for all efficient $\calA$, the probability that $\calA$ outputs a solution is negligible — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]].
