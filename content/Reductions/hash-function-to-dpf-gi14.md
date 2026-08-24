---
type: reduction
status: draft
title: "Hash function ⇒ DPF"
aliases: []
id: red-hash-function-to-dpf-gi14
kind: implication
hypotheses: [hash-function]
conclusion: dpf
class: unstated
model: standard
source:
  - "[[GI14 - Distributed Point Functions and Their Applications|GI14]]"
security-loss: ""
---

# Hash function ⇒ DPF

[[hash-function|Hash function]] implies [[distributed-point-function|DPF]].

## Statement

Migrated verbatim from [[multi-server-private-information-retrieval]] § Computational Multi-server PIR:

> - This can be constructed from [[hash-function|OWFs]] via the use of [[distributed-point-function|DPFs]] — [[GI14 - Distributed Point Functions and Their Applications|GI14]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Duplicates content/Primitives/distributed-point-function.md:47, which routes the same result through PRGs — the same claim appears with two different hypothesis chains.
- hash-function is the merged OWF/CRHF node.
- Composite: OWF => DPF => computational multi-server PIR. Must be split into two links.
- This is a sub-bullet nested under the 'Computational Multi-server PIR' variation, so its conclusion is the variant, not the base page object.
- OWF is wikilinked to hash-function (site convention).
