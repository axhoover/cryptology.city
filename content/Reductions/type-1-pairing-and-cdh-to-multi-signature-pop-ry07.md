---
type: reduction
status: draft
title: "Type 1 pairing + CDH ⇒ Multi-signatures with proofs of possession"
aliases: []
id: red-type-1-pairing-and-cdh-to-multi-signature-pop-ry07
kind: implication
hypotheses: [type-1-pairing, cdh]
conclusion: multi-signature-pop
class: unstated
model: rom
source:
  - "[[RY07 - The Power of Proofs-of-Possession Securing Multiparty Signatures against Rogue-Key Attacks|RY07]]"
security-loss: ""
---

# Type 1 pairing + CDH ⇒ Multi-signatures with proofs of possession

## Statement

[[RY07 - The Power of Proofs-of-Possession Securing Multiparty Signatures against Rogue-Key Attacks|RY07]] define a registered-key model that covers both the knowledge-of-secret-key assumption and key registration with a proof of possession (POP). In it, Boldyreva's [[multi-signature|multisignature]] over a [[pairings#type-1|symmetric pairing]] group in which [[computational-diffie-hellman|CDH]] is hard, with each public key registered under a simple POP, is unforgeable in the random oracle model ([[multi-signature#proof-of-possession-model|POP model]]) — [[RY07 - The Power of Proofs-of-Possession Securing Multiparty Signatures against Rogue-Key Attacks|RY07]].

## Notes

- Simple POPs also give security for the multisignature of Lu, Ostrovsky, Sahai, Shacham and Waters and for a two-user ring signature of Bender, Katz and Morselli — [[RY07 - The Power of Proofs-of-Possession Securing Multiparty Signatures against Rogue-Key Attacks|RY07]].
- Boldyreva's scheme was first proved secure under the stronger requirement that each key be registered with its secret key ([[type-1-pairing-and-cdh-to-multi-signature-kosk-bol03|Type 1 pairing + CDH ⇒ Multi-signatures in the KOSK model]]) — [[Bol03 - Threshold Signatures, Multisignatures and Blind Signatures Based on the Gap-Diffie-Hellman-Group Signature Scheme|Bol03]].
