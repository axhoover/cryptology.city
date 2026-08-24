---
type: reduction
status: draft
title: "Hash function + Hash-based signatures ⇒ DS"
aliases: []
id: red-hash-function-and-hash-based-signatures-to-ds-mer89
kind: implication
hypotheses: [hash-function, one-time-signature]
conclusion: ds
class: unstated
model: standard
source:
  - "[[Mer89 - A Certified Digital Signature|Mer89]]"
security-loss: ""
---

# Hash function + Hash-based signatures ⇒ DS

[[hash-function|Hash function]] together with [[digital-signature#hash-based-signatures|Hash-based signatures]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § Hash-based signatures:

> - **XMSS** (eXtended Merkle Signature Scheme): stateful many-time scheme; uses a Merkle tree of Lamport/Winternitz one-time keys; standardized in RFC 8391

Migrated verbatim from [[digital-signature]] § Other results:

> - Many-time signatures from OWFs are obtained by authenticating a collection of one-time verification keys using a Merkle hash tree, giving $O(\secpar)$-size signatures with a $\poly(\secpar)$-size public key — [[Mer89 - A Certified Digital Signature|Mer89]]

## Notes

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No wiki citation at all: RFC 8391 is named in prose only and has no reference page.
- The conclusion is a STATEFUL many-time scheme, a variant with no node; as recorded it claims plain digital signatures.
- The Merkle step needs collision resistance (or UOWHFs), not merely a one-way function; the hypothesis node cannot express that.
- No wiki citation — RFC 8391 is named in prose only and has no reference page.
- COMPOSITE: one-time keys (themselves from hashes) plus a Merkle tree; the two steps have separate provenance.
- The conclusion is a stateful many-time signature, a variant with no node in the model.
- MISSING STEP: a Merkle tree built from OWFs alone is not collision resistant; the standard route needs universal one-way hash functions (Naor-Yung 89 / Rompel 90), neither cited nor referenced anywhere.
- SUSPECTED EFFICIENCY ERROR (reported, not corrected): the bullet's 'O(secpar)-size signatures with a poly(secpar)-size public key' looks reversed — Merkle signatures are O(secpar \* log T) and the public key is a single O(secpar) hash.
- The same step is recorded at Primitives/hash-function.md:102 with a SINGLE hypothesis ({one-time-signature}); the two records disagree on the hypothesis set for one claim.
- COMPOSITE: OWF => one-time signature (Lam79, cited on the previous bullet only) then one-time signature + Merkle tree => many-time signature (Mer89).
- MISSING STEP: a Merkle tree built from OWFs alone is not collision resistant — the standard route needs universal one-way hash functions (Naor-Yung 89 / Rompel 90), neither cited nor referenced.
- SUSPECTED EFFICIENCY ERROR: Merkle-tree signatures are $O(\secpar \cdot \log T)$ (or $O(\secpar^2)$) in size, and the public key is a single hash value of size $O(\secpar)$ — the bullet's '$O(\secpar)$-size signatures with a $\poly(\secpar)$-size public key' looks reversed/wrong.
