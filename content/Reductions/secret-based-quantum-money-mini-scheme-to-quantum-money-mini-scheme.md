---
type: reduction
status: draft
title: "Secret-based mini-scheme ⇒ Mini-scheme"
aliases: []
id: red-secret-based-quantum-money-mini-scheme-to-quantum-money-mini-scheme
kind: implication
hypotheses: [secret-based-quantum-money-mini-scheme]
conclusion: quantum-money-mini-scheme
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the mini-scheme, and the reduction forwards any counterfeiter unchanged."
  model: "The banknotes and the counterfeiters are quantum."
---

# Secret-based mini-scheme ⇒ Mini-scheme

## Statement

A [[quantum-money#secret-based-mini-schemes|secret-based mini-scheme]] is a [[quantum-money#mini-schemes|mini-scheme]], with the same correctness and unforgeability — folklore.
