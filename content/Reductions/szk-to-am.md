---
type: reduction
status: stub
title: "SZK ⊆ AM"
aliases: []
id: red-szk-to-am
kind: inclusion
hypotheses: [szk]
conclusion: am
class: free
model: standard
source: folklore
security-loss: ""
---

# SZK ⊆ AM

[[statistical-zero-knowledge|SZK]] is contained in [[arthur-merlin|AM]].

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

- Explicit 'TODO citation' on the page; Aiello-Hastad would be the standard source for this half.
- SZK is written only as the \classSZK macro and is not wikilinked, though content/Complexity/statistical-zero-knowledge.md exists.
- The two halves of the intersection have different original sources, which a single shared citation slot on the parent cannot express.
- Uncited (Fortnow 1989 / Aiello-Hastad 1991); no reference page.
- CONJUNCTION NOTE: the parent record is conjunctive:true because its conclusion was an intersection; at the sub-edge level there is one hypothesis and one conclusion, so conjunctive is false here — a conjunctive conclusion is not a conjunctive hypothesis set.
- Written with Unicode 'subset of' and 'intersection' outside math mode although \classSZK, \classAM, \classcoAM all exist.
