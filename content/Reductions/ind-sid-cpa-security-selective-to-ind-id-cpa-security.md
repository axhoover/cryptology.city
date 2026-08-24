---
type: reduction
status: stub
title: "IND-sID-CPA Security (Selective) ⇒ IND-ID-CPA Security"
aliases: []
id: red-ind-sid-cpa-security-selective-to-ind-id-cpa-security
kind: implication
hypotheses: [ind-sid-cpa]
conclusion: ind-id-cpa
class: unstated
model: standard
source: folklore
security-loss: ""
---

# IND-sID-CPA Security (Selective) ⇒ IND-ID-CPA Security

[[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]] implies [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]].

## Statement

Migrated verbatim from [[identity-based-encryption]]:

> is negligible. Any IND-ID-CPA-secure scheme is also IND-sID-CPA-secure; the converse requires a complexity-leveraging argument that incurs a polynomial security loss in $|\calI|$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECT MATH: 'the converse requires a complexity-leveraging argument that incurs a polynomial security loss in |I|'. Complexity leveraging loses a factor of |I|, which is exponential in the identity length - describing it as a 'polynomial security loss' is at best misleading and reads as an error. Report only; do not fix.
- Complexity leveraging also requires sub-exponential hardness, which is not stated as a hypothesis.
- No citation.
