---
type: reduction
status: draft
title: PRF ⇒ CPA-secure SKE
aliases: []
id: red-prf-to-ske
kind: implication
hypotheses: [prf]
conclusion: ske
class: fully-black-box
model: standard
source: folklore
security-loss: "for $q$ encryptions of at most $\\ell$ blocks each, the CPA advantage is at most twice the PRF advantage plus a counter-window collision term $O(\\ell q^2 / 2^n)$"
---

# PRF ⇒ CPA-secure SKE

A [[pseudorandom-function|PRF]] implies a CPA-secure
[[symmetric-key-encryption|SKE]].

## Statement

A [[pseudorandom-function|PRF]] $\PRF = (\KeyGen, \Eval)$ with domain and range $\bits^n$ yields a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme via randomized counter mode: for $m_1, \ldots, m_\ell \in \bits^n$, $\Enc(k, m_1 \cdots m_\ell) := \left(r,\ (\Eval(k, r{+}1) \| \cdots \| \Eval(k, r{+}\ell)) \oplus (m_1 \| \cdots \| m_\ell)\right)$ with a fresh $r \getsr \bits^n$ per encryption and counters taken modulo $2^n$; $\Dec$ recomputes the pad from $r$ — folklore.

## Sketch

A hybrid replaces $\Eval(k, \cdot)$ by a truly random function; each pad block is then a fresh one-time pad unless the counter windows $[r{+}1, r{+}\ell]$ of two encryptions overlap, a birthday event over $\bits^n$ whose probability bounds the remaining advantage.

## Notes

`class: fully-black-box`: Randomized counter mode calls the PRF only as an oracle; the security reduction runs any CPA adversary as an oracle, answering its encryption queries with its own function oracle. Fixed construction, fixed reduction.

- Concrete IND-CPA bounds for randomized counter mode (the stateless XOR scheme) and its stateful variant, in terms of the PRF advantage and the number of blocks encrypted — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].
- The migrated formula omitted the per-encryption random starting counter $r$, making the scheme deterministic and hence not CPA-secure.
