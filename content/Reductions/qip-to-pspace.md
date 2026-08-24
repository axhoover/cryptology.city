---
type: reduction
status: stub
title: "QIP = PSPACE"
aliases: []
id: red-qip-to-pspace
kind: equivalence
hypotheses: [qip]
conclusion: pspace
class: free
model: quantum
source: folklore
security-loss: ""
---

# QIP = PSPACE

[[quantum-interactive-proofs|QIP]] is equal to [[polynomial-space|PSPACE]].

## Statement

Migrated verbatim from [[quantum-interactive-proofs]] § Known relationships:

> - **$\classQIP = \classPSPACE$** — TODO citation (Jain, Ji, Upadhyay, Watrous 2010). Since $\classIP = \classPSPACE$ as well, quantum interactive proofs are no more powerful than classical interactive proofs. This is a striking collapse: quantum communication between prover and verifier adds no power to multi-round interactive proofs.

Migrated verbatim from [[quantum-statistical-zero-knowledge]] § Known relationships:

> - $\classQSZK \subseteq \classQIP = \classPSPACE$: quantum statistical zero-knowledge is contained in quantum interactive proofs, which equals PSPACE.

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

- MISSING CITATION: 'TODO citation (Jain, Ji, Upadhyay, Watrous 2010)' with no reference page linked.
- TYPING LOSS: the equality reads as a one-way inclusion once split.
- TYPING LOSS (the defect this task targets): the parent's '=' becomes a one-way sub-edge, so QIP = PSPACE would migrate as QIP subset PSPACE and the hard direction (PSPACE subset QIP is the easy one; QIP subset PSPACE is Jain-Ji-Upadhyay-Watrous) is silently dropped.
- Uncited here; the same equality is marked with a TODO citation at content/Complexity/quantum-interactive-proofs.md:22.
