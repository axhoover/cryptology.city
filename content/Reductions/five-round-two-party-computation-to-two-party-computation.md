---
type: reduction
status: draft
title: Five-round 2PC ⇒ 2PC with expected-time simulation
aliases: []
id: red-five-round-two-party-computation-to-two-party-computation-with-expected-time-simulation
kind: implication
hypotheses: [five-round-two-party-computation]
conclusion: two-party-computation-with-expected-time-simulation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the five-round protocol is a two-party protocol secure with abort, and its simulator, which runs in expected polynomial time, is unchanged."
---

# Five-round 2PC ⇒ 2PC with expected-time simulation

## Statement

A plain-model protocol of five rounds, one party sending per round, that securely computes a two-party functionality $f$ with abort against a malicious adversary corrupting either party, with a black-box simulator ([[secure-multi-party-computation#five-round-2pc|five-round 2PC]]), securely computes $f$ with abort with a simulator running in expected polynomial time ([[secure-multi-party-computation#2pc-with-expected-polynomial-time-simulation|2PC with expected polynomial-time simulation]]): for each efficient $\calA$, the black-box simulator run with $\calA$ as its oracle is such a simulator for $\calA$ — folklore.
