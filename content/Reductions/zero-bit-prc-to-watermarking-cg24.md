---
type: reduction
status: draft
title: "Substitution-robust zero-bit PRC ⇒ Substring-complete watermarking"
aliases: []
id: red-zero-bit-prc-to-watermarking-cg24
kind: implication
hypotheses: [substitution-robust-zero-bit-prc]
conclusion: substring-complete-language-model-watermarking
class: fully-black-box
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: "tight: the undetectability distinguisher is forwarded to the PRC pseudorandomness game, and with uniform coins the outputs are exactly the model's"
rationale:
  class: "Generation calls the zero-bit PRC's encoder and detection its decoder, both only as oracles, and one fixed reduction runs any distinguisher between watermarked and unwatermarked text as an oracle against PRC pseudorandomness."
---

# Substitution-robust zero-bit PRC ⇒ Substring-complete watermarking

## Statement

A length-preserving binary channel $\calE$ is $p$-bounded if $\Pr_{x \getsr \bits^n}\!\left[\mathrm{wt}(\calE(x) \oplus x) > pn\right]$ is negligible in $n$. Let $\varepsilon > 0$ be a constant and let $\mathsf{PRC}$ be a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] of block length $n$ that is robust to every $(1/2 - \varepsilon)$-bounded channel. For every language model over the token set $\bits$, the watermarking scheme $\mathsf{W}[\mathsf{PRC}]$ is [[language-model-watermarking#undetectability|undetectable]] and [[language-model-watermarking#soundness|sound]], and every substring $t[i:i+L]$ of a watermarked response $t$ with $H_e^{[i,i+L]}(t) \ge 4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n$ is detected, except with negligible probability: $\mathsf{W}[\mathsf{PRC}]$ is $(4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n)$-substring-complete — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemmas 18, 19 and 22). The scheme does not depend on $\varepsilon$, so a [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|substitution-robust zero-bit PRC]], robust to every $p$-bounded channel for every constant $p \in (0, 1/2)$, gives [[language-model-watermarking#substring-complete-watermarks|substring-complete watermarking]].

## Sketch

Generation XORs a fresh codeword with a one-time pad and samples each binary token biased toward the corresponding bit; with a uniform string in place of the codeword each token has exactly the model's distribution, so undetectability is PRC pseudorandomness. Detection runs the PRC decoder on every window of at most $n$ tokens under each pad, and a substring meeting the entropy bound contains a block of empirical entropy at least $4\sqrt{\varepsilon}\,n$, on which the embedding acts as a $(1/2 - \varepsilon)$-bounded channel that PRC robustness absorbs — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Notes

- For constants $\varepsilon, \delta > 0$, a zero-bit PRC robust to every $(1/2 - \varepsilon\delta)$-bounded channel makes $\mathsf{W}[\mathsf{PRC}]$ $(4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n)$-substring-robust against $\mathrm{BSC}_{1/2-\delta}$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 23).
- Robustness to random deletions, against $\mathrm{BDC}_p \circ \mathrm{BSC}_q$, holds for a zero-bit PRC robust to $\mathrm{BDC}_p \circ \mathrm{BSC}_{q + \alpha(\varepsilon) - q\alpha(\varepsilon)}$ under an assumption on the model, that the embedding channel on every substring with empirical entropy at least $4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n$ is $\mathrm{BSC}_{\alpha(\varepsilon)}$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 24, Assumption 4).
- Undetectable watermarks robust to a constant fraction of adversarial insertions, substitutions and deletions (edit distance), for alphabets of size polynomial in the security parameter, are built from indexing pseudorandom codes — [[GM24 - Edit Distance Robust Watermarks for Language Models|GM24]].
