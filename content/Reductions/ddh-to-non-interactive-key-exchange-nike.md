---
type: reduction
status: stub
title: "DDH ⇒ Non-interactive key exchange (NIKE)"
aliases: []
id: red-ddh-to-non-interactive-key-exchange-nike
kind: implication
hypotheses: [ddh]
conclusion: non-interactive-key-exchange
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DDH ⇒ Non-interactive key exchange (NIKE)

[[decisional-diffie-hellman|DDH]] implies [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]].

## Statement

Migrated verbatim from [[key-exchange]]:

> A NIKE allows any two parties to derive the same shared key from each other's public keys alone, with no interaction at all. Diffie-Hellman over a cyclic group is the canonical example: $k = g^{ab}$ given public keys $g^a$ and $g^b$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The assumption is not named on this line - DH over a cyclic group is given as 'the canonical example' with no hardness assumption and no citation.
- No slug for NIKE.
