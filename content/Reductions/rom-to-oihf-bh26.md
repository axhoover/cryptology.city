---
type: reduction
status: draft
title: "ROM ⇒ OIHF"
aliases: []
id: red-rom-to-oihf-bh26
kind: implication
hypotheses: [rom]
conclusion: oblivious-interactive-hash-function
class: free
model: rom
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
security-loss: ""
---

# ROM ⇒ OIHF

[[random-oracle-model|ROM]] implies [[oblivious-interactive-hash-function|OIHF]].

## Statement

A random oracle yields an [[oblivious-interactive-hash-function|oblivious interactive hash function]], placing OIHFs in Minicrypt — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. In the standard model BH26 build OIHFs only from [[oblivious-transfer|OT]], so the black-box Minicrypt–Cryptomania separation stands.

## Notes

`class: free`: BH26 construct the OIHF directly from the random oracle and prove security unconditionally in that model, for any adversary with a bounded query budget. Per schema/README the idealized model sits on the model axis, and an unconditional proof in the model is the free class scoped by it; BH26 do not classify the construction in RTV terms.

`model: rom`: standard-model OIHFs currently require Cryptomania assumptions — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]] — so the model is load-bearing.
