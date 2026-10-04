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
---

# Pseudorandom error-correcting code

A Pseudorandom Error-correcting Code (PRC) is a type of [[symmetric-key-encryption|SKE]] that requires ciphertext decoding to be _robust_ to some modifications, introduced by [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]. There is additionally a _zero-bit PRC_ which does not allow for a message. Both variations are useful for constructing cryptographic watermarking of generative AI.

## Syntax

An $L$-bit PRC is a tuple of efficient algorithms $(\Gen, \Enc, \Dec)$, with respect to key space $\calK$, message space $\bits^L$, and ciphertext space $\bits^n$ such that

- $\Gen(1^\secpar) \to k$, is a randomized algorithm that takes a security parameter, and outputs a key $k \in \calK$,
- $\Enc_k(m) \to c$, is a randomized algorithm that takes a key $k\in \calK$ and message $m\in \bits^L$, and outputs a ciphertext $c \in \bits^n$,
- $\Dec_k(c) \to \{m,\bot\}$, is a deterministic algorithm that takes a key $k \in \calK$ and candidate ciphertext $c \in \bits^n$, and outputs either a message $m\in \bits^L$ or $\bot$

A _zero-bit_ PRC has the same requirements as an $L$-bit PRC, except that the message space is just the singleton set $\{1\}$, which means that $\Enc$ takes no input and just outputs codewords. Then, $\Dec$ simply detects whether or not the candidate ciphertext is close to a codeword.

## Properties

### Pseudorandomness

We define the advantage of a distinguisher $D$ as $$\Adv^{\mathrm{prc}}_D(\secpar) := \left|\Pr[D^{\Enc_k}(1^\secpar) = 1] - \Pr[D^{R}(1^\secpar) = 1]\right|,$$where $k \gets \Gen(1^\secpar)$ and $R$ is a random response oracle, which on each query gives a uniformly random $n$-bit string (even on the same input, unlike a random oracle).

A PRC is _pseudorandom_ if for all efficient $D$, there exists a negligible function $\nu$, such that: $\Adv^{\mathrm{prc}}_D(\secpar)\le \nu(\secpar)$.

### Completeness/Robustness

A PRC is $\varepsilon$-robust if there is a negligible function $\nu$, such that for every message $m$, $$\Pr[\Dec_k(\calE(\Enc_k(m))) \ne m] \le \nu(\secpar),$$where $k \gets \Gen(1^\secpar)$ and $\calE$ is any $\varepsilon$-bounded channel. Meaning that $\calE$ is a length preserving function with the property that for every $n$-bit string $c$, $\calE(c)$ and $c$ have Hamming distance at most $\varepsilon \cdot n$.

### Soundness

A PRC is _sound_ if there is a negligible function $\nu$, such that for all $\hat{c}$, $$\Pr_{k \gets \Gen(1^\secpar)}[\Dec_k(\hat{c}) \ne \bot] \le \nu(\secpar)$$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

# Variations

## Adaptive robustness

A PRC with **adaptive robustness** strengthens the robustness property to allow the channel $\calE$ to be chosen _after_ seeing the codeword $c = \Enc_k(m)$, rather than being fixed in advance. Formally, the adversarial channel $\calE$ may depend on $c$ (but not on $k$ or $m$ directly). This models a stronger adversary who can tailor the corruption pattern to the specific codeword.

## Ideal PRC

An **ideal PRC** is one for which, with $k \gets \Gen(1^\secpar)$, oracle access to $(\Enc_k, \Dec_k)$ is computationally indistinguishable from oracle access to an ideal functionality. Its encoder returns a fresh uniformly random $n$-bit string on every query. Its decoder returns $m$ on any string within Hamming distance $\varepsilon n$ of a string the encoder returned on input $m$, and $\bot$ on every other string. The adversary never receives $k$. Ideal security implies pseudorandomness, soundness and adaptive robustness against efficient channels — [[AACDG25 - Ideal Pseudorandom Codes|AACDG25]].

## Zero-bit PRC

A **zero-bit PRC** has a singleton message space $\{1\}$: the encoder takes no message input and simply outputs a codeword, while the decoder detects whether a candidate string is close to a codeword. Zero-bit PRCs are useful for **watermarking generative AI outputs**: embed a pseudorandom codeword into generated text/images such that possession of the secret key allows detection, while outputs look uniformly random to anyone without the key — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

# Other results

- PRCs were introduced in [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] motivated by undetectable watermarking of AI-generated content
- [[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Watermarking]]
- [[subexponential-lpn-to-prc-cg24|Subexponential LPN ⇒ PRC]], including zero-bit PRCs — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]

<!-- BEGIN GENERATED participates-in f7e313e54f70 -->

## Participates in

**Builds on Pseudorandom error-correcting code**

- [[adaptive-robustness-to-prc|Adaptive robustness ⇒ PRC]] (via [[pseudorandom-error-correcting-code#adaptive-robustness|Adaptive robustness]])
- [[prc-to-ske-cg24|PRC ⇒ SKE]]
- [[zero-bit-prc-to-trapdoor-pseudorandom-generators|Zero-bit PRC ⇒ Trapdoor pseudorandom generators]] (via [[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]])
- [[zero-bit-prc-to-watermarking-cg24|Zero-bit PRC ⇒ Watermarking]] (via [[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]])

**Produces Pseudorandom error-correcting code**

- [[adaptive-robustness-to-prc|Adaptive robustness ⇒ PRC]]
- [[lwe-to-zero-bit-prc-cg24|Subexponential LPN ⇒ Zero-bit PRC]] (via [[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]])
- [[subexponential-lpn-to-prc-cg24|Subexponential LPN ⇒ PRC]]

<!-- END GENERATED participates-in -->
