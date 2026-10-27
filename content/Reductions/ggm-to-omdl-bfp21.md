---
type: reduction
status: draft
title: "GGM ⇒ OMDL"
aliases: []
id: red-ggm-to-omdl-bfp21
kind: implication
hypotheses: [ggm]
conclusion: omdl
class: free
model: generic-group
source:
  - "[[BFP21 - The One-More Discrete Logarithm Assumption in the Generic Group Model|BFP21]]"
security-loss: ""
rationale:
  class: "The hypothesis is a model of computation rather than a primitive, so no black-box class applies; BFP21 bound every generic algorithm, which is the free class scoped by the model."
  model: "BFP21's bound holds only for generic algorithms; nothing is claimed in the standard model."
---

# GGM ⇒ OMDL

## Statement

In the [[generic-group-model|generic group model]], [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] holds in groups of prime order $p$: every generic algorithm that makes polynomially many group-oracle queries and at most $\ell$ discrete-logarithm oracle queries outputs the logarithms of all $\ell + 1$ challenges with negligible probability — [[BFP21 - The One-More Discrete Logarithm Assumption in the Generic Group Model|BFP21]]. The proof replaces the Schwartz–Zippel argument of earlier generic-group proofs, such as that of [[ggm-to-dlog-sho97|GGM ⇒ DLOG]] ([[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]), with a new argument, and an earlier claimed generic-group proof of OMDL is flawed — [[BFP21 - The One-More Discrete Logarithm Assumption in the Generic Group Model|BFP21]]. The one-more computational Diffie–Hellman assumption also holds in the generic group model — [[BFP21 - The One-More Discrete Logarithm Assumption in the Generic Group Model|BFP21]].

## Notes

- No Turing reduction bases OMDL on an assumption with an a priori bounded number of rounds unless that assumption is false ([[no-bounded-round-assumption-to-omdl-pas11|barrier]]) — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]].
