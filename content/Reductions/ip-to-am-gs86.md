---
type: reduction
status: draft
title: "IP ⊆ AM"
aliases: []
id: red-ip-to-am-gs86
kind: inclusion
hypotheses: [ip]
conclusion: am
class: free
model: standard
source:
  - "[[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]"
security-loss: ""
---

# IP ⊆ AM

[[interactive-proof-systems|IP]] is contained in [[arthur-merlin|AM]].

## Statement

Migrated verbatim from [[arthur-merlin]] § Arthur-Merlin:

> Also, the result of [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] can then be stated as follows: [[interactive-proof-systems|IP]][k] is contained in AM[k+2] for every k (constant or non-constant).

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Round-indexed variants IP[k] and AM[k+2] have no slugs; the record maps them onto the base-class pages, losing the round parameter.
