---
type: reduction
status: stub
title: "Arithmetization + NIZK + PCS ⇒ SNARK"
aliases: []
id: red-arithmetization-and-nizk-and-pcs-to-snark
kind: implication
hypotheses: [arithmetization, nizk, pcs]
conclusion: snark
class: unstated
model: crs
source: folklore
security-loss: ""
---

# Arithmetization + NIZK + PCS ⇒ SNARK

[[arithmetization|Arithmetization]] together with [[non-interactive-zero-knowledge|NIZK]] together with [[polynomial-commitment|PCS]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[succinct-argument]] § Other results:

> - [[non-interactive-zero-knowledge|NIZK]] proofs can be made succinct using [[polynomial-commitment|polynomial commitments]] and [[arithmetization]] — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Genuinely conjunctive (three hypotheses together), but the claim is vague: 'can be made succinct' does not name a theorem, and the folklore label '— standard' covers a construction that is not really folklore.
- Overlaps with line 94, which states the same two-step recipe with the NIZK hypothesis dropped — the page gives two incompatible ingredient lists for the same construction.
