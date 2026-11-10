---
type: primitive
status: draft
aliases:
  - Watermarking
  - Language model watermarking
title: Language model watermarking
id: language-model-watermarking
---

# Language model watermarking

A language model watermarking scheme embeds a hidden signal in a model's output that is detectable with a secret key, while remaining undetectable without it: watermarked text is computationally indistinguishable from the model's true output distribution, even to a user who queries adaptively chosen prompts — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]].

## Syntax

A language model $\mathsf{Model}$ maps a prompt to a distribution over responses, strings of tokens, and is sampled token by token from its next-token distributions. A watermarking scheme for $\mathsf{Model}$ is a tuple of efficient algorithms $\mathsf{W} = (\Setup, \mathsf{Wat}, \mathsf{Detect})$:

- $\Setup(1^\secpar) \to \sk$, a randomized algorithm outputting a secret key,
- $\mathsf{Wat}(\sk, \mathit{prompt}) \to \mathit{text}$, a randomized algorithm that generates a response to $\mathit{prompt}$ using $\mathsf{Model}$,
- $\mathsf{Detect}(\sk, \mathit{text}) \to \bits$, a deterministic algorithm deciding whether $\mathit{text}$ carries the watermark.

## Properties

### Undetectability

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{undet}}_{\mathsf{W},\calA}(\secpar)$}
\begin{algorithmic}
\State $\sk \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(\mathit{prompt}) := \mathsf{Wat}(\sk, \mathit{prompt})$
\State $\calO_1(\mathit{prompt}) := \mathsf{Model}(\mathit{prompt})$
\State $b' \gets \calA^{\mathsf{Model}, \calO_b}(1^\secpar)$
\Comment{Prompts to both oracles are chosen adaptively}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A watermarking scheme $\mathsf{W}$ is **undetectable** if for all efficient $\calA$,

$$
\Adv^{\mathrm{undet}}_{\mathsf{W},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{undet}}_{\mathsf{W},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. In particular, no efficient user observes any change in the quality of the text.

### Completeness

The **empirical entropy** of $\mathsf{Model}$ responding with $x$ to $\mathit{prompt}$ is

$$
H_e(\mathsf{Model}, \mathit{prompt}, x) := -\log_2 \Pr\!\left[\mathsf{Model}(\mathit{prompt}) = x\right].
$$

For $b : \NN \to \mathbb{R}$, a watermarking scheme $\mathsf{W}$ is **$b(L)$-complete** if for every $\mathit{prompt}$ of length at most $\poly(\secpar)$,

$$
\Pr\!\left[\mathsf{Detect}(\sk, x) = 0 \,\wedge\, H_e(\mathsf{Model}, \mathit{prompt}, x) \ge b(|x|) : \sk \gets \Setup(1^\secpar),\ x \gets \mathsf{Wat}(\sk, \mathit{prompt})\right]
$$

is negligible — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. $H_e$ is measured with respect to $\mathsf{Model}$, not $\mathsf{Wat}$, and $\mathsf{Detect}$ need not compute it.

An undetectable scheme can watermark only responses whose empirical entropy is high relative to the distinguisher's running time: if $\mathsf{W}$ is sound and, for some $\mathit{prompt}$ and $t$, a response $x \gets \mathsf{Wat}(\sk, \mathit{prompt})$ is detected and has $H_e(\mathsf{Model}, \mathit{prompt}, x) \le t$ with probability greater than $1/\poly(\secpar)$, then $\mathsf{Wat}(\sk, \cdot)$ and $\mathsf{Model}$ are distinguishable with non-negligible probability using $O(\exp(t) \cdot \poly(\secpar))$ queries and time — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. A threshold on the Shannon entropy of $\mathsf{Model}(\mathit{prompt})$ in place of $H_e$ does not work: for every $b$ and $\varepsilon > 0$ some model has $H(\mathsf{Model}(\mathit{prompt})) \ge b$, yet every sound, undetectable scheme for it detects its watermarked responses with probability at most $\varepsilon + \negl(\secpar)$ — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]].

### Soundness

A watermarking scheme $\mathsf{W}$ is **sound** if for every $\mathit{text}$ of length at most $\poly(\secpar)$,

$$
\Pr\!\left[\mathsf{Detect}(\sk, \mathit{text}) = 1 : \sk \gets \Setup(1^\secpar)\right]
$$

is negligible — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. The same bound holds for a text sampled independently of $\sk$, in particular a human-written one.

# Variations

## Robust watermarks

A watermark is **robust** if detection survives edits to the text, such as cropping, substitutions, insertions and deletions. Undetectable watermarks robust to cropping and a constant rate of random substitutions and deletions follow from [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit pseudorandom codes]] ([[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Watermarking]]) — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]. Undetectable watermarks robust to a constant fraction of adversarial insertions, substitutions and deletions exist for language models whose alphabet size is polynomial in $\secpar$ — [[GM24 - Edit Distance Robust Watermarks for Language Models|GM24]].

# Other results

- Undetectable watermarks exist if [[hash-function#preimage-resistance-one-wayness|one-way functions]] do ([[owf-to-language-model-watermarking-cgz24|OWF ⇒ Watermarking]]) — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]].

<!-- BEGIN GENERATED participates-in dc715708da57 -->

## Participates in

**Produces Language model watermarking**

- [[owf-to-language-model-watermarking-cgz24|OWF ⇒ Watermarking]]
- [[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Watermarking]]

<!-- END GENERATED participates-in -->
