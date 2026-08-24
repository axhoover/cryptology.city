---
type: reduction
status: stub
title: "DDH ⇒ COM"
aliases: []
id: red-ddh-to-com
kind: implication
hypotheses: [ddh]
conclusion: com
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DDH ⇒ COM

[[decisional-diffie-hellman|DDH]] implies [[commitment-scheme|COM]].

## Statement

Migrated verbatim from [[commitment-scheme]] § Other results:

> - COM from [[decisional-diffie-hellman|DDH]]: the Pedersen commitment scheme is perfectly hiding and computationally binding

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation — Pedersen's original paper (Ped91) has no reference page.
- SUSPECTED IMPRECISION: Pedersen commitments are perfectly hiding unconditionally and computationally binding under the DISCRETE LOGARITHM assumption; DDH is not needed. The hypothesis should very likely be `[[discrete-logarithm]]`, which is a strictly weaker requirement.
- No construction sketch given, unlike the sibling bullets.
