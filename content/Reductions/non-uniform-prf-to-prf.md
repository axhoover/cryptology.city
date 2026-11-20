---
type: reduction
status: draft
title: "Non-uniform PRF ⇒ PRF"
aliases: []
id: red-non-uniform-prf-to-prf
kind: implication
hypotheses: [non-uniform-prf]
conclusion: prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and a uniform PPT distinguisher is a non-uniform one with empty advice, forwarded unchanged."
---

# Non-uniform PRF ⇒ PRF

## Statement

A [[pseudorandom-function#security-against-non-uniform-adversaries|PRF secure against non-uniform adversaries]] is a [[pseudorandom-function|PRF]], with the same advantage for every uniform distinguisher: security against all non-uniform adversaries implies security against all uniform ones — standard ([[uniform-and-non-uniform-adversaries#relation-between-the-notions|uniform and non-uniform adversaries]]).
