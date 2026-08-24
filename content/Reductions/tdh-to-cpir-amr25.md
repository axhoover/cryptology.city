---
type: reduction
status: draft
title: "TDH ⇒ cPIR"
aliases: []
id: red-tdh-to-cpir-amr25
kind: implication
hypotheses: [tdh]
conclusion: cpir
class: unstated
model: standard
source:
  - "[[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]"
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# TDH ⇒ cPIR

[[trapdoor-hash-function|TDH]] implies [[single-server-private-information-retrieval|cPIR]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - Low-noise LPN with $\varepsilon = \log^{1+\beta} k / k$, where $0 < \beta < 1$, is known to imply [[single-server-private-information-retrieval|PIR]] with slightly sublinear communication $N/2^{\Theta(\log^{1-\beta} N)}$ (through the use of [[trapdoor-hash-function|TDH]]) — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]
>   - Fully sublinear PIR from any flavor of LPN is open.

Migrated verbatim from [[single-server-private-information-retrieval]] § Constructions:

> - PIR with $\polylog(n)$ bandwidth can be built from [[decisional-diffie-hellman|DDH]], QR, or [[learning-with-errors|LWE]] — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]
>   - This result goes through the use of [[trapdoor-hash-function|TDH]], which can be used to build PIR generically

Migrated verbatim from [[single-server-private-information-retrieval]] § Constructions:

> - This result goes through the use of [[trapdoor-hash-function|TDH]], which can be used to build PIR generically

## Notes

This relation is stated on 5 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The concrete communication bound N/2^Theta(log^(1-beta) N) attaches to this link but has no representation in the model.
- The page attaches its single citation to the whole bullet and never says which of the two links AMR25 contributes; the generic TDH-to-sublinear-PIR compiler is not original to AMR25, so the citation may be misattributed here.
- Two-step construction (through the use of TDH) must be split.
- The concrete communication bound attaches to the conclusion object rather than to the reduction.
- The nested sub-bullet states an open problem and is recorded separately.
- The noise parameter (epsilon = log^(1+beta) k / k) cannot be carried by the hypothesis identifier.
- IDENTICAL sub-edge in all three disjunctive branch records (DDH, QR, LWE) for line 149 — three copies of one edge; migration must dedupe.
- The polylog(n) bandwidth qualifier is a quantitative property the edge cannot carry.
- Stated on the sub-bullet ('TDH ... can be used to build PIR generically'), so it is an independent claim that also deserves a record of its own rather than only appearing inside the DDH chain.
- DISJUNCTIVE bullet: DDH, QR, or LWE are three separate reductions — split into three records; this is the DDH branch.
- COMPOSITE: the sub-bullet says the construction routes through trapdoor hash functions, so each branch is a two-link chain (assumption => TDH => PIR).
- The $\polylog(n)$ bandwidth qualifier is a quantitative property the edge cannot carry.
- Stated on the sub-bullet ('TDH ... can be used to build PIR generically'), so it is an independent claim that also deserves a record of its own rather than only appearing inside the QR chain.
- QR branch of the disjunction.
- 'QR' is written as bare text with NO wikilink even though content/Assumptions/quadratic-residuosity.md exists — a reference-fixer-lane defect.
- Stated on the sub-bullet ('TDH ... can be used to build PIR generically'), so it is an independent claim that also deserves a record of its own rather than only appearing inside the LWE chain.
- LWE branch of the disjunction.
- The sub-bullet's own claim ('TDH ... can be used to build PIR generically') is an independent edge TDH => PIR that also deserves its own record at migration time.
- Added by the Task-B repair pass. The clause "which can be used to build PIR generically" is a standalone edge, independent of the DDH/QR/LWE branches of the L149 parent bullet that it annotates; the L149 LWE-branch record (Primitives/single-server-private-information-retrieval:149:primitives-4#3) flagged it in its own problems field ("deserves its own record at migration time") but no record was created.
- Citation DGI+19 is inherited from the parent bullet at L149; the sub-bullet carries no citation of its own.
- class:"black-box" is read off the word "generically" (a generic construction from any TDH); the page does not name a reduction class explicitly.
- This is the ONLY outgoing edge content/Primitives/trapdoor-hash-function.md would have — that page is a 19-line stub with an empty ## Definition and ## Other results, so without this record TDH appears in the graph only as an intermediate node inside three splitInto arrays and never as a first-class hypothesis.
