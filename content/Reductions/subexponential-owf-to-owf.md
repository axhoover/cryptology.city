---
type: reduction
status: draft
title: Sub-exponential OWF ⇒ OWF
aliases: []
id: red-subexponential-owf-to-owf
kind: implication
hypotheses: [subexponential-owf]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function, and the reduction forwards any inverter unchanged."
---

# Sub-exponential OWF ⇒ OWF

## Statement

A [[hash-function#sub-exponential-one-wayness|sub-exponentially one-way]] function is [[hash-function#preimage-resistance-one-wayness|one-way]]: an efficient inverter has size below $2^{\secpar^{\varepsilon}}$ for large $\secpar$, so its advantage is at most $2^{-\secpar^{\varepsilon}}$ — folklore.
