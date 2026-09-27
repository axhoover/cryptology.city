---
type: reduction
status: draft
title: "NTRU ⇒ IND-CCA KEM"
aliases: []
id: red-ntru-to-kem
kind: implication
hypotheses: [ntru-ow-cpa]
conclusion: ind-cca-kem
class: unstated
model: rom
source:
  - "[[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]]"
security-loss: ""
---

# NTRU ⇒ IND-CCA KEM

[[ntru#one-wayness-of-ntru-encryption|One-wayness of NTRU encryption]] implies an [[key-encapsulation-mechanism#ind-cca-security|IND-CCA KEM]] in the quantum random-oracle model.

## Statement

An [[key-encapsulation-mechanism#ind-cca-security|IND-CCA]] [[key-encapsulation-mechanism|KEM]] from the [[ntru#one-wayness-of-ntru-encryption|one-wayness of NTRU encryption]]: textbook NTRU encryption with parameters chosen for perfect correctness, lifted to a KEM by a generic transform proved IND-CCA in the quantum random-oracle model — [[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: [[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]] prove IND-CCA security in the quantum random-oracle model, which the model vocabulary records as `rom`.

