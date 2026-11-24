---
type: primitive
status: stub
aliases:
  - PRC
  - Pseudorandom Codes
  - Pseudorandom error-correcting code
title: Pseudorandom error-correcting code
id: prc
variants:
  zero-bit-prc: "#zero-bit-prc"
  ideal-prc: "#ideal-prc"
  adaptively-robust-prc: "#adaptive-robustness"
  substitution-robust-zero-bit-prc: "#substitution-robust-zero-bit-prc"
---

# Pseudorandom error-correcting code

A Pseudorandom Error-correcting Code (PRC) is a type of [[symmetric-key-encryption|SKE]] that requires ciphertext decoding to be _robust_ to some modifications ([[prc-to-ske-cg24|PRC ⇒ SKE]]), introduced by [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]. There is additionally a _zero-bit PRC_ which does not allow for a message. Both variations are useful for constructing cryptographic watermarking of generative AI.

## Syntax

An $L$-bit PRC, for $L = L(\secpar) \ge 1$, is a tuple of efficient algorithms $(\Gen, \Enc, \Dec)$, with respect to key space $\calK$, message space $\bits^L$, and ciphertext space $\bits^n$ such that

- $\Gen(1^\secpar) \to k$, is a randomized algorithm that takes a security parameter, and outputs a key $k \in \calK$,
- $\Enc_k(m) \to c$, is a randomized algorithm that takes a key $k\in \calK$ and message $m\in \bits^L$, and outputs a ciphertext $c \in \bits^n$,
- $\Dec_k(c) \to \{m,\bot\}$, is a deterministic algorithm that takes a key $k \in \calK$ and candidate ciphertext $c \in \bits^n$, and outputs either a message $m\in \bits^L$ or $\bot$

A _zero-bit_ PRC has the same requirements as an $L$-bit PRC, except that the message space is just the singleton set $\{1\}$, which means that $\Enc$ takes no input and just outputs codewords. Then, $\Dec$ simply detects whether or not the candidate ciphertext is close to a codeword.

## Properties

As an object, a PRC denotes an $L$-bit PRC with $L \ge 1$ that is pseudorandom, sound and $\varepsilon$-robust for some constant $\varepsilon > 0$; a zero-bit PRC is the same with message space $\{1\}$.

### Pseudorandomness

We define the advantage of a distinguisher $D$ as $$\Adv^{\mathrm{prc}}_D(\secpar) := \left|\Pr[D^{\Enc_k}(1^\secpar) = 1] - \Pr[D^{R}(1^\secpar) = 1]\right|,$$where $k \gets \Gen(1^\secpar)$ and $R$ is a random response oracle, which on each query gives a uniformly random $n$-bit string (even on the same input, unlike a random oracle).

A PRC is _pseudorandom_ if for all efficient $D$, there exists a negligible function $\nu$, such that: $\Adv^{\mathrm{prc}}_D(\secpar)\le \nu(\secpar)$.

### Completeness/Robustness

A PRC is $\varepsilon$-robust if for every $\varepsilon$-bounded channel $\calE$ there is a negligible function $\nu$ such that for every message $m$, $$\Pr[\Dec_k(\calE(\Enc_k(m))) \ne m] \le \nu(\secpar),$$where $k \gets \Gen(1^\secpar)$. An $\varepsilon$-bounded channel is a length-preserving function $\calE$ such that for every $n$-bit string $c$, $\calE(c)$ and $c$ have Hamming distance at most $\varepsilon \cdot n$.

### Soundness

A PRC is _sound_ if there is a negligible function $\nu$, such that for all $\hat{c}$, $$\Pr_{k \gets \Gen(1^\secpar)}[\Dec_k(\hat{c}) \ne \bot] \le \nu(\secpar)$$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

# Variations

## Adaptive robustness

