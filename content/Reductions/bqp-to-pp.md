---
type: reduction
status: stub
title: "BQP ⊆ PP"
aliases: []
id: red-bqp-to-pp
kind: inclusion
hypotheses: [bqp]
conclusion: pp
class: free
model: quantum
source: folklore
security-loss: ""
---

# BQP ⊆ PP

[[bounded-error-quantum-polynomial-time|BQP]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

Migrated verbatim from [[bounded-error-quantum-polynomial-time]] § Known relationships:

> - $\classBQP \subseteq \classPP \subseteq \classPSPACE$: quantum computation can be simulated with unbounded-error classical randomness, and in polynomial space — Adleman, DeMarrais, and Huang (1997).

Migrated verbatim from [[bounded-error-quantum-polynomial-time]] § Known relationships:

> - **PostBQP $= \classPP$** (Aaronson 2005): $\classBQP$ augmented with postselection on measurement outcomes equals $\classPP$. This gives an elegant proof of $\classBQP \subseteq \classPP$.

Migrated verbatim from [[probabilistic-polynomial-time]] § Known relationships:

> - $\classBQP \subseteq \classPP$: quantum polynomial-time is contained in PP — TODO citation (Adleman, DeMarrais, Huang 1997). This is the key relationship placing quantum computing within classical complexity.

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

- The page's only attribution is prose ('Adleman, DeMarrais, and Huang (1997)') with no reference page and no wikilink, so this link migrates uncited.
- Duplicated at probabilistic-polynomial-time.md:20, where the same fact carries a 'TODO citation'.
- This is a corollary of sub-edge 0 rather than an independent claim, and nothing in the record marks it as derived.
- Duplicates the inclusion already recorded at line 29 of the same page.
- Uncited.
- MISSING CITATION: an explicit 'TODO citation (Adleman, DeMarrais, Huang 1997)' placeholder. No reference page in content/References/ is linked; sources recorded as [] per instructions (do not invent the key).
- 'This is the key relationship placing quantum computing within classical complexity' is editorializing with no content to type.
