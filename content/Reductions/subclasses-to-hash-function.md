---
type: reduction
status: draft
title: "Sub-exponential injective OWF + iO ⇒ PPAD hardness"
aliases: []
id: red-subclasses-to-hash-function
kind: implication
hypotheses: [subexponential-injective-owf, subexponential-io]
conclusion: ppad-hardness
class: free
model: standard
source:
  - "[[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]]"
via:
  - "[[complexity-leveraging|complexity leveraging]]"
security-loss: "super-polynomial, which is why both hypotheses are assumed sub-exponentially hard"
rationale:
  class: "The obfuscated circuits contain the code of a puncturable PRF built from the one-way function, making the construction non-black-box in the one-way function; BPR15 state no reduction notion, so the broadest class is recorded."
  security-loss: "BPR15 assume sub-exponential hardness to absorb, by complexity leveraging, a reduction loss larger than any polynomial."
---

# Sub-exponential injective OWF + iO ⇒ PPAD hardness

## Statement

If [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure iO]] and [[injective-one-way-function#sub-exponential-one-wayness|sub-exponentially secure injective one-way functions]] exist, then [[total-function-np#ppad|PPAD is hard]] on average: there is an efficiently sampleable distribution over PPAD instances such that for all efficient $\calA$, the probability that $\calA$ outputs a solution is negligible — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]].
