---
type: reduction
status: stub
title: "DLIN ⇒ IPPE"
aliases: []
id: red-dlin-to-ippe-ksw08
kind: implication
hypotheses: [decisional-linear]
conclusion: ippe
class: unstated
model: standard
source:
  - "[[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]"
security-loss: ""
---

# DLIN ⇒ IPPE

[[decisional-diffie-hellman#dlin|DLIN]] implies [[inner-product-predicate-encryption|IPPE]].

## Statement

Migrated verbatim from [[inner-product-predicate-encryption]] § Other results:

> - KSW08 introduced IPPE and showed that inner products encode disjunctions, polynomial equations, and CNF/DNF formulas; the scheme is proved attribute-hiding under the decisional linear assumption — [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECT: KSW08 proves security in composite-order bilinear groups under two new (non-standard) subgroup-decision-flavoured assumptions, not under 'the decisional linear assumption'. Report only; do not fix.
- 'the decisional linear assumption' is bare text with no wikilink and no page exists for it.
- Bullet packs a construction claim, an expressiveness claim, and a security claim together; only one can be typed as a reduction.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — KSW08 prove selective attribute-hiding in composite-order bilinear groups under two new subgroup-decision-style assumptions, justified only in the generic bilinear group model, not under DLIN. DLIN-based attribute-hiding inner-product encryption is Okamoto–Takashima (EUROCRYPT 2012); re-source the edge to KSW08's assumptions or re-attribute it.
