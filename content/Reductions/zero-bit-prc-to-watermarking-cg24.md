---
type: reduction
status: draft
title: "Zero-bit PRC ⇒ Watermarking"
aliases: []
id: red-zero-bit-prc-to-watermarking-cg24
kind: implication
hypotheses: [zero-bit-prc]
conclusion: language-model-watermarking
class: fully-black-box
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
rationale:
  class: "Generation calls the zero-bit PRC's encoder and detection its decoder, both only as oracles, and one fixed reduction runs any distinguisher between watermarked and unwatermarked text as an oracle against PRC pseudorandomness."
---

# Zero-bit PRC ⇒ Watermarking

## Statement

A [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] yields a [[language-model-watermarking|watermarking scheme]] for language models that is undetectable (polynomially many watermarked outputs are computationally indistinguishable from the model's own outputs) and whose detector survives cropping and a constant rate of random substitutions and deletions, provided the model's responses carry enough entropy — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Sketch

Generation samples the response using the bits of a fresh codeword $c \gets \Enc_k$ in place of uniform coins; with uniform coins the output is exactly the model's, so undetectability is PRC pseudorandomness. Detection runs $\Dec_k$ on the bit string read off a candidate text, on which edits to the text act as substitutions and deletions that PRC robustness absorbs.

## Notes

- Undetectable watermarks robust to a constant fraction of adversarial insertions, substitutions and deletions (edit distance), for alphabets of size polynomial in the security parameter, are built from indexing pseudorandom codes — [[GM24 - Edit Distance Robust Watermarks for Language Models|GM24]].
