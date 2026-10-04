---
type: reduction
status: draft
title: "Module LWE ⇒ IND-CCA KEM"
aliases: []
id: red-module-lwe-to-kem
kind: implication
hypotheses: [module-lwe]
conclusion: ind-cca-kem
class: unstated
model: rom
source:
  - "[[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]]"
security-loss: ""
rationale:
  class: "The IND-CCA proof goes through the Fujisaki–Okamoto transform in the random-oracle model, and no source places it in the RTV04 taxonomy."
  model: "The IND-CPA scheme is secure in the standard model, but the IND-CCA conclusion rests on the Fujisaki–Okamoto transform with implicit rejection, proved in the classical and quantum random-oracle models."
---

# Module LWE ⇒ IND-CCA KEM

## Statement

Kyber, the basis of ML-KEM (FIPS 203), is a [[key-encapsulation-mechanism|KEM]] over module lattices. If [[learning-with-errors#module-lwe|Module LWE]] is hard (module rank $k \in \{2, 3, 4\}$ in the proposed parameter sets), Kyber is [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]] in the random-oracle model: an IND-CPA public-key encryption scheme from Module LWE is converted into an IND-CCA KEM by a Fujisaki–Okamoto transform with implicit rejection. The reduction is tight in the random-oracle model and non-tight in the quantum random-oracle model — [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]].

## Sketch

The IND-CPA scheme is the module analogue of the [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]] scheme: the public key is $(\mathbf{A}, \mathbf{t} = \mathbf{A}\mathbf{s} + \mathbf{e})$ and a ciphertext is a pair of compressed Module LWE samples carrying the message in the high-order bits, so key and ciphertext are pseudorandom under Module LWE. The [[ind-cpa-kem-to-ind-cca-security|Fujisaki–Okamoto transform]] then derives the encryption coins and the session key by hashing the message; decapsulation re-encrypts and, on a mismatch, outputs a pseudorandom key derived from a secret seed.

## Notes

- Kyber's IND-CCA proof instantiates the modular Fujisaki–Okamoto analysis, which supplies the ROM and QROM bounds — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]].
