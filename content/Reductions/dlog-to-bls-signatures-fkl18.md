---
type: reduction
status: draft
title: "DLOG ⇒ BLS signatures"
aliases: []
id: red-dlog-to-bls-signatures-fkl18
kind: implication
hypotheses: [dlog]
conclusion: boneh-lynn-shacham-signature
class: unstated
model: algebraic-group
source:
  - "[[FKL18 - The Algebraic Group Model and its Applications|FKL18]]"
security-loss: "tight"
---

# DLOG ⇒ BLS signatures

In the [[algebraic-group-model|algebraic group model]] with a random oracle, [[discrete-logarithm|DLOG]] implies [[digital-signature#bls-signatures|BLS signatures]].

## Statement

In the [[algebraic-group-model|algebraic group model]], with the hash-to-group function modeled as a random oracle, EUF-CMA security of [[digital-signature#bls-signatures|BLS signatures]] reduces tightly to [[discrete-logarithm|DLOG]]: every algebraic forger yields a DLOG solver with essentially the same running time and advantage up to a constant factor — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: algebraic-group`: FKL18 analyze BLS in the AGM with the hash-to-group function $H$ as a programmable random oracle; the single-valued model field records the AGM, and the statement carries the ROM.

- Outside the AGM, BLS is proven EUF-CMA from [[co-computational-diffie-hellman|co-CDH]] in the ROM with a non-tight reduction ([[co-cdh-to-ds|co-CDH ⇒ DS]]) — [[BLS01 - Short Signatures from the Weil Pairing|BLS01]]; no DLOG-based proof is known.
