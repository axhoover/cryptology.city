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
---

# No reduction from AGM to GGM

A reduction of class `unstated` from [[algebraic-group-model|AGM]] to [[generic-group-model|GGM]] would imply a contradiction.

## Statement

As the two models are currently formalized, hardness in the [[algebraic-group-model|AGM]] does not imply hardness in the [[generic-group-model|GGM]], and a generic reduction in the AGM need not yield a corresponding reduction in the GGM — [[KZ22 - An Analysis of the Algebraic Group Model|KZ22]]. This refutes the transfer claimed by [[FKL18 - The Algebraic Group Model and its Applications|FKL18]] under that formalization; under the alternative formalization of generic and algebraic computation of [[JM24 - Generic and Algebraic Computation Models When AGM Proofs Transfer to the GGM|JM24]] the transfer holds for most algebraic analyses in the literature.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Under an alternative formalization of generic and algebraic computation, the FKL18 transfer claim is correct, and most AGM analyses in the literature fall within it — [[JM24 - Generic and Algebraic Computation Models When AGM Proofs Transfer to the GGM|JM24]]
- `content/Glossary/generic-group-model.md` states the FKL18 direction without mentioning KZ22; the two glossary pages still disagree about what is settled.
- Barriers between idealized *models* (rather than primitives or assumptions) are a hypothesis shape the hyperedge schema does not type; MPZ20's hierarchy of GGM variants is a second instance.
