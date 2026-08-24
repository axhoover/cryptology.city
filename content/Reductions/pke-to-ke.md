---
type: reduction
status: stub
title: "PKE ⇒ KE"
aliases: []
id: red-pke-to-ke
kind: implication
hypotheses: [pke]
conclusion: ke
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PKE ⇒ KE

[[public-key-encryption|PKE]] implies [[key-exchange|KE]].

## Statement

Migrated verbatim from [[key-exchange]] § Other results:

> - KE from [[learning-with-errors|LWE]]: follows as a special case of PKE from LWE — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- UNCITED WHILE THE PARENT IS CITED: Reg05 covers only the first link; this one has no source and no folklore label.
- The same page asserts the CONVERSE, KE => PKE, at line 49 (cited DH76); together they are an equivalence that the two records never connect.
- Composite: LWE => PKE (Reg05), then PKE => KE (uncited, and note the page also claims the converse KE => PKE at line 49). Must be split.
- The second link (PKE => KE) carries no citation of its own.
