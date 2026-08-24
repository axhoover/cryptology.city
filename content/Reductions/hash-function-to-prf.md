---
type: reduction
status: stub
title: "Hash function ⇒ PRF"
aliases: []
id: red-hash-function-to-prf
kind: implication
hypotheses: [hash-function]
conclusion: prf
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Hash function ⇒ PRF

[[hash-function|Hash function]] implies [[pseudorandom-function|PRF]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- DISJUNCTIVE BUNDLE: "OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures" is five separate one-hypothesis reductions; this record isolates OWF => PRF. Must not be stored as one hyperedge with five conclusions.
- No citation on the clause — the canonical sources (HILL99 for OWF=>PRG, GGM86 for PRG=>PRF, Rom90/NY89 for OWF=>signatures) are absent. GKM+00 is cited earlier in the paragraph but for a different claim.
- None of the five conclusions is wikilinked here — they are bare abbreviations in prose.
- Hypothesis OWF is only reachable via the hash-function page alias.
