---
type: reduction
status: draft
title: "DDH ⇒ TDH"
aliases: []
id: red-ddh-to-tdh-dgi-19
kind: implication
hypotheses: [ddh]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# DDH ⇒ TDH

[[decisional-diffie-hellman|DDH]] implies [[trapdoor-hash-function|TDH]].

## Statement

Migrated verbatim from [[single-server-private-information-retrieval]] § Constructions:

> - PIR with $\polylog(n)$ bandwidth can be built from [[decisional-diffie-hellman|DDH]], QR, or [[learning-with-errors|LWE]] — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]
>   - This result goes through the use of [[trapdoor-hash-function|TDH]], which can be used to build PIR generically

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The sub-bullet, not the main bullet, is what licenses this split; the main bullet alone would give a one-link DDH => PIR edge.
- DGI+19's DDH-based TDH has its own rate/parameter constraints the edge cannot carry.
- DISJUNCTIVE bullet: DDH, QR, or LWE are three separate reductions — split into three records; this is the DDH branch.
- COMPOSITE: the sub-bullet says the construction routes through trapdoor hash functions, so each branch is a two-link chain (assumption => TDH => PIR).
- The $\polylog(n)$ bandwidth qualifier is a quantitative property the edge cannot carry.
