---
type: reduction
status: draft
title: Non-trivial canonical ID ⇒ ID
aliases: []
id: red-non-trivial-canonical-identification-scheme-to-identification-scheme
kind: implication
hypotheses: [non-trivial-canonical-identification-scheme]
conclusion: identification-scheme
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity construction; the reduction forwards any impersonator unchanged."
---

# Non-trivial canonical ID ⇒ ID

## Statement

A [[identification-scheme#non-trivial-canonical-identification-schemes|non-trivial canonical identification scheme]] secure against impersonation under passive attack is an [[identification-scheme|identification scheme]] secure against impersonation under passive attack, with the same advantage — folklore.
