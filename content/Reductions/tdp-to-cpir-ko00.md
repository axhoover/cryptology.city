---
type: reduction
status: draft
title: TDP ⇒ Non-trivial cPIR (Kushilevitz–Ostrovsky)
aliases: []
id: red-tdp-to-cpir-ko00
kind: implication
hypotheses: [tdp]
conclusion: nontrivial-cpir
class: unstated
model: standard
source:
  - "[[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]]"
security-loss: ""
---

# TDP ⇒ Non-trivial cPIR (Kushilevitz–Ostrovsky)

## Statement

If [[trapdoor-permutation|trapdoor permutations]] exist, there is a [[single-server-private-information-retrieval#non-trivial-pir|non-trivial]], perfectly correct [[single-server-private-information-retrieval|single-server PIR]] scheme for $n$-bit databases in which the client sends $O(\secpar^2)$ bits and the server $n - cn/\secpar$ bits, for any constant $c$, so total communication is below $n$ once $n$ is large relative to $\secpar$, for example $\secpar = n^{\varepsilon}$ for small $\varepsilon$ — [[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]]. The protocol is interactive and uses interactive hashing.

## Notes

- The saving cannot be improved much by black-box means: in every fully-black-box, polynomially security-preserving construction of single-server PIR from trapdoor permutations, the server sends $\Omega(n)$ bits — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
- The scheme yields 1-out-of-$n$ OT with communication below $n$ from trapdoor permutations — [[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]].
- Polylogarithmic communication is known only from specific assumptions, such as [[hiding-to-cpir|Φ-hiding]] — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]].
