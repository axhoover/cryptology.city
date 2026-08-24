---
type: reduction
status: stub
title: "ABE ⇒ Fuzzy IBE"
aliases: []
id: red-abe-to-fuzzy-ibe
kind: implication
hypotheses: [abe]
conclusion: fuzzy-ibe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# ABE ⇒ Fuzzy IBE

[[attribute-based-encryption|ABE]] implies [[fuzzy-identity-based-encryption|Fuzzy IBE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - ABE (KP-ABE) generalizes [[fuzzy-identity-based-encryption|Fuzzy IBE]]: threshold-$t$ overlap policies are monotone formulas

Migrated verbatim from [[fuzzy-identity-based-encryption]] § Other results:

> - Fuzzy IBE is subsumed by [[attribute-based-encryption|KP-ABE]]: a threshold-$t$ formula over $|\calU|$ attributes is expressible as a monotone Boolean formula

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (the natural one is SW05/GPSW06); not flagged as folklore per house style.
- Duplicated on content/Primitives/fuzzy-identity-based-encryption.md line 80 ('Fuzzy IBE is subsumed by KP-ABE') — the two pages assert the same edge and should merge to one relation.
- Threshold-$t$ over a universe of size $u$ has monotone formula size polynomial in $u$ only for small universes; the one-line justification hides that.
- No citation.
- Duplicate of content/Primitives/attribute-based-encryption.md line 169 (same edge stated from the other endpoint).
- 'is subsumed by' reverses the arrow relative to word order (ABE => FIBE).
