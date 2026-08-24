---
type: reduction
status: stub
title: "IND-ID-CPA Security ⇒ IND-sID-CPA Security (Selective)"
aliases: []
id: red-ind-id-cpa-security-to-ind-sid-cpa-security-selective
kind: implication
hypotheses: [ind-id-cpa]
conclusion: ind-sid-cpa
class: unstated
model: standard
source: folklore
security-loss: ""
---

# IND-ID-CPA Security ⇒ IND-sID-CPA Security (Selective)

[[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA Security]] implies [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA Security (Selective)]].

## Statement

Migrated verbatim from [[identity-based-encryption]]:

> In the **selective** variant, the adversary must commit to the challenge identity $\mathit{id}^*$ before the public parameters are generated. This is a strictly weaker notion than adaptive IND-ID-CPA.

Migrated verbatim from [[identity-based-encryption]]:

> is negligible. Any IND-ID-CPA-secure scheme is also IND-sID-CPA-secure; the converse requires a complexity-leveraging argument that incurs a polynomial security loss in $|\calI|$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'strictly weaker' asserts both an implication and a separation; no citation for either.
- Security notions, not wiki pages - no slugs.
- No citation (this is folklore but carries no '- standard' label, contrary to the folklore policy in CLAUDE.md).
