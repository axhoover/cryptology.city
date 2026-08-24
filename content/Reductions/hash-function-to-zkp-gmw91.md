---
type: reduction
status: draft
title: "Hash function ⇒ ZKP"
aliases: []
id: red-hash-function-to-zkp-gmw91
kind: implication
hypotheses: [hash-function]
conclusion: zkp
class: fully-black-box
model: standard
source:
  - "[[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]"
security-loss: ""
---

# Hash function ⇒ ZKP

[[hash-function|Hash function]] implies [[zero-knowledge-proof|ZKP]].

## Statement

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - All NP languages have computational ZK proofs assuming [[hash-function|OWF]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- COMPOSITE in substance though not in wording: GMW91 builds ZK for NP from bit COMMITMENTS; OWF => commitment is Nao91 (Naor). The OWF hypothesis therefore hides a two-link chain OWF => commitment-scheme => ZK-for-NP.
- `[[hash-function|OWF]]` again routes the OWF node to the page that also owns CRHF.
- The conclusion is 'ZK proofs for all of NP', a language-class-qualified object the flat slug zero-knowledge-proof cannot express.
