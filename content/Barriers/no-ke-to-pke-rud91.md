---
type: barrier
status: draft
title: "No relativizing reduction from KE to PKE"
aliases: []
id: bar-ke-to-pke-rud91
hypotheses: [ke]
conclusion: pke
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
oracle: "Rudich's oracle relative to which three-message secret agreement exists and two-message secret agreement does not"
source:
  - "[[Rud91 - The Use of Interaction in Public Cryptosystems (Extended Abstract)|Rud91]]"
rationale:
  class: "A construction and security proof that hold relative to every oracle hold relative to Rud91's, under which three-message key agreement exists and PKE, which would give two-message key agreement, does not."
---

# No relativizing reduction from KE to PKE

## Statement

For every $k$ there is an oracle relative to which $k$-message [[key-exchange|key agreement]] exists and $(k-1)$-message key agreement does not — [[Rud91 - The Use of Interaction in Public Cryptosystems (Extended Abstract)|Rud91]]. Two-message key agreement and [[public-key-encryption|PKE]] imply each other by constructions that relativize — folklore — so the oracle for $k = 3$ rules out every relativizing, and in particular every fully-black-box, construction of PKE from key agreement.

## Sketch

PKE gives two-message key agreement: Alice sends a public key and Bob an encryption of a uniform key. Conversely, the first message of a two-message protocol serves as a public key, and Bob's reply together with his key, used as a one-time pad, is a ciphertext — folklore.

## Notes

- The same oracle separates key agreement from trapdoor functions: [[no-ke-to-tdp-rud91|No relativizing reduction from KE to TDP]] — [[Rud91 - The Use of Interaction in Public Cryptosystems (Extended Abstract)|Rud91]].
- More generally, no relativizing construction turns a $k$-message key-agreement protocol into a $(k-1)$-message one — [[Rud91 - The Use of Interaction in Public Cryptosystems (Extended Abstract)|Rud91]].
