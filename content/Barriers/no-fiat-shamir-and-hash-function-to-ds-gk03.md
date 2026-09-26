---
type: barrier
status: draft
title: "No reduction from Fiat-Shamir + Hash function to DS"
aliases: []
id: bar-fiat-shamir-and-hash-function-to-ds-gk03
hypotheses: [fiat-shamir, hash-function]
conclusion: ds
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]"
---

# No reduction from Fiat-Shamir + Hash function to DS

A reduction of class `free` from [[fiat-shamir-heuristic|Fiat-Shamir]] together with [[hash-function|Hash function]] to [[digital-signature|DS]] would imply a contradiction.

## Statement

There is a 3-round public-coin identification scheme, secure in the [[random-oracle-model|random oracle model]], whose [[fiat-shamir-heuristic|Fiat-Shamir]] transform is an existentially forgeable [[digital-signature|signature scheme]] for every efficient [[hash-function|hash function]] instantiating the oracle — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. The random oracle in the transform is therefore not instantiable in general.

## Sketch

The scheme adds an escape hatch: the prover may commit in its first message to a program and later prove, with a proof checkable in time independent of the program's running time, that the program maps the first message to the challenge. Interactively the challenge is chosen after the commitment, so the hatch is useless; after the transform the challenge is $H$ of the first message, and a forger commits to the code of $H$ itself.

## Notes

`class: free`: a counterexample against every efficient hash function refutes the implication itself, not a proof technique.

- The displayed inequality on content/Glossary/fiat-shamir-heuristic.md quantifies over $H$ but leaves $\calA$ and $\Pi$ unquantified; the theorem is 'there exists an identification scheme $\Pi$, secure in the ROM, such that for every efficient $H$ there is an efficient forger $\calA$'.
- $\Pi_H$ is not defined on content/Glossary/fiat-shamir-heuristic.md ($\Pi_{\mathsf{FS}}$ is the notation introduced earlier), and the advantage superscript $\mathrm{uf}$ should use the `\ufcma`/`\eufcma` macros.
