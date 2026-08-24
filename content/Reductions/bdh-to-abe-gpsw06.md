---
type: reduction
status: draft
title: "BDH ⇒ ABE"
aliases: []
id: red-bdh-to-abe-gpsw06
kind: implication
hypotheses: [bdh]
conclusion: abe
class: unstated
model: standard
source:
  - "[[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]]"
  - "[[Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover|Wat11]]"
  - "[[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]"
security-loss: ""
---

# BDH ⇒ ABE

[[bilinear-map-assumptions|BDH]] implies [[attribute-based-encryption|ABE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - GPSW06 introduced KP-ABE and gave the first construction for monotone formulas, proving selective security under DBDH — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]]

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - Wat11 gave the first CP-ABE with a standard-model proof of selective security under DBDH — [[Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover|Wat11]]

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - The dual system encryption technique of Wat09 gives adaptively secure IBE, HIBE, and ABE under simple pairing-based assumptions — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- DBDH is named in bare prose with no wikilink; the assumption lives on content/Assumptions/bilinear-map-assumptions.md, whose aliases include 'BDDH' but NOT 'DBDH', so the obvious wikilink would not resolve.
- Conclusion is selectively secure KP-ABE, not full ABE — the security notion is part of the conclusion and has no node in the model.
- SURPRISING WIKILINK TARGET: the reference filename says 'Ciphertext-Policy Attribute-Based Encryption from Subset Cover', but that reference page's own H1 and BibTeX title the paper 'Ciphertext-Policy Attribute-Based Encryption: An Expressive, Efficient, and Provably Secure Realization' (PKC 2011, eprint 2008/290). The filename appears to be wrong.
- DBDH named in bare prose with no wikilink (see line 173).
- SUSPECTED OVER-ATTRIBUTION (reported, not corrected): Wat09's title and results cover IBE and HIBE; adaptively secure ABE via dual system encryption is Lewko-Okamoto-Sahai-Takashima-Waters 2010, which has no reference page. The bullet attaches ABE to the wrong citation.
- Same umbrella-hypothesis problem as the other two sub-edges.
- Multi-conclusion bullet (IBE, HIBE, ABE) rather than a chain — must still be split into three reductions, one per conclusion. 'isComposite' is used here in that sense.
- 'simple pairing-based assumptions' is vague and unlinked (Wat09 uses decisional bilinear Diffie-Hellman and decisional linear); the hypothesis cannot be pinned to a specific assumption node.
- IBE and HIBE targets are not wikilinked on this bullet even though both pages exist.
