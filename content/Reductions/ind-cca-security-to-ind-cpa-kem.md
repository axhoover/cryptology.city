---
type: reduction
status: draft
title: "IND-CCA security ⇒ IND-CPA KEM"
aliases: []
id: red-ind-cca-security-to-ind-cpa-kem
kind: implication
hypotheses: [ind-cca-kem]
conclusion: ind-cpa-kem
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the reduction preserves the advantage exactly"
---

# IND-CCA security ⇒ IND-CPA KEM

[[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]] implies [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]].

## Statement

An [[key-encapsulation-mechanism#ind-cca-security|IND-CCA]]-secure [[key-encapsulation-mechanism|KEM]] is [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA]]-secure: the games differ only in the decapsulation oracle, so an IND-CPA adversary is an IND-CCA adversary making no decapsulation queries, with identical advantage — folklore.

## Notes

`class: fully-black-box`: identity construction; the reduction runs the IND-CPA adversary unchanged, using it only as an oracle.

- Both endpoints are security notions of the same primitive, not separate pages — the target model needs notion-level nodes.
