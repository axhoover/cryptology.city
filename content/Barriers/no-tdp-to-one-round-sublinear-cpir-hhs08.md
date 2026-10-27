---
type: barrier
status: draft
title: "No polynomially-preserving black-box reduction from TDP to one-round sublinear cPIR"
aliases: []
id: bar-tdp-to-one-round-sublinear-cpir-hhs08
hypotheses: [tdp]
conclusion: one-round-sublinear-cpir
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]]"
rationale:
  class: "HHS08 rule out only polynomially-preserving black-box constructions, a restriction the vocabulary has no class for, so fully-black-box would overstate the theorem."
---

# No polynomially-preserving black-box reduction from TDP to one-round sublinear cPIR

## Statement

In every polynomially-preserving construction of single-server [[single-server-private-information-retrieval|PIR]] that uses a family of [[trapdoor-permutation|trapdoor permutations]], enhanced ones included, only as a black box, the server sends $\Omega(n)$ bits on $n$-bit databases, so downloading the database is optimal up to a constant factor — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]]. A [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] scheme has server communication at most $p(\secpar) \cdot n^c = o(n)$ on databases of large polynomial size, so no such construction yields one.

## Notes

- The proof combines a lower bound on the sender's communication in the commit stage of black-box statistically hiding bit commitments from trapdoor permutations, matching the scheme of NOVY ([[owp-to-statistically-hiding-commitment-novy98|OWP ⇒ Statistically hiding COM]]), with a reduction from statistically hiding commitments to low-communication single-server PIR that essentially preserves the PIR's communication, improving that of [[BIKM99 - One-Way Functions Are Essential for Single-Server Private Information Retrieval|BIKM99]] — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
- The bound improves the $\Omega(n/\log n)$ lower bound of [[HHRS07 - Finding Collisions in Interactive Protocols - A Tight Lower Bound on the Round Complexity of Statistically-Hiding Commitments|HHRS07]] — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
- The [[tdp-to-cpir-ko00|trapdoor-permutation scheme]] of [[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]], whose server sends $n - cn/\secpar$ bits, is therefore within a constant factor of optimal among such constructions — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
