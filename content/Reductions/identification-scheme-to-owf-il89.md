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

## Sketch

The one-way function is $f(r) = \pk$ for $(\pk, \sk) \gets \KeyGen(1^\secpar; r)$. If one-way functions do not exist, $f$ is not even distributionally one-way, so for infinitely many $\secpar$ an efficient inverter returns coins $r'$ nearly uniform among the preimages of $\pk$; the secret key output by $\KeyGen(1^\secpar; r')$ is then distributed almost as the prover's secret key given $\pk$, and the impersonator runs the honest prover with it — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

## Notes

- Signature schemes are treated the same way: [[ds-to-hash-function|DS ⇒ OWF]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
