---
type: reduction
status: stub
title: "IND-CCA security ⇒ IND-CPA KEM"
aliases: []
id: red-ind-cca-security-to-ind-cpa-kem
kind: implication
hypotheses: [ind-cca-kem]
conclusion: ind-cpa-kem
class: unstated
model: standard
source: folklore
security-loss: ""
---

# IND-CCA security ⇒ IND-CPA KEM

[[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]] implies [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]].

## Statement

Migrated verbatim from [[key-encapsulation-mechanism]] § IND-CPA KEM:

> A weaker KEM where the adversary has no decapsulation oracle. Sufficient for passive adversaries.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Variation section; the implication CCA => CPA is implicit, never asserted. No citation.
- Security notions, not pages.
