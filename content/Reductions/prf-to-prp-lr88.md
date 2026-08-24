---
type: reduction
status: draft
title: "PRF ⇒ PRP"
aliases: []
id: red-prf-to-prp-lr88
kind: implication
hypotheses: [prf]
conclusion: prp
class: unstated
model: standard
source:
  - "[[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]"
security-loss: ""
---

# PRF ⇒ PRP

[[pseudorandom-function|PRF]] implies [[pseudorandom-permutation|PRP]].

## Statement

Migrated verbatim from [[hash-function]] § Other results:

> - If one-way functions exist, then many "Minicrypt" primitives exist, via the chain OWF → PRG ([[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]) → PRF ([[GGM86 - How to construct random functions|GGM86]]):
>   - [[symmetric-key-encryption|Symmetric Key Encryption]]
>   - [[pseudorandom-function|Pseudorandom Functions]]
>   - [[pseudorandom-permutation|Pseudorandom Permutations]]
>   - [[message-authentication-code|Message Authentication Codes]]
>   - [[digital-signature|Digital Signatures]] (via Lamport one-time signatures [[Lam79 - Constructing digital signatures from a one way function|Lam79]] + Merkle trees [[Mer89 - A Certified Digital Signature|Mer89]])

Migrated verbatim from [[hash-function]] § Other results:

> - [[pseudorandom-permutation|Pseudorandom Permutations]]

Migrated verbatim from [[pseudorandom-permutation]] § Other results:

> - [[pseudorandom-function|PRFs]] imply the existence of large-domain PRPs — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]

## Notes

This relation is stated on 3 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION: this is Luby-Rackoff (LR88), which has no reference page anywhere in content/References/.
- The parent bullet's chain stops at PRF, so this sub-bullet silently adds a fourth link the parent never claims.
- The Feistel construction needs 3 (or 4, for strong PRPs) rounds — unstated.
- MOST COMPOSITE BULLET IN THE CHUNK: one bullet plus five sub-bullets encoding at least seven distinct reductions. Must be split.
- The conclusion 'many "Minicrypt" primitives' is not a single object; Minicrypt is an Impagliazzo world, with no page in content/.
- GL89 is the hard-core-predicate result used for the OWP/regular-OWF route to PRGs; the general OWF => PRG construction is HILL99. Citing both for one arrow conflates two different constructions.
- The Digital Signatures sub-bullet does NOT go through the PRG → PRF chain the parent asserts (it goes OWF => one-time signature => signature), so the parent's 'via the chain' framing is wrong for that item.
- PRF => PRP is uncited: the Luby-Rackoff result (LR88) has no reference page in content/References/.
- MISSING CITATION: Luby-Rackoff (LR88) has no reference page and is cited nowhere on the page.
- This link goes beyond the parent bullet's chain, which stops at PRF.
- Round count (3 or 4) unstated.
- MISSING CITATION for the final link: PRF => PRP is the Luby-Rackoff / Feistel result (LR88), which has no reference page and is not cited anywhere on this page.
- The parent bullet's chain stops at PRF, so this sub-bullet silently adds a fourth link.
- Conclusion carries the qualifier 'large-domain' (Feistel/Luby-Rackoff), which must survive migration; the construction itself (3/4-round Feistel) is not sketched.
