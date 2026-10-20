---
type: barrier
status: draft
title: "No relativizing reduction from OWF to OT"
aliases: []
id: bar-owf-to-ot-ir89
hypotheses: [owf]
conclusion: ot
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
oracle: "a random permutation together with a PSPACE-complete oracle"
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
rationale:
  class: "A construction and security proof that hold relative to every oracle hold relative to IR89's, under which one-way functions exist and every key-agreement protocol, hence every OT protocol, is broken."
---

# No relativizing reduction from OWF to OT

## Statement

No relativizing, and in particular no fully-black-box, construction of [[oblivious-transfer|oblivious transfer]] from a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists: relative to a random permutation together with a $\classPSPACE$-complete oracle, one-way functions exist and no key-agreement protocol is secure — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] — and [[ot-to-ke|OT yields key agreement]] by a construction that relativizes — folklore.

## Notes

- A semi-honest secure protocol for the OT functionality is an OT protocol, so the same oracle rules out relativizing constructions of semi-honest secure two-party computation from one-way functions — folklore.
- The direct separation is [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]] — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
