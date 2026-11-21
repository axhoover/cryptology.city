---
type: reduction
status: draft
title: Quantum polynomial-factor Module-SIVP ⇒ Module-SIVP for polynomial factors
aliases: []
id: red-module-sivp-poly-factor-quantum-to-module-sivp-poly-factor
kind: implication
hypotheses: [module-sivp-poly-factor-quantum]
conclusion: module-sivp-poly-factor
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on Module-SIVP instances, and the reduction forwards any classical algorithm, run as a quantum one, unchanged."
---

# Quantum polynomial-factor Module-SIVP ⇒ Module-SIVP for polynomial factors

## Statement

If [[module-lattice-problems#polynomial-factors-against-quantum-algorithms|Module-SIVP is quantumly hard for polynomial factors]], it is [[module-lattice-problems#polynomial-factors|hard for polynomial factors]], since a polynomial-time quantum algorithm simulates every probabilistic polynomial-time classical algorithm with the same output distribution — folklore.
