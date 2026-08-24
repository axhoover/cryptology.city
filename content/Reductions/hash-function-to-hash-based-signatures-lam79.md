---
type: reduction
status: draft
title: "Hash function ⇒ Hash-based signatures"
aliases: []
id: red-hash-function-to-hash-based-signatures-lam79
kind: implication
hypotheses: [hash-function]
conclusion: one-time-signature
class: unstated
model: standard
source:
  - "[[Lam79 - Constructing digital signatures from a one way function|Lam79]]"
security-loss: ""
---

# Hash function ⇒ Hash-based signatures

[[hash-function|Hash function]] implies [[digital-signature#hash-based-signatures|Hash-based signatures]].

## Statement

Migrated verbatim from [[digital-signature]] § Hash-based signatures:

> - **Lamport signatures** (one-time): sign one bit per hash chain; $O(\secpar)$-size signatures, keys usable only once — [[Lam79 - Constructing digital signatures from a one way function|Lam79]]

Migrated verbatim from [[digital-signature]] § Hash-based signatures:

> - **XMSS** (eXtended Merkle Signature Scheme): stateful many-time scheme; uses a Merkle tree of Lamport/Winternitz one-time keys; standardized in RFC 8391

Migrated verbatim from [[digital-signature]] § Other results:

> - [[hash-function|OWFs]] imply one-time digital signatures via Lamport's scheme — [[Lam79 - Constructing digital signatures from a one way function|Lam79]]
>   - Lamport signatures are single-use; a single key pair signs at most one message securely

Migrated verbatim from [[digital-signature]] § Other results:

> - Many-time signatures from OWFs are obtained by authenticating a collection of one-time verification keys using a Merkle hash tree, giving $O(\secpar)$-size signatures with a $\poly(\secpar)$-size public key — [[Mer89 - A Certified Digital Signature|Mer89]]

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

This relation is stated on 6 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED ERROR (reported, not fixed): 'sign one bit per hash chain' describes WINTERNITZ, not Lamport. Lamport publishes two hash images per message bit and reveals one preimage per bit; there are no chains.
- SUSPECTED EFFICIENCY ERROR: Lamport signatures are $O(\secpar \cdot |m|)$ bits for an $|m|$-bit message (typically $O(\secpar^2)$ with hashed messages), not $O(\secpar)$.
- 'one-time-signature' has no slug of its own.
- Uncited on this bullet; Lam79 is cited only on the preceding line (161).
- one-time-signature has no wiki page or slug.
- The hash-function node conflates OWF with CRHF, while line 165 says security rests on second-preimage resistance — a property with no node at all.
- No wiki citation — RFC 8391 is named in prose only and has no reference page.
- COMPOSITE: one-time keys (themselves from hashes) plus a Merkle tree; the two steps have separate provenance.
- The conclusion is a stateful many-time signature, a variant with no node in the model.
- `[[hash-function|OWFs]]` resolves to the page that also carries the CRH alias — OWF and CRHF are one node site-wide, so this edge's hypothesis is ambiguous in the target model.
- Conclusion 'one-time-signature' is a variant with no page; it is distinct from `[[digital-signature]]` and must not be collapsed into it (the sub-bullet exists precisely to say so).
- Duplicates content/Primitives/hash-function.md line 102 (the Minicrypt sub-bullet), which cites Lam79 + Mer89 together.
- UNCITED WHILE THE PARENT IS CITED: Mer89 covers only the tree step; the OWF => one-time signature step is Lam79, cited on line 177 but not here.
- one-time-signature has no wiki page.
- hash-function is the merged OWF/CRHF node.
- COMPOSITE: OWF => one-time signature (Lam79, cited on the previous bullet only) then one-time signature + Merkle tree => many-time signature (Mer89).
- MISSING STEP: a Merkle tree built from OWFs alone is not collision resistant — the standard route needs universal one-way hash functions (Naor-Yung 89 / Rompel 90), neither cited nor referenced.
- SUSPECTED EFFICIENCY ERROR: Merkle-tree signatures are $O(\secpar \cdot \log T)$ (or $O(\secpar^2)$) in size, and the public key is a single hash value of size $O(\secpar)$ — the bullet's '$O(\secpar)$-size signatures with a $\poly(\secpar)$-size public key' looks reversed/wrong.
- This item does NOT follow the parent bullet's 'via the chain OWF -> PRG -> PRF' framing, so the parent's stated chain is wrong for the digital-signature entry.
- MOST COMPOSITE BULLET IN THE CHUNK: one bullet plus five sub-bullets encoding at least seven distinct reductions. Must be split.
- The conclusion 'many "Minicrypt" primitives' is not a single object; Minicrypt is an Impagliazzo world, with no page in content/.
- GL89 is the hard-core-predicate result used for the OWP/regular-OWF route to PRGs; the general OWF => PRG construction is HILL99. Citing both for one arrow conflates two different constructions.
- The Digital Signatures sub-bullet does NOT go through the PRG → PRF chain the parent asserts (it goes OWF => one-time signature => signature), so the parent's 'via the chain' framing is wrong for that item.
- PRF => PRP is uncited: the Luby-Rackoff result (LR88) has no reference page in content/References/.
- Does not follow the parent bullet's OWF -> PRG -> PRF framing, contradicting the parent's 'via the chain' claim.
- COMPOSITE with two citations, one per link — the clearest split candidate in the chunk.
- Does not follow the parent bullet's PRG → PRF chain (see the parent record).
- The Merkle step from OWFs alone needs universal one-way hash functions (Naor-Yung / Rompel), uncited here and on content/Primitives/digital-signature.md line 179.
- 'one-time-signature' has no slug.
