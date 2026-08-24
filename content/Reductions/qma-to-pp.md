---
type: reduction
status: stub
title: "QMA ⊆ PP"
aliases: []
id: red-qma-to-pp
kind: inclusion
hypotheses: [qma]
conclusion: pp
class: free
model: quantum
source: folklore
security-loss: ""
---

# QMA ⊆ PP

[[quantum-merlin-arthur|QMA]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Known relationships:

> - $\classQCMA \subseteq \classPP \subseteq \classPSPACE$, since $\classQMA \subseteq \classPP$.

Migrated verbatim from [[quantum-merlin-arthur]] § Known relationships:

> - $\classQMA \subseteq \classPP \subseteq \classPSPACE$: QMA is contained in PP (Marriott-Watrous — TODO citation), and thus in PSPACE.

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

- MISSING CITATION (Marriott-Watrous / Kitaev-Watrous); the same fact is a 'TODO citation' at quantum-merlin-arthur.md:29.
- It appears on the page only as a trailing 'since' clause, not as a claim in its own right.
- Uncited: the bullet says 'Marriott-Watrous — TODO citation' and no reference page exists (the containment is Kitaev-Watrous 2000, strengthened by Marriott-Watrous 2005).
- PP is not wikilinked on the bullet although content/Complexity/probabilistic-polynomial-time.md exists.
- Duplicates the same containment stated at content/Complexity/quantum-classical-merlin-arthur.md:25.
