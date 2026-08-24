---
type: reduction
status: stub
title: "BDH ⇒ VRF"
aliases: []
id: red-bdh-to-vrf
kind: implication
hypotheses: [bdh]
conclusion: verifiable-random-function
class: unstated
model: standard
source: folklore
security-loss: ""
---

# BDH ⇒ VRF

[[bilinear-map-assumptions|BDH]] implies [[verifiable-random-function|VRF]].

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

- verifiable-random-function has no wiki page; identifier invented.
- Uncited; the '- standard' folklore label is misapplied (pairing-based VRFs are attributable).
- Same decisional-versus-computational hypothesis doubt as sub-edge 0.
- Three conclusions bundled (BLS signatures, VRFs, anonymous credentials) — must be split.
- SUSPECTED MATHEMATICAL ERROR: BLS short signatures are proved under (co-)CDH / gap-DH in pairing groups, not under decisional BDH; a decisional assumption is the wrong hypothesis for an unforgeability result.
- Marked standard where BLS01 and the VRF literature are attributable.
- verifiable-random-function and anonymous-credentials have no pages.
