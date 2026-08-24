---
type: reduction
status: stub
title: "Fuzzy IBE ⇒ IBE"
aliases: []
id: red-fuzzy-ibe-to-ibe
kind: implication
hypotheses: [fuzzy-ibe]
conclusion: ibe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Fuzzy IBE ⇒ IBE

[[fuzzy-identity-based-encryption|Fuzzy IBE]] implies [[identity-based-encryption|IBE]].

## Statement

Migrated verbatim from [[fuzzy-identity-based-encryption]] § Fuzzy identity-based encryption:

> **Fuzzy identity-based encryption (Fuzzy IBE)** is an extension of [[identity-based-encryption|IBE]] in which identities are represented as sets of descriptive attributes drawn from a universe $\calU$.

Migrated verbatim from [[fuzzy-identity-based-encryption]] § Other results:

> - Fuzzy IBE generalizes [[identity-based-encryption|IBE]]: setting $t = 1$ and $|\omega| = |\omega'| = 1$ recovers exact-identity matching

Migrated verbatim from [[identity-based-encryption]] § Other results:

> - IBE is generalized by [[fuzzy-identity-based-encryption|Fuzzy IBE]], which allows partial identity matching via a threshold overlap condition

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- Duplicates the 'Other results' bullet at line 79 of the same page.
- 'is an extension of' reverses the arrow relative to the word order (FIBE => IBE).
- No citation and no folklore flag.
- Duplicates the intro sentence at line 13.
- No citation (SW05 fuzzy IBE).
