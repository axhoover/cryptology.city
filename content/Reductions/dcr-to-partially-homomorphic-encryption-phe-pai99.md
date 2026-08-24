---
type: reduction
status: draft
title: "DCR ⇒ Partially homomorphic encryption (PHE)"
aliases: []
id: red-dcr-to-partially-homomorphic-encryption-phe-pai99
kind: implication
hypotheses: [dcr]
conclusion: additively-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]"
security-loss: ""
---

# DCR ⇒ Partially homomorphic encryption (PHE)

[[decisional-composite-residuosity|DCR]] implies [[homomorphic-encryption#partially-homomorphic-encryption-phe|Partially homomorphic encryption (PHE)]].

## Statement

Migrated verbatim from [[homomorphic-encryption]]:

> Supports homomorphism over a restricted class: only additions (e.g., Paillier from [[decisional-composite-residuosity|DCR]]) or only multiplications (e.g., unpadded RSA), but not both.

Migrated verbatim from [[homomorphic-encryption]] § Other results:

> - Additively homomorphic encryption from [[decisional-composite-residuosity|DCR]] — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on this line (Pai99 is cited only at line 63).
- Bullet packs two independent (disjunctive) claims - Paillier from DCR and unpadded RSA - which must be split into separate reductions.
- No wiki slug for 'additively homomorphic encryption' as an object.
