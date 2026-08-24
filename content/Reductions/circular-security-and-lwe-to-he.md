---
type: reduction
status: stub
title: "Circular security + LWE ⇒ HE"
aliases: []
id: red-circular-security-and-lwe-to-he
kind: implication
hypotheses: [circular-security, lwe]
conclusion: he
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Circular security + LWE ⇒ HE

[[circular-security|Circular security]] together with [[learning-with-errors|LWE]] implies [[homomorphic-encryption|HE]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> **Fully homomorphic encryption (FHE)** is an interesting case: it is not known to follow from TDPs alone. Current constructions all rely on lattice assumptions ([[learning-with-errors|LWE]] with circular security). Whether FHE follows from Cryptomania (TDPs) is a major open problem.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (Gen09 / BV11 / BGV12 absent).
- Genuinely conjunctive: {LWE, circular security} => FHE. "circular-security" has no wiki page.
- Conclusion is FHE specifically; the nearest page is content/Primitives/homomorphic-encryption.md, and neither LWE nor HE is wikilinked in this sentence except `[[learning-with-errors|LWE]]`.
- "Current constructions all rely on lattice assumptions" is an absolute claim that ignores FHE from iO and from NTRU-style assumptions. Recorded, not fixed.
