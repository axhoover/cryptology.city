---
type: reduction
status: draft
title: Three-round NM commitment ⇒ Constant-round NM commitment
aliases: []
id: red-three-round-non-malleable-commitment-to-constant-round-non-malleable-commitment
kind: implication
hypotheses: [three-round-non-malleable-commitment]
conclusion: constant-round-non-malleable-commitment
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: the protocol and its non-malleability game are unchanged."
---

# Three-round NM commitment ⇒ Constant-round NM commitment

## Statement

A [[commitment-scheme#three-round-non-malleable-commitments|three-round non-malleable commitment]] scheme is a [[commitment-scheme#constant-round-non-malleable-commitments|constant-round non-malleable commitment]] scheme — folklore.
