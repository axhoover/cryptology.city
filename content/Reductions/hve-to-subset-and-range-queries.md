---
type: reduction
status: stub
title: "HVE ⇒ Subset and range queries"
aliases: []
id: red-hve-to-subset-and-range-queries
kind: implication
hypotheses: [hve]
conclusion: range-query-encryption
class: unstated
model: standard
source: folklore
security-loss: ""
---

# HVE ⇒ Subset and range queries

[[hidden-vector-encryption|HVE]] implies [[hidden-vector-encryption#subset-and-range-queries|Subset and range queries]].

## Statement

Migrated verbatim from [[hidden-vector-encryption]] § Hidden vector encryption:

> The same framework supports subset queries and range queries (via bit decomposition).

Migrated verbatim from [[hidden-vector-encryption]] § Subset and range queries:

> The BW07 paper also formalizes subset predicates (is $x_i \in T_i$ for some set $T_i$?) and range predicates (is $a_i \le x_i \le b_i$?) within the same framework via encodings into inner products. Range predicates are handled by a bit decomposition of $x_i$ and $a_i, b_i$, reducing the range check to a conjunction over single-bit comparisons.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation in the intro (the same claim is attributed to BW07 at line 99).
- Two conclusions bundled (subset queries, range queries); neither has a page or slug.
- 'The BW07 paper' is a bare-text citation with no wikilink, though the reference page exists and is linked correctly at line 104 — so 'sources' is recorded as empty even though a citation is clearly intended.
- Two conclusions bundled (subset predicates, range predicates), neither with a slug.
- The relation is really 'inner-product encodings => subset/range queries', which routes through `[[inner-product-predicate-encryption]]`, unlinked here.
