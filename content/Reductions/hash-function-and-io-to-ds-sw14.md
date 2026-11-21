---
type: reduction
status: draft
title: "OWF + iO ⇒ Selectively unforgeable DS"
aliases: []
id: red-hash-function-and-io-to-ds-sw14
kind: implication
hypotheses: [owf, sampler-io]
conclusion: selective-ds
class: free
model: standard
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: "additive: the forging probability is at most the iO advantage plus the punctured-PRF advantage plus the probability of inverting the one-way function, with the punctured PRF built from the one-way function at a polynomial loss"
rationale:
  class: "The verification key obfuscates a circuit containing the code of a puncturable PRF built from the one-way function, so the construction is not black-box in the one-way function."
---

# OWF + iO ⇒ Selectively unforgeable DS

## Statement

If [[indistinguishability-obfuscation#io-for-sampled-circuit-pairs|iO for sampled circuit pairs]] of polynomial-size circuits and a [[hash-function#preimage-resistance-one-wayness|one-way function]] exist, there is a [[digital-signature|signature scheme]] with short signatures that is [[digital-signature#selective-unforgeability|selectively unforgeable]] under chosen-message attack: for all efficient $\calA$ that commit to a target message $m^*$ before seeing $\vk$ and then query signatures on messages other than $m^*$, the probability that $\calA$ outputs a valid signature on $m^*$ is negligible — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]. The scheme is perfectly correct by the functionality preservation of iO, and its message space is $\bits^{\ell}$ for the input length $\ell = \ell(\secpar) \ge 1$ of the puncturable PRF $F(K, \cdot)$ it signs with, which depends on $\secpar$ only — standard. The iO hybrid samples $K$ and the forger's target $m^*$, and its distinguisher needs the punctured key $K\{m^*\}$, which the sampler passes on as auxiliary input, to answer the forger's signing queries; the game for a fixed pair of circuit families cannot supply it to a uniform distinguisher — standard.

## Sketch

The signing key is a puncturable PRF key $K$, the signature on $m$ is $F(K, m)$, and $\vk$ obfuscates the program accepting $(m, \sigma)$ iff $f(\sigma) = f(F(K, m))$, for a one-way function $f$. The reduction punctures $K$ at $m^*$ and hardcodes $y^* = f(F(K, m^*))$, which iO hides because the program's input–output behavior is unchanged; punctured-PRF security then replaces $F(K, m^*)$ by a uniform value, so a forgery on $m^*$ is a preimage of $y^*$ under $f$.

## Notes

- One-way functions alone give adaptively EUF-CMA-unforgeable signatures ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]; the contribution of the iO construction is short signatures.
