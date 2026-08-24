---
type: barrier
status: draft
title: "No fully-black-box reduction from Hash function to PKE"
aliases: []
id: bar-hash-function-to-pke-gkm-00
hypotheses: [hash-function]
conclusion: pke
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]]"
---

# No fully-black-box reduction from Hash function to PKE

A reduction of class `fully-black-box` from [[hash-function|Hash function]] to [[public-key-encryption|PKE]] would imply a contradiction.

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED OVERSTATEMENT: "OWFs imply ... but **not** public-key encryption" is written as an unconditional non-implication. The known result (Impagliazzo–Rudich) is a BLACK-BOX separation only; whether OWFs imply PKE is open. Recorded, not fixed.
- No citation — IR89 is neither cited nor linked anywhere on the page.
- class must be "fully-black-box" for the claim to be true, but the page states no class; left "unstated".
- SUSPECTED MATH ERROR: 'OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption' states the barrier as an unconditional NON-IMPLICATION. It is not known that OWFs do not imply PKE; only that no black-box construction exists (IR89). The bolded 'not' asserts something strictly stronger than anything proven, and the page's own black-box-separations glossary entry (line 89) explicitly warns against this reading.
- Cited to GKM+00; the separation is IR89's. IR89 is not linked anywhere on this page.
- Same sentence contains the already-flagged error 'TDPs (equivalently, the existence of PKE or OT)' — TODO_SUMMARY.md:33 records this as an open high-severity finding.
- The bullet is a composite chain (OWF -> PRG -> PRF -> SKE/MAC/DS) plus a barrier, in one sentence, with one citation. Under the target model the positive chain must be split into separate reductions with separate citations (HILL99, GGM86, Lam79) and the barrier separated out entirely.
