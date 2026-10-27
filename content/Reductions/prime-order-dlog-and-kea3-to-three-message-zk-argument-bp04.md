---
type: reduction
status: draft
title: "DLOG + KEA3 ⇒ Three-message ZK arguments for NP"
aliases: []
id: red-prime-order-dlog-and-kea3-to-three-message-zk-argument-bp04
kind: implication
hypotheses: [kea3]
conclusion: three-message-zk-argument
class: unstated
model: standard
source:
  - "[[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]]"
security-loss: ""
---

# DLOG + KEA3 ⇒ Three-message ZK arguments for NP

## Statement

Let $\GrGen$ output a prime-order group in which the [[discrete-logarithm#dlog-in-prime-order-groups|discrete logarithm]] is hard and the [[knowledge-of-exponent#kea3|KEA3]] knowledge-of-exponent assumption holds. In such a group, the protocol of Hada and Tanaka, with a bug that made it unsound removed, is a three-message [[zero-knowledge-proof#three-message-zero-knowledge-arguments|zero-knowledge argument]] for $\classNP$ with negligible soundness error — [[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]]. [[HT98 - On the Existence of 3-Round Zero-Knowledge Protocols|HT98]] had claimed the result under KEA1 and KEA2, and KEA2 is false — [[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]]. The simulator extracts through the knowledge assumption, so it is not black-box, and the protocol gets around the three-message bound for black-box simulation ([[bb-zk-three-message-to-bpp-gk96|Three-message black-box ZK ⊆ BPP]]) — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].

## Notes

- The extraction condition of KEA3 alone holds trivially in a group with easy discrete logarithms, so the definition of [[knowledge-of-exponent#kea3|KEA3]] includes hardness of the discrete logarithm for the same group generator — standard.
- Under assumptions on program obfuscation, three-message private-coin zero-knowledge proofs, sound against unbounded provers, for $\classNP$ do not exist even with non-black-box simulation — [[FGJ18 - On the Existence of Three Round Zero-Knowledge Proofs|FGJ18]].
