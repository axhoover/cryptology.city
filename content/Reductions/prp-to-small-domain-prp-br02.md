---
type: reduction
status: draft
title: "PRP ⇒ Small-domain PRP (prefix cipher)"
aliases:
  - Prefix cipher
id: red-prp-to-small-domain-prp-br02
kind: implication
hypotheses: [prp]
conclusion: small-domain-prp
class: fully-black-box
model: standard
source:
  - "[[BR02 - Ciphers with Arbitrary Finite Domains|BR02]]"
security-loss: "none: an adversary against the prefix cipher on $\\ZZ_N$, inverse queries included, has at most the PRP advantage of an adversary against $E$ making $N$ queries"
rationale:
  class: "The prefix cipher evaluates the PRP only as an oracle at the points of the small domain, and the reduction runs any small-domain distinguisher only as an oracle, answering it from the ranks of N oracle answers."
---

# PRP ⇒ Small-domain PRP (prefix cipher)

## Statement

Let $E = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation|PRP]] on $\bits^{n(\secpar)}$, write $E_k := \Eval(k, \cdot)$, and take the random coins of $\KeyGen$ as the key, so that keys are uniform in $\bits^{\kappa(\secpar)}$ for the number $\kappa(\secpar)$ of coins. For $N = N(\secpar) \le 2^{n(\secpar)}$, which holds for all large $\secpar$ when $N$ is polynomially bounded and $n = \omega(\log \secpar)$, identify $\ZZ_N$ with the first $N$ strings of $\bits^n$ in lexicographic order. The **prefix cipher** on $\ZZ_N$ has the key of $E$ and maps $x$ to the rank of $E_k(x)$ among $E_k(0), \ldots, E_k(N-1)$,

$$
\mathrm{Px}_k(x) := \left|\{\, j \in \ZZ_N : E_k(j) < E_k(x) \,\}\right|,
$$

in lexicographic order on $\bits^n$, with $\mathrm{Px}_k^{-1}(y)$ the $x$ of rank $y$; over an ideal cipher $\mathrm{Px}_k$ is a uniformly random permutation of $\ZZ_N$, and it stays secure when $E$ is a PRP — [[BR02 - Ciphers with Arbitrary Finite Domains|BR02]]. For every polynomially bounded $N$ it is therefore a [[pseudorandom-permutation#small-domain-prps|small-domain PRP]], and a strong one: for every $\calA$ against $\mathrm{Px}$ with forward and inverse queries there is a $\calB$ making $N$ queries to its oracle, running in the time of $\calA$ plus $O(N \log N)$ comparisons of $n$-bit strings, with $\Adv^{\mathrm{sprp}}_{\mathrm{Px},\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{E,\calB}(\secpar)$ — standard.

## Sketch

$\calB$ queries its oracle at $0, \ldots, N-1$, ranks the answers, and answers every forward and inverse query of $\calA$ from the resulting table. For a uniform permutation $\pi$ of $\bits^n$, the tuple $(\pi(0), \ldots, \pi(N-1))$ is a uniform tuple of distinct values; permuting its positions by any $\tau \in \Perms(\ZZ_N)$ leaves its distribution unchanged and composes its rank vector with $\tau$, so the ranks form a uniformly random permutation of $\ZZ_N$ — standard.

## Notes

- Cost: BR02 compute the table once, in $O(N)$ time and space, after which enciphering and deciphering are table lookups, and they call the method practical only for small $N$, such as $N < 2^{30}$ — [[BR02 - Ciphers with Arbitrary Finite Domains|BR02]]. With keys of $\kappa$ bits and no stored table, each evaluation of $\mathrm{Px}_k$ or $\mathrm{Px}_k^{-1}$ makes $N$ calls to $E_k$ — standard.
- For larger domains, [[BR02 - Ciphers with Arbitrary Finite Domains|BR02]] also analyse a cycle-walking cipher, which iterates $E_k$ until the output lands in $\ZZ_N$, and a Feistel network with halves in $\ZZ_a$ and $\ZZ_b$ for $ab \ge N$.
