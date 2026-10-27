---
type: barrier
status: draft
title: "No fully-black-box reduction from OWF to passive-server SK-DEPIR"
aliases: []
id: bar-owf-to-passive-sk-depir-lmw25
hypotheses: [owf]
conclusion: passive-sk-depir
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]"
rationale:
  class: "LMW25 rule out black-box constructions from one-way functions without fixing the RTV04 notion, and fully-black-box, the narrowest class, is the weakest claim that covers them."
---

# No fully-black-box reduction from OWF to passive-server SK-DEPIR

## Statement

There is no black-box construction from [[hash-function#preimage-resistance-one-wayness|one-way functions]] of two-round [[doubly-efficient-pir#passive-server-sk-depir|passive-server]] [[doubly-efficient-pir#secret-key-depir|SK-DEPIR]], in which the server simply outputs the requested locations of the preprocessed data structure — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]. In any SK-DEPIR construction, black-box use of essentially every generic primitive (key agreement, oblivious transfer, indistinguishability obfuscation) and idealized primitive (random oracles, generic multilinear groups, virtual black-box obfuscation) can be replaced by black-box use of one-way functions, so none of them gives a black-box construction of two-round passive-server SK-DEPIR either — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].

## Notes

- All SK-DEPIR schemes known to LMW25 have a passive server; they rest on [[learning-with-errors#ring-lwe|Ring-LWE]] ([[lwe-to-depir-lmw23|Ring-LWE ⇒ Unkeyed DEPIR]]) or on non-standard code-based assumptions ([[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ SK-DEPIR]]) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].
- LMW25 conjecture that black-box one-way functions give no SK-DEPIR at all, with an active server included — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].
- Cryptography used only as a black box, random oracles and VBB obfuscation included, gives no [public-key DEPIR](doubly-efficient-pir#public-key-depir), and hence no unkeyed DEPIR, with sublinear query computation when key generation and the database encoding make no oracle queries. That bound does not cover secret-key DEPIR, whose encoding may depend on client-private state, and it is incomparable with LMW25's passive-server bound — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
