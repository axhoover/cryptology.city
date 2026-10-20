---
type: reduction
status: draft
title: Quantum polynomial-factor GapSVP ⇒ GapSVP for polynomial factors
aliases: []
id: red-gapsvp-poly-factor-quantum-to-gapsvp-poly-factor
kind: implication
hypotheses: [gapsvp-poly-factor-quantum]
conclusion: gapsvp-poly-factor
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on GapSVP instances, and the reduction forwards any classical algorithm, run as a quantum one, unchanged."
---

# Quantum polynomial-factor GapSVP ⇒ GapSVP for polynomial factors

## Statement

If [[shortest-vector-problem#polynomial-factors-against-quantum-algorithms|GapSVP is quantumly hard for polynomial factors]], it is [[shortest-vector-problem#polynomial-factors|hard for polynomial factors]], since a polynomial-time quantum algorithm simulates every probabilistic polynomial-time classical algorithm with the same output distribution — folklore.
