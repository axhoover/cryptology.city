---
type: reduction
status: draft
title: "KE ⇒ Multi-party key exchange"
aliases: []
id: red-ke-to-multi-party-key-exchange
kind: implication
hypotheses: [ke]
conclusion: multi-party-key-exchange
class: fully-black-box
model: standard
source: folklore
security-loss: "factor $n-1$ over the two-party KE advantage (one hybrid per session)"
rationale:
  class: "The construction runs the two-party protocol only as an oracle, one independent session per party, and the hybrid reduction runs the multi-party eavesdropper as an oracle."
---

# KE ⇒ Multi-party key exchange

## Statement

Two-party [[key-exchange|key exchange]] secure against eavesdroppers implies $n$-party [[key-exchange#multi-party-key-exchange|multi-party key exchange]] secure against eavesdroppers: a designated party runs an independent two-party session with each of the other $n-1$ parties, samples a group key $K$ uniformly, and sends $K$ one-time-padded under each session key — folklore.

## Sketch

A hybrid over the $n-1$ sessions replaces each session key by an independent uniform key; the reduction embeds its two-party challenge in one session and runs the others itself. In the last hybrid every pad is uniform, so $K$ is independent of the transcript.
