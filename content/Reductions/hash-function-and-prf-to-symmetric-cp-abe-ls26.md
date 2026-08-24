---
type: reduction
status: draft
title: "Hash function + PRF ⇒ Symmetric CP-ABE"
aliases: []
id: red-hash-function-and-prf-to-symmetric-cp-abe-ls26
kind: implication
hypotheses: [hash-function, prf]
conclusion: symmetric-cp-abe
class: unstated
model: standard
source:
  - "[[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]]"
security-loss: ""
---

# Hash function + PRF ⇒ Symmetric CP-ABE

[[hash-function|Hash function]] together with [[pseudorandom-function|PRF]] implies [[attribute-based-encryption#symmetric-cp-abe|Symmetric CP-ABE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - Symmetric CP-ABE, where also the encryptor must hold attributes satisfying the ciphertext policy, admits an IND-CCA2-secure open-universe construction from collision-resistant hash functions and a $\PRF$, with no bilinear map or lattice hardness assumption — [[LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions|LS26]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- GENUINELY CONJUNCTIVE: {collision-resistant hash function, PRF} => symmetric CP-ABE. Must not be split into two separate single-hypothesis reductions.
- The conjunction is arguably redundant (CRHF => OWF => PRF), so a normalizing migration might collapse it; recorded as stated.
- 'collision-resistant hash functions' is bare prose — `[[hash-function]]` (which carries the CRH alias) is not wikilinked.
- Conclusion 'symmetric-cp-abe' has no slug; it is defined only in the '## Symmetric CP-ABE' Variations section of this page.
