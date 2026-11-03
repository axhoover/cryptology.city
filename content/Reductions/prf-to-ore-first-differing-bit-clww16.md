---
type: reduction
status: draft
title: "PRF ⇒ ORE leaking the first differing bit (CLWW16)"
aliases: []
id: red-prf-to-ore-first-differing-bit-clww16
kind: implication
hypotheses: [prf]
conclusion: ore-first-differing-bit
class: fully-black-box
model: standard
source:
  - "[[CLWW16 - Practical Order-Revealing Encryption with Limited Leakage|CLWW16]]"
security-loss: ""
rationale:
  class: "The scheme calls the PRF only as an oracle, and the reduction runs any adversary as an oracle, answering its queries with its own function oracle or with a fixed simulator."
---

# PRF ⇒ ORE leaking the first differing bit (CLWW16)

## Statement

Let $F$ be a [[pseudorandom-function|PRF]] with range $\ZZ_3$ on inputs $(\ell, x)$ with $\ell \in [n]$ and $x \in \bits^{\ell - 1}$. The [[order-preserving-encryption#order-revealing-encryption|ORE]] scheme on $\bits^n$ with

- $\KeyGen(1^\secpar)$: a key $k$ for $F$;
- $\Enc(k, m) := (u_1, \ldots, u_n)$ with $u_\ell := F(k, (\ell, m_1 \cdots m_{\ell-1})) + m_\ell \bmod 3$;
- $\mathsf{Cmp}((u_\ell)_\ell, (u'_\ell)_\ell)$: for the least $\ell$ with $u_\ell \ne u'_\ell$, output $1$ if $u'_\ell = u_\ell + 1 \bmod 3$ and $0$ otherwise; output $0$ if there is no such $\ell$

is correct and [[order-preserving-encryption#leakage-of-the-first-differing-bit|secure with leakage of the order and the first differing bit]] — [[CLWW16 - Practical Order-Revealing Encryption with Limited Leakage|CLWW16]].

## Sketch

Two encryptions agree up to the first differing bit $\ell$ of their plaintexts and differ there by $\pm 1 \bmod 3$, the sign giving the order. With a truly random function in place of $F$, the simulator copies, for each new query, the first $\ell - 1$ components of an earlier ciphertext that shares the longest prefix, sets the $\ell$-th component to that ciphertext's $\ell$-th component plus or minus $1$ as the order dictates, and samples the remaining components uniformly; all of this is computable from the leakage.

## Notes

- A ciphertext has $n$ elements of $\ZZ_3$, about $1.58n$ bits, and encryption takes $n$ PRF evaluations — standard.
