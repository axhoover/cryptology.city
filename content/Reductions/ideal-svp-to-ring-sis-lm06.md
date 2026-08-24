---
type: reduction
status: draft
title: "Ideal-SVP ⇒ Ring-SIS"
aliases: []
id: red-ideal-svp-to-ring-sis-lm06
kind: implication
hypotheses: [ideal-svp]
conclusion: ring-sis
class: unstated
model: standard
source:
  - "[[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]"
security-loss: ""
---

# Ideal-SVP ⇒ Ring-SIS

[[ideal-svp|Ideal-SVP]] implies [[shortest-integer-solution#ring-sis|Ring-SIS]].

## Statement

Migrated verbatim from [[shortest-integer-solution]] § Ring-SIS:

> Ring-SIS enjoys the same worst-case-to-average-case hardness as plain SIS, now reducing from ideal-SVP (shortest vectors in ideal lattices), and enables $O(n \log n)$ arithmetic and $O(n \log q)$-bit keys — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Ideal-SVP has no wiki page.
- Concrete efficiency claims (O(n log n) arithmetic, O(n log q)-bit keys) are bundled into the same bullet as the reduction and share its single citation.
