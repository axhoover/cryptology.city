---
type: reduction
status: stub
title: "PCS ⇒ SNARK"
aliases: []
id: red-pcs-to-snark
kind: implication
hypotheses: [pcs]
conclusion: snark
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PCS ⇒ SNARK

[[polynomial-commitment|PCS]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[polynomial-commitment]] § Polynomial commitment scheme:

> A **polynomial commitment scheme** (PCS) allows a prover to commit to a polynomial $f \in \FF_p[X]_{\le d}$ (of degree at most $d$) and later prove evaluations $f(z) = y$ for any point $z$ queried by a verifier, without revealing $f$ itself. Polynomial commitments are the key bridge between [[arithmetization]] and proof systems: they allow a [[succinct-argument|SNARK]] to efficiently check that a prover's claimed polynomial satisfies the required constraints.

Migrated verbatim from [[polynomial-commitment]]:

> FRI is a transparent (no trusted setup) polynomial commitment that works by repeatedly halving the degree of a Reed-Solomon codeword via a random folding step. It is the core component of [[succinct-argument|STARKs]].

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Intro prose ('the key bridge between arithmetization and proof systems') — a motivational claim, not a typed reduction; PCS alone does not imply a SNARK (a PIOP/IOP is also needed).
- No citation.
- 'It is the core component of STARKs' — a componenthood claim, not a reduction; no citation on the sentence.
- STARK resolves to `[[succinct-argument]]`, the same page as SNARK — distinct objects collapse to one slug.
