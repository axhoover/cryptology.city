---
type: reduction
status: draft
title: "TDP ⇒ PKE"
aliases: []
id: red-tdp-to-pke
kind: implication
hypotheses: [tdp]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
security-loss: ""
rationale:
  class: "The construction calls the permutation's sampler, evaluator, inverter and hard-core predicate only as oracles, and the reduction runs any CPA adversary only as an oracle to predict the hard-core bit; for the Goldreich–Levin predicate, the list decoder turns that predictor into an inverter."
---

# TDP ⇒ PKE

## Statement

A family of [[trapdoor-permutation|trapdoor permutations]] $f$ with hard-core predicate $b$ gives a [[public-key-encryption#cpa-security|CPA-secure PKE]] scheme: $\pk$ is the permutation index, $\sk$ its trapdoor, a bit $m$ is encrypted as $\Enc(\pk, m) = (f(x),\, b(x) \oplus m)$ for $x \getsr \calD$, and longer messages bit by bit — [[GM84 - Probabilistic encryption|GM84]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]. No second hypothesis is needed: for every trapdoor permutation $f$, $g(x, r) = (f(x), r)$ is a trapdoor permutation with hard-core predicate $\langle x, r \rangle \bmod 2$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].

## Sketch

Decryption recovers $x = \Invert(\sk, c_1)$ and outputs $c_2 \oplus b(x)$. A CPA adversary distinguishing encryptions of $0$ from encryptions of $1$ predicts $b(x)$ from $f(x)$ with the same advantage, contradicting hard-coreness of $b$; a hybrid over bit positions covers longer messages.

## Notes

- [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]] states the construction for trapdoor functions with a hard bit, decryption recovering the encryption randomness $x$.
