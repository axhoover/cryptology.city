---
type: reduction
status: draft
title: Module-SIVP for polynomial factors ⇒ Module-SIVP
aliases: []
id: red-module-sivp-poly-factor-to-worst-case-module-lattice-problems
kind: implication
hypotheses: [module-sivp-poly-factor]
conclusion: worst-case-module-lattice-problems
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on Module-SIVP instances, and the reduction forwards any algorithm unchanged."
---

# Module-SIVP for polynomial factors ⇒ Module-SIVP

## Statement

If [[module-lattice-problems#polynomial-factors|Module-SIVP is hard for polynomial factors]], then [[module-lattice-problems#module-sivp|Module-SIVP is hard]] for the polynomial-time computable factor $\gamma(N) = N$, the case $c = 1$, with the same families $n(\secpar), d(\secpar)$ — folklore.
