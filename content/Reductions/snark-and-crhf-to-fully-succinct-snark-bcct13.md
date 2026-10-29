---
type: reduction
status: draft
title: SNARK + CRHF ⇒ Fully succinct SNARK (bootstrapping)
aliases: []
id: red-snark-and-crhf-to-fully-succinct-snark-bcct13
kind: implication
hypotheses: [snark, crhf]
conclusion: fully-succinct-snark
class: free
model: standard
source:
  - "[[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]"
security-loss: ""
rationale:
  class: "The bootstrapped prover proves, with the hypothesis SNARK, statements about that SNARK's own verifier, so the construction depends on the scheme's code."
---

# SNARK + CRHF ⇒ Fully succinct SNARK (bootstrapping)

## Statement

If [[hash-function#collision-resistance|collision-resistant hash functions]] exist, every publicly verifiable preprocessing [[succinct-argument|SNARK]], one whose reference string and setup time may grow with the computation, can be bootstrapped into a [[succinct-argument#fully-succinct-snarks|fully succinct]] publicly verifiable SNARK, whose reference string has size $\poly(\secpar)$ independent of the computation and whose prover needs time and space essentially those of classical $\classNP$ verification; the transformation recursively composes the SNARK into a weak proof-carrying-data system for shallow distributed computations and does not rely on PCPs — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]. Applied to known SNARKs with preprocessing, it gives the first fully succinct publicly verifiable SNARK — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].

## Notes

- The $\crs$ and the proof have size $\poly(\secpar)$, the verifier runs in time $\poly(\secpar, |M|, |x|, \log t)$, and the prover's time and space are quasi-equal to those of $\classNP$ verification — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].
- The same recursive composition gives incrementally verifiable computation: [[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]] — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].
