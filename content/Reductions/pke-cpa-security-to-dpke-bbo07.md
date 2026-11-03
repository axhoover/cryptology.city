---
type: reduction
status: draft
title: "CPA-secure PKE ⇒ D-PKE (Encrypt-with-Hash, random oracle model)"
aliases: []
id: red-pke-cpa-security-to-dpke-bbo07
kind: implication
hypotheses: [pke-cpa-security]
conclusion: dpke
class: fully-black-box
model: rom
source:
  - "[[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]]"
security-loss: ""
rationale:
  class: "The construction calls the PKE's algorithms only as oracles, and the reduction runs the PRIV adversary only as an oracle against the PKE."
  model: "The reduction answers the adversary's hash queries itself and uses that the encryption coins are uniform unless the hash is queried at the public key and an encrypted message."
---

# CPA-secure PKE ⇒ D-PKE (Encrypt-with-Hash, random oracle model)

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|PKE]] scheme and $H$ a hash function, modelled as a [[random-oracle-model|random oracle]], with outputs of the length of $\Enc$'s coins. The Encrypt-with-Hash scheme, with the same key generation and decryption and

$$
\Enc'(\pk, m) := \Enc(\pk, m; H(\pk \| m)),
$$

is a [[deterministic-public-key-encryption#priv-security|PRIV-secure]] [[deterministic-public-key-encryption|D-PKE]] for every min-entropy $\mu = \omega(\log \secpar)$ — [[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]].

## Sketch

Unless the adversary queries $H$ at $\pk \| x[i]$ for an encrypted message $x[i]$, every ciphertext is a CPA encryption under fresh uniform coins, and the two worlds differ only in which independent vector is encrypted. The message finder does not see $\pk$, and the guesser, which sees only such ciphertexts, hits an encrypted message with probability at most its number of queries times $v \cdot 2^{-\mu}$ plus a CPA advantage.
