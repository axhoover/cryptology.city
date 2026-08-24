---
type: reduction
status: draft
title: "PRC ⇒ SKE"
aliases: []
id: red-prc-to-ske-cg24
kind: implication
hypotheses: [prc]
conclusion: ske
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# PRC ⇒ SKE

[[pseudorandom-error-correcting-code|PRC]] implies [[symmetric-key-encryption|SKE]].

## Statement

Migrated verbatim from [[pseudorandom-error-correcting-code]] § Pseudorandom error-correcting code:

> A Pseudorandom Error-correcting Code (PRC) is a type of [[symmetric-key-encryption|SKE]] that requires ciphertext decoding to be _robust_ to some modifications, introduced by [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]. There is additionally a _zero-bit PRC_ which does not allow for a message. Both variations are useful for constructing cryptographic watermarking of generative AI.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'is a type of SKE' is a subtyping/definitional claim rather than a reduction; if migrated as PRC => SKE it needs the security-notion mapping (PRC pseudorandomness is a CPA-style notion against a random-response oracle, not IND-CPA).
- The CG24 citation attaches to 'introduced by', not to the subtyping claim.
