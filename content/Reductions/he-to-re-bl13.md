---
type: reduction
status: draft
title: "HE ⇒ RE"
aliases: []
id: red-he-to-re-bl13
kind: implication
hypotheses: [he]
conclusion: rerandomizable-encryption
class: unstated
model: standard
source:
  - "[[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]"
security-loss: ""
---

# HE ⇒ RE

[[homomorphic-encryption|HE]] implies [[rerandomizable-encryption|RE]].

## Statement

Migrated verbatim from [[homomorphic-encryption]] § Other results:

> - HE → rerandomizable encryption → [[statistical-zero-knowledge|SZK]] $\ne$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'rerandomizable-encryption' has no wiki page.
- The arrow is really an observation that (certain) HE schemes are rerandomizable; as an unqualified implication it is stronger than BL13 claims.
- The hypothesis node homomorphic-encryption also owns FHE via aliasing, so the edge cannot distinguish which flavour of HE is required.
- Composite chain 'HE -> rerandomizable encryption -> SZK != BPP'; must be split into two links.
- Conclusion is a complexity claim (SZK != BPP), so this is a barrier, not a construction.
- No object identifier for 'rerandomizable encryption' (no page).
- The bullet omits the actual barrier framing of BL13 (limits on black-box/reduction-based proofs of security for HE), so the arrow direction is easy to misread. Report only.
