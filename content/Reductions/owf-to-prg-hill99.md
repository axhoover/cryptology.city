---
type: reduction
status: draft
title: OWF ⇒ PRG
aliases: []
id: red-owf-to-prg-hill99
kind: implication
hypotheses: [owf]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
  - "[[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]"
security-loss: ""
---

# OWF ⇒ PRG

A [[hash-function#preimage-resistance-one-wayness|one-way function]] implies a
[[pseudorandom-generator|PRG]], via the Goldreich–Levin hard-core predicate.

## Statement

Every [[hash-function#preimage-resistance-one-wayness|one-way function]] yields a [[pseudorandom-generator|PRG]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]. The construction extracts, by universal hashing, the computational entropy that the [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]] hard-core predicate adds to the output of $f$; for a one-way permutation $f$, $G(x, r) = (f(x), r, \langle x, r \rangle)$ already stretches by one bit.

## Sketch

Hashing $x$ down to about $\log|f^{-1}(f(x))|$ bits and appending the Goldreich–Levin bit $\langle x, r \rangle$ turns $f$ into a false-entropy generator: its output is computationally indistinguishable from a distribution of higher Shannon entropy. Many independent copies flatten the distribution and universal hashing extracts the surplus as stretch; a hybrid argument converts any distinguisher into an inverter for $f$.

## Notes

`class: fully-black-box`: The construction calls $f$ only as an oracle, and one fixed reduction inverts $f$ given oracle access to any PRG distinguisher (hybrid argument plus Goldreich–Levin decoding): the RTV04 fully-black-box shape. [[HRV10 - Efficiency Improvements in Constructing Pseudorandom Generators from One-Way Functions|HRV10]] treat HILL as the reference fully-black-box construction.

- Seed length $\tilde{O}(n^4)$ via next-block pseudoentropy; the generator is non-adaptive in $f$ and parallelizable — [[HRV10 - Efficiency Improvements in Constructing Pseudorandom Generators from One-Way Functions|HRV10]]
- Seed length $\tilde{O}(n^3)$ and a single hashing step, from a characterization of pseudoentropy by KL-hardness of sampling — [[VZ12 - Characterizing Pseudoentropy and Simplifying Pseudorandom Generator Constructions|VZ12]]
- The converse is the separate edge [[prg-to-hash-function|PRG ⇒ OWF]], so OWF $\Leftrightarrow$ PRG.
- The hypothesis `owf` is the one-wayness game at [[hash-function#preimage-resistance-one-wayness]], which is _keyed_; HILL99 is stated for unkeyed one-way functions.
