---
type: reduction
status: stub
title: "QSZK ⊆ QIP"
aliases: []
id: red-qszk-to-qip
kind: inclusion
hypotheses: [qszk]
conclusion: qip
class: free
model: quantum
source: folklore
security-loss: ""
---

# QSZK ⊆ QIP

[[quantum-statistical-zero-knowledge|QSZK]] is contained in [[quantum-interactive-proofs|QIP]].

## Statement

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

- Uncited (the whole bullet carries no citation).
- QIP is not wikilinked although content/Complexity/quantum-interactive-proofs.md exists.
