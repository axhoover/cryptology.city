---
type: reduction
status: draft
title: "Non-uniform OWF ⇒ OWF"
aliases: []
id: red-non-uniform-owf-to-owf
kind: implication
hypotheses: [non-uniform-owf]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and a uniform PPT inverter is a non-uniform one with empty advice, forwarded unchanged."
---

# Non-uniform OWF ⇒ OWF

## Statement

A [[hash-function#one-wayness-against-non-uniform-adversaries|one-way function secure against non-uniform adversaries]] is a [[hash-function#preimage-resistance-one-wayness|one-way function]], with the same advantage for every uniform inverter: security against all non-uniform adversaries implies security against all uniform ones — standard ([[uniform-and-non-uniform-adversaries#relation-between-the-notions|uniform and non-uniform adversaries]]).
