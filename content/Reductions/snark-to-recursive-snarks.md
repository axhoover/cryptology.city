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
  - "[[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]"
security-loss: ""
rationale:
  class: "The compliance predicate proved at each step contains the hypothesis SNARK's own verifier as a circuit, so the construction depends on the scheme's code and no black-box class applies."
---

# SNARK ⇒ Recursive SNARKs

## Statement

Any [[succinct-argument|SNARK]] for NP composes with itself, each proof attesting that one step was executed correctly and that the previous proof verifies, into proof-carrying data for constant-depth compliance predicates, and by depth reduction into [[succinct-argument#recursive-snarks|incrementally verifiable computation]] for computations of any fixed polynomial length, with proof size and verification time independent of the number of steps, without random oracles — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].

## Sketch

For a step function $F$, the prover at step $t$ proves with the SNARK that there exist $s_{t-1}$ and $\pi_{t-1}$ with $\Vrfy(\crs, (t-1, s_{t-1}), \pi_{t-1}) = 1$ and $s_t = F(s_{t-1})$. Knowledge soundness applies the SNARK extractor to the outer proof to recover the inner one and repeats down the chain; each nesting costs a polynomial blow-up in extraction time, so the depth of direct composition must be constant.

## Notes

- IVC was introduced, and realized from CS proofs of knowledge with an instantiated random oracle, by [[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]]; BCCT13 remove the random oracle, working from any SNARK — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].
- Concretely efficient recursion needs a SNARK whose verifier is efficiently arithmetizable (recursion-friendly) — folklore.
