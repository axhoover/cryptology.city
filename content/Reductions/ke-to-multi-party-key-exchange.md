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
---

# KE ⇒ Multi-party key exchange

[[key-exchange|KE]] implies [[key-exchange#multi-party-key-exchange|Multi-party key exchange]].

## Statement

Two-party [[key-exchange|KE]] implies [[key-exchange#multi-party-key-exchange|multi-party key exchange]] against eavesdroppers: a designated party runs an independent KE session with each of the other $n-1$ parties, samples a group key $K$ uniformly, and sends $K$ one-time-padded under each session key — folklore.

## Sketch

A hybrid over the $n-1$ sessions replaces each session key by an independent uniform key using two-party KE security; the reduction embeds its challenge in one session and generates the others itself. In the final hybrid every pad is uniform and independent of $K$, so $K$ is independent of the transcript.

## Notes

`class: fully-black-box`: the construction runs the two-party protocol only as an oracle, one independent session per party; the hybrid reduction runs the multi-party eavesdropper as an oracle.
