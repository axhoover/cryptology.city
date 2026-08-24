---
type: reduction
status: stub
title: "GC + OT ⇒ Two-party computation (2PC)"
aliases: []
id: red-gc-and-ot-to-two-party-computation-2pc
kind: implication
hypotheses: [garbled-circuits, ot]
conclusion: two-party-computation
class: unstated
model: standard
source: folklore
security-loss: ""
---

# GC + OT ⇒ Two-party computation (2PC)

[[garbled-circuit|GC]] together with [[oblivious-transfer|OT]] implies [[secure-multi-party-computation#two-party-computation-2pc|Two-party computation (2PC)]].

## Statement

Migrated verbatim from [[secure-multi-party-computation]]:

> The special case $n = 2$ studied by Yao. Two-party protocols are typically built from [[oblivious-transfer|oblivious transfer]] (OT) and garbled circuits.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on this variation paragraph (Yao82 / GMW87 would be the sources).
- 'garbled circuits' is not a page in content/Primitives and has no wikilink; flagged non-slug identifier 'garbled-circuits'.
- 'typically built from' is a practice statement, not a theorem; the reduction is real but the phrasing cannot be typed strictly.
- Conclusion 'two-party-computation' is a section/variation of this page, not its own slug (2PC is an alias of secure-multi-party-computation).
