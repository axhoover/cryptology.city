---
type: reduction
status: stub
title: "Random OT ⇒ OT"
aliases: []
id: red-random-ot-to-ot
kind: implication
hypotheses: [random-ot]
conclusion: ot
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Random OT ⇒ OT

[[oblivious-transfer#random-ot|Random OT]] implies [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[oblivious-transfer]] § Random OT:

> In a **Random OT**, the parties do not choose their inputs: the sender receives uniformly random $(x_0, x_1)$ and the receiver receives a uniformly random bit $c$ and the value $x_c$. Random OT can be converted to standard OT with a single round of communication.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (this is the standard Beaver derandomization; the page gives no reference and no '— standard'/'— folklore' label, which CLAUDE.md requires for uncited folklore).
- 'random-ot' has no page (variant section on this page).
