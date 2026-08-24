---
type: reduction
status: draft
title: "ROM + ZKP ⇒ DS"
aliases: []
id: red-rom-and-zkp-to-ds-fs86
kind: implication
hypotheses: [rom, zkp]
conclusion: ds
class: unstated
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: ""
---

# ROM + ZKP ⇒ DS

[[random-oracle-model|ROM]] together with [[zero-knowledge-proof|ZKP]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - The Schnorr protocol is a sigma protocol for discrete log compiled to a [[digital-signature|digital signature]] via Fiat-Shamir — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CONJUNCTION IS AN ARTIFACT: the second listed hypothesis, random-oracle-model, is a MODEL rather than an object; with model:'rom' recorded in the model field there is only one genuine hypothesis, so conjunctive is false.
- The ROM is not named in the bullet at all; model:'rom' is inferred.
- Security of Fiat-Shamir signatures rests on the forking lemma (PS96), which is neither cited nor referenced.
- sigma-protocol aliases zero-knowledge-proof, so the hypothesis node is the generic ZK page.
- COMPOSITE: DL => Schnorr sigma protocol, then sigma protocol + Fiat-Shamir (ROM) => digital signature. The first link is uncited (Sch89/Sch91).
- The ROM is not named in the bullet even though Fiat-Shamir signatures are only proved secure there (PS96 forking lemma); model 'rom' is inferred.
- 'discrete log' and 'sigma protocol' are both unlinked; discrete-logarithm.md exists.
