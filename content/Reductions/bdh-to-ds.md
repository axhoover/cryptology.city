---
type: reduction
status: stub
title: "BDH ⇒ DS"
aliases: []
id: red-bdh-to-ds
kind: implication
hypotheses: [bdh]
conclusion: ds
class: unstated
model: standard
source: folklore
security-loss: ""
---

# BDH ⇒ DS

[[bilinear-map-assumptions|BDH]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[bilinear-map-assumptions]] § Bilinear map assumptions:

> _Bilinear map (pairing) assumptions_ concern the computational hardness of certain problems in groups $\GG_1, \GG_2, \GG_T$ equipped with a bilinear pairing $e : \GG_1 \times \GG_2 \to \GG_T$, where $e(g_1^a, g_2^b) = e(g_1, g_2)^{ab}$ for generators $g_i$. Pairings enable cryptographic primitives not known to be constructible from [[decisional-diffie-hellman|DDH]] alone, including identity-based encryption and short signatures.

Migrated verbatim from [[bilinear-map-assumptions]] § Known Results:

> - BDDH → short signatures (Boneh-Lynn-Shacham BLS), VRFs, and anonymous credential schemes — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Uncited (BLS01 has no reference page linked here).
- The conclusion identifier digital-signature loses the 'short' qualifier that is the entire content of the claim.
- BLS unforgeability is proved under a computational (co-CDH / gap-DH) assumption in the ROM; the coarse hypothesis node hides both the assumption flavor and the model.
- Two conclusions (IBE and short signatures) in one sentence.
- No citation (BF01 and BLS01 missing).
- Hypothesis is pairings generically rather than a named assumption.
- SUSPECTED MATHEMATICAL ERROR (recorded, not fixed): BLS unforgeability is proved under a computational assumption (co-CDH / gap-DH) in the ROM; a decisional assumption is the wrong hypothesis for an unforgeability result.
- Marked '- standard' where BLS01 is attributable, so the folklore exception is misapplied.
- The identifier bddh is not a slug; BDDH is only an alias of bilinear-map-assumptions, so BDH, BDDH and DLIN all collapse to one node.
- Conclusion identifier digital-signature loses the 'short' qualifier.
- Three conclusions bundled (BLS signatures, VRFs, anonymous credentials) — must be split.
- SUSPECTED MATHEMATICAL ERROR: BLS short signatures are proved under (co-)CDH / gap-DH in pairing groups, not under decisional BDH; a decisional assumption is the wrong hypothesis for an unforgeability result.
- Marked standard where BLS01 and the VRF literature are attributable.
- verifiable-random-function and anonymous-credentials have no pages.
