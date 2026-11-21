---
type: folklore
status: draft
aliases:
  - Universal one-way function
  - Levin's universal one-way function
title: Universal one-way function
id: universal-one-way-function
---

# Universal one-way function

A **universal one-way function** is an explicit polynomial-time computable function that is [[hash-function#preimage-resistance-one-wayness|one-way]] if any one-way function exists — [[Lev85 - One-Way Functions and Pseudorandom Generators|Lev85]]; the direct product of polynomially many independent copies of $F_{\mathrm{univ}}$ below is one — [[Lev85 - One-Way Functions and Pseudorandom Generators|Lev85]], [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]]. It is unrelated to [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash functions]].

## Construction

Fix a universal machine $U$ and an encoding of machines in which every string encodes a machine and every machine has encodings of every sufficiently large length. For $x \in \bits^n$ and $d \in \bits^{\lceil \log_2 n \rceil}$, let

$$
F_{\mathrm{univ}}(d, x) := (d, y),
$$

where $y$ is the output of the machine encoded by $d$ on input $x$ if $U$ completes its simulation within $n^2$ steps, and $y := 0$ otherwise. $F_{\mathrm{univ}}$ is computable in polynomial time — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].

## Universality

If a one-way function exists, then $F_{\mathrm{univ}}$ is [[hash-function#weak-one-wayness|weakly one-way]], and the direct product of polynomially many independent copies of it is one-way ([[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF]]) — [[Lev85 - One-Way Functions and Pseudorandom Generators|Lev85]], [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]]. Conversely, if that direct product is one-way, a one-way function exists, so the existence of one-way functions is equivalent to the one-wayness of one explicit function.

Padding turns a one-way function $f$ into a one-way function $f'(x, z) := (f(x), z)$, with $|z|$ polynomial in $|x|$, whose simulation by $U$ finishes within $n^2$ steps on inputs of length $n$ — standard. For every large $n$, some string $d_{f'}$ of length $\lceil \log_2 n \rceil$ encodes the machine computing $f'$, and $d = d_{f'}$ with probability $2^{-\lceil \log_2 n \rceil} \ge 1/(2n)$. A preimage of $(d_{f'}, y)$ under $F_{\mathrm{univ}}$ has the form $(d_{f'}, x')$ with $f'(x') = y$. If an efficient $\calA$ inverted $F_{\mathrm{univ}}$ with probability at least $1 - 1/(4n)$ for infinitely many $n$, it would invert $F_{\mathrm{univ}}$ conditioned on $d = d_{f'}$, and hence $f'$, with probability at least $\tfrac12$ for those $n$. So every efficient inverter fails with probability more than $1/(4n)$ for all large $n$ — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].

## Notes

- The hardness of $F_{\mathrm{univ}}$ lies on the $1/\poly$ fraction of inputs whose first component encodes a one-way function, so the one-wayness of the amplified function reduces to that of an unspecified one-way function, with polynomial losses in input length, running time and success probability from padding, the weight $2^{-\lceil \log_2 n \rceil} \ge 1/(2n)$ of $d_{f'}$ and [[weak-owf-to-owf-yao82a|Yao's amplification]] — standard.
