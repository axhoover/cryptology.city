---
type: reduction
status: draft
title: "Sub-exponential weakly compact FE ⇒ iO"
aliases: []
id: red-fe-to-io
kind: implication
hypotheses: [subexponential-weakly-compact-fe]
conclusion: io
class: free
model: standard
source:
  - "[[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]]"
security-loss: "factor $2^n$ for $n$-bit inputs; requires sub-exponentially secure FE"
rationale:
  class: "The obfuscator issues FE function keys for circuits that run the FE encryption algorithm, so the construction depends on the scheme's code, not on oracle access to it."
---

# Sub-exponential weakly compact FE ⇒ iO

## Statement

A public-key [[functional-encryption|FE]] scheme for $\classPpoly$ that is single-key, [[functional-encryption#selective-security|selectively]] and [[functional-encryption#sub-exponentially-secure-weakly-compact-fe|sub-exponentially]] secure, and [[functional-encryption#compactness|weakly compact]] (encrypting a message $m$ takes time $s^{1-\varepsilon} \cdot \poly(\secpar, |m|)$ when keys are for circuits of size $s$, for a constant $\varepsilon > 0$) yields [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits — [[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]]. The construction loses a factor $2^n$ on $n$-bit inputs, hence the sub-exponential hypothesis.

## Notes

- Independently, iO follows from a single-key, selectively and sub-exponentially secure FE scheme for $\mathrm{NC}^1$ that is compact, with encryption time polynomial in $\secpar$ and the message length alone, independent of the function size and output length — [[AJ15 - Indistinguishability Obfuscation from Compact Functional Encryption|AJ15]].
