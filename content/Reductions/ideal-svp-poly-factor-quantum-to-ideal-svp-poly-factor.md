---
type: reduction
status: draft
title: Quantum polynomial-factor Ideal-SVP ⇒ Ideal-SVP for polynomial factors
aliases: []
id: red-ideal-svp-poly-factor-quantum-to-ideal-svp-poly-factor
kind: implication
hypotheses: [ideal-svp-poly-factor-quantum]
conclusion: ideal-svp-poly-factor
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on Ideal-SVP instances, and the reduction forwards any classical algorithm, run as a quantum one, unchanged."
---

# Quantum polynomial-factor Ideal-SVP ⇒ Ideal-SVP for polynomial factors

## Statement

If [[ideal-svp#polynomial-factors-against-quantum-algorithms|Ideal-SVP is quantumly hard for polynomial factors]], it is [[ideal-svp#polynomial-factors|hard for polynomial factors]], since a polynomial-time quantum algorithm simulates every probabilistic polynomial-time classical algorithm with the same output distribution — folklore.
