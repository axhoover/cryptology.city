---
type: reduction
status: draft
title: ID ⇒ OWF
aliases: []
id: red-identification-scheme-to-owf-il89
kind: implication
hypotheses: [identification-scheme]
conclusion: owf
class: fully-black-box
model: standard
source:
  - "[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]"
security-loss: "polynomial"
rationale:
  class: "The one-way function evaluates the key generator only as an oracle, and the impersonation attack runs a distributional inverter for it, obtained from any inverter by IL89's transformation, only as an oracle."
---

# ID ⇒ OWF

## Statement

If an [[identification-scheme|identification scheme]] secure against impersonation exists, then a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

## Notes

- The proof distributionally inverts the map from key-generation coins to the public key: a nearly uniform preimage yields a secret key distributed almost as the prover's, with which the impersonator runs the honest prover — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
- Signature schemes are treated the same way: [[ds-to-hash-function|DS ⇒ OWF]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
