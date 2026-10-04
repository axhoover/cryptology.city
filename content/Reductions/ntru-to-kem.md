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
rationale:
  model: "HRSS17 prove IND-CCA security in the quantum random-oracle model."
---

# NTRU ⇒ IND-CCA KEM

## Statement

If [[ntru#one-wayness-of-ntru-encryption|NTRU encryption is one-way]] for parameters chosen so that decryption is perfectly correct, there is an [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]] [[key-encapsulation-mechanism|KEM]] in the quantum random-oracle model: textbook NTRU encryption lifted to a KEM by a generic transform — [[HRSS17 - High-Speed Key Encapsulation from NTRU|HRSS17]].
