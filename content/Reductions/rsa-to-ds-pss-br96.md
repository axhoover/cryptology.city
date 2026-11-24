---
type: reduction
status: draft
title: "RSA ⇒ DS (RSA-PSS, random oracle model)"
aliases:
  - PSS
  - RSA-PSS
id: red-rsa-to-ds-br96
kind: implication
hypotheses: [rsa]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]]"
security-loss: "tight: the inverter's success is at least the forger's less $3(q_S + q_H)^2(2^{-k_0} + 2^{-k_1})$, at $(q_S + q_H + 1) \\cdot k_0 \\cdot \\Theta(k^3)$ extra time"
rationale:
  class: "The scheme uses only the modulus generator and arithmetic modulo the modulus, and the fixed reduction runs any forger once as an oracle, answering its signing and random-oracle queries itself."
  model: "The reduction programs both random oracles so that each image point it defines is the challenge times the e-th power of a known unit for a hash query, or the e-th power of a known unit for a signing query."
  security-loss: "The challenge is embedded in every image point defined for a hash query, so no query is guessed and only seed and hash-value collisions, cut-off sampling loops and forgeries on an unqueried hash input are lost."
---

# RSA ⇒ DS (RSA-PSS, random oracle model)

## Statement

Let $\GrGen$ be a generator of the [[rsa-assumption|RSA]] syntax, $k$ the bit length of the modulus $N$, and $k_0, k_1 \ge 1$ with $k_0 + k_1 \le k - 1$. The probabilistic signature scheme $\mathrm{PSS}[k_0, k_1]$ uses random oracles $h : \bits^* \to \bits^{k_1}$ and $g : \bits^{k_1} \to \bits^{k - k_1 - 1}$, with $g_1(w)$ the first $k_0$ bits of $g(w)$ and $g_2(w)$ the other $k - k_0 - k_1 - 1$. $\KeyGen(1^\secpar)$ outputs $\vk = (N, e)$ and $\sk = (N, d)$ for $(N, e, d) \gets \GrGen(1^\secpar)$. $\Sign(\sk, M)$ draws $r \getsr \bits^{k_0}$, sets $w := h(M \| r)$, $r^* := g_1(w) \oplus r$ and $y := 0 \| w \| r^* \| g_2(w)$, and outputs $y^d \bmod N$. $\Vrfy(\vk, M, \sigma)$ parses $\sigma^e \bmod N$ as $b \| w \| r^* \| \gamma$, with $b$ one bit, $w$ of $k_1$ bits and $r^*$ of $k_0$ bits, sets $r := r^* \oplus g_1(w)$, and accepts iff $b = 0$, $h(M \| r) = w$ and $g_2(w) = \gamma$. For every forger against the [[digital-signature#existential-unforgeability|EUF-CMA]] security of PSS in the [[random-oracle-model|random-oracle model]] that runs in time $t$, makes at most $q_S$ signing queries and $q_H$ queries to $h$ and $g$ together, and succeeds with probability $\varepsilon$, there is an RSA inverter that runs in time $t + (q_S + q_H + 1) \cdot k_0 \cdot \Theta(k^3)$ and succeeds with probability at least

$$
\varepsilon - 3(q_S + q_H)^2 \left(2^{-k_0} + 2^{-k_1}\right)
$$

— [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]], Theorem 4.1. Since $y < 2^{k-1} \le N$, the scheme is perfectly correct, so if RSA is hard for $\GrGen$ and $k_0, k_1 = \omega(\log \secpar)$, PSS is an EUF-CMA-unforgeable signature scheme in the random-oracle model.

## Sketch

Given $(N, e, \eta)$, the inverter answers each new $h$-query $M \| r$ by drawing $x \getsr \ZZ_N^*$ until $y := \eta x^e \bmod N$ has leading bit $0$, and defines $h(M \| r)$ and $g(w)$ so that $y$ is the image point of $(M, r)$; it answers a signing query on $M$ the same way with a fresh seed $r$ and $y := x^e \bmod N$, so that $x$ is the signature. Unless two seeds or two $h$-values collide, a sampling loop is cut off, or the forgery's $M \| r$ was never queried to $h$, a valid forgery $(M, \sigma)$ has image point $\eta x^e \bmod N$ for a recorded $x$, and $\sigma x^{-1} \bmod N$ is the $e$-th root of $\eta$. No query is guessed, so only these events, of total probability at most $3(q_S + q_H)^2(2^{-k_0} + 2^{-k_1})$, are lost — [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]].

## Notes

- BR96 state the theorem for moduli that are products of two random $(k/2)$-bit primes with a random exponent $e \in \ZZ_{\phi(N)}^*$, and note that their results also hold for other RSA generators, such as a fixed exponent $e = 3$ — [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]], Section 2.1.
- Full-domain hash, which signs $H(M)^d \bmod N$ deterministically, has a reduction from RSA losing a factor $q_S + q_H + 1$ ([[tdp-to-ds-br93|TDP ⇒ DS (full-domain hash)]]) — [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]], Theorem 3.1.
- A random salt of $\log_2 q_S$ bits suffices for a security level equivalent to RSA; with fewer bits PSS remains provably secure but no security proof can be tight — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]].
- The same technique gives PSS-R, which recovers the message from the signature, and variants based on the Rabin function whose security is tightly related to factoring — [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]].
- PKCS #1 v2.2 standardizes RSASSA-PSS, whose encoding is based on PSS but salts the hash of $M$ rather than $M$ itself and fixes eight trailer bits besides the leading zero; it refers to Jonsson for the adaptation of the proofs to these differences — [[MKJR16 - PKCS 1 RSA Cryptography Specifications Version 2.2|MKJR16]], Sections 8.1 and 9.1.
