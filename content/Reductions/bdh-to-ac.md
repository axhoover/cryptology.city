---
type: reduction
status: stub
title: "BDH ⇒ AC"
aliases: []
id: red-bdh-to-ac
kind: implication
hypotheses: [bdh]
conclusion: anonymous-credentials
class: unstated
model: standard
source: folklore
security-loss: ""
---

# BDH ⇒ AC

[[bilinear-map-assumptions|BDH]] implies [[anonymous-credentials|AC]].

## Statement

Migrated verbatim from [[bilinear-map-assumptions]] § Known Results:

> - BDDH → short signatures (Boneh-Lynn-Shacham BLS), VRFs, and anonymous credential schemes — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- anonymous-credentials has no wiki page; identifier invented.
- Uncited; '- standard' misapplied.
- Pairing-based anonymous credentials rest on q-type / LRSW-style assumptions rather than BDDH, so the hypothesis is doubtful (recorded, not fixed).
- Three conclusions bundled (BLS signatures, VRFs, anonymous credentials) — must be split.
- SUSPECTED MATHEMATICAL ERROR: BLS short signatures are proved under (co-)CDH / gap-DH in pairing groups, not under decisional BDH; a decisional assumption is the wrong hypothesis for an unforgeability result.
- Marked standard where BLS01 and the VRF literature are attributable.
- verifiable-random-function and anonymous-credentials have no pages.
