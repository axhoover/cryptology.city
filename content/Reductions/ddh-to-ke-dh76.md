---
type: reduction
status: draft
title: "DDH ⇒ KE"
aliases: []
id: red-ddh-to-ke-dh76
kind: implication
hypotheses: [ddh]
conclusion: ke
class: unstated
model: standard
source:
  - "[[DH76 - New Directions in Cryptography|DH76]]"
security-loss: ""
---

# DDH ⇒ KE

[[decisional-diffie-hellman|DDH]] implies [[key-exchange|KE]].

## Statement

Migrated verbatim from [[decisional-diffie-hellman]] § Decisional Diffie-Hellman:

> The _Decisional Diffie-Hellman (DDH)_ assumption is a central assumption in cryptography, and one of the first used to construct key exchange [[DH76 - New Directions in Cryptography|DH76]]. It is implied by the [[computational-diffie-hellman|CDH]] assumption. In other words, an adversary which can solve the CDH problem can also solve DDH in the same group.

Migrated verbatim from [[key-exchange]] § Other results:

> - Diffie-Hellman key exchange from [[decisional-diffie-hellman|DDH]] — [[DH76 - New Directions in Cryptography|DH76]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- DH76 predates the DDH assumption; the attribution is historical rather than a security reduction proved in that paper.
- No security notion is stated for the resulting key exchange (passive security under DDH).
- Anachronistic attribution: DH76 predates the formalization of DDH; the DDH-based security proof is much later. Report only.
- Conclusion should arguably be NIKE, not general KE.
