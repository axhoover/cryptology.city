---
type: reduction
status: draft
title: "Non-uniform compression-function PRF ⇒ Compression-function PRF"
aliases: []
id: red-non-uniform-compression-function-prf-to-compression-function-prf
kind: implication
hypotheses: [non-uniform-compression-function-prf]
conclusion: compression-function-prf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and a uniform PPT distinguisher is a non-uniform one with empty advice, forwarded unchanged."
---

# Non-uniform compression-function PRF ⇒ Compression-function PRF

## Statement

A [[pseudorandom-function#non-uniform-compression-function-prfs|compression-function PRF secure against non-uniform adversaries]] is a [[pseudorandom-function#compression-function-prfs|compression-function PRF]], with the same advantage for every uniform distinguisher: security against all non-uniform adversaries implies security against all uniform ones — standard ([[uniform-and-non-uniform-adversaries#relation-between-the-notions|uniform and non-uniform adversaries]]).
