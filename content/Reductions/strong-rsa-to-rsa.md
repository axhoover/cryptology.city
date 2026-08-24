---
type: reduction
status: stub
title: "Strong RSA ⇒ RSA"
aliases: []
id: red-strong-rsa-to-rsa
kind: implication
hypotheses: [strong-rsa-assumption]
conclusion: rsa
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Strong RSA ⇒ RSA

[[rsa-assumption#strong-rsa|Strong RSA]] implies [[rsa-assumption|RSA]].

## Statement

Migrated verbatim from [[factoring]] § Strong RSA assumption:

> The strong RSA assumption requires that it is hard to compute any $e$-th root of a random group element for an adversarially chosen $e > 1$, not just a fixed $e$. This is a stronger assumption than standard RSA.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Only stronger assumption than standard RSA is stated; the implication (strong RSA hardness implies RSA hardness) is left implicit.
- No citation (BP97 / FO97 missing).
- strong-rsa-assumption has no page of its own.
