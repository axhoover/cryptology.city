---
type: reduction
status: stub
title: "ABE ⇒ IBE"
aliases: []
id: red-abe-to-ibe
kind: implication
hypotheses: [abe]
conclusion: ibe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# ABE ⇒ IBE

[[attribute-based-encryption|ABE]] implies [[identity-based-encryption|IBE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Attribute-based encryption:

> **Attribute-based encryption (ABE)** generalizes [[identity-based-encryption|IBE]] by replacing exact-identity matching with expressive Boolean access policies.

Migrated verbatim from [[identity-based-encryption]] § Other results:

> - IBE is a special case of both [[attribute-based-encryption|KP-ABE]] and [[attribute-based-encryption|CP-ABE]] with singleton policies

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- Stated as a generalization ('ABE generalizes IBE'), not as a security reduction; typed here as ABE => IBE since IBE is the special case. A migration tool must not read the surface word order as the implication direction.
- Bullet packs TWO disjunctive claims (KP-ABE => IBE and CP-ABE => IBE); must be split into two reductions, not one conjunctive one.
- Both wikilinks target the same page attribute-based-encryption with different display text, so the two distinct objects are indistinguishable after migration.
- Second of the two disjunctive claims on this bullet (CP-ABE => IBE).
- Same-page wikilink collision as above; hypothesis object is CP-ABE but the slug cannot distinguish it from KP-ABE.
