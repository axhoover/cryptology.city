---
type: reduction
status: draft
title: "Passive-server SK-DEPIR ⇒ SK-DEPIR"
aliases: []
id: red-passive-sk-depir-to-sk-depir
kind: implication
hypotheses: [passive-sk-depir]
conclusion: sk-depir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any secret-key privacy adversary unchanged."
---

# Passive-server SK-DEPIR ⇒ SK-DEPIR

## Statement

An SK-DEPIR scheme with a [[doubly-efficient-pir#passive-server-sk-depir|passive server]] is a [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]] scheme, with the same secret-key privacy advantage — folklore.
