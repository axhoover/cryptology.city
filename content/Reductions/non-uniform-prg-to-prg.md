---
type: reduction
status: draft
title: "Non-uniform PRG ⇒ PRG"
aliases: []
id: red-non-uniform-prg-to-prg
kind: implication
hypotheses: [non-uniform-prg]
conclusion: prg
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and a uniform PPT distinguisher is a non-uniform one with empty advice, forwarded unchanged."
---

# Non-uniform PRG ⇒ PRG

## Statement

A [[pseudorandom-generator#security-against-non-uniform-adversaries|PRG secure against non-uniform adversaries]] is a [[pseudorandom-generator|PRG]], with the same advantage for every uniform distinguisher: security against all non-uniform adversaries implies security against all uniform ones — standard ([[uniform-and-non-uniform-adversaries#relation-between-the-notions|uniform and non-uniform adversaries]]).
