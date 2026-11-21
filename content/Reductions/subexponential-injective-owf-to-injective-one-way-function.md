---
type: reduction
status: draft
title: Sub-exponential injective OWF ⇒ Injective OWF
aliases: []
id: red-subexponential-injective-owf-to-injective-one-way-function
kind: implication
hypotheses: [subexponential-injective-owf]
conclusion: injective-one-way-function
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the function, and the reduction forwards any inverter unchanged."
---

# Sub-exponential injective OWF ⇒ Injective OWF

## Statement

A [[injective-one-way-function#sub-exponential-one-wayness|sub-exponentially one-way]] injective function is an [[injective-one-way-function|injective one-way function]]: an efficient inverter has size below $2^{\secpar^{\varepsilon}}$ for large $\secpar$, so its advantage is at most $2^{-\secpar^{\varepsilon}}$ — folklore.
