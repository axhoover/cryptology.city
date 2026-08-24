---
type: reduction
status: draft
title: "BDH ⇒ IBE"
aliases: []
id: red-bdh-to-ibe-wat09
kind: implication
hypotheses: [bdh]
conclusion: ibe
class: unstated
model: standard
source:
  - "[[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]"
security-loss: ""
---

# BDH ⇒ IBE

[[bilinear-map-assumptions|BDH]] implies [[identity-based-encryption|IBE]].

## Statement

Migrated verbatim from [[bilinear-map-assumptions]] § Bilinear map assumptions:

> _Bilinear map (pairing) assumptions_ concern the computational hardness of certain problems in groups $\GG_1, \GG_2, \GG_T$ equipped with a bilinear pairing $e : \GG_1 \times \GG_2 \to \GG_T$, where $e(g_1^a, g_2^b) = e(g_1, g_2)^{ab}$ for generators $g_i$. Pairings enable cryptographic primitives not known to be constructible from [[decisional-diffie-hellman|DDH]] alone, including identity-based encryption and short signatures.

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - The dual system encryption technique of Wat09 gives adaptively secure IBE, HIBE, and ABE under simple pairing-based assumptions — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]

Migrated verbatim from [[bilinear-map-assumptions]] § Known Results:

> - BDH → IBE from the Weil pairing (Boneh-Franklin scheme) — standard

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Uncited, and the parent is uncited too (BF01 has no reference page linked here).
- The hypothesis is 'pairings exist' rather than a named hardness assumption; bilinear-map-assumptions is a page bundling BDH/BDDH/DLIN, so the node is coarser than the actual hypothesis.
- Model recorded as unstated: the standard Boneh-Franklin IBE is proved in the random-oracle model, which the page never says.
- Two conclusions (IBE and short signatures) in one sentence.
- No citation (BF01 and BLS01 missing).
- Hypothesis is pairings generically rather than a named assumption.
- The hypothesis bilinear-map-assumptions is a real page but an umbrella of several assumptions; Wat09 uses decisional bilinear Diffie-Hellman and decisional linear specifically, so the edge cannot name the assumption it depends on.
- IBE is not wikilinked on this bullet although content/Primitives/identity-based-encryption.md exists.
- 'adaptively secure' is a security level the conclusion node cannot express.
- Multi-conclusion bullet (IBE, HIBE, ABE) rather than a chain — must still be split into three reductions, one per conclusion. 'isComposite' is used here in that sense.
- 'simple pairing-based assumptions' is vague and unlinked (Wat09 uses decisional bilinear Diffie-Hellman and decisional linear); the hypothesis cannot be pinned to a specific assumption node.
- IBE and HIBE targets are not wikilinked on this bullet even though both pages exist.
- Marked standard, but Boneh-Franklin is an attributable result (BF01) — the folklore exception is misapplied.
- Boneh-Franklin IBE is proved secure in the random oracle model; the model is unstated on the bullet.
- BDH has no page of its own; the slug bilinear-map-assumptions bundles BDH, DBDH, DLIN, SXDH and k-Lin.
