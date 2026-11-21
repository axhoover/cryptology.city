---
type: reduction
status: draft
title: Quantum polynomial-factor SIVP ⇒ SIVP for polynomial factors
aliases: []
id: red-sivp-poly-factor-quantum-to-sivp-poly-factor
kind: implication
hypotheses: [sivp-poly-factor-quantum]
conclusion: sivp-poly-factor
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on SIVP instances, and the reduction forwards any classical algorithm, run as a quantum one, unchanged."
---

# Quantum polynomial-factor SIVP ⇒ SIVP for polynomial factors

## Statement

If [[shortest-independent-vectors-problem#polynomial-factors-against-quantum-algorithms|SIVP is quantumly hard for polynomial factors]], it is [[shortest-independent-vectors-problem#polynomial-factors|hard for polynomial factors]], since a polynomial-time quantum algorithm simulates every probabilistic polynomial-time classical algorithm with the same output distribution — folklore.
