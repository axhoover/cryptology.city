---
type: reduction
status: stub
title: "TDP ⇒ Hash function"
aliases: []
id: red-tdp-to-hash-function
kind: implication
hypotheses: [tdp]
conclusion: hash-function
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# TDP ⇒ Hash function

[[trapdoor-permutation|TDP]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Impagliazzo's five worlds:

> - [[trapdoor-permutation|TDFs]] exist → [[hash-function|OWFs]]s exist

Migrated verbatim from [[trapdoor-permutation]] § Trapdoor permutation:

> A _trapdoor permutation (TDP)_ is a permutation that is easy to compute but hard to invert without a _trapdoor_: a secret that makes inversion efficient. Trapdoor permutations are one-way functions with an additional invertibility structure, and they are associated with Impagliazzo's "Cryptomania" world. Their existence implies many public-key cryptographic primitives.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on the bullet (Imp95 is linked only in the page intro).
- WIKILINK PROBLEM: conclusion is OWF but links to `[[hash-function|OWFs]]` (no one-way-function page exists).
- Display-text mismatch: "`[[trapdoor-permutation|TDFs]]`" glosses the trapdoor-PERMUTATION page as trapdoor FUNCTIONS; the rest of the page alternates TDF/TDP for the same object.
- Typo: "`[[hash-function|OWFs]]`s exist" (stray trailing s).
- 'Trapdoor permutations are one-way functions with an additional invertibility structure' asserts TDP => OWF definitionally; no citation and no wikilink to the OWF page (which is hash-function.md).
- Strictly a TDP is a one-way PERMUTATION family, so the sharper edge is TDP => OWP (content/Primitives/one-way-permutation.md exists and is not linked).
