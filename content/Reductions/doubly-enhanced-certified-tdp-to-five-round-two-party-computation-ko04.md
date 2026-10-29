---
type: reduction
status: draft
title: "Doubly enhanced certified TDP ⇒ Five-round 2PC (Katz–Ostrovsky)"
aliases: []
id: red-doubly-enhanced-certified-tdp-to-five-round-two-party-computation-ko04
kind: implication
hypotheses: [doubly-enhanced-certified-tdp]
conclusion: five-round-two-party-computation
class: free
model: standard
source:
  - "[[KO04 - Round-Optimal Secure Two-Party Computation|KO04]]"
security-loss: ""
rationale:
  class: "KO04's protocol uses proofs whose statement is fixed only in the last round and that need the trapdoor permutation's code."
---

# Doubly enhanced certified TDP ⇒ Five-round 2PC (Katz–Ostrovsky)

## Statement

If certified trapdoor permutations exist, every two-party functionality, possibly randomized and with a separate output for each party, has a five-round plain-model protocol, one party sending per round, that is secure with abort against a malicious adversary corrupting either party and has a black-box simulator running in expected polynomial time ([[secure-multi-party-computation#five-round-2pc|five-round 2PC]]) — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]]. A [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|doubly enhanced certified trapdoor permutation]] is a certified one.

## Notes

- The protocols may instead be based on homomorphic encryption with additional properties, which DDH implies; certified trapdoor permutations follow from RSA with large public exponents — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]].
- Five rounds are optimal: unconditionally, no four-round protocol with one party sending per round securely computes the coin-tossing functionality for a super-logarithmic number of coins with a black-box proof of security — [[KO04 - Round-Optimal Secure Two-Party Computation|KO04]].
- With black-box use of the primitive, four rounds suffice when one party receives output, from enhanced trapdoor permutations ([[enhanced-trapdoor-permutation-to-two-party-computation-ors15|enhanced TDP ⇒ 2PC with expected-time simulation]]) — [[ORS15 - Round-Optimal Black-Box Two-Party Computation|ORS15]].
- With a simultaneous-message channel, four rounds suffice for 2PC from trapdoor permutations — [[COSV17 - Round-Optimal Secure Two-Party Computation from Trapdoor Permutations|COSV17]].
