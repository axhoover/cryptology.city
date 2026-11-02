---
type: barrier
status: draft
title: "No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key"
aliases: []
id: bar-rom-to-pk-depir-hpy26
hypotheses: [rom]
conclusion: pk-depir-sublinear-key
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

# No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key

## Statement

Cryptography used only as a black box, [[random-oracle-model|random oracles]] and virtual black-box obfuscation included, gives no [public-key DEPIR with a sublinear key](doubly-efficient-pir#pk-depir-with-a-sublinear-key) and sublinear query cost in which key generation and the encoding of the database make no queries to the cryptographic oracle; HPY26 state it for public keys of length $o(n)$ and do not rule out public keys of length $\Omega(n)$ — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]]. An [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]] with such query cost is one with an empty key, so black-box cryptography gives no such unkeyed DEPIR with oracle-free encoding either.

## Notes

- The bound does not cover [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]], whose encoding may depend on client-private state — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]]. [[no-owf-to-passive-sk-depir-lmw25|LMW25's bound]] restricts the online protocol (two rounds, passive server) and allows any encoding, while this one allows any online protocol and requires an oracle-free encoding, so neither implies the other — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]], [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
- HPY26 derive the public-key bound from the unkeyed one by a reduction that needs the public key to have length $o(n)$ — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
- Unkeyed DEPIR exists under [[learning-with-errors#ring-lwe|Ring-LWE]] ([[lwe-to-depir-lmw23|Ring-LWE ⇒ Unkeyed DEPIR]]) — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]].
- Black-box cryptography is modeled as a crypto oracle: a stateless, deterministic polynomial-time machine with oracle access to a secret random function, which can implement public-key fully homomorphic encryption with keys of polynomial size — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]], following [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]. The online protocol is unrestricted.
- For PIR with client preprocessing, a client storing $s$ bits needs $\Omega(n/s)$ amortized online computation over $k = \Omega(s)$ queries in the same black-box setting — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
