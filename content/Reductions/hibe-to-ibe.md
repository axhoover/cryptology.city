---
type: reduction
status: stub
title: "HIBE ⇒ IBE"
aliases: []
id: red-hibe-to-ibe
kind: implication
hypotheses: [hibe]
conclusion: ibe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# HIBE ⇒ IBE

[[hierarchical-identity-based-encryption|HIBE]] implies [[identity-based-encryption|IBE]].

## Statement

Migrated verbatim from [[hierarchical-identity-based-encryption]] § Hierarchical identity-based encryption:

> A **hierarchical identity-based encryption (HIBE)** scheme extends [[identity-based-encryption|IBE]] by organizing identities into a tree: an entity at depth $k$ holds an identity vector $\vec{\mathit{id}} = (\mathit{id}_1, \ldots, \mathit{id}_k)$ where $\mathit{id}_1$ is the root domain and each subsequent component refines the identity. Any node can delegate a decryption key to any of its children without involvement of the root KGC. HIBE models real-world key delegation in organizations and DNS-style identity hierarchies.

Migrated verbatim from [[hierarchical-identity-based-encryption]] § Other results:

> - HIBE strictly generalizes [[identity-based-encryption|IBE]]: depth-1 hierarchies reduce to IBE (ignoring the $\Delegate$ algorithm)

Migrated verbatim from [[identity-based-encryption]] § Other results:

> - IBE is generalized by [[hierarchical-identity-based-encryption|HIBE]], which adds a delegation algorithm allowing any identity to issue keys for its sub-identities

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Intro-paragraph claim: HIBE 'extends' IBE. No citation. Generalization direction is stated informally; the formal reduction (depth-1 HIBE = IBE) only appears in Other results line 79.
- No citation.
- 'strictly generalizes' additionally asserts a separation (IBE does not imply HIBE) which is neither cited nor stated as an open/known result.
- Mirror of the HIBE page line 79 bullet.
