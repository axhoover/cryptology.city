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

A language model $\mathsf{Model}$ maps a prompt to a distribution over responses, strings of tokens, and is sampled token by token from its next-token distributions. A watermarking scheme for $\mathsf{Model}$ is a tuple of efficient algorithms $(\Setup, \mathsf{Wat}, \mathsf{Detect})$:

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
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Comment{Prompts are chosen adaptively}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A watermarking scheme $\mathsf{W}$ is **undetectable** if for all efficient $\calA$,

$$
\Adv^{\mathrm{undet}}_{\mathsf{W},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{undet}}_{\mathsf{W},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. In particular, no user observes any change in the quality of the text.

### Soundness and completeness

**Soundness**: every text fixed independently of $\sk$, in particular every human-written text, is detected as watermarked with negligible probability over $\Setup$. **Completeness**: a response produced by $\mathsf{Wat}$ is detected as watermarked except with negligible probability, provided the response has enough empirical entropy; responses with little entropy, which the model determines almost uniquely, cannot carry an undetectable watermark — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]].

# Variations

## Robust watermarks

A watermark is **robust** if detection survives edits to the text, such as cropping and a constant rate of substitutions and deletions. Robust undetectable watermarks follow from [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit pseudorandom codes]] ([[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Watermarking]]) — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

# Other results

- Undetectable watermarks exist if one-way functions do ([[owf-to-language-model-watermarking-cgz24|OWF ⇒ Watermarking]]) — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]].

<!-- BEGIN GENERATED participates-in dc715708da57 -->

## Participates in

**Produces Language model watermarking**

- [[owf-to-language-model-watermarking-cgz24|OWF ⇒ Watermarking]]
- [[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Watermarking]]

<!-- END GENERATED participates-in -->
