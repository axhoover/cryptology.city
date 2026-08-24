---
type: reduction
status: stub
title: "IP + ROM ⇒ SNARK"
aliases: []
id: red-ip-and-rom-to-snark-fs86
kind: implication
hypotheses: [ip, rom]
conclusion: snark
class: unstated
model: rom
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: ""
---

# IP + ROM ⇒ SNARK

[[interactive-proof-systems|IP]] together with [[random-oracle-model|ROM]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[succinct-argument]] § Other results:

> - The Fiat-Shamir transform converts interactive proofs to non-interactive SNARKs in the random oracle model — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED ERROR: Fiat-Shamir removes interaction from PUBLIC-COIN protocols; it does not create succinctness. An interactive proof compiled with FS is non-interactive but not succinct unless the starting protocol is already succinct (an IOP/PCP). 'converts interactive proofs to non-interactive SNARKs' is wrong as stated. Reported, not fixed.
- Missing hypothesis: public-coin (and, for knowledge soundness, round-by-round soundness).
- FS86 is an identification/signature paper and says nothing about SNARKs — citation is anachronistic for the claim made.
- The Glossary has fiat-shamir-heuristic.md but the transform is not wikilinked here.
