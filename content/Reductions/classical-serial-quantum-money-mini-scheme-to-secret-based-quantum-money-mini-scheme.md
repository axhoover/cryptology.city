---
type: reduction
status: draft
title: "Mini-scheme with classical serial numbers ⇒ Secret-based mini-scheme"
aliases: []
id: red-classical-serial-quantum-money-mini-scheme-to-secret-based-quantum-money-mini-scheme
kind: implication
hypotheses: [classical-serial-quantum-money-mini-scheme]
conclusion: secret-based-quantum-money-mini-scheme
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the mini-scheme, and the reduction forwards any counterfeiter unchanged."
  model: "The banknotes and the counterfeiters are quantum."
---

# Mini-scheme with classical serial numbers ⇒ Secret-based mini-scheme

## Statement

A [[quantum-money#secret-based-mini-schemes|secret-based mini-scheme]] with [[quantum-money#classical-serial-numbers|classical serial numbers]] is a secret-based mini-scheme, with the same unforgeability — folklore.
