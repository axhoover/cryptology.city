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
