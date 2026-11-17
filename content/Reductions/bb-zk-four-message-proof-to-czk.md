---
type: reduction
status: draft
title: "Four-message black-box ZK proofs ⊆ CZK"
aliases: []
id: red-bb-zk-four-message-proof-to-czk
kind: inclusion
hypotheses: [bb-zk-four-message-proof]
conclusion: czk
class: free
model: standard
source: folklore
security-loss: ""
---

# Four-message black-box ZK proofs ⊆ CZK

## Statement

Every language with a [[computational-zero-knowledge#four-message-black-box-zero-knowledge-proofs|four-message black-box zero-knowledge proof]] is in [[computational-zero-knowledge|CZK]], with the same protocol: the protocol is an interactive proof sound against every prover, and for each PPT verifier $V^*$ the machine $\Sim^{V^*}$ runs in expected polynomial time and its output is computationally indistinguishable from the view of $V^*$ — folklore.
