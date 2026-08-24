---
type: reduction
status: draft
title: "SIS ⇒ Hash function"
aliases: []
id: red-sis-to-hash-function-ajt96
kind: implication
hypotheses: [sis]
conclusion: hash-function
class: unstated
model: standard
source:
  - "[[Ajt96 - Generating hard instances of lattice problems|Ajt96]]"
security-loss: ""
---

# SIS ⇒ Hash function

[[shortest-integer-solution|SIS]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[shortest-integer-solution]] § Shortest Integer Solution:

> The _Shortest Integer Solution (SIS)_ problem is a lattice problem used as the hardness foundation for collision-resistant hash functions and lattice-based signature schemes. Unlike [[learning-with-errors|LWE]], which is an indistinguishability problem, SIS is a search problem.

Migrated verbatim from [[shortest-integer-solution]] § Collision-resistant hash functions:

> The function family $\{f_\mathbf{A} : \mathbf{z} \mapsto \mathbf{Az} \bmod q\}$, restricted to inputs $\mathbf{z} \in \{0, \ldots, \lfloor \beta/2 \rfloor\}^m$, is a [[collision-resistant-hash-function|collision-resistant hash function]] family under SIS hardness — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. Any collision $f_\mathbf{A}(\mathbf{z}) = f_\mathbf{A}(\mathbf{z}')$ with $\mathbf{z} \neq \mathbf{z}'$ yields $\mathbf{A}(\mathbf{z} - \mathbf{z}') = \mathbf{0} \pmod q$ with $\|\mathbf{z} - \mathbf{z}'\| \leq \beta$, which is exactly a SIS solution.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Intro sentence packs two applications (CRHF, lattice-based signatures) with no citation on either; both are cited later, at lines 48 and 60. Recorded separately.
- Duplicates the cited claim at line 48.
- BROKEN-ISH WIKILINK: `[[collision-resistant-hash-function|...]]` has no page of that name. It resolves only through the alias "Collision-resistant hash function" on content/Primitives/hash-function.md — a page that ALSO carries the aliases OWF and One-way function, so the link lands on a node that conflates CRHF with OWF.
- SUSPECTED NORM ERROR (report only): with inputs in {0,...,floor(beta/2)}^m the difference z - z′ has entries in [-beta/2, beta/2], so ||z - z′|| <= beta holds for the L-infinity norm. The game defined at line 27 of this page writes ||z|| <= beta without naming a norm, and under the usual L2 reading the bound would be (beta/2)sqrt(m), not beta.
