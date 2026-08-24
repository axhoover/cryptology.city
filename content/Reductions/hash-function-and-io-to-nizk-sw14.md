---
type: reduction
status: draft
title: "Hash function + iO ⇒ NIZK"
aliases: []
id: red-hash-function-and-io-to-nizk-sw14
kind: implication
hypotheses: [hash-function, io]
conclusion: nizk
class: unstated
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
---

# Hash function + iO ⇒ NIZK

[[hash-function|Hash function]] together with [[indistinguishability-obfuscation|iO]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Obfustopia:

> **[[indistinguishability-obfuscation|Indistinguishability obfuscation]] (iO)** together with [[hash-function|OWFs]] defines an even richer world beyond Cryptomania, sometimes called _Obfustopia_. iO is an extremely powerful primitive: combined with OWFs, it implies [[public-key-encryption|PKE]], [[digital-signature|digital signatures]], [[non-interactive-zero-knowledge|NIZK]] proofs without a CRS, functional encryption for all circuits, deniable encryption, and much more — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

Migrated verbatim from [[indistinguishability-obfuscation]] § Other results:

> - iO + OWF → [[non-interactive-zero-knowledge|NIZK]] in the plain model (no CRS) — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - NIZK from [[indistinguishability-obfuscation|iO]] and [[hash-function|OWF]] in the plain model (no CRS) — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CONJUNCTIVE and DISJUNCTIVELY BUNDLED: "combined with OWFs, it implies PKE, digital signatures, NIZK proofs without a CRS, functional encryption for all circuits, deniable encryption, and much more" is one hypothesis SET {iO, OWF} with five separate conclusions; this record isolates {iO, OWF} => NIZK proofs without a CRS.
- "and much more" is an unbounded, untypeable tail that a migration must drop.
- OWF hypothesis is again the hash-function page alias.
- SUSPECTED MATHEMATICAL ERROR: "NIZK proofs without a CRS" — NIZK for non-trivial languages is impossible with no setup at all, and the iO-based construction places the obfuscated program in the CRS. Recorded, not fixed.
- 'plain model (no CRS)' should be checked: SW14's NIZK uses a common _random_ string derived from the obfuscated program, and whether it qualifies as plain-model is a modelling claim. Report only.
- Duplicated on the NIZK page at line 63.
- Duplicate of the iO page line 53 bullet.
- 'plain model (no CRS)' is a strong modelling claim about SW14 that should be verified. Report only.
