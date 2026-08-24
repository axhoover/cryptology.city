---
type: reduction
status: draft
title: "Hash-based signatures ⇒ DS"
aliases: []
id: red-hash-based-signatures-to-ds-mer89
kind: implication
hypotheses: [one-time-signature]
conclusion: ds
class: unstated
model: standard
source:
  - "[[Mer89 - A Certified Digital Signature|Mer89]]"
security-loss: ""
---

# Hash-based signatures ⇒ DS

[[digital-signature#hash-based-signatures|Hash-based signatures]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[hash-function]] § Other results:

> - If one-way functions exist, then many "Minicrypt" primitives exist, via the chain OWF → PRG ([[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]) → PRF ([[GGM86 - How to construct random functions|GGM86]]):
>   - [[symmetric-key-encryption|Symmetric Key Encryption]]
>   - [[pseudorandom-function|Pseudorandom Functions]]
>   - [[pseudorandom-permutation|Pseudorandom Permutations]]
>   - [[message-authentication-code|Message Authentication Codes]]
>   - [[digital-signature|Digital Signatures]] (via Lamport one-time signatures [[Lam79 - Constructing digital signatures from a one way function|Lam79]] + Merkle trees [[Mer89 - A Certified Digital Signature|Mer89]])

Migrated verbatim from [[hash-function]] § Other results:

> - [[digital-signature|Digital Signatures]] (via Lamport one-time signatures [[Lam79 - Constructing digital signatures from a one way function|Lam79]] + Merkle trees [[Mer89 - A Certified Digital Signature|Mer89]])

## Notes

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The Merkle step needs collision resistance / UOWHFs (Naor-Yung, Rompel), uncited here and at digital-signature.md:179.
- Recorded here with ONE hypothesis but with TWO ({one-time-signature, hash-function}) at digital-signature.md:179 — inconsistent hypothesis sets for the same claim.
- one-time-signature has no wiki page.
- MOST COMPOSITE BULLET IN THE CHUNK: one bullet plus five sub-bullets encoding at least seven distinct reductions. Must be split.
- The conclusion 'many "Minicrypt" primitives' is not a single object; Minicrypt is an Impagliazzo world, with no page in content/.
- GL89 is the hard-core-predicate result used for the OWP/regular-OWF route to PRGs; the general OWF => PRG construction is HILL99. Citing both for one arrow conflates two different constructions.
- The Digital Signatures sub-bullet does NOT go through the PRG → PRF chain the parent asserts (it goes OWF => one-time signature => signature), so the parent's 'via the chain' framing is wrong for that item.
- PRF => PRP is uncited: the Luby-Rackoff result (LR88) has no reference page in content/References/.
- The Merkle step from OWFs alone needs UOWHFs (Naor-Yung / Rompel), uncited here and at digital-signature.md:179.
- Recorded with one hypothesis here and two at digital-signature.md:179 — inconsistent hypothesis sets for one claim.
- COMPOSITE with two citations, one per link — the clearest split candidate in the chunk.
- Does not follow the parent bullet's PRG → PRF chain (see the parent record).
- The Merkle step from OWFs alone needs universal one-way hash functions (Naor-Yung / Rompel), uncited here and on content/Primitives/digital-signature.md line 179.
- 'one-time-signature' has no slug.
