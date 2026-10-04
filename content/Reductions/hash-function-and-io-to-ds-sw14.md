---
type: reduction
status: draft
title: "OWF + iO ⇒ DS"
aliases: []
id: red-hash-function-and-io-to-ds-sw14
kind: implication
hypotheses: [owf, io]
conclusion: ds
class: free
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
rationale:
  class: "The verification key obfuscates a circuit containing the code of a puncturable PRF built from the one-way function, so the construction is not black-box in the one-way function."
---

# OWF + iO ⇒ DS

## Statement

If [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits and a [[hash-function#preimage-resistance-one-wayness|one-way function]] exist, there is a [[digital-signature|signature scheme]] with short signatures that is selectively [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable: for all efficient $\calA$ that commit to a target message $m^*$ before seeing $\vk$ and then query signatures on messages other than $m^*$, the probability that $\calA$ outputs a valid signature on $m^*$ is negligible — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Sketch

The signature on $m$ is $F(K, m)$ for a puncturable PRF key $K$, and $\vk$ obfuscates the program accepting $(m, \sigma)$ iff $f(\sigma) = f(F(K, m))$, for a one-way function $f$. The reduction punctures $K$ at $m^*$ and hardcodes $y^* = f(F(K, m^*))$, which iO hides because the program's input–output behavior is unchanged; punctured-PRF security then replaces $F(K, m^*)$ by a uniform value, so a forgery on $m^*$ is a preimage of $y^*$ under $f$.

## Notes

- One-way functions alone give adaptively EUF-CMA-unforgeable signatures ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]; the contribution of the iO construction is short signatures.
