---
type: barrier
status: stub
title: "No reduction from IPPE to ABE"
aliases: []
id: bar-ippe-to-abe
hypotheses: [ippe]
conclusion: abe
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from IPPE to ABE

A reduction of class `unstated` from [[inner-product-predicate-encryption|IPPE]] to [[attribute-based-encryption|ABE]] would imply a contradiction.

## Statement

Migrated verbatim from [[inner-product-predicate-encryption]] § Other results:

> - IPPE is incomparable to [[attribute-based-encryption|KP-ABE and CP-ABE]]: IPPE achieves full attribute-hiding but only captures inner-product predicates, while KP/CP-ABE supports arbitrary monotone Boolean formulas but leaks the access policy

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'incomparable' is an informal expressiveness comparison, not a proven separation in either direction; typed as a separation only because there is nowhere better to put it.
- No citation.
- Wikilink `[[attribute-based-encryption|KP-ABE and CP-ABE]]` bundles two objects into one link target.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — "incomparable" is an expressiveness remark that sets a security notion (attribute hiding) against a functionality (predicate class), and no result rules out a reduction in either direction, so there is no hyperedge to source. The [[inner-product-predicate-encryption|IPPE]] page's own intro contradicts the barrier reading: inner-product encodings capture disjunctions and CNF/DNF formulas at a parameter cost ([[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]). See [[ippe-to-payload-only-hiding]] and [[attribute-hiding-security-to-payload-hiding-security]].
