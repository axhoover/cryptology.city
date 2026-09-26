---
type: reduction
status: draft
title: "TDP ⇒ NIZK"
aliases: []
id: red-tdp-to-nizk-bfm88
kind: implication
hypotheses: [tdp]
conclusion: nizk
class: fully-black-box
model: crs
source:
  - "[[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]]"
security-loss: ""
---

# TDP ⇒ NIZK

Doubly enhanced, certified [[trapdoor-permutation|TDPs]] imply [[non-interactive-zero-knowledge|NIZK]] proofs for $\classNP$ in the common reference string model.

## Statement

A family of doubly enhanced, certified [[trapdoor-permutation|trapdoor permutations]] (indices are recognizably permutations) yields a [[non-interactive-zero-knowledge|NIZK]] proof system for every language in $\classNP$ in the common reference string model: soundness is statistical, zero-knowledge is computational, and one reference string serves polynomially many theorems — [[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]]. The hidden-bits compilation uses the double enhancement, and double enhancement suffices for it — [[GR13 - Enhancements of Trapdoor Permutations|GR13]].

## Sketch

FLS give an unconditional NIZK for Hamiltonicity in the hidden-bits model and compile it: the reference string is read as permutation images $y_1,\dots,y_m$, hidden bit $i$ is $b(\Invert(\td, y_i))$ for a hard-core predicate $b$, and the prover reveals a bit by publishing its preimage while unrevealed bits stay unpredictable to the verifier. One string serves polynomially many theorems by proving "$x \in L$ or the trailing block of the string is in the image of a $\PRG$"; the simulator plants a pseudorandom block and uses its seed as the witness.

## Notes

`class: fully-black-box`: One fixed construction: the reference string is parsed as permutation images, and prover and verifier call $\Gen$, $\Eval$, $\Invert$, the certification procedure and the hard-core predicate only as oracles; the PRG for the multi-theorem step is built from the permutation and its hard-core predicate, also as oracles. One fixed reduction: soundness is statistical, and zero-knowledge is a hybrid over the hidden bits whose reduction runs any distinguisher as an oracle to predict the hard-core bit. Double enhancement and certification restrict the family; they do not give the construction non-oracle access to it. RTV04 fully-black-box shape.

`model: crs`: The reference string carries the hidden bits.

- For families over $\bits^n$ the certified-permutation hypothesis can be dropped: the prover certifies the index with a NIZK proof that it describes an (almost) permutation — [[BY96 - Certifying Permutations Noninteractive Zero-Knowledge Based on Any Trapdoor Permutation|BY96]]
- Doubly enhanced families still leave the FLS instantiation unsound for adversarially chosen indices whose domain is not recognizable; _certifiable injectivity_ closes the gap and suffices for the FLS paradigm even for trapdoor functions — [[CL18 - Certifying Trapdoor Permutations, Revisited|CL18]]
