---
type: reduction
status: draft
title: "Hash function ⇒ Hash-based signatures"
aliases: []
id: red-hash-function-to-hash-based-signatures
kind: implication
hypotheses: [hash-function]
conclusion: xmss
class: fully-black-box
model: standard
source:
  - "[[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]]"
security-loss: ""
---

# Hash function ⇒ Hash-based signatures

[[hash-function|Hash function]] implies [[digital-signature#hash-based-signatures|Hash-based signatures]].

## Statement

XMSS is a forward-secure many-time [[digital-signature#hash-based-signatures|hash-based signature scheme]] whose EU-CMA security reduces to second-preimage resistance of a [[hash-function|hash function]] family and pseudorandomness of a function family — [[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]]. SPHINCS+ removes the state with a hypertree of XMSS-style subtrees and the few-time signature FORS at the leaves — [[BHK+19 - The SPHINCS+ Signature Framework|BHK+19]].

## Sketch

A Winternitz one-time key signs each message; a Merkle tree over the one-time verification keys authenticates them under a single root public key, and bitmasked hashing lets second-preimage resistance replace collision resistance.

## Notes

`class: fully-black-box`: XMSS calls the hash family and the PRF only as oracles (Winternitz chains, L-trees, Merkle tree), and the reduction embeds a second-preimage or PRF challenge and runs every EU-CMA forger as an oracle. BDH11 name no RTV class; the classification is from this proof shape.

- Conclusion `xmss` is a variant id on digital-signature naming a concrete scheme, not a model object; it has no page of its own.
