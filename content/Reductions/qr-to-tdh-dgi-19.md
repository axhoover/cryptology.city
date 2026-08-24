---
type: reduction
status: draft
title: "QR ⇒ TDH"
aliases: []
id: red-qr-to-tdh-dgi-19
kind: implication
hypotheses: [qr]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# QR ⇒ TDH

[[quadratic-residuosity|QR]] implies [[trapdoor-hash-function|TDH]].

## Statement

Migrated verbatim from [[single-server-private-information-retrieval]] § Constructions:

> - PIR with $\polylog(n)$ bandwidth can be built from [[decisional-diffie-hellman|DDH]], QR, or [[learning-with-errors|LWE]] — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]
>   - This result goes through the use of [[trapdoor-hash-function|TDH]], which can be used to build PIR generically

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'QR' is written as bare text with NO wikilink although content/Assumptions/quadratic-residuosity.md exists — the hypothesis node is inferred, not linked.
- QR branch of the disjunction.
- 'QR' is written as bare text with NO wikilink even though content/Assumptions/quadratic-residuosity.md exists — a reference-fixer-lane defect.
