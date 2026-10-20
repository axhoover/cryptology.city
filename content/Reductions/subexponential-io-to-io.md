---
type: reduction
status: draft
title: Sub-exponentially secure iO ⇒ iO
aliases: []
id: red-subexponential-io-to-io
kind: implication
hypotheses: [subexponential-io]
conclusion: io
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the obfuscator, and the reduction forwards any distinguisher unchanged."
---

# Sub-exponentially secure iO ⇒ iO

## Statement

A [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure]] indistinguishability obfuscator is an [[indistinguishability-obfuscation|indistinguishability obfuscator]]: an efficient distinguisher has size below $2^{\secpar^{\varepsilon}}$ for large $\secpar$, so its advantage is at most $2^{-\secpar^{\varepsilon}}$ — folklore.
