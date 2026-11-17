---
type: reduction
status: draft
title: "Differing-inputs obfuscation (diO) ⇒ iO"
aliases: []
id: red-differing-inputs-obfuscation-dio-to-io
kind: implication
hypotheses: [differing-inputs-obfuscation]
conclusion: io
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity map on obfuscators, and an iO distinguisher for a functionally equivalent pair is used unchanged as a diO adversary for the sampler that outputs that pair."
---

# Differing-inputs obfuscation (diO) ⇒ iO

## Statement

Take [[indistinguishability-obfuscation#differing-inputs-obfuscation-dio|differing-inputs obfuscation]] against non-uniform samplers, difference-finders and distinguishers. Then a differing-inputs obfuscator for a circuit class is an [[indistinguishability-obfuscation|indistinguishability obfuscator]] for the same class, with the same advantage — folklore.

## Sketch

For functionally equivalent circuit families $\{C_{0,\secpar}\}_\secpar, \{C_{1,\secpar}\}_\secpar$, the sampler that hard-wires the pair and outputs $(C_{0,\secpar}, C_{1,\secpar})$ with empty auxiliary input is efficient as a non-uniform algorithm, and it is differing-inputs-hard because no input differs. Under the identity map, the diO guarantee for this sampler is the iO guarantee for the pair, and an iO distinguisher is used unchanged as a diO distinguisher. The families need not be computable, so a uniform sampler need not exist for them.

## Notes

- The converse is known only in restricted form: [[indistinguishability-obfuscation|iO]] for a class implies diO for pairs of circuits in the class that differ on at most polynomially many inputs — [[BCP14 - On Extractability Obfuscation|BCP14]].
- If a special-purpose obfuscator exists for a specific circuit family, general-purpose diO with arbitrary auxiliary input does not exist — [[GGHW14 - On the Implausibility of Differing-Inputs Obfuscation and Extractable Witness Encryption with Auxiliary Input|GGHW14]].
