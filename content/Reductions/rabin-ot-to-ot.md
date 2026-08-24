---
type: reduction
status: draft
title: "Rabin OT ⇔ OT"
aliases: []
id: red-rabin-ot-to-ot
kind: equivalence
hypotheses: [rabin-ot]
conclusion: ot
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Rabin OT ⇔ OT

[[oblivious-transfer#rabin-ot|Rabin OT]] is equivalent to [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[oblivious-transfer]] § Rabin OT:

> Introduced by [[Rab81]], **Rabin's OT** is a simpler variant where the sender transmits a single message $x$ and the receiver obtains it with probability $1/2$, receiving $\bot$ otherwise — without the sender learning which outcome occurred. Rabin OT and 1-out-of-2 OT are equivalent; each implies the other by efficient reductions.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The citation `[[Rab81]]` attaches to 'Introduced by', NOT to the equivalence claim; the equivalence ('each implies the other by efficient reductions') is effectively uncited (the standard citation, Crepeau87, is absent from content/References).
- `[[Rab81]]` is a bare wikilink to an alias, not the canonical '`[[KEY - Full Title|KEY]]`' form used everywhere else (it resolves via the alias 'Rab81' on 'Rabin81 - How to Exchange Secrets with Oblivious Transfer.md').
- 'rabin-ot' has no page; it is a variant section on this page.
- Equivalence should be migrated as TWO reductions (rabin-ot => OT and OT => rabin-ot).
