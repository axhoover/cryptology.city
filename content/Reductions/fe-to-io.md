---
type: reduction
status: draft
title: "FE ⇒ iO"
aliases: []
id: red-fe-to-io
kind: implication
hypotheses: [functional-encryption]
conclusion: io
class: free
model: standard
source:
  - "[[AJ15 - Indistinguishability Obfuscation from Compact Functional Encryption|AJ15]]"
  - "[[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]]"
security-loss: "factor $2^n$ for $n$-bit inputs; requires sub-exponentially secure FE"
---

# FE ⇒ iO

Sub-exponentially secure, single-key, weakly compact public-key [[functional-encryption|FE]] implies [[indistinguishability-obfuscation|iO]].

## Statement

A public-key [[functional-encryption|FE]] scheme for $\classPpoly$ that is single-key, sub-exponentially secure, and weakly compact — encryption time sublinear in the size of the supported circuits — yields [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits [[AJ15 - Indistinguishability Obfuscation from Compact Functional Encryption|AJ15]], [[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]]. The construction runs the FE encryption algorithm inside the functions for which keys are issued and loses a factor $2^n$ on $n$-bit inputs, hence the sub-exponential hypothesis.

## Sketch

The obfuscation of an $n$-bit-input circuit $C$ is a ciphertext of the empty input prefix together with a chain of function keys, one per input bit: decrypting a ciphertext of prefix $x_{<i}$ with key $i$ yields ciphertexts of $x_{<i}0$ and $x_{<i}1$ under the next FE instance, computed by running the FE encryption algorithm inside the function, and a final key evaluates $C$ on the fully encrypted input. A hybrid over the $2^n$ inputs reduces obfuscation security to FE security.

## Notes

`class: free`: Both transformations are non-black-box in the hypothesis: the obfuscator issues FE function keys for circuits that contain and run the code of the FE encryption algorithm, so the construction depends on the FE implementation, not on oracle access to it. Neither paper places the reduction in the RTV taxonomy; `free` records the proven implication without a technique restriction.
