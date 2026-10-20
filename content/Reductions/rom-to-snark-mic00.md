---
type: reduction
status: draft
title: ROM ⇒ SNARK (Micali's CS proofs)
aliases:
  - CS proofs
id: red-rom-to-snark-mic00
kind: implication
hypotheses: [rom]
conclusion: snark
class: free
model: rom
source:
  - "[[Mic00 - Computationally Sound Proofs|Mic00]]"
  - "[[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]]"
security-loss: "a factor polynomial in the number of random-oracle queries"
rationale:
  class: "The theorem holds for every prover in the random-oracle model, which is the free class scoped by the model."
  model: "The random oracle serves both as the hash in the Merkle tree and as the Fiat–Shamir challenge generator."
---

# ROM ⇒ SNARK (Micali's CS proofs)

## Statement

In the [[random-oracle-model|random-oracle model]], every language in $\classNP$ has a non-interactive argument, a computationally sound proof, whose proofs have length $\poly(\secpar, \log T)$ and are verified in time $\poly(\secpar, |x|, \log T)$, for statements $x$ whose $\classNP$ verification takes time $T$ — [[Mic00 - Computationally Sound Proofs|Mic00]]. The argument is an argument of knowledge, so it is a [[succinct-argument|SNARK]] without a common reference string — [[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]].

## Sketch

The prover commits to a probabilistically checkable proof by the root of a Merkle tree built with the random oracle, derives the PCP verifier's queries by applying the random oracle to the root, and sends the root together with the queried positions and their authentication paths. The verifier recomputes the queries and checks the paths and the PCP verifier's decision — [[Mic00 - Computationally Sound Proofs|Mic00]].

## Notes

- The interactive precursor needs only collision-resistant hashing: [[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ succinct arguments]] — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]].
- In the common reference string model, no reduction that uses the cheating prover only as an oracle proves adaptive soundness of a SNARG for an $\classNP$ language with a sub-exponentially hard subset-membership problem from a falsifiable assumption, unless the assumption is false: [[no-falsifiable-assumption-to-snark-gro16|No reduction from falsifiable assumptions to SNARKs]] — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].
