---
type: reduction
status: stub
title: "ABE ⇒ HIBE"
aliases: []
id: red-abe-to-hibe
kind: implication
hypotheses: [abe]
conclusion: hibe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# ABE ⇒ HIBE

[[attribute-based-encryption|ABE]] implies [[hierarchical-identity-based-encryption|HIBE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - ABE (KP-ABE) subsumes [[hierarchical-identity-based-encryption|HIBE]]: tree-structured delegation can be expressed as a depth-bounded formula, though KP-ABE does not expose a native $\Delegate$ algorithm

Migrated verbatim from [[hierarchical-identity-based-encryption]] § Other results:

> - HIBE is subsumed by [[attribute-based-encryption|KP-ABE]]: a tree access policy can encode hierarchical delegation, but KP-ABE does not natively expose a $\Delegate$ interface for producing fresh delegated keys

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- The bullet undercuts its own claim: HIBE's defining syntax includes a $\Delegate$ algorithm, and the bullet concedes KP-ABE has none — so 'subsumes' is at best partial (it captures HIBE's decryption relation, not HIBE's syntax/security).
- $\Delegate$ is used as a macro but is not in the required/available macro list in CLAUDE.md — possible undefined macro.
- Self-undercutting bullet: claims KP-ABE subsumes HIBE, then says KP-ABE 'does not natively expose a Delegate interface' - so it is unclear whether a real reduction to the HIBE syntax is being claimed.
- Wikilink `[[attribute-based-encryption|KP-ABE]]` targets the combined ABE page; KP-ABE has no page of its own.
