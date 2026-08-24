---
type: reduction
status: stub
title: "IPPE ⇒ Payload-only hiding"
aliases: []
id: red-ippe-to-payload-only-hiding
kind: implication
hypotheses: [ippe]
conclusion: payload-hiding-ippe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# IPPE ⇒ Payload-only hiding

[[inner-product-predicate-encryption|IPPE]] implies [[inner-product-predicate-encryption#payload-only-hiding|Payload-only hiding]].

## Statement

Migrated verbatim from [[inner-product-predicate-encryption]] § Payload-only hiding:

> Dropping the attribute-hiding requirement yields a simpler **payload-hiding** variant: the adversary commits to a single $x^*$ and submits two messages, with the constraint that no queried $v$ satisfies $\langle v, x^* \rangle = 0 \pmod p$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Variation section: attribute-hiding => payload-hiding is implicit, never asserted, uncited.
- No slug for the payload-hiding variant.
