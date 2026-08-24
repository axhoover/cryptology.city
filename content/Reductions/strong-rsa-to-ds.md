---
type: reduction
status: stub
title: "Strong RSA ⇒ DS"
aliases: []
id: red-strong-rsa-to-ds
kind: implication
hypotheses: [strong-rsa]
conclusion: ds
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Strong RSA ⇒ DS

[[rsa-assumption#strong-rsa|Strong RSA]] implies [[digital-signature|DS]].

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

- No citation (Cramer-Shoup; Gennaro-Halevi-Rabin).
- content/Primitives/digital-signature.md exists but "signature schemes" is left as plain text with no wikilink.
- "with stronger security guarantees" is vague — presumably standard-model EUF-CMA without random oracles, but the page does not say so.
