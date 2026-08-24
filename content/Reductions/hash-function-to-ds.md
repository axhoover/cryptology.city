---
type: reduction
status: stub
title: "Hash function ⇒ DS"
aliases: []
id: red-hash-function-to-ds
kind: implication
hypotheses: [hash-function]
conclusion: ds
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Hash function ⇒ DS

[[hash-function|Hash function]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

Migrated verbatim from [[digital-signature]] § Hash-based signatures:

> Hash-based signatures achieve **post-quantum security** from collision-resistant hash functions alone — no number-theoretic assumptions.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- DISJUNCTIVE BUNDLE: "OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures" is five separate one-hypothesis reductions; this record isolates OWF => digital signature. Must not be stored as one hyperedge with five conclusions.
- No citation on the clause — the canonical sources (HILL99 for OWF=>PRG, GGM86 for PRG=>PRF, Rom90/NY89 for OWF=>signatures) are absent. GKM+00 is cited earlier in the paragraph but for a different claim.
- None of the five conclusions is wikilinked here — they are bare abbreviations in prose.
- Hypothesis OWF is only reachable via the hash-function page alias.
- No citation.
- CONTRADICTS line 165 of the same section, which says security reduces to 'second-preimage resistance and pseudorandomness' — a different (weaker) hypothesis set than 'collision-resistant hash functions alone'. The page states the hypothesis two incompatible ways six lines apart.
- `[[hash-function]]` is not wikilinked here; the CRHF/OWF conflation on that page makes the hypothesis ambiguous.
- 'post-quantum security' is a claim about the adversary model (quantum), which the schema records only via 'model'.
