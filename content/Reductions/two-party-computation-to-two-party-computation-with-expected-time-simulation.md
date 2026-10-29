---
type: reduction
status: draft
title: 2PC ⇒ 2PC with expected-time simulation
aliases: []
id: red-two-party-computation-to-two-party-computation-with-expected-time-simulation
kind: implication
hypotheses: [two-party-computation]
conclusion: two-party-computation-with-expected-time-simulation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: a simulator running in strict polynomial time runs in expected polynomial time, so the protocol and its simulator are unchanged."
---

# 2PC ⇒ 2PC with expected-time simulation

## Statement

A two-party protocol that securely computes $f$ with abort ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]) securely computes it with [[secure-multi-party-computation#2pc-with-expected-polynomial-time-simulation|expected polynomial-time simulation]]: a simulator running in strict polynomial time runs in expected polynomial time — folklore.
