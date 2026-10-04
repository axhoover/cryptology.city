---
type: reduction
status: draft
title: "MMap + Leveled FHE ⇒ iO"
aliases: []
id: red-mmap-to-io-gghrsw13
kind: implication
hypotheses: [multilinear-maps, leveled-fully-homomorphic-encryption]
conclusion: io
class: unstated
model: standard
heuristic: true
source:
  - "[[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]"
security-loss: ""
rationale:
  heuristic: "GGHRSW13 give the NC1 obfuscator as a candidate and prove no reduction from a multilinear-map assumption."
---

# MMap + Leveled FHE ⇒ iO

## Statement

[[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] give the first candidate [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits: an $\mathrm{NC}^1$ obfuscator from candidate [[multilinear-maps|multilinear maps]] (graded encodings), bootstrapped to all circuits with [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled fully homomorphic encryption]]. They give no reduction from a standard-model multilinear-map assumption.

## Sketch

The $\mathrm{NC}^1$ obfuscator turns a circuit into a matrix branching program via Barrington's theorem, rerandomizes it Kilian-style, and publishes the matrices under a graded encoding; evaluation multiplies the input-selected encodings and zero-tests the product. Obfuscating the $\mathrm{NC}^1$ circuit that checks a low-depth proof of correct homomorphic evaluation and then decrypts bootstraps the construction to all polynomial-size circuits.

## Notes

- A simplified branching-program obfuscator for $\mathrm{NC}^1$ is virtual-black-box secure, hence iO-secure, in a generic multilinear-map model — [[BGKPS14 - Protecting Obfuscation against Algebraic Attacks|BGKPS14]].
- The underlying multilinear-map candidates have since been attacked: CLT13 — [[CHLRS15 - Cryptanalysis of the Multilinear Map over the Integers|CHLRS15]]; GGH13 as used in obfuscation — [[MSZ16 - Annihilation Attacks for Multilinear Maps Cryptanalysis of Indistinguishability Obfuscation over GGH13|MSZ16]].
