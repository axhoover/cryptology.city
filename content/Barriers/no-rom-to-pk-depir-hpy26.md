---
type: barrier
status: draft
title: "No oracle-free-encoding reduction from ROM to public-key DEPIR"
aliases: []
id: bar-rom-to-pk-depir-hpy26
hypotheses: [rom]
conclusion: pk-depir
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]]"
rationale:
  class: "HPY26 rule out constructions whose key generation and database encoding make no oracle queries, a restriction on the construction that the vocabulary has no class for."
---

# No oracle-free-encoding reduction from ROM to public-key DEPIR

## Statement

Cryptography used only as a black box, [[random-oracle-model|random oracles]] and virtual black-box obfuscation included, gives no [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] with sublinear query computation in which key generation and the encoding of the database make no queries to the cryptographic oracle — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]]. An [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]] is a public-key one, so none of that kind exists either.

## Notes

- The bound does not cover [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]], whose encoding may depend on client-private state, and it is incomparable with the bound for passive-server SK-DEPIR from one-way functions ([[no-owf-to-passive-sk-depir-lmw25|No fully-black-box reduction from OWF to passive-server SK-DEPIR]]) — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
- Unkeyed DEPIR exists under [[learning-with-errors#ring-lwe|Ring-LWE]] ([[lwe-to-depir-lmw23|Ring-LWE ⇒ Unkeyed DEPIR]]) — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]].
- For PIR with client preprocessing, a client storing $s$ bits needs $\Omega(n/s)$ amortized online computation over $k = \Omega(s)$ queries in the same black-box setting — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
