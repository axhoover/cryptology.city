---
type: reduction
status: stub
title: "IP ⊆ QIP"
aliases: []
id: red-ip-to-qip
kind: inclusion
hypotheses: [ip]
conclusion: qip
class: free
model: quantum
source: folklore
security-loss: ""
---

# IP ⊆ QIP

[[interactive-proof-systems|IP]] is contained in [[quantum-interactive-proofs|QIP]].

## Statement

Migrated verbatim from [[quantum-interactive-proofs]] § Known relationships:

> - $\classIP \subseteq \classQIP$: classical interactive proofs are a special case (restrict messages to classical strings).

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

- No citation (arguably folklore, but the page does not use the '— standard'/'— folklore' label).
