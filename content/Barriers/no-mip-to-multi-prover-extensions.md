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
---

# No free reduction from MIP\* to MIP

A reduction of class `free` from [[quantum-interactive-proofs#multi-prover-extensions|MIP*]] to [[multi-prover-interactive-proofs|MIP]] would imply a contradiction.

## Statement

$\mathbf{MIP^*} \not\subseteq \mathbf{MIP}$: $\mathbf{MIP} = \mathbf{NEXP}$ — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]]; $\mathbf{NEEXP} \subseteq \mathbf{MIP^*}$ — [[NW19 - NEEXP is Contained in MIP-star|NW19]]; and $\mathbf{NEXP} \subsetneq \mathbf{NEEXP}$ by the nondeterministic time hierarchy theorem — standard.

## Notes

`class: free`: a proven non-inclusion rules out the inclusion itself, not a proof technique.

- Derived from three results. Once NEXP and NEEXP have nodes, split it per schema/README.md into MIP = NEXP (equivalence), NEEXP ⊆ MIP\* (inclusion) and this barrier.
- The slug reads in the direction of the edge this page used to record (MIP ⊆ MIP\*, which holds).
