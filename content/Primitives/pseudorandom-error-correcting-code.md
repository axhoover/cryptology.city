---
aliases:
  - PRC
  - Pseudorandom Codes
  - Pseudorandom error-correcting code
title: Pseudorandom error-correcting code
---

# Pseudorandom error-correcting code

A Pseudorandom Error-correcting Code (PRC) is a type of [[symmetric-key-encryption|SKE]] that requires ciphertext decoding to be _robust_ to some modifications edits, introduced by [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]. There is additionally a _zero-bit PRC_ which does not allow for a message. Both variations are useful for constructing cryptographic watermarking of generative AI.

## Syntax

A $L$-bit PRC is a tuple of efficient algorithms $(\Gen, \Enc, \Dec)$, with respect to key space $\calK$, message space $\bits^L$, and ciphertext space $\bits^n$ such that

- $\Gen(1^\secpar) \to k$, is a randomized algorithm that takes a security parameter, and outputs a key $k \in \calK$,
- $\Enc_k(m) \to c$, is a randomized algorithm that takes a key $k\in \calK$ and message $m\in \bits^L$, and outputs a ciphertext $c \in \bits^n$,
- $\Dec_k(c) \to \{m,\bot\}$, is a deterministic algorithm that takes a key $k \in \calK$ and candidate ciphertext $c \in \bits^n$, and outputs either a message $m\in \bits^L$ or $\bot$

A _zero-bit_ PRC, has the same requirements as a $L$-bit PRC, except that the message space is just the singleton set $\{1\}$, which means that $\Enc$ takes no input and just outputs codewords. Then, $\Dec$ simply detects whether or not the candidate ciphertext is close to a codeword.

## Properties

### Pseudorandomness

We define the advantage of a distinguisher $D$ as $$\Adv^{\mathrm{prc}}_D(\secpar) \le \left|\Pr[D^{\Enc_k}(1^\secpar) = 1] - \Pr[D^{R}(1^\secpar) = 1]\right|,$$where $k \gets \Gen(1^\secpar)$ and $R$ is a random response oracle, which on each query gives a uniformly random $n$-bit string (even on the same input, unlike a random oracle).

A PRC is _pseudorandom_ if for all efficient $D$, there exists a negligible function $\nu$, such that: $\Adv^{\mathrm{prc}}_D(\secpar)\le \nu(\secpar)$.

### Completeness/Robustness

A PRC is $\varepsilon$-robust if there is a negligible function $\nu$, such that for every message $m$, $$\Pr[\Dec_k(\calE(\Enc_k(m))) \ne m] \le \nu(\secpar),$$where $k \gets \Gen(1^\secpar)$ and $\calE$ is any $\varepsilon$-bounded channel. Meaning that $\calE$ is a length preserving function with the property that for every $n$-bit string $c$, $|\calE(c) - c| \le \varepsilon \cdot n$.

### Soundness

A PRC is _sound_ if there is a negligible function $\nu$, such that for all $\hat{c}$, $$\Pr_{k \gets \Gen(1^\secpar)}[\Dec_k(\hat{c}) = \bot] \le \nu(\secpar).$$

# Variations

## Adaptive robustness

A PRC with **adaptive robustness** strengthens the robustness property to allow the channel $\calE$ to be chosen _after_ seeing the codeword $c = \Enc_k(m)$, rather than being fixed in advance. Formally, the adversarial channel $\calE$ may depend on $c$ (but not on $k$ or $m$ directly). This models a stronger adversary who can tailor the corruption pattern to the specific codeword.

## Ideal PRC

An **ideal PRC** additionally requires that codewords are indistinguishable from uniformly random strings even to an adversary who holds the decoding key $k$. That is, the joint distribution $(k, \Enc_k(m))$ is computationally indistinguishable from $(k, U_n)$ where $U_n$ is a uniformly random $n$-bit string. This is strictly stronger than pseudorandomness (which only requires indistinguishability without the key). Ideal PRCs support watermarking schemes where even a user who knows the watermarking key cannot detect whether a given string is a codeword.

## Zero-bit PRC

A **zero-bit PRC** has a singleton message space $\{1\}$: the encoder takes no message input and simply outputs a codeword, while the decoder detects whether a candidate string is close to a codeword. Zero-bit PRCs are useful for **watermarking generative AI outputs**: embed a pseudorandom codeword into generated text/images such that possession of the secret key allows detection, while outputs look uniformly random to anyone without the key — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

# Other results

- PRCs were introduced in [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] motivated by undetectable watermarking of AI-generated content
- Zero-bit PRCs give a watermarking scheme for language model outputs that is undetectable (codewords look like random tokens) and robust to paraphrasing attacks — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]
- PRCs can be constructed from [[learning-with-errors|LWE]]: the LWE ciphertext structure naturally yields a pseudorandom, decodable code robust to bounded noise — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]
- The zero-bit PRC construction from LWE has codewords of length $n = O(\secpar^2 / \log \secpar)$ and is robust to $\varepsilon$-fraction bit flips for $\varepsilon < 1/2 - 1/\poly(\secpar)$ — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]
