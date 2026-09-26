---
type: reduction
status: draft
title: "NTRU ⇒ KEM"
aliases: []
id: red-ntru-to-kem
kind: implication
hypotheses: [ntru]
conclusion: kem
class: unstated
model: rom
source:
  - "[[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]]"
security-loss: ""
---

# NTRU ⇒ KEM

[[ntru|NTRU]] implies [[key-encapsulation-mechanism|KEM]] in the quantum random-oracle model.

## Statement

An IND-CCA [[key-encapsulation-mechanism|KEM]] from [[ntru|NTRU]]: textbook NTRU encryption with parameters chosen for perfect correctness, lifted to a KEM by a generic transform proved IND-CCA in the quantum random-oracle model — [[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: [[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]] prove IND-CCA security in the quantum random-oracle model, which the model vocabulary records as `rom`.

- [[ntru]] § NTRU Encrypt / NTRUSign calls NTRUEncrypt a KEM; NTRUEncrypt is a public-key encryption scheme ([[HPS98 - NTRU a ring-based public key cryptosystem|HPS98]]), and the KEM here is HRSS17's.
