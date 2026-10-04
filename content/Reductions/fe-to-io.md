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
rationale:
  class: "The obfuscator issues FE function keys for circuits that run the FE encryption algorithm, so the construction depends on the scheme's code, not on oracle access to it."
---

# FE ⇒ iO

## Statement

A public-key [[functional-encryption|FE]] scheme for $\classPpoly$ that is single-key, sub-exponentially secure and weakly compact (encryption time sublinear in the size of the supported circuits) yields [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits — [[AJ15 - Indistinguishability Obfuscation from Compact Functional Encryption|AJ15]], [[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]]. The construction loses a factor $2^n$ on $n$-bit inputs, hence the sub-exponential hypothesis.

## Sketch

The obfuscation of an $n$-bit-input circuit $C$ is an FE ciphertext of $C$ with the empty input prefix together with a chain of function keys, one per input bit: decrypting a ciphertext of $C$ with prefix $x_{<i}$ under key $i$ yields ciphertexts of $C$ with prefixes $x_{<i}0$ and $x_{<i}1$ under the next FE instance, computed by running the FE encryption algorithm inside the function, and a final key for the universal circuit maps a ciphertext of $C$ with input $x$ to $C(x)$. A hybrid over the $2^n$ inputs reduces obfuscation security to FE security.
