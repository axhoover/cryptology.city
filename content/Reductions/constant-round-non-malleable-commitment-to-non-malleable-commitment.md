---
type: reduction
status: draft
title: Constant-round NM commitment ⇒ NM commitment
aliases: []
id: red-constant-round-non-malleable-commitment-to-non-malleable-commitment
kind: implication
hypotheses: [constant-round-non-malleable-commitment]
conclusion: non-malleable-commitment
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the protocol and its non-malleability game are unchanged."
---

# Constant-round NM commitment ⇒ NM commitment

## Statement

A [[commitment-scheme#constant-round-non-malleable-commitments|constant-round non-malleable commitment]] scheme is a [[commitment-scheme#non-malleable-commitments|non-malleable commitment]] scheme — folklore.
