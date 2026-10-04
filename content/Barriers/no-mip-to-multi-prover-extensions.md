---
type: barrier
status: draft
title: "No free reduction from MIP* to MIP"
aliases: []
id: bar-mip-star-to-mip
hypotheses: [mip-star]
conclusion: mip
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]]"
  - "[[NW19 - NEEXP is Contained in MIP-star|NW19]]"
rationale:
  class: "The non-inclusion is proved outright, so it rules out the inclusion whatever proof would establish it, not one proof technique."
---

# No free reduction from MIP\* to MIP

## Statement

No reduction of any class from [[quantum-interactive-proofs#multi-prover-extensions|MIP*]] to [[multi-prover-interactive-proofs|MIP]] exists, since $\mathbf{MIP^*} \not\subseteq \mathbf{MIP}$: $\mathbf{MIP} = \mathbf{NEXP}$ — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]]; $\mathbf{NEEXP} \subseteq \mathbf{MIP^*}$ — [[NW19 - NEEXP is Contained in MIP-star|NW19]]; and $\mathbf{NEXP} \subsetneq \mathbf{NEEXP}$ by the nondeterministic time hierarchy theorem — standard.
