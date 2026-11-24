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
  class: "For each ε, generation calls the encoder of the code for p = 1/2 − ε and detection its decoder, both only as oracles, and one fixed reduction runs any distinguisher between watermarked and unwatermarked text as an oracle against PRC pseudorandomness."
---

# Substitution-robust zero-bit PRC ⇒ Substring-complete watermarking

## Statement

A length-preserving binary channel $\calE$ is $p$-bounded if $\Pr_{x \getsr \bits^n}\!\left[\mathrm{wt}(\calE(x) \oplus x) > pn\right]$ is negligible in $n$. For a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] $\mathsf{PRC} = (\Gen, \Enc, \Dec)$ of block length $n$, let $\mathsf{W}[\mathsf{PRC}]$ be the watermarking scheme of [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (arXiv v2, Construction 7 and Figure 3) with the substitution-only detector of the remark after Construction 7. $\Setup$, given $1^\secpar$ and the maximum response length $L^*$, samples $k \gets \Gen(1^\secpar)$ and one-time pads $a_1, \ldots, a_{\lceil L^*/n \rceil} \getsr \bits^n$; $\mathsf{Wat}$ embeds a fresh codeword $c \gets \Enc_k$, masked as $c \oplus a_\ell$, into the $\ell$-th block of $n$ tokens; and $\mathsf{Detect}(\sk, t)$ outputs $1$ iff $\Dec_k(t[i : i+n-1] \oplus a_\ell) \ne \bot$ for some $i$ with $i + n - 1 \le |t|$ and some $\ell \le \lceil L^*/n \rceil$, so it decodes only $n$-bit strings. For every language model over the token set $\bits$ whose responses have at most $L^*$ tokens, $\mathsf{W}[\mathsf{PRC}]$ is [[language-model-watermarking#undetectability|undetectable]], since $\mathsf{Wat}$ is that of Construction 7 — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 19). It is [[language-model-watermarking#soundness|sound]]: for a text $t$ of length at most $\poly(\secpar)$ chosen independently of $\sk$, each string $t[i : i+n-1] \oplus a_\ell$ is independent of $k$, so the soundness of $\mathsf{PRC}$ on $n$-bit strings and a union bound over the at most $|t| \cdot \lceil L^*/n \rceil \le \poly(\secpar)$ pairs $(i, \ell)$ make $\Pr[\mathsf{Detect}(\sk, t) = 1]$ negligible, as in the proof of [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 18). If $\mathsf{PRC}$ is robust to every $(1/2 - \varepsilon)$-bounded channel, for a constant $\varepsilon > 0$, and $n(\secpar) \ge \secpar^{c}$ for a constant $c > 0$ and all sufficiently large $\secpar$, then $\mathsf{W}[\mathsf{PRC}]$ is $(4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n)$-substring-complete: the proof of [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 22) decodes only a full block $\tilde{t}$ contained in the substring, masked by its pad, and $\tilde{t}$ is a window of $n$ tokens. The entropy bounds the proof uses fail with probability negligible in the block length $n$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemmas 20 and 21), which takes $n(\secpar) = \secpar$ (§5.1); with $n \ge \secpar^{c}$ this is negligible in $\secpar$, also after a union bound over the at most $(L^*)^2 \le \poly(\secpar)$ substrings of a response — standard.

Given a [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|substitution-robust zero-bit PRC]] $(\mathsf{PRC}_p)_{p \in (0, 1/2)}$, set $\mathsf{W}_\varepsilon := \mathsf{W}[\mathsf{PRC}_{1/2 - \varepsilon}]$ for each constant $\varepsilon \in (0, 1/16)$, where $1/2 - \varepsilon \in (7/16, 1/2)$. With $n_\varepsilon$ the block length of $\mathsf{PRC}_{1/2 - \varepsilon}$, which is at least $\secpar^{c}$ for a constant $c > 0$ by the definition of the family, $\mathsf{W}_\varepsilon$ is undetectable, sound and $(4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n_\varepsilon)$-substring-complete, which is [[language-model-watermarking#substring-complete-watermarks|substring-complete watermarking]] — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Sketch

In the $\ell$-th block, generation sets $x := c \oplus a_\ell$ for a fresh codeword $c \gets \Enc_k$ and samples the $j$-th token of the block, the $i$-th of the response, as $t_i \gets \mathrm{Ber}(\hat{p}_i - (-1)^{x_j} \min\{\hat{p}_i, 1 - \hat{p}_i\})$, where $\hat{p}_i$ is the model's probability that $t_i = 1$; with a uniform $x$ each token has exactly the model's distribution, so undetectability is PRC pseudorandomness. A substring meeting the entropy bound contains a full block of empirical entropy at least $4\sqrt{\varepsilon}\,n$, on which the embedding acts as a $(1/2 - \varepsilon)$-bounded channel that the robustness of $\mathsf{PRC}$ absorbs, and the pads keep that channel independent of the other codewords — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemmas 21 and 22).

## Notes

- For constants $\varepsilon, \delta > 0$, a zero-bit PRC robust to every $(1/2 - \varepsilon\delta)$-bounded channel makes $\mathsf{W}[\mathsf{PRC}]$ $(4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n)$-substring-robust against $\mathrm{BSC}_{1/2-\delta}$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 23). The detector above suffices, since the proof of Lemma 23 decodes the same full block as that of Lemma 22.
- Robustness to random deletions, against $\mathrm{BDC}_p \circ \mathrm{BSC}_q$, uses the detector of [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Algorithm 3), which decodes every window of at most $n$ tokens under each pad, and a zero-bit PRC whose decoder accepts strings of every length, as in CG24's Definitions 1–2, not only $n$-bit strings. It holds for such a PRC robust to $\mathrm{BDC}_p \circ \mathrm{BSC}_{q + \alpha(\varepsilon) - q\alpha(\varepsilon)}$ under an assumption on the model, that the embedding channel on every substring with empirical entropy at least $4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n$ is $\mathrm{BSC}_{\alpha(\varepsilon)}$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 24, Assumption 4).
- Undetectable watermarks robust to a constant fraction of adversarial insertions, substitutions and deletions (edit distance), for alphabets of size polynomial in the security parameter, are built from indexing pseudorandom codes — [[GM24 - Edit Distance Robust Watermarks for Language Models|GM24]].
