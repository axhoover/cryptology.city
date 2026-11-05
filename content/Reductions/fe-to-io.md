---
type: reduction
status: draft
title: "Compact FE ⇒ iO"
aliases: []
id: red-fe-to-io
kind: implication
hypotheses: [compact-fe]
conclusion: io
class: free
model: standard
source:
  - "[[AJ15 - Indistinguishability Obfuscation from Compact Functional Encryption|AJ15]]"
  - "[[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]]"
security-loss: "factor $2^n$ for $n$-bit inputs; requires sub-exponentially secure FE"
rationale:
  class: "The obfuscator issues FE function keys for circuits that run the FE encryption algorithm, so the construction depends on the scheme's code, not on oracle access to it."
---

# Compact FE ⇒ iO

## Statement

A public-key [[functional-encryption|FE]] scheme for $\classPpoly$ that is single-key, [[functional-encryption#selective-security|selectively]] and sub-exponentially secure, and [[functional-encryption#compactness|weakly compact]] (encrypting a message $m$ takes time $s^{1-\varepsilon} \cdot \poly(\secpar, |m|)$ when keys are for circuits of size $s$, for a constant $\varepsilon > 0$) yields [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits — [[AJ15 - Indistinguishability Obfuscation from Compact Functional Encryption|AJ15]], [[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]]. The construction loses a factor $2^n$ on $n$-bit inputs, hence the sub-exponential hypothesis.
