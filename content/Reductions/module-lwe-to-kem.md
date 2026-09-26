---
type: reduction
status: draft
title: "Module LWE ⇒ KEM"
aliases: []
id: red-module-lwe-to-kem
kind: implication
hypotheses: [module-lwe]
conclusion: kem
class: unstated
model: rom
source:
  - "[[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]]"
security-loss: ""
---

# Module LWE ⇒ KEM

[[learning-with-errors#module-lwe|Module LWE]] implies an IND-CCA [[key-encapsulation-mechanism|KEM]] in the random-oracle model.

## Statement

Kyber, the basis of ML-KEM (FIPS 203), is an [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]] [[key-encapsulation-mechanism|KEM]] in the random-oracle model assuming hardness of [[learning-with-errors#module-lwe|Module LWE]] (module rank $k \in \{2,3,4\}$ in the proposed parameter sets): an IND-CPA public-key encryption scheme from Module LWE is converted into an IND-CCA KEM by a Fujisaki–Okamoto transform with implicit rejection; the ROM reduction is tight, the QROM reduction is not — [[BDK+18 - CRYSTALS-Kyber A CCA-Secure Module-Lattice-Based KEM|BDK+18]].

## Sketch

The CPA scheme is the module analogue of the [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]] scheme: the public key is $(\mathbf{A}, \mathbf{t} = \mathbf{A}\mathbf{s} + \mathbf{e})$ and a ciphertext is a pair of compressed Module LWE samples carrying the message in the high-order bits, so key and ciphertext are pseudorandom under Module LWE. The FO transform derives the encryption randomness and the session key by hashing the message; decapsulation re-encrypts and, on mismatch, outputs a pseudorandom key derived from a secret seed (implicit rejection), giving IND-CCA in the ROM.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: The IND-CPA scheme is standard-model, but the IND-CCA conclusion rests on the Fujisaki–Okamoto transform with implicit rejection, proved in the (classical and quantum) random-oracle model.

- Kyber's IND-CCA proof instantiates the modular Fujisaki–Okamoto analysis, which supplies the ROM and QROM bounds — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]].
