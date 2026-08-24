---
type: reduction
status: stub
title: "PP ⊆ PSPACE"
aliases: []
id: red-pp-to-pspace
kind: inclusion
hypotheses: [pp]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# PP ⊆ PSPACE

[[probabilistic-polynomial-time|PP]] is contained in [[polynomial-space|PSPACE]].

## Statement

Migrated verbatim from [[bounded-error-quantum-polynomial-time]] § Known relationships:

> - $\classBQP \subseteq \classPP \subseteq \classPSPACE$: quantum computation can be simulated with unbounded-error classical randomness, and in polynomial space — Adleman, DeMarrais, and Huang (1997).

Migrated verbatim from [[probabilistic-polynomial-time]] § Known relationships:

> - $\classBPP \subseteq \classPP \subseteq \classPSPACE$: BPP has a constant gap (and thus sits inside PP), and PP's computation can be simulated in polynomial space.

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

- Uncited and unlabelled folklore.
- Purely classical link, so the parent's model 'quantum' does not apply.
- Duplicates probabilistic-polynomial-time.md:18 sub-edge 1 and quantum-classical-merlin-arthur.md:25 sub-edge 2.
- The slug probabilistic-polynomial-time denotes PP, while PPT elsewhere on the wiki means probabilistic polynomial time - a name collision the migration inherits.
- Duplicates bounded-error-quantum-polynomial-time.md:29 sub-edge 1 and quantum-classical-merlin-arthur.md:25 sub-edge 2.
- Purely classical link, so the parent's model 'quantum' does not apply here.
- Duplicates probabilistic-polynomial-time.md:18 sub-edge 1 and bounded-error-quantum-polynomial-time.md:29 sub-edge 1.
- Model differs from the parent record: the parent is typed model:'quantum', but this link involves no quantum computation at all; splitting without re-typing would mark a classical containment as quantum.
- Uncited and unlabelled (textbook fact, no '— standard' marker).
