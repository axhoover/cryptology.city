---
type: primitive
status: draft
aliases:
  - Watermarking
  - Language model watermarking
title: Language model watermarking
id: language-model-watermarking
variants:
  substring-complete-language-model-watermarking: "#substring-complete-watermarks"
---

# Language model watermarking

A language model watermarking scheme embeds a hidden signal in a model's output that is detectable with a secret key, while remaining undetectable without it: watermarked text is computationally indistinguishable from the model's true output distribution, even to a user who queries adaptively chosen prompts — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]].

## Syntax

A language model $\mathsf{Model}$ over a token set $T$ is a deterministic algorithm mapping a prompt and a token prefix $(t_1, \ldots, t_{i-1})$ to a distribution over $T$, the next-token distribution; its response $\mathsf{Model}(\mathit{prompt}) \in T^*$ is sampled token by token until a terminating token is drawn — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. A watermarking scheme for $\mathsf{Model}$ is a tuple of efficient algorithms $\mathsf{W} = (\Setup, \mathsf{Wat}, \mathsf{Detect})$:

- $\Setup(1^\secpar) \to \sk$, a randomized algorithm outputting a secret key,
- $\mathsf{Wat}(\sk, \mathit{prompt}) \to \mathit{text}$, a randomized algorithm that generates a response to $\mathit{prompt}$ with oracle access to the next-token distributions of $\mathsf{Model}$,
- $\mathsf{Detect}(\sk, \mathit{text}) \to \bits$, a deterministic algorithm deciding whether $\mathit{text}$ carries the watermark.

## Properties

As an object, Watermarking denotes a scheme $\mathsf{W}$ that, for every language model $\mathsf{Model}$ whose responses have length at most $\poly(\secpar)$, is [[#Undetectability|undetectable]], [[#Soundness|sound]] and $b(L)$-[[#Completeness|complete]] for some $b(L) = O(\secpar\sqrt{L})$ — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. Completeness with $b(L) = O(\secpar\sqrt{L})$ rules out the scheme $\mathsf{Wat} := \mathsf{Model}$, $\mathsf{Detect} := 0$: a model that emits $\secpar^3$ uniform bits and then stops has empirical entropy $\secpar^3 \ge b(\secpar^3 + 1)$ on every response, for all large $\secpar$ — standard.

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

An undetectable scheme can watermark only responses whose empirical entropy is high relative to the distinguisher's running time: if $\mathsf{W}$ is sound and, for some $\mathit{prompt}$ and $t$, a response $x \gets \mathsf{Wat}(\sk, \mathit{prompt})$ is detected and has $H_e(\mathsf{Model}, \mathit{prompt}, x) \le t$ with probability greater than $1/\poly(\secpar)$, then $\mathsf{Wat}(\sk, \cdot)$ and $\mathsf{Model}$ are distinguishable with non-negligible probability using $O(\exp(t) \cdot \poly(\secpar))$ queries and time — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. A threshold on the Shannon entropy of $\mathsf{Model}(\mathit{prompt})$ in place of $H_e$ does not work: for every $b$ and $\varepsilon > 0$ some prompt-independent model has $H(\mathsf{Model}(\emptyset)) \ge b$, yet every sound, undetectable scheme for it detects a response $x \gets \mathsf{Wat}(\sk, \emptyset)$ to the empty prompt with probability at most $\varepsilon + \negl(\secpar)$ — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]].

### Soundness

A watermarking scheme $\mathsf{W}$ is **sound** if for every $\mathit{text}$ of length at most $\poly(\secpar)$,

$$
\Pr\!\left[\mathsf{Detect}(\sk, \mathit{text}) = 1 : \sk \gets \Setup(1^\secpar)\right]
$$

is negligible — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]]. The same bound holds for a text of length at most $\poly(\secpar)$ sampled independently of $\sk$, in particular a human-written one.

# Variations

## Robust watermarks

