---
type: reduction
status: stub
title: "SZK ⊆ coAM"
aliases: []
id: red-szk-to-coam
kind: inclusion
hypotheses: [szk]
conclusion: coam
class: free
model: standard
source: folklore
security-loss: ""
---

# SZK ⊆ coAM

[[statistical-zero-knowledge|SZK]] is contained in [[co-arthur-merlin|coAM]].

## Statement

Migrated verbatim from [[co-arthur-merlin]] § Known relationships:

> - $\classSZK \subseteq \classAM \cap \classcoAM$: statistical zero-knowledge problems can be argued from both sides with Arthur-Merlin protocols — TODO citation.

Migrated verbatim from [[statistical-zero-knowledge]] § Known relationships:

> - SZK ⊆ [[arthur-merlin|AM]] ∩ coAM, so if AM = coAM then SZK ⊆ AM; in particular SZK does not contain NP-complete problems unless PH collapses

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Explicit 'TODO citation'; Fortnow 1989 would be the standard source for this half.
- SZK not wikilinked.
- Uncited, same as the previous sub-edge.
- 'coAM' is bare text although content/Complexity/co-arthur-merlin.md exists and \classcoAM is defined.
