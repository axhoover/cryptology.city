---
type: reduction
status: draft
title: "LWE ⇒ NIZK"
aliases: []
id: red-lwe-to-nizk-ps19
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: nizk-for-np
class: unstated
model: crs
source:
  - "[[PS19 - Noninteractive Zero Knowledge for NP from (Plain) Learning With Errors|PS19]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: ""
---

# LWE ⇒ NIZK

## Statement

If [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE is hard with polynomial modulus-to-noise ratio]] (plain LWE with small polynomial approximation factors, in the terms of PS19), every language in $\classNP$ has a [[non-interactive-zero-knowledge|NIZK]]. The construction builds from LWE a hash family that is correlation intractable for all circuits of any fixed polynomial size and uses it to instantiate the [[fiat-shamir-heuristic|Fiat–Shamir transform]] soundly. One mode is computationally sound (an argument) and statistically zero-knowledge in the common random string model; the other is statistically sound (a proof) and computationally zero-knowledge in the common reference string model — [[PS19 - Noninteractive Zero Knowledge for NP from (Plain) Learning With Errors|PS19]].

## Sketch

Apply Fiat–Shamir to a parallel-repeated commit-and-open $\Sigma$-protocol for an $\classNP$-complete language. With a trapdoor for the commitments, the unique challenge on which a cheating prover could answer is an efficiently computable function of the first message, so a hash family that is correlation intractable for such functions makes the transform sound. PS19 build such families from LWE, from a correlation-intractable hash for log-depth functions and a bootstrapping step that uses leveled FHE — [[PS19 - Noninteractive Zero Knowledge for NP from (Plain) Learning With Errors|PS19]].

## Notes

- The earlier instantiation of the same approach needed circular-secure FHE ([[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]]) or almost-optimal hardness of search LWE, and gave NIZK arguments in the common reference string model — [[CCH+19 - Fiat-Shamir from practice to theory|CCH+19]].