A PRC with **adaptive robustness** is a PRC as in the base object (pseudorandom, sound and $\varepsilon$-robust for some constant $\varepsilon > 0$) that is in addition adaptively $\delta$-robust for some constant $\delta > 0$: no efficient adversary with an encoding oracle outputs a string within Hamming distance $\delta n$ of a codeword it received that fails to decode to that codeword's message — [[AACDG25 - Ideal Pseudorandom Codes|AACDG25]] (arXiv v1, Definition 2). Forgetting adaptive robustness leaves a PRC ([[adaptive-robustness-to-prc|Adaptive robustness ⇒ PRC]]).

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{adapt}}_{\mathsf{PRC},\delta,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \Gen(1^\secpar)$; $T \gets \emptyset$
\State $x \gets \calA^{\calO}(1^\secpar)$
\Comment{$x \in \bits^n$}
\State $m' \gets \Dec_k(x)$
\Comment{$m' = \bot$ is possible}
\Return $[\exists (m, c) \in T : \mathrm{wt}(x \oplus c) \le \delta n \wedge m' \ne m]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $c \gets \Enc_k(m)$; $T \gets T \cup \{(m, c)\}$
\Return $c$
\end{algorithmic}
\end{algorithm}
```

A PRC $\mathsf{PRC}$ is **adaptively $\delta$-robust** if for all efficient $\calA$,

$$
\Adv^{\mathrm{adapt}}_{\mathsf{PRC},\delta,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{adapt}}_{\mathsf{PRC},\delta,\calA}(\secpar) = 1\right]
$$

is negligible — [[AACDG25 - Ideal Pseudorandom Codes|AACDG25]] (arXiv v1, Definition 2). The game bounds only efficient adversaries, while an $\varepsilon$-bounded channel need not be efficiently computable, so $\varepsilon$-robustness is a separate requirement of the variant.

## Ideal PRC

An **ideal PRC** is one for which, with $k \gets \Gen(1^\secpar)$, oracle access to $(\Enc_k, \Dec_k)$ is computationally indistinguishable from oracle access to an ideal functionality. Its encoder returns a fresh uniformly random $n$-bit string on every query. Its decoder returns $m$ on a string within Hamming distance $\delta n$ of a string the encoder returned on input $m$, and $\bot$ on a string farther than $\delta n$ from all of them. The adversary never receives $k$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ideal}}_{\mathsf{PRC},\delta,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \Gen(1^\secpar)$; $b \getsr \bits$; $T \gets \emptyset$
\State $b' \gets \calA^{\calO_{\mathrm{enc}}, \calO_{\mathrm{dec}}}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{enc}}(m)$}
\begin{algorithmic}
\If{$b = 0$}
\Return $\Enc_k(m)$
\EndIf
\State $c \getsr \bits^n$; $T \gets T \cup \{(m, c)\}$
\Return $c$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{dec}}(x)$}
\begin{algorithmic}
\If{$b = 0$}
\Return $\Dec_k(x)$
\EndIf
\State $M \gets \{m : \exists (m, c) \in T,\ \mathrm{wt}(c \oplus x) \le \delta n\}$
\If{$M = \emptyset$}
\Return $\bot$
\EndIf
\State $m \getsr M$
\Return $m$
\end{algorithmic}
\end{algorithm}
```

For a constant $\delta > 0$, an $L$-bit scheme $\mathsf{PRC} = (\Gen, \Enc, \Dec)$ with the syntax above has **ideal $\delta$-robust security** if for all efficient $\calA$,

$$
\Adv^{\mathrm{ideal}}_{\mathsf{PRC},\delta,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ideal}}_{\mathsf{PRC},\delta,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[AACDG25 - Ideal Pseudorandom Codes|AACDG25]] (arXiv v1, Definition 5). As an object, an ideal PRC denotes such a scheme with $L \ge 1$ that has ideal $\delta$-robust security for some constant $\delta > 0$; no other property is required. Ideal security implies pseudorandomness, soundness and adaptive robustness against efficient channels, and with more than one message it is possible only for $\delta < 1/4$ — [[AACDG25 - Ideal Pseudorandom Codes|AACDG25]] (arXiv v1, §2.4).

## Zero-bit PRC

A **zero-bit PRC** has a singleton message space $\{1\}$: the encoder takes no message input and simply outputs a codeword, while the decoder detects whether a candidate string is close to a codeword. Zero-bit PRCs are useful for **watermarking generative AI outputs**: embed a pseudorandom codeword into generated text/images such that possession of the secret key allows detection, while outputs look uniformly random to anyone without the key — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Substitution-robust zero-bit PRC

As an object, a **substitution-robust zero-bit PRC** denotes a family $(\mathsf{PRC}_p)_{p \in (0, 1/2)}$ such that, for every constant $p \in (0, 1/2)$, $\mathsf{PRC}_p$ is a zero-bit PRC that is pseudorandom, sound and robust to every $p$-bounded channel, and whose block length $n_p(\secpar)$ is at least $\secpar^{c_p}$, for a constant $c_p > 0$ and all sufficiently large $\secpar$; the code, its block length and its key generation may depend on $p$. The bound makes every function negligible in $n_p$ negligible in $\secpar$ — standard; the channel bound below and the watermark analysis are stated in the block length, which is the security parameter there, $n(\secpar) = \secpar$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (§5.1, §5.2, Lemmas 20–22). A $p$-bounded channel is a length-preserving, possibly randomized, channel $\calE$ with $\Pr_{x \getsr \bits^n}[\mathrm{wt}(\calE(x) \oplus x) > pn] \le \negl(n)$, and robustness to it means that $\Pr[\Dec_k(\calE(c)) = \bot]$ is negligible for $k \gets \Gen(1^\secpar)$ and $c \gets \Enc_k$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (§5.2, Definitions 1–2). Every $\varepsilon$-bounded channel as defined above is $\varepsilon$-bounded in this sense, so the code $\mathsf{PRC}_\varepsilon$ for $p = \varepsilon$ is an $\varepsilon$-robust zero-bit PRC ([[substitution-robust-zero-bit-prc-to-zero-bit-prc|Substitution-robust zero-bit PRC ⇒ Zero-bit PRC]]).

# Other results

- PRCs were introduced in [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] motivated by undetectable watermarking of AI-generated content
- [[zero-bit-prc-to-watermarking-cg24|Substitution-robust zero-bit PRC ⇒ Substring-complete watermarking]] — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]
- Secret-key PRCs admit no black-box robust combiner, even one required to be secure only when all but one candidate PRC is secure — [[DKRR26 - On Robust Combiners for Pseudorandom Codes and PKE with Pseudorandom Ciphertexts|DKRR26]]
- [[subexponential-lpn-to-prc-cg24|Polylogarithmic-dimension LPN ⇒ PRC]] and [[lwe-to-zero-bit-prc-cg24|Polylogarithmic-dimension LPN ⇒ Substitution-robust zero-bit PRC]] — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]

