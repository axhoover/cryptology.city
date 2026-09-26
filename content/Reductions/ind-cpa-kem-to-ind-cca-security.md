---
type: reduction
status: draft
title: "IND-CPA KEM ⇒ IND-CCA security"
aliases: []
id: red-ind-cpa-kem-to-ind-cca-security
kind: implication
hypotheses: [ind-cpa-kem]
conclusion: ind-cca-kem
class: fully-black-box
model: rom
source:
  - "[[FO99 - Secure Integration of Asymmetric and Symmetric Encryption Schemes|FO99]]"
security-loss: ""
---

# IND-CPA KEM ⇒ IND-CCA security

[[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]] implies [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]] in the [[random-oracle-model|random-oracle model]].

## Statement

The Fujisaki–Okamoto transform builds an [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]] [[key-encapsulation-mechanism|KEM]] in the [[random-oracle-model|random-oracle model]] from any [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme (one-wayness suffices; explicit rejection additionally needs $\gamma$-spread ciphertexts): encapsulation samples a uniform message $m$, encrypts it under coins $G(m)$, and outputs the key $H(m, c)$; decapsulation decrypts $c$ to $m'$, re-encrypts under $G(m')$, and rejects — or, with implicit rejection, returns a pseudorandom key — unless the result equals $c$ [[FO99 - Secure Integration of Asymmetric and Symmetric Encryption Schemes|FO99]], [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]]. An [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]] yields such a PKE by one-time-padding the message with the encapsulated key, so the transform also lifts IND-CPA KEMs to IND-CCA KEMs in the ROM — standard.

## Sketch

Derandomising encryption with $G(m)$ makes ciphertexts checkable by re-encryption, so the reduction answers decapsulation queries by searching the adversary's $G$ and $H$ queries for a message that re-encrypts to the queried ciphertext; an adversary that never queries $H$ on the challenge message $m^*$ has no information on $H(m^*, c^*)$, and from one that does the reduction reads off $m^*$, inverting the base encryption.

## Notes

`class: fully-black-box`: One fixed construction that calls the base scheme's algorithms (encryption with explicit coins, decryption) and the hash functions only as oracles; one fixed reduction that runs any IND-CCA adversary once as an oracle, answering its decapsulation queries from its random-oracle queries by re-encryption. Fully black-box in both quantifiers, within the ROM.

`model: rom`: FO99, Den03 and HHK17 prove IND-CCA security only in the random-oracle model; an IND-CCA KEM from IND-CPA alone is not known in the standard model.

- KEM-specific versions of the transform, proved IND-CCA in the ROM from one-way PKE — [[Den03 - A Designer's Guide to KEMs|Den03]]
- Modular T/U decomposition with concrete bounds for a $\delta$-correct base scheme, covering explicit and implicit rejection — [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]]
