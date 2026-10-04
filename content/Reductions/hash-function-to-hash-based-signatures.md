---
type: reduction
status: draft
title: "Hash function + PRF ⇒ DS (XMSS)"
aliases: []
id: red-hash-function-to-hash-based-signatures
kind: implication
hypotheses: [hash-function, prf]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]]"
security-loss: ""
rationale:
  class: "XMSS calls the hash family and the PRF only as oracles, and the reduction embeds a second-preimage or PRF challenge and runs any EUF-CMA forger as an oracle."
---

# Hash function + PRF ⇒ DS (XMSS)

## Statement

XMSS is a stateful, forward-secure, many-time [[digital-signature#hash-based-signatures|hash-based signature scheme]]; it is [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable if its [[hash-function|hash function]] family is second-preimage resistant and its function family is a [[pseudorandom-function|PRF]] — [[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]].

## Sketch

Each message is signed under a fresh Winternitz one-time key, and a Merkle tree over the one-time verification keys authenticates them under one root public key. Each pair of child nodes is XORed with public bitmasks before hashing, which lets second-preimage resistance replace collision resistance.

## Notes

- SPHINCS+ removes the state with a hypertree of XMSS-style subtrees and the few-time signature FORS at the leaves — [[BHK+19 - The SPHINCS+ Signature Framework|BHK+19]].