A watermark is **robust** if detection survives edits to the text, such as cropping, substitutions, insertions and deletions. For a channel $\calE$ on token strings, $\mathsf{W}$ is **$b(L)$-substring-robust against $\calE$** if the condition of [[#Substring-complete watermarks|substring completeness]] holds with $\mathsf{Detect}(\sk, \calE(t[i:i+L]))$ in place of $\mathsf{Detect}(\sk, t[i:i+L])$, for every $\mathit{prompt}$ of length at most $\poly(\secpar)$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Definition 13). For constants $\varepsilon, \delta > 0$, the scheme built from a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] of block length $n$ robust to every $(1/2 - \varepsilon\delta)$-bounded channel is $(4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n)$-substring-robust against $\mathrm{BSC}_{1/2-\delta}$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 23). The same scheme built from a zero-bit PRC robust to $\mathrm{BDC}_p \circ \mathrm{BSC}_{q + \alpha(\varepsilon) - q\alpha(\varepsilon)}$, for constants $p \in (0,1)$ and $q \in (0, 1/2)$, is $(4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n)$-substring-robust against random deletions and substitutions, $\mathrm{BDC}_p \circ \mathrm{BSC}_q$, under an assumption on the model: the embedding channel on every substring with empirical entropy at least $4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n$ is $\mathrm{BSC}_{\alpha(\varepsilon)}$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemma 24, Assumption 4). Undetectable watermarks robust to a constant fraction of adversarial insertions, substitutions and deletions exist for language models whose alphabet size is polynomial in $\secpar$ — [[GM24 - Edit Distance Robust Watermarks for Language Models|GM24]].

## Substring-complete watermarks

For a response $t$ and $1 \le i \le j \le |t|$, write $t[i:j] := (t_i, \ldots, t_j)$. The **empirical entropy on substring $[i, j]$** of $\mathsf{Model}$ responding with $t$ to $\mathit{prompt}$ is

$$
H_e^{[i,j]}(\mathsf{Model}, \mathit{prompt}, t) := -\log_2 \Pr\!\left[\mathsf{Model}(\mathit{prompt})[i:j] = t[i:j] \mid \mathsf{Model}(\mathit{prompt})[1:i-1] = t[1:i-1]\right].
$$

For $b : \NN \to \mathbb{R}$, $\mathsf{W}$ is **$b(L)$-substring-complete** if for every $\mathit{prompt}$,

$$
\Pr\!\left[\exists\, i, L \ge 1,\ i + L \le |t| : \mathsf{Detect}(\sk, t[i:i+L]) = 0 \,\wedge\, H_e^{[i,i+L]}(\mathsf{Model}, \mathit{prompt}, t) \ge b(L) : \sk \gets \Setup(1^\secpar),\ t \gets \mathsf{Wat}(\sk, \mathit{prompt})\right]
$$

is negligible — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Definition 11).

As an object, substring-complete watermarking denotes a scheme $\mathsf{W}$ with a block length $n = n(\secpar) \le \poly(\secpar)$, fixed independently of $\mathsf{Model}$, such that for every $\mathsf{Model}$ over the token set $\bits$ whose responses have at most $L^* \le \poly(\secpar)$ tokens, with $L^*$ given to $\Setup$, $\mathsf{W}$ is [[#Undetectability|undetectable]], [[#Soundness|sound]] and, for every constant $\varepsilon > 0$, $b_\varepsilon(L)$-substring-complete with $b_\varepsilon(L) = 4\sqrt{\varepsilon}\,L + 2\sqrt{2}\,n$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (Lemmas 18, 19 and 22). Any model reduces to one over $\bits$: a prefix-free binary encoding of tokens gives a model over $\bits$ whose decoded responses have the original distribution and the same empirical entropy — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (§7.1). A single $\varepsilon \ge 1/16$ would not suffice, since it gives $b_\varepsilon(L) \ge L + 2\sqrt{2}\,n$. Binary strings of $L + 1$ tokens with conditional probability at most $2^{-b}$ have total conditional probability at most $2^{L+1-b}$, so by a union bound over $(i, L)$ the scheme $\mathsf{Wat} := \mathsf{Model}$, $\mathsf{Detect} := 0$ with $n := \secpar$ meets that bound — standard. The entropy threshold $b_\varepsilon(L)$ is linear in $L$, against $O(\secpar\sqrt{L})$ for the base notion. Zero-bit PRCs give substring-complete watermarking ([[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Substring-complete watermarking]]) — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

# Other results

- Watermarking schemes that are undetectable, sound and $O(\secpar\sqrt{L})$-complete for every language model exist if [[hash-function#preimage-resistance-one-wayness|one-way functions]] do ([[owf-to-language-model-watermarking-cgz24|OWF ⇒ Watermarking]]) — [[CGZ24 - Undetectable Watermarks for Language Models|CGZ24]] (Theorem 1).

<!-- BEGIN GENERATED participates-in d343ccdd111b -->

## Participates in

**Produces Language model watermarking**

- [[owf-to-language-model-watermarking-cgz24|OWF ⇒ Watermarking]]
- [[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Substring-complete watermarking]] (via [[language-model-watermarking#substring-complete-watermarks|Substring-complete watermarks]])

<!-- END GENERATED participates-in -->
