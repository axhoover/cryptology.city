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

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, there is a [[language-model-watermarking|watermarking scheme]] that, for every language model whose responses have length at most $\poly(\secpar)$, is [[language-model-watermarking#undetectability|undetectable]]: without the secret key, polynomially many responses to adaptively chosen prompts are computationally indistinguishable from the model's own outputs; $b(L)$-[[language-model-watermarking#completeness|complete]] for some $b(L) = O(\secpar\sqrt{L})$, so the probability that a watermarked response $x$ has empirical entropy at least $b(|x|)$ yet is not detected is negligible; and [[language-model-watermarking#soundness|sound]], so every text of length at most $\poly(\secpar)$ fixed independently of the key is detected with negligible probability over the choice of key — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]] (Theorem 1).

## Notes

- Undetectable, sound watermarks whose detection survives cropping, with an entropy threshold linear in the substring length, follow from [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|substitution-robust zero-bit pseudorandom codes]] ([[zero-bit-prc-to-watermarking-cg24|Substitution-robust zero-bit PRC ⇒ Substring-complete watermarking]]) — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
