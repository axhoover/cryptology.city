---
type: reduction
status: draft
title: "SNARK ⇒ Recursive SNARKs"
aliases: []
id: red-snark-to-recursive-snarks
kind: implication
hypotheses: [snark]
conclusion: incremental-verifiable-computation
class: free
model: standard
source:
  - "[[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]]"
security-loss: ""
---

# SNARK ⇒ Recursive SNARKs

[[succinct-argument|SNARK]] implies [[succinct-argument#recursive-snarks|Recursive SNARKs]].

## Statement

Any [[succinct-argument|SNARK]] for NP composes with itself — each proof attests that one step was executed correctly and that the previous proof verifies — into proof-carrying data for constant-depth compliance predicates, and by depth reduction into [[succinct-argument#recursive-snarks|incrementally verifiable computation]] for computations of any fixed polynomial length, with proof size and verification time independent of the number of steps, in the plain model — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]. IVC was introduced, and realized from CS proofs of knowledge, in [[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]].

## Sketch

For a step function $F$, the prover at step $t$ proves with the SNARK that there exist $s_{t-1}$ and $\pi_{t-1}$ with $\Vrfy(\crs, (t-1, s_{t-1}), \pi_{t-1}) = 1$ and $s_t = F(s_{t-1})$, so one short proof carries the whole history. Knowledge soundness applies the SNARK extractor to the outer proof to recover the inner one and repeats down the chain; each nesting costs a polynomial blow-up in extraction time, so the PCD depth must be constant.

## Notes

`class: free`: The compliance predicate proved at each step contains the hypothesis SNARK's own verifier as a circuit, so the construction depends on the scheme's code rather than on oracle access to it, and the security argument nests the SNARK's extractor. Neither Val08 nor BCCT13 places the reduction in an RTV class; `free` records only that the implication is proved, the schema's value for an unclassified non-black-box construction.

- Removes the instantiated random oracle of Val08's CS-proof-based IVC, working in the plain model from any SNARK — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]
- Concretely efficient recursion needs a SNARK whose verifier is efficiently arithmetizable (recursion-friendly); the typed hypothesis does not record this — folklore.
