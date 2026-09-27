---
type: reduction
status: draft
title: "Hash function + iO ⇒ PPAD hardness"
aliases: []
id: red-subclasses-to-hash-function
kind: implication
hypotheses: [hash-function, io]
conclusion: ppad-hardness
class: free
model: standard
source:
  - "[[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]]"
security-loss: ""
---

# Hash function + iO ⇒ PPAD hardness

[[hash-function|Hash function]] together with [[indistinguishability-obfuscation|iO]] implies [[total-function-np#subclasses|PPAD hardness]].

## Statement

Sub-exponentially secure [[indistinguishability-obfuscation|iO]] together with sub-exponentially secure [[hash-function|one-way functions]] implies that PPAD is hard: there is an efficiently sampleable distribution of PPAD instances on which every efficient algorithm finds a solution with only negligible probability — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]].

## Notes

`class: free`: the obfuscated circuits contain the code of a puncturable PRF built from the one-way function, so the construction is not black-box in the OWF. BPR15 do not place it in the RTV04 hierarchy, so the broadest class is recorded (as on the SW14 iO pages).

- Both hypotheses must be sub-exponentially secure; the hypothesis nodes carry no security level, so the requirement is stated here.
- The slug and id are kept from a migrated edge that had this implication inverted (PPAD hardness ⇒ CRHF, which is not known).
