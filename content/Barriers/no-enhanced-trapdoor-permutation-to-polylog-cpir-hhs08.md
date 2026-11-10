---
type: barrier
status: draft
title: "No polynomially-preserving fully-black-box reduction from enhanced TDP to PIR with polylogarithmic communication"
aliases: []
id: bar-enhanced-trapdoor-permutation-to-polylog-cpir-hhs08
hypotheses: [enhanced-trapdoor-permutation]
conclusion: polylog-cpir
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]]"
rationale:
  class: "HHS08's main theorem is for polynomially-preserving fully-black-box constructions; the vocabulary has no class for the polynomially-preserving restriction, which the title and Statement keep."
---

# No polynomially-preserving fully-black-box reduction from enhanced TDP to PIR with polylogarithmic communication

## Statement

The $\Omega(n)$ bound on the bits the server sends, in every polynomially-preserving fully-black-box construction of single-server [[single-server-private-information-retrieval|PIR]] on $n$-bit databases from trapdoor permutations, with $n$ as the security parameter, holds for the most generic form of trapdoor permutations, including [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced]] ones, and for clients that fail to output $D[i]$ with probability negligible in $n$ — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]]. A scheme with [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|polylogarithmic communication]], run on $n$-bit databases with $\secpar = n^{1/d}$ for a large constant $d$, has server communication $p(n^{1/d}, \log n) = o(n)$, so no such construction yields one from an enhanced trapdoor permutation.

## Notes

- The same theorem for standard trapdoor permutations is [[no-tdp-to-polylog-cpir-hhs08|No polynomially-preserving fully-black-box reduction from TDP to PIR with polylogarithmic communication]] — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
- Fully-black-box constructions are a more restricted class than black-box constructions in general, so the theorem does not exclude constructions outside it — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
