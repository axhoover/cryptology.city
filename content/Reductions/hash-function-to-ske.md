---
type: reduction
status: stub
title: "Hash function ⇒ SKE"
aliases: []
id: red-hash-function-to-ske
kind: implication
hypotheses: [hash-function]
conclusion: ske
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Hash function ⇒ SKE

[[hash-function|Hash function]] implies [[symmetric-key-encryption|SKE]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

Migrated verbatim from [[symmetric-key-encryption]] § Other results:

> - CCA-secure SKE can be built from OWF: combine a CPA-secure SKE with a [[message-authentication-code|MAC]] using the encrypt-then-MAC paradigm

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- DISJUNCTIVE BUNDLE: "OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures" is five separate one-hypothesis reductions; this record isolates OWF => SKE. Must not be stored as one hyperedge with five conclusions.
- No citation on the clause — the canonical sources (HILL99 for OWF=>PRG, GGM86 for PRG=>PRF, Rom90/NY89 for OWF=>signatures) are absent. GKM+00 is cited earlier in the paragraph but for a different claim.
- None of the five conclusions is wikilinked here — they are bare abbreviations in prose.
- Hypothesis OWF is only reachable via the hash-function page alias.
- Compresses into one link the three-link chain the previous bullet (line 125) spells out — the same claim recorded at two granularities; migration must dedupe.
- Uncited on this bullet.
- 'OWF' here has NO wikilink at all although line 125 links it to hash-function — inconsistent within two lines.
- MISSING CITATION entirely — encrypt-then-MAC is BN00 (Bellare-Namprempre); no citation and no folklore label, which the page's own citation policy requires.
- COMPOSITE and CONJUNCTIVE at once: OWF => CPA-SKE, OWF => MAC, then {CPA-SKE, MAC} => CCA-SKE.
- 'OWF' here has no wikilink at all (line 125 links it to hash-function; line 126 leaves it bare) — inconsistent within four lines.
- The conclusion is a security level of SKE, not a distinct object; the graph needs security-level-qualified nodes or this edge becomes SKE => SKE.
- REPAIR PATCH: Arity sweep. Wiki L126: "CCA-secure SKE can be built from OWF: combine a CPA-secure SKE with a `[[message-authentication-code|MAC]]` using the encrypt-then-MAC paradigm". The critic cites this record as a calibration example of CORRECT modelling and it is — except for the flag: the top-level edge has ONE hypothesis (OWF) and the genuine conjunction {SKE, MAC} lives in splitInto[2], where it belongs. Repair: conjunctive:false at top level. Sub-edges need their own conjunctive flag (schema defect 6.1) or this conjunction is lost on split.
