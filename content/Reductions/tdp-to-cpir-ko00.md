---
type: reduction
status: draft
title: TDP ⇒ cPIR with total communication below n (Kushilevitz–Ostrovsky)
aliases: []
id: red-tdp-to-cpir-ko00
kind: implication
hypotheses: [tdp]
conclusion: total-nontrivial-cpir
class: unstated
model: standard
source:
  - "[[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]]"
security-loss: ""
---

# TDP ⇒ cPIR with total communication below n (Kushilevitz–Ostrovsky)

## Statement

If [[trapdoor-permutation|trapdoor permutations]] exist, there is a perfectly correct [[single-server-private-information-retrieval|single-server PIR]] scheme for $n$-bit databases in which the client sends $O(\secpar^2)$ bits and the server $n - cn/\secpar$ bits, for any constant $c$, so [total communication is below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n) once $n$ is large relative to $\secpar$, for example $\secpar = n^{\varepsilon}$ for small $\varepsilon$ — [[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]]. The protocol is interactive and uses interactive hashing.

## Notes

- The saving cannot be improved much by black-box means: in every polynomially-preserving construction of single-server PIR that uses trapdoor permutations only as a black box, the server sends $\Omega(n)$ bits ([[no-tdp-to-one-round-sublinear-cpir-hhs08|No polynomially-preserving black-box reduction from TDP to one-round sublinear cPIR]]) — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
- The scheme yields 1-out-of-$n$ OT with communication below $n$ from trapdoor permutations — [[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]].
- Polylogarithmic communication is known only from specific assumptions, such as [[hiding-to-cpir|Φ-hiding]] — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]].
