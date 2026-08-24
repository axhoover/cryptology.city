---
type: reduction
status: draft
title: "Hash function + iO ⇒ FE"
aliases: []
id: red-hash-function-and-io-to-fe-sw14
kind: implication
hypotheses: [hash-function, io]
conclusion: functional-encryption
class: unstated
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
  - "[[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]"
security-loss: ""
---

# Hash function + iO ⇒ FE

[[hash-function|Hash function]] together with [[indistinguishability-obfuscation|iO]] implies [[functional-encryption|FE]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Obfustopia:

> **[[indistinguishability-obfuscation|Indistinguishability obfuscation]] (iO)** together with [[hash-function|OWFs]] defines an even richer world beyond Cryptomania, sometimes called _Obfustopia_. iO is an extremely powerful primitive: combined with OWFs, it implies [[public-key-encryption|PKE]], [[digital-signature|digital signatures]], [[non-interactive-zero-knowledge|NIZK]] proofs without a CRS, functional encryption for all circuits, deniable encryption, and much more — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

Migrated verbatim from [[indistinguishability-obfuscation]] § Other results:

> - iO + OWF → functional encryption for all circuits — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]], [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CONJUNCTIVE and DISJUNCTIVELY BUNDLED: "combined with OWFs, it implies PKE, digital signatures, NIZK proofs without a CRS, functional encryption for all circuits, deniable encryption, and much more" is one hypothesis SET {iO, OWF} with five separate conclusions; this record isolates {iO, OWF} => functional encryption for all circuits.
- "and much more" is an unbounded, untypeable tail that a migration must drop.
- OWF hypothesis is again the hash-function page alias.
- "functional-encryption" has no wiki page (content/Primitives has ABE, IBE, HVE, inner-product predicate encryption, but no functional encryption page).
- 'OWF' here is bare text, not a wikilink (unlike line 51).
- No page for functional encryption; conclusion slug invented.
- Two citations on one bullet - unclear whether both prove the same statement or different variants.
