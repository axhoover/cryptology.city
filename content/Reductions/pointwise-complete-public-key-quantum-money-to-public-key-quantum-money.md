---
type: reduction
status: draft
title: "Pointwise-complete public-key QM ⇒ Public-key QM"
aliases: []
id: red-pointwise-complete-public-key-quantum-money-to-public-key-quantum-money
kind: implication
hypotheses: [pointwise-complete-public-key-quantum-money]
conclusion: public-key-quantum-money
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any counterfeiter unchanged."
  model: "The banknotes and the counterfeiters are quantum."
---

# Pointwise-complete public-key QM ⇒ Public-key QM

## Statement

A [[quantum-money#pointwise-completeness|pointwise-complete]] [[quantum-money#public-key-quantum-money|public-key quantum money scheme]], pointwise $(1-\varepsilon)$-complete with $\varepsilon$ negligible, is $(1-\varepsilon)$-correct in the averaged sense, so the same scheme is a public-key quantum money scheme with the same unforgeability — folklore.
