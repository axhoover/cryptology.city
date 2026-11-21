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

Every language with a [[computational-zero-knowledge#four-message-black-box-zero-knowledge-proofs|four-message black-box zero-knowledge proof]] is in [[computational-zero-knowledge|CZK]], with the same protocol. The protocol is an interactive proof with completeness $2/3$ and negligible soundness error against every prover. For each non-uniform PPT verifier $V^*$, $\Sim^{V^*}$ runs in expected polynomial time, and its output is indistinguishable from the view of $V^*$ by every family of polynomial-size circuits that receives $x$. That is the condition of CZK, with $\Sim^{V^*}$ as the non-uniform simulator — folklore.
