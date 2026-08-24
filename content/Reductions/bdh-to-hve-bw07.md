---
type: reduction
status: draft
title: "BDH ⇒ HVE"
aliases: []
id: red-bdh-to-hve-bw07
kind: implication
hypotheses: [bdh]
conclusion: hve
class: unstated
model: standard
source:
  - "[[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]]"
security-loss: ""
---

# BDH ⇒ HVE

[[bilinear-map-assumptions|BDH]] implies [[hidden-vector-encryption|HVE]].

## Statement

Migrated verbatim from [[hidden-vector-encryption]] § Other results:

> - BW07 introduced HVE and gave constructions for conjunctive, subset, and range queries, proved attribute-hiding under the decisional bilinear Diffie-Hellman and decisional linear assumptions — [[BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption|BW07]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- GENUINELY CONJUNCTIVE: {decisional bilinear Diffie-Hellman, decisional linear} together. But both map to the single page content/Assumptions/bilinear-map-assumptions.md (aliases BDDH and DLIN), so the conjunction collapses to one hypothesis node in the current wiki.
- SURPRISING WIKILINK TARGET: the filename 'BW07 - Conjunctive Normal Form Encryption and Attribute Based Encryption' does not match the paper — that reference page's own H1 and BibTeX give 'Conjunctive, Subset, and Range Queries on Encrypted Data' (Boneh-Waters, TCC 2007, eprint 2006/465).
- Neither assumption is wikilinked.
- REPAIR PATCH: Arity sweep. Wiki L104: "... proved attribute-hiding under the decisional bilinear Diffie-Hellman and decisional linear assumptions — `[[BW07]]`". GENUINE CONJUNCTION: BW07 needs both assumptions together; "and" here joins two assumptions used in one proof, not two alternative constructions. The extractor collapsed both onto the single page slug bilinear-map-assumptions, leaving arity 1 with conjunctive:true. Repair: hypotheses ["bddh","dlin"], conjunctive:true — both strings are declared aliases in the frontmatter of content/Assumptions/bilinear-map-assumptions.md (lines 5 and 7), so neither slug is invented. Recorded: both aliases currently resolve to the SAME page, so until DBDH and DLIN get separate nodes this conjunction has two parallel edges to one node.
