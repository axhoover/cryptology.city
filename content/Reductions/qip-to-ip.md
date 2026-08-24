---
type: reduction
status: stub
title: "QIP = IP"
aliases: []
id: red-qip-to-ip
kind: equivalence
hypotheses: [qip]
conclusion: ip
class: free
model: quantum
source: folklore
security-loss: ""
---

# QIP = IP

[[quantum-interactive-proofs|QIP]] is equal to [[interactive-proof-systems|IP]].

## Statement

Migrated verbatim from [[quantum-interactive-proofs]] § Known relationships:

> - **$\classQIP = \classPSPACE$** — TODO citation (Jain, Ji, Upadhyay, Watrous 2010). Since $\classIP = \classPSPACE$ as well, quantum interactive proofs are no more powerful than classical interactive proofs. This is a striking collapse: quantum communication between prover and verifier adds no power to multi-round interactive proofs.

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

- Derived from the two equalities rather than independently proved; nothing marks it as derived.
- Uncited.
- The sentence carrying it ('This is a striking collapse ...') is editorializing, a house-style anti-pattern.
