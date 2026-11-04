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
  class: "LMW25's black-box constructions (Definition 2.3) are what RTV04 call fully black-box, as LMW25 note (Remark 4.10)."
---

# No fully-black-box reduction from OWF to passive-server SK-DEPIR

## Statement

There is no black-box construction, in the sense of Definition 2.3, of two-round [[doubly-efficient-pir#passive-server-sk-depir|passive-server SK-DEPIR]] from [[hash-function#preimage-resistance-one-wayness|one-way functions]], nor from any primitive that exists relative to a crypto oracle: no two-round passive-server SK-DEPIR with correctness error at most $1/20$, negligible security error and locality $o(N) + \poly(\secpar)$, the number of positions of the encoded database the server reads per query, exists relative to any crypto oracle — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]] (Theorem 5.1, Corollary 5.2). The syntax is LMW25's: $k \gets \KeyGen(1^\secpar)$ is sampled before $EDB \gets \mathsf{Prep}(1^\secpar, k, DB)$, and the client holds $(N, k, i)$ for $N = \poly(\secpar)$ (Definition 2.1) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]. Every perfectly correct, secret-key private passive-server SK-DEPIR with one query and one response, whose key is sampled without access to $DB$ and whose query-time computation is at most $p(\secpar) + s(n)$ with $s(n) = o(n)$, meets these conditions at each database size $N(\secpar)$ polynomial in $\secpar$. In any SK-DEPIR construction, black-box use of essentially every generic primitive (key agreement, oblivious transfer, indistinguishability obfuscation) and idealized primitive (random oracles, generic multilinear groups, virtual black-box obfuscation) can be replaced by black-box use of one-way functions (Theorem 4.3, Corollary 4.8), so none of them gives a black-box construction of such SK-DEPIR either — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].

## Notes

- A passive-server SK-DEPIR whose key may depend on the database exists with no assumption ($k = DB$, an empty list of positions, and the hint $h = DB[i]$), so the theorem needs a restriction that excludes it — folklore. LMW25's syntax samples the key by $\KeyGen(1^\secpar)$, without access to $DB$, before $\mathsf{Prep}(1^\secpar, k, DB)$ encodes the database, and the client holds only $(N, k, i)$ — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]] (Definition 2.1).
- The proof compiles the scheme into one in which the client has black-box access to a secret random function, splits its key, and adapts the key-length lower bound of [[CHR17 - Towards Doubly Efficient Private Information Retrieval|CHR17]] (Theorem 3), which gives a key of length $\Omega(B)$ against $B$ queries when the locality is $o(N)$ (Lemmas 5.5 and 5.8) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].
- All SK-DEPIR schemes known to LMW25 have a passive server; they rest on [[learning-with-errors#ring-lwe-with-quasi-polynomial-approximation-factors|Ring-LWE]] ([[lwe-to-depir-lmw23|Ring-LWE with quasi-polynomial factors ⇒ Unkeyed DEPIR]]) or on non-standard code-based assumptions ([[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ OLDC]]) — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].
- LMW25 conjecture that black-box one-way functions give no SK-DEPIR at all, with an active server included — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].
- Cryptography used only as a black box, random oracles and VBB obfuscation included, gives no [public-key DEPIR with a sublinear key](doubly-efficient-pir#pk-depir-with-a-sublinear-key), whose key and query-time cost are at most $p(\secpar) \cdot n^c$ ($c < 1$), and hence no unkeyed DEPIR with such query-time cost, when key generation and the database encoding make no oracle queries ([[no-rom-to-pk-depir-hpy26|No oracle-free-encoding reduction from ROM to public-key DEPIR with a sublinear key]]). That bound does not cover secret-key DEPIR, whose encoding may depend on client-private state, and it is incomparable with LMW25's passive-server bound — [[HPY26 - Lower Bounds for PIR with Preprocessing from Blackbox Cryptography|HPY26]].
