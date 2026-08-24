---
type: reduction
status: stub
title: "CDH ⇒ DDH"
aliases: []
id: red-cdh-to-ddh
kind: implication
hypotheses: [cdh]
conclusion: ddh
class: unstated
model: standard
source: folklore
security-loss: ""
---

# CDH ⇒ DDH

[[computational-diffie-hellman|CDH]] implies [[decisional-diffie-hellman|DDH]].

## Statement

Migrated verbatim from [[decisional-diffie-hellman]] § Decisional Diffie-Hellman:

> The _Decisional Diffie-Hellman (DDH)_ assumption is a central assumption in cryptography, and one of the first used to construct key exchange [[DH76 - New Directions in Cryptography|DH76]]. It is implied by the [[computational-diffie-hellman|CDH]] assumption. In other words, an adversary which can solve the CDH problem can also solve DDH in the same group.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR: It is implied by the CDH assumption is backwards — DDH hardness implies CDH hardness, not the reverse. The very next sentence (an adversary solving CDH also solves DDH) states the correct relation and contradicts it.
- Uncited.
- computational-diffie-hellman.md line 12 contains the mirrored version of the same confusion.
