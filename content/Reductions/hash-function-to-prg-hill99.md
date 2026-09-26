---
type: reduction
status: draft
title: "Hash function ⇒ PRG"
aliases: []
id: red-hash-function-to-prg-hill99
kind: implication
hypotheses: [hash-function]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
security-loss: ""
---

# Hash function ⇒ PRG

[[hash-function|Hash function]] implies [[pseudorandom-generator|PRG]].

## Statement

Every [[hash-function|one-way function]] $f$ yields a [[pseudorandom-generator|pseudorandom generator]] $G$: $G$ calls $f$ only as an oracle, and every efficient distinguisher with non-negligible advantage against $G$ yields an efficient inverter for $f$ with non-negligible success probability — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]].

## Sketch

$f(x)$ together with universally hashed bits of $x$ and a Goldreich–Levin bit ([[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]) has pseudoentropy exceeding its entropy; hashing the concatenation of many independent copies converts the gap into pseudorandom output.

## Notes

`class: fully-black-box`: $G$ calls $f$ only as an oracle, and the hybrid-argument reduction runs every PRG distinguisher as an oracle to invert $f$ — the fully-black-box shape of [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

- Seed length $\tilde{O}(n^4)$ for $f$ on $n$-bit inputs, with nonadaptive calls to $f$, via next-block pseudoentropy — [[HRV10 - Efficiency Improvements in Constructing Pseudorandom Generators from One-Way Functions|HRV10]]
- Seed length $\tilde{O}(n^3)$ and a simpler construction, via a characterization of pseudoentropy by hardness of sampling — [[VZ12 - Characterizing Pseudoentropy and Simplifying Pseudorandom Generator Constructions|VZ12]]
- The hypothesis `hash-function` is the merged OWF/CRHF page, so the OWF node also owns collision resistance site-wide.