<!-- BEGIN GENERATED participates-in 61f4b2aee59b -->

## Participates in

**Builds on Pseudorandom error-correcting code**

- [[adaptive-robustness-to-prc|Adaptive robustness ⇒ PRC]] (via [[pseudorandom-error-correcting-code#adaptive-robustness|Adaptive robustness]])
- [[prc-to-ske-cg24|PRC ⇒ SKE]]
- [[substitution-robust-zero-bit-prc-to-zero-bit-prc|Substitution-robust zero-bit PRC ⇒ Zero-bit PRC]] (via [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|Substitution-robust zero-bit PRC]])
- [[zero-bit-prc-to-trapdoor-pseudorandom-generators|Zero-bit PRC ⇒ Trapdoor pseudorandom generators]] (via [[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]])
- [[zero-bit-prc-to-watermarking-cg24|Substitution-robust zero-bit PRC ⇒ Substring-complete watermarking]] (via [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|Substitution-robust zero-bit PRC]])

**Produces Pseudorandom error-correcting code**

- [[adaptive-robustness-to-prc|Adaptive robustness ⇒ PRC]]
- [[lwe-to-zero-bit-prc-cg24|Polylogarithmic-dimension LPN ⇒ Substitution-robust zero-bit PRC]] (via [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|Substitution-robust zero-bit PRC]])
- [[subexponential-lpn-to-prc-cg24|Polylogarithmic-dimension LPN ⇒ PRC]]
- [[substitution-robust-zero-bit-prc-to-zero-bit-prc|Substitution-robust zero-bit PRC ⇒ Zero-bit PRC]] (via [[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]])

<!-- END GENERATED participates-in -->
