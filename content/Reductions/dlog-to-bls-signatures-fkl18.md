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
rationale:
  model: "FKL18 prove the theorem for algebraic forgers, with the hash-to-group function modeled as a programmable random oracle."
---

# DLOG ⇒ BLS signatures

## Statement

In the [[algebraic-group-model|algebraic group model]], with the hash-to-group function modeled as a [[random-oracle-model|random oracle]], EUF-CMA security of [[digital-signature#bls-signatures|BLS signatures]] reduces tightly to [[discrete-logarithm|DLOG]]: every algebraic forger yields a DLOG solver with essentially the same running time and advantage up to a constant factor — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

## Notes

- Outside the algebraic group model, BLS signatures are EUF-CMA secure in the random oracle model under [[co-computational-diffie-hellman|co-CDH]], with a non-tight reduction ([[co-cdh-to-ds|co-CDH ⇒ DS]]) — [[BLS01 - Short Signatures from the Weil Pairing|BLS01]]; no proof from DLOG is known there.
