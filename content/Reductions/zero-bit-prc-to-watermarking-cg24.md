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
---

# Zero-bit PRC ⇒ Watermarking

[[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]] implies [[language-model-watermarking|language-model watermarking]].

## Statement

A [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] yields a [[language-model-watermarking|watermarking scheme]] for language models that is undetectable (polynomially many watermarked outputs are computationally indistinguishable from the model's own outputs) and whose detector survives cropping and a constant rate of random substitutions and deletions, provided the model's responses carry enough entropy — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Sketch

Generation samples the response using the bits of a fresh codeword $c \gets \Enc_k$ in place of uniform coins; with uniform coins the output is exactly the model's, so undetectability is PRC pseudorandomness. Detection recovers the sampling randomness from a candidate text and runs $\Dec_k$ on it; edits to the text act on that string as substitutions and deletions, which PRC robustness absorbs.

## Notes

`class: fully-black-box`: One fixed construction: generation calls the zero-bit PRC's $\Enc$ for a codeword and detection calls $\Dec$, both only as oracles. One fixed reduction: with uniform coins the generator's output is the model's own, so any distinguisher between watermarked and unwatermarked text is run as an oracle against PRC pseudorandomness; robustness is inherited from the PRC's channel robustness. RTV04 fully-black-box shape.

- Robustness extended to a constant fraction of adversarial insertions, substitutions and deletions (edit distance), for alphabets of size polynomial in the security parameter — [[GM24 - Edit Distance Robust Watermarks for Language Models|GM24]]
