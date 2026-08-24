---
type: reduction
status: stub
title: "Strong RSA ⇒ COM"
aliases: []
id: red-strong-rsa-to-com
kind: implication
hypotheses: [strong-rsa]
conclusion: com
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Strong RSA ⇒ COM

[[rsa-assumption#strong-rsa|Strong RSA]] implies [[commitment-scheme|COM]].

## Statement

Migrated verbatim from [[rsa-assumption]] § Strong RSA:

> The **strong RSA assumption** strengthens the standard assumption by allowing the adversary to choose the exponent $e$ itself (subject to $e > 1$). Formally, the adversary outputs a pair $(\hat{x}, \hat{e})$ with $\hat{e} > 1$ and $\hat{x}^{\hat{e}} \equiv y \pmod{n}$. This is used in constructions of signature schemes and commitments with stronger security guarantees.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- content/Primitives/commitment-scheme.md exists but "commitments" is left as plain text with no wikilink.
