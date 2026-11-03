---
type: reduction
status: draft
title: "OWF ⇒ Watermarking"
aliases: []
id: red-owf-to-language-model-watermarking-cgz24
kind: implication
hypotheses: [owf]
conclusion: language-model-watermarking
class: unstated
model: standard
source:
  - "[[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]"
security-loss: ""
---

# OWF ⇒ Watermarking

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, every language model has an [[language-model-watermarking|undetectable watermarking scheme]]: without the secret key, polynomially many responses to adaptively chosen prompts are computationally indistinguishable from the model's own outputs, while with the key watermarked responses of sufficient entropy are detected and every text fixed independently of the key is not — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]].

## Notes

- Undetectable watermarks whose detection survives cropping and a constant rate of substitutions and deletions follow from pseudorandom codes ([[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Watermarking]]) — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
