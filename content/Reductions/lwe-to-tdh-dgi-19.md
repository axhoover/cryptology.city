---
type: reduction
status: draft
title: "LWE ⇒ TDH"
aliases: []
id: red-lwe-to-tdh-dgi-19
kind: implication
hypotheses: [lwe]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# LWE ⇒ TDH

[[learning-with-errors|LWE]] implies [[trapdoor-hash-function|TDH]].

## Statement

Migrated verbatim from [[single-server-private-information-retrieval]] § Constructions:

> - PIR with $\polylog(n)$ bandwidth can be built from [[decisional-diffie-hellman|DDH]], QR, or [[learning-with-errors|LWE]] — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]
>   - This result goes through the use of [[trapdoor-hash-function|TDH]], which can be used to build PIR generically

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The LWE-based TDH of DGI+19 comes with its own parameter regime, not carried by the edge.
- LWE branch of the disjunction.
- The sub-bullet's own claim ('TDH ... can be used to build PIR generically') is an independent edge TDH => PIR that also deserves its own record at migration time.
