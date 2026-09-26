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
---

# TDP ⇒ PKE

[[trapdoor-permutation|TDP]] implies [[public-key-encryption|PKE]].

## Statement

A family of [[trapdoor-permutation|trapdoor permutations]] $f$ with hard-core predicate $b$ gives an $\indcpa$-secure [[public-key-encryption|PKE]] scheme: $\pk$ is the permutation index, $\sk$ its trapdoor, a bit $m$ is encrypted as $\Enc(\pk, m) = (f(x),\, b(x) \oplus m)$ for $x \getsr \calD$, and longer messages bit by bit — [[GM84 - Probabilistic encryption|GM84]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]. Every trapdoor permutation has a hard-core predicate, so no second hypothesis is needed — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].

## Sketch

Decryption recovers $x = \Invert(\sk, c_1)$ and outputs $c_2 \oplus b(x)$. An $\indcpa$ adversary distinguishing encryptions of $0$ from encryptions of $1$ predicts $b(x)$ from $f(x)$ with the same advantage, contradicting hard-coreness of $b$.

## Notes

`class: fully-black-box`: One fixed construction: $\KeyGen$ runs $\Gen$, $\Enc$ calls $\Eval$ and the hard-core predicate, $\Dec$ calls $\Invert$, each only as an oracle. One fixed reduction: an $\indcpa$ adversary is run as an oracle to predict $b(x)$ from $f(x)$; for the Goldreich-Levin predicate the list-decoder turns that predictor into an inverter for $f$. RTV04 fully-black-box shape.

- Stated for trapdoor functions with a hard bit, decryption recovering the encryption randomness — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]
