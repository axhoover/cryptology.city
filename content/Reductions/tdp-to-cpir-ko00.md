---
type: reduction
status: draft
title: TDP ⇒ cPIR (Kushilevitz–Ostrovsky)
aliases: []
id: red-tdp-to-cpir-ko00
kind: implication
hypotheses: [tdp]
conclusion: cpir
class: unstated
model: standard
source:
  - "[[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]]"
security-loss: ""
---

# TDP ⇒ cPIR (Kushilevitz–Ostrovsky)

## Statement

If [[trapdoor-permutation|trapdoor permutations]] exist, there is a [[single-server-private-information-retrieval|single-server PIR]] scheme for $n$-bit databases with total communication less than $n$: the server's reply has $n - cn/\secpar$ bits for a constant $c > 0$ — [[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]]. The protocol is interactive and uses interactive hashing.

## Notes

- The saving cannot be improved much by black-box means: in every fully-black-box construction of single-server PIR from trapdoor permutations, the server sends $\Omega(n)$ bits — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
- With [[cpir-to-ot-dmo00|cPIR ⇒ OT]], the scheme gives 1-out-of-$n$ OT with communication below $n$ from trapdoor permutations — [[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]].
- Polylogarithmic communication is known only from specific assumptions, such as [[hiding-to-cpir|Φ-hiding]] — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]].
