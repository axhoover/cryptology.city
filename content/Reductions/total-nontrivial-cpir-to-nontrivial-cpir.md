---
type: reduction
status: draft
title: cPIR with total communication below n ⇒ Non-trivial cPIR
aliases: []
id: red-total-nontrivial-cpir-to-nontrivial-cpir
kind: implication
hypotheses: [total-nontrivial-cpir]
conclusion: nontrivial-cpir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any privacy adversary unchanged."
---

# cPIR with total communication below n ⇒ Non-trivial cPIR

## Statement

A [PIR scheme with total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n) is [[single-server-private-information-retrieval#non-trivial-pir|non-trivial]]: the server alone sends fewer than $n$ bits — folklore.
