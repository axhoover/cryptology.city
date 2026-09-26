---
type: reduction
status: draft
title: "Hash function + iO ⇒ DS"
aliases: []
id: red-hash-function-and-io-to-ds-sw14
kind: implication
hypotheses: [hash-function, io]
conclusion: ds
class: free
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
---

# Hash function + iO ⇒ DS

[[hash-function|Hash function]] together with [[indistinguishability-obfuscation|iO]] implies short, selectively secure [[digital-signature|DS]].

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits together with a [[hash-function|one-way function]] implies short [[digital-signature|digital signatures]] that are selectively secure: the forger commits to its target message before seeing $\vk$ — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Sketch

The signing key is a puncturable PRF key $K$, the signature on $m$ is $\sigma = F(K, m)$, and the verification key is an obfuscation of the program accepting $(m, \sigma)$ iff $f(\sigma) = f(F(K, m))$ for a one-way function $f$. The reduction punctures $K$ at the target message $m^*$ and hardcodes $y^* = f(F(K, m^*))$, which iO hides because the program's input–output behavior is unchanged; punctured-PRF security then replaces $F(K, m^*)$ by a uniform value, so a forgery on $m^*$ is a preimage of $y^*$ under $f$.

## Notes

`class: free`: The construction hands iO a circuit containing the code of a puncturable PRF built from the one-way function, so it is not black-box in the OWF hypothesis; iO itself is applied only to circuits. Neither SW14 nor any follow-up places the reduction in the RTV04 hierarchy, so the broadest class is recorded.

- One-way functions alone suffice for adaptively EUF-CMA-secure signatures — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]; the iO construction's contribution is short signatures.
