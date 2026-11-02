---
type: barrier
status: draft
title: "No fully-black-box reduction from OWF to passive-server SK-DEPIR with a database-independent key"
aliases: []
id: bar-owf-to-passive-sk-depir-lmw25
hypotheses: [owf]
conclusion: passive-sk-depir-independent-key
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

# No fully-black-box reduction from OWF to passive-server SK-DEPIR with a database-independent key

## Statement

There is no black-box construction from [[hash-function#preimage-resistance-one-wayness|one-way functions]] of two-round [[doubly-efficient-pir#passive-server-sk-depir-with-a-database-independent-key|passive-server SK-DEPIR with a database-independent key]], whose query-time communication and computation are at most $p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$, in which the client's key is sampled by $\KeyGen(1^\secpar)$ before the database is encoded and the server simply outputs the requested locations of the preprocessed data structure — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]. The syntax of key generation followed by encoding, $k \gets \KeyGen(1^\secpar)$ and then $EDB \gets \mathsf{Prep}(1^\secpar, k, DB)$, is LMW25's (Definition 2.1) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]. In any SK-DEPIR construction, black-box use of essentially every generic primitive (key agreement, oblivious transfer, indistinguishability obfuscation) and idealized primitive (random oracles, generic multilinear groups, virtual black-box obfuscation) can be replaced by black-box use of one-way functions, so none of them gives a black-box construction of such SK-DEPIR either — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].

## Notes

- A passive-server SK-DEPIR whose key may depend on the database exists with no assumption ($k = DB$, an empty list of positions, and the hint $h = DB[i]$), so the theorem needs a restriction that excludes it — folklore. LMW25's syntax samples the key before the database is encoded — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]] (Definition 2.1).
- All SK-DEPIR schemes known to LMW25 have a passive server; they rest on [[learning-with-errors#ring-lwe|Ring-LWE]] ([[lwe-to-depir-lmw23|Ring-LWE ⇒ Unkeyed DEPIR]]) or on non-standard code-based assumptions ([[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ SK-DEPIR]]) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].
- LMW25 conjecture that black-box one-way functions give no SK-DEPIR at all, with an active server included — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].
- Cryptography used only as a black box, random oracles and VBB obfuscation included, gives no [public-key DEPIR with a sublinear key](doubly-efficient-pir#pk-depir-with-a-sublinear-key), whose key and query-time cost are at most $p(\secpar) \cdot n^c$ ($c < 1$), and hence no unkeyed DEPIR with such query-time cost, when key generation and the database encoding make no oracle queries ([[no-rom-to-pk-depir-hpy26|No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key]]). That bound does not cover secret-key DEPIR, whose encoding may depend on client-private state, and it is incomparable with LMW25's passive-server bound — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
