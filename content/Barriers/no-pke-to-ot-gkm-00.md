---
type: barrier
status: stub
title: "No reduction from PKE to OT"
aliases: []
id: bar-pke-to-ot-gkm-00
hypotheses: [pke]
conclusion: ot
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]"
---

# No reduction from PKE to OT

A reduction of class `unstated` from [[public-key-encryption|PKE]] to [[oblivious-transfer|OT]] would imply a contradiction.

## Statement

Migrated verbatim from [[black-box-separations]] § Other Notable Separations:

> - **PKE, OT, and related primitives** — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] establishes implications and oracle separations among public-key encryption, oblivious transfer, and related primitives, mapping out the landscape of what can and cannot be black-box reduced to what.

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- VAGUE, CANNOT BE TYPED: 'establishes implications and oracle separations among public-key encryption, oblivious transfer, and related primitives' names neither a direction nor a specific pair. It is simultaneously an implies-edge and a separation-edge placeholder.
- 'and related primitives' leaves the object set open-ended.
- Neither PKE nor OT is wikilinked here, although content/Primitives/public-key-encryption.md and content/Primitives/oblivious-transfer.md exist.
- Direction recorded as 'unclear'; the hypothesis/conclusion pair below is a placeholder, not an assertion of the page.
