---
type: reduction
status: draft
title: "ROM + ZKP ⇒ NIZK"
aliases: []
id: red-rom-and-zkp-to-nizk-fs86
kind: implication
hypotheses: [rom, zkp]
conclusion: nizk
class: unstated
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: ""
---

# ROM + ZKP ⇒ NIZK

[[random-oracle-model|ROM]] together with [[zero-knowledge-proof|ZKP]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - ZK proofs can be compiled to [[non-interactive-zero-knowledge|NIZK]] in the CRS model or the random oracle model — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- ROM/Fiat-Shamir branch of the disjunction.
- Missing hypothesis: Fiat-Shamir applies only to PUBLIC-COIN (constant-round, HVZK) protocols, not to ZK proofs in general.
- Same anachronism as succinct-argument.md line 93: FS86 is cited for a NIZK compiler it does not state in those terms.
