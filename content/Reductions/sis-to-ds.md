---
type: reduction
status: stub
title: "SIS ⇒ DS"
aliases: []
id: red-sis-to-ds
kind: implication
hypotheses: [sis]
conclusion: ds
class: unstated
model: standard
source: folklore
security-loss: ""
---

# SIS ⇒ DS

[[shortest-integer-solution|SIS]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[shortest-integer-solution]] § Shortest Integer Solution:

> The _Shortest Integer Solution (SIS)_ problem is a lattice problem used as the hardness foundation for collision-resistant hash functions and lattice-based signature schemes. Unlike [[learning-with-errors|LWE]], which is an indistinguishability problem, SIS is a search problem.

Migrated verbatim from [[digital-signature]] § Lattice-based signatures:

> - **GPV signatures**: hash-and-sign paradigm using trapdoor lattice sampling; security in the ROM from SIS — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Intro sentence packs two applications (CRHF, lattice-based signatures) with no citation on either; both are cited later, at lines 48 and 60. Recorded separately.
- Duplicates the ISIS-based claim at line 60, which is where the citation lives; the intro attributes it to SIS rather than ISIS.
- MISUSED FOLKLORE FLAG: labelled '— standard', but GPV signatures have a canonical citation (Gentry-Peikert-Vaikuntanathan, STOC 2008) that is simply missing from content/References/. CLAUDE.md says 'obvious to a working cryptographer' is not folklore.
- `[[shortest-integer-solution]]` and `[[random-oracle-model]]` exist but are not wikilinked.
