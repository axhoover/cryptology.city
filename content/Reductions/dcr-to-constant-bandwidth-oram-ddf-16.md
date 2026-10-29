---
type: reduction
status: draft
title: "DCR ⇒ constant-bandwidth ORAM (Onion ORAM)"
aliases: []
id: red-dcr-to-constant-bandwidth-oram-ddf-16
kind: implication
hypotheses: [dcr]
conclusion: constant-bandwidth-oram
class: unstated
model: standard
source:
  - "[[DDF+16 - Onion ORAM A Constant Bandwidth Blowup Oblivious RAM|DDF+16]]"
security-loss: ""
---

# DCR ⇒ constant-bandwidth ORAM (Onion ORAM)

## Statement

If [[decisional-composite-residuosity|DCR]] holds, Onion ORAM is an [[oblivious-ram#oram-with-server-computation|ORAM with server computation]] secure against a semi-honest server. Instantiated with the layered Damgård–Jurik cryptosystem of [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]], it has $O(1)$ worst-case bandwidth blowup and uses polylogarithmic server computation to get around the logarithmic lower bound on bandwidth blowup; it is a [[oblivious-ram#constant-bandwidth-oram|constant-bandwidth ORAM]] — [[DDF+16 - Onion ORAM A Constant Bandwidth Blowup Oblivious RAM|DDF+16]]. The logarithmic bound for online ORAM covers only servers that store and return data ([[no-oram-to-sublogarithmic-oram-ln18|No reduction from ORAM to sublogarithmic-overhead ORAM]]), so it does not apply — [[LN18 - Yes, There is an Oblivious RAM Lower Bound!|LN18]]. DDF+16 also instantiate it with a BGV-style somewhat homomorphic encryption scheme without bootstrapping, and give techniques against a malicious server that avoid SNARKs — [[DDF+16 - Onion ORAM A Constant Bandwidth Blowup Oblivious RAM|DDF+16]].

## Notes

- It is the first ORAM with constant bandwidth blowup under standard assumptions, even against a semi-honest server — [[DDF+16 - Onion ORAM A Constant Bandwidth Blowup Oblivious RAM|DDF+16]].
