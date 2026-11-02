---
type: barrier
status: draft
title: "No polynomially-preserving fully-black-box reduction from enhanced TDP to one-round sublinear cPIR"
aliases: []
id: bar-enhanced-trapdoor-permutation-to-one-round-sublinear-cpir-hhs08
hypotheses: [enhanced-trapdoor-permutation]
conclusion: one-round-sublinear-cpir
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]]"
rationale:
  class: "HHS08's main theorem is for polynomially-preserving fully-black-box constructions; the vocabulary has no class for the polynomially-preserving restriction, which the title and Statement keep."
---

# No polynomially-preserving fully-black-box reduction from enhanced TDP to one-round sublinear cPIR

## Statement

The $\Omega(n)$ bound on the bits the server sends, in every polynomially-preserving fully-black-box construction of single-server [[single-server-private-information-retrieval|PIR]] from trapdoor permutations, holds for the most generic form of trapdoor permutations, including [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced]] ones — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]]. A [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] scheme has server communication $o(n)$ on databases of large polynomial size, so no such construction yields one from an enhanced trapdoor permutation.

## Notes

- The same theorem for standard trapdoor permutations is [[no-tdp-to-one-round-sublinear-cpir-hhs08|No polynomially-preserving fully-black-box reduction from TDP to one-round sublinear cPIR]] — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
- Fully-black-box constructions are a more restricted class than black-box constructions in general, so the theorem does not exclude constructions outside it — [[HHS08 - A Linear Lower Bound on the Communication Complexity of Single-Server Private Information Retrieval|HHS08]].
