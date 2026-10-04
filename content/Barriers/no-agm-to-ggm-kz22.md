---
type: barrier
status: draft
title: "No reduction from AGM to GGM"
aliases: []
id: bar-agm-to-ggm-kz22
hypotheses: [agm]
conclusion: ggm
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[KZ22 - An Analysis of the Algebraic Group Model|KZ22]]"
rationale:
  class: "The separation is formalization-dependent, holding under KZ22's formalization while under JM24's the transfer holds for most algebraic analyses, and the GGM covers both Shoup's and Maurer's formulations, so no single class is recorded."
---

# No reduction from AGM to GGM

## Statement

Under the standard formalizations of the two models, hardness in the [[algebraic-group-model|AGM]] does not imply hardness in the [[generic-group-model|GGM]], and a generic reduction in the AGM need not yield a corresponding reduction in the GGM — [[KZ22 - An Analysis of the Algebraic Group Model|KZ22]]. This refutes, under those formalizations, the transfer claimed by [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

## Notes

- Under the alternative formalization of generic and algebraic computation of [[JM24 - Generic and Algebraic Computation Models When AGM Proofs Transfer to the GGM|JM24]], the transfer holds for most algebraic analyses in the literature.
