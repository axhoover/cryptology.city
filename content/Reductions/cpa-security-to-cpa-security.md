---
type: reduction
status: stub
title: "CPA Security ⇔ CPA Security"
aliases: []
id: red-cpa-security-to-cpa-security
kind: equivalence
hypotheses: [ind-cpa-security]
conclusion: semantic-security
class: unstated
model: standard
source: folklore
security-loss: ""
---

# CPA Security ⇔ CPA Security

[[public-key-encryption#cpa-security|CPA Security]] is equivalent to [[public-key-encryption#cpa-security|CPA Security]].

## Statement

Migrated verbatim from [[hybrid-argument]] § Standard applications:

> **Semantic security / CPA**: In the proof that IND-CPA security implies semantic security (or vice versa), a hybrid replaces the actual encryption oracle with a random-message oracle one query at a time.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (Goldwasser–Micali / the standard equivalence is not referenced).
- "(or vice versa)" makes the direction ambiguous — recorded as equivalent, but the page does not commit.
- "ind-cpa-security" and "semantic-security" are security notions, not pages; no wiki slugs exist for them (they live inside content/Primitives/public-key-encryption.md).
