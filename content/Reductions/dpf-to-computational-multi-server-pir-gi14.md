---
type: reduction
status: draft
title: "DPF ⇒ Computational Multi-server PIR"
aliases: []
id: red-dpf-to-computational-multi-server-pir-gi14
kind: implication
hypotheses: [dpf]
conclusion: computational-multi-server-pir
class: unstated
model: standard
source:
  - "[[GI14 - Distributed Point Functions and Their Applications|GI14]]"
security-loss: ""
---

# DPF ⇒ Computational Multi-server PIR

[[distributed-point-function|DPF]] implies [[multi-server-private-information-retrieval#computational-multi-server-pir|Computational Multi-server PIR]].

## Statement

Migrated verbatim from [[multi-server-private-information-retrieval]] § Computational Multi-server PIR:

> - This can be constructed from [[hash-function|OWFs]] via the use of [[distributed-point-function|DPFs]] — [[GI14 - Distributed Point Functions and Their Applications|GI14]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'computational-multi-server-pir' is a '## Computational Multi-server PIR' variation section with no node of its own, so the conclusion collapses to the base page.
- The construction is for TWO servers (distributed-point-function.md:48 says 'Computational 2-server PIR'); the server count is a parameter the edge drops.
- Composite: OWF => DPF => computational multi-server PIR. Must be split into two links.
- This is a sub-bullet nested under the 'Computational Multi-server PIR' variation, so its conclusion is the variant, not the base page object.
- OWF is wikilinked to hash-function (site convention).
