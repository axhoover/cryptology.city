---
type: barrier
status: draft
title: "No polynomially-preserving fully-black-box reduction from TDP to PIR with polylogarithmic communication"
aliases: []
id: bar-tdp-to-polylog-cpir-hhs08
hypotheses: [tdp]
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

# No polynomially-preserving fully-black-box reduction from TDP to PIR with polylogarithmic communication

## Statement

In every polynomially-preserving fully-black-box construction of single-server [[single-server-private-information-retrieval|PIR]] on $n$-bit databases from a family of [[trapdoor-permutation|trapdoor permutations]], with $n$ as the security parameter, so that the security reduction inverts permutations on $m$-bit inputs by running the adversary only on databases of $O(m)$ bits, the server sends $\Omega(n)$ bits — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]]. The bound allows a randomized server and a client that fails to output $D[i]$ with probability negligible in $n$ — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]]. A scheme with [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|polylogarithmic communication]], run on $n$-bit databases with $\secpar = n^{1/d}$ for a large constant $d$, has correctness error and adversary advantage negligible in $n$ and server communication $p(n^{1/d}, \log n) = o(n)$, so no construction that is polynomially preserving in this sense when run with $\secpar = n^{1/d}$ yields one.

## Notes

- For perfectly correct one-round schemes with communication $p(\secpar) \cdot n^c$, $c < 1$, the same theorem gives [[no-tdp-to-one-round-sublinear-cpir-hhs08|No polynomially-preserving fully-black-box reduction from TDP to one-round sublinear cPIR]] — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
- Fully-black-box constructions are a more restricted class than black-box constructions in general, so the theorem does not exclude constructions outside it — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
