---
type: reduction
status: draft
title: Non-degenerate PSI ⇒ PSI
aliases: []
id: red-non-degenerate-psi-to-psi
kind: implication
hypotheses: [non-degenerate-psi]
conclusion: psi
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any adversary unchanged."
---

# Non-degenerate PSI ⇒ PSI

## Statement

A [[private-set-intersection#non-degenerate-psi|non-degenerate PSI]] protocol is a [[private-set-intersection#semi-honest-security|semi-honest secure]] [[private-set-intersection|PSI]] protocol, with the same advantages — folklore.
