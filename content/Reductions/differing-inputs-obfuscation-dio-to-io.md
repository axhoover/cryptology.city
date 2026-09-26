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
---

# Differing-inputs obfuscation (diO) ⇒ iO

[[indistinguishability-obfuscation#differing-inputs-obfuscation-dio|Differing-inputs obfuscation (diO)]] implies [[indistinguishability-obfuscation|iO]].

## Statement

A [[indistinguishability-obfuscation#differing-inputs-obfuscation-dio|differing-inputs obfuscator]] for a circuit class is an [[indistinguishability-obfuscation|indistinguishability obfuscator]] for the same class: functionally equivalent circuits admit no differing input, so the constant sampler outputting such a pair is differing-inputs-hard and the diO guarantee applies to it — folklore.

## Notes

`class: fully-black-box`: Identity construction: the diO obfuscator is used unchanged as the iO obfuscator. The reduction is fixed: an iO distinguisher for a functionally equivalent pair is directly a diO adversary for the constant sampler outputting that pair.

- The converse is known only in restricted form: [[indistinguishability-obfuscation|iO]] for a class implies diO for pairs of circuits in the class that differ on at most polynomially many inputs — [[BCP14 - On Extractability Obfuscation|BCP14]]
- Assuming a special-purpose obfuscator for a specific circuit family, general-purpose diO with arbitrary auxiliary input does not exist — [[GGHW14 - On the Implausibility of Differing-Inputs Obfuscation and Extractable Witness Encryption with Auxiliary Input|GGHW14]]
