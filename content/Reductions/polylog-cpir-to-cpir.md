---
type: reduction
status: draft
title: "PIR with polylogarithmic communication ⇒ cPIR"
aliases: []
id: red-polylog-cpir-to-cpir
kind: implication
hypotheses: [polylog-cpir]
conclusion: cpir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any privacy adversary unchanged."
---

# PIR with polylogarithmic communication ⇒ cPIR

## Statement

A [PIR scheme with polylogarithmic communication](single-server-private-information-retrieval#pir-with-polylogarithmic-communication) is a [[single-server-private-information-retrieval|single-server PIR]] scheme, $(1 - \negl(\secpar))$-correct and with the same query-privacy advantage — folklore.
