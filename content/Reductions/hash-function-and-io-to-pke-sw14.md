---
type: reduction
status: draft
title: "Hash function + iO ⇒ PKE"
aliases: []
id: red-hash-function-and-io-to-pke-sw14
kind: implication
hypotheses: [hash-function, io]
conclusion: pke
class: unstated
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
---

# Hash function + iO ⇒ PKE

[[hash-function|Hash function]] together with [[indistinguishability-obfuscation|iO]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Obfustopia:

> **[[indistinguishability-obfuscation|Indistinguishability obfuscation]] (iO)** together with [[hash-function|OWFs]] defines an even richer world beyond Cryptomania, sometimes called _Obfustopia_. iO is an extremely powerful primitive: combined with OWFs, it implies [[public-key-encryption|PKE]], [[digital-signature|digital signatures]], [[non-interactive-zero-knowledge|NIZK]] proofs without a CRS, functional encryption for all circuits, deniable encryption, and much more — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

Migrated verbatim from [[indistinguishability-obfuscation]] § Other results:

> - iO + [[hash-function|OWF]] → [[public-key-encryption|PKE]] — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CONJUNCTIVE and DISJUNCTIVELY BUNDLED: "combined with OWFs, it implies PKE, digital signatures, NIZK proofs without a CRS, functional encryption for all circuits, deniable encryption, and much more" is one hypothesis SET {iO, OWF} with five separate conclusions; this record isolates {iO, OWF} => PKE.
- "and much more" is an unbounded, untypeable tail that a migration must drop.
- OWF hypothesis is again the hash-function page alias.
