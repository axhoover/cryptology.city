---
type: reduction
status: draft
title: "GapSVP ⇒ LWE"
aliases: []
id: red-gapsvp-to-lwe-reg05
kind: implication
hypotheses: [gapsvp]
conclusion: lwe
class: unstated
model: standard
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: ""
---

# GapSVP ⇒ LWE

[[shortest-vector-problem|GapSVP]] implies [[learning-with-errors|LWE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Reduction to lattice problems:

> The hardness of LWE rests on worst-case lattice problems via a quantum reduction — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]:
>
> - Solving decision (or search) LWE on a noticeable fraction of inputs is at least as hard as quantum-approximating the **Shortest Vector Problem (GapSVP)** and the **Shortest Independent Vectors Problem (SIVP)** to within polynomial factors in the worst case

Migrated verbatim from [[learning-with-errors]] § Reduction to lattice problems:

> - Classical reductions (without quantum steps) are known for certain parameter regimes — see subsequent work by Peikert

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- This bullet packs TWO independent worst-case-to-average-case reductions (from GapSVP and from SIVP). They are disjunctive, not conjunctive, and are recorded as two separate records with the same verbatim.
- GapSVP has no wiki page; identifier is ad hoc.
- Verbatim range includes line 84 because the Reg05 citation sits on the lead-in sentence, not on the bullet.
- Cited only as "see subsequent work by Peikert" — no wikilink, no reference page. CLAUDE.md requires a citation for a claim of this kind.
- Parameter regimes left entirely unspecified ("certain parameter regimes"), so the edge cannot be parameterized.
- The target worst-case problem is not restated on this bullet.
