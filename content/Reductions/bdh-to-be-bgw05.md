---
type: reduction
status: draft
title: "BDH ⇒ BE"
aliases: []
id: red-bdh-to-be-bgw05
kind: implication
hypotheses: [bdh]
conclusion: be
class: unstated
model: standard
source:
  - "[[BGW05 - Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys|BGW05]]"
security-loss: ""
---

# BDH ⇒ BE

[[bilinear-map-assumptions|BDH]] implies [[broadcast-encryption|BE]].

## Statement

Migrated verbatim from [[broadcast-encryption]] § Other results:

> - BGW05 achieves $O(1)$ ciphertext size (independent of $|S|$ or $n$) under a bilinear Diffie-Hellman variant — [[BGW05 - Collusion Resistant Broadcast Encryption with Short Ciphertexts and Private Keys|BGW05]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'a bilinear Diffie-Hellman variant' is vague and unlinked — BGW05 relies on the bilinear Decisional Diffie-Hellman Exponent (BDHE) assumption, which has no page.
- Efficiency claim without qualification: BGW05's $O(1)$ ciphertext comes with $O(n)$-size public parameters, which the bullet omits (CLAUDE.md requires concrete efficiency claims to be precise and cited).
