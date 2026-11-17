---
type: reduction
status: draft
title: "Substitution-robust zero-bit PRC ⇒ Watermarking"
aliases: []
id: red-zero-bit-prc-to-watermarking-cg24
kind: implication
hypotheses: [substitution-robust-zero-bit-prc]
conclusion: language-model-watermarking
class: fully-black-box
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: "tight: the undetectability distinguisher is forwarded to the PRC pseudorandomness game, and with uniform coins the outputs are exactly the model's"
rationale:
  class: "Generation calls the zero-bit PRC's encoder and detection its decoder, both only as oracles, and one fixed reduction runs any distinguisher between watermarked and unwatermarked text as an oracle against PRC pseudorandomness."
---

# Substitution-robust zero-bit PRC ⇒ Watermarking

## Statement

Let $\varepsilon, \delta \in (0, 1/2)$ be constants, and let $\mathsf{PRC}$ be a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] with block length $n$ that is robust to every $(1/2 - \varepsilon\delta)$-bounded channel, as a [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|substitution-robust zero-bit PRC]] provides. For every language model over binary tokens, the [[language-model-watermarking|watermarking scheme]] $\mathsf{W}[\mathsf{PRC}]$ is [[language-model-watermarking#undetectability|undetectable]] and [[language-model-watermarking#soundness|sound]] — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemmas 18, 19); a model over any token set is first converted to one over binary tokens, which preserves the distribution of responses and their empirical entropy — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (§7.1). With $b(L) = 4\sqrt{\varepsilon} \cdot L + 2\sqrt{2} \cdot n$, it is $b(L)$-substring-complete: except with negligible probability, every substring $t[i : i + L]$ of a watermarked response $t$ whose empirical entropy is at least $b(L)$ is detected, so the scheme is $b(L)$-[[language-model-watermarking#completeness|complete]] and survives cropping to any such substring — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 22). It is $b(L)$-substring-robust against $\mathrm{BSC}_{1/2-\delta}$: the same holds when the substring passes through the binary symmetric channel with crossover probability $1/2 - \delta$ before detection — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 23, Theorem 5).

## Sketch

Generation samples each response bit with a bias toward the next bit of a fresh codeword $c \gets \Enc_k$, masked by a one-time pad in the key; with a uniform $c$ the output is exactly the model's, so undetectability is PRC pseudorandomness. Detection runs $\Dec_k$ on every substring of length at most $n$ under every pad, so cropping needs no deletion robustness; on a full block of high empirical entropy the embedding acts as a $(1/2 - \varepsilon)$-bounded channel, and composed with $\mathrm{BSC}_{1/2-\delta}$ as a $(1/2 - \varepsilon\delta)$-bounded one, which PRC robustness absorbs — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Notes

- Robustness to random deletions needs an assumption on the generated text, CG24's Assumption 4: there is a function $\alpha$ such that, on every response substring of length $L$ with empirical entropy at least $4\sqrt{\varepsilon} \cdot L + 2\sqrt{2} \cdot n$, the embedding acts as the binary symmetric channel $\mathrm{BSC}_{\alpha(\varepsilon)}$. Under it, for constants $p \in (0, 1)$ and $q \in (0, 1/2)$, majority-encoding the codewords of a substitution-robust zero-bit PRC (Theorem 4) gives a watermark that is $O(L + n)$-substring-robust against random deletions at rate $p$ composed with $\mathrm{BSC}_q$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 24, Theorem 6).
- Undetectable watermarks robust to a constant fraction of adversarial insertions, substitutions and deletions (edit distance), for alphabets of size polynomial in the security parameter, are built from indexing pseudorandom codes — [[GM24 - Edit Distance Robust Watermarks for Language Models|GM24]].
