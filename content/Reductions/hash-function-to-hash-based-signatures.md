---
type: reduction
status: draft
title: "Hash function + PRF ⇒ Stateful DS (XMSS)"
aliases: []
id: red-hash-function-to-hash-based-signatures
kind: implication
hypotheses: [hash-function, prf]
conclusion: bounded-stateful-ds
class: fully-black-box
model: standard
source:
  - "[[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]]"
security-loss: ""
rationale:
  class: "XMSS calls the hash family and the PRF only as oracles, and the reduction embeds a second-preimage or PRF challenge and runs any forger as an oracle."
---

# Hash function + PRF ⇒ Stateful DS (XMSS)

## Statement

XMSS is a hash-based [[digital-signature#stateful-signatures|stateful signature scheme]]: a Merkle tree of height $H$ over $2^H$ Winternitz one-time verification keys authenticates them under one root, the signing key holds the index of the next unused one-time key, and the scheme signs $2^H$ messages — [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Sections 1 and 4.1). In the original version, XMSS is unforgeable for $2^H$ signatures, and forward secure, if its hash function family is [[hash-function#second-preimage-resistance|second-preimage resistant]] and its function family is a [[pseudorandom-function|PRF]] — [[BDH11 - XMSS A Practical Forward Secure Signature Scheme Based on Minimal Security Assumptions|BDH11]]. Key generation computes the root, which depends on all $2^H$ leaves, so an efficient $\KeyGen$ forces $2^H \le \poly(\secpar)$; for a polynomial $T$, the height $H = \lceil \log_2 T \rceil$ gives a scheme for $T$ signatures — standard.

## Sketch

Each message is signed under a fresh Winternitz one-time key, and a Merkle tree over the one-time verification keys authenticates them under one root public key. Each pair of child nodes is XORed with public bitmasks before hashing, which lets second-preimage resistance replace collision resistance.

## Notes

- RFC 8391 specifies XMSS with the later improvements of Hülsing, Rijneveld and Song (PKC 2016), and the multi-tree variant XMSS^MT. The security proof it refers to, by the same authors, asks for post-quantum multi-function multi-target second-preimage resistance of the keyed hash functions $F$ and $H$, a statistical condition on $F$, a post-quantum PRF, and post-quantum multi-target extended target collision resistance of the message hash $H_{\mathrm{msg}}$; it models the PRF as a random oracle where the PRF generates bitmasks and hash keys, and it treats a message compression other than the RFC's — [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Sections 1 and 9.1). NIST approves XMSS and XMSS^MT, with LMS and HSS, as stateful hash-based signatures — [[CAD+20 - Recommendation for Stateful Hash-Based Signature Schemes|CAD+20]].
- With collision resistance and the plain Merkle tree: [[hash-function-and-hash-based-signatures-to-ds-mer89|CRHF + One-time signature ⇒ Stateful DS (Merkle)]] — [[Mer89 - A Certified Digital Signature|Mer89]].
- SPHINCS+ removes the state with a hypertree of XMSS-style subtrees and the few-time signature FORS at the leaves — [[BHK+19 - The SPHINCS+ Signature Framework|BHK+19]]; NIST standardizes it as [[digital-signature#slh-dsa|SLH-DSA]] — [[NIST24c - Stateless Hash-Based Digital Signature Standard|NIST24c]] (Sections 1.2 and 3).
