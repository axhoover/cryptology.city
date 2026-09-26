---
type: reduction
status: draft
title: "MMap ⇒ iO"
aliases: []
id: red-mmap-to-io-gghrsw13
kind: implication
hypotheses: [multilinear-maps]
conclusion: io
class: unstated
model: standard
source:
  - "[[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]"
security-loss: ""
---

# MMap ⇒ iO

[[indistinguishability-obfuscation|iO]] has a candidate construction from [[multilinear-maps|MMap]], with no security reduction from a stated assumption.

## Statement

The first candidate [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits: an NC$^1$ obfuscator from candidate [[multilinear-maps|multilinear maps]] (graded encodings), bootstrapped to all circuits with [[homomorphic-encryption#Leveled fully homomorphic encryption|leveled fully homomorphic encryption]]. No reduction from a standard-model multilinear-map assumption is given; the NC$^1$ obfuscator is argued secure only in an idealized generic model of encoded matrices — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]].

## Sketch

The NC$^1$ obfuscator turns a circuit into a matrix branching program via Barrington's theorem, rerandomizes it Kilian-style, and publishes the matrices under a graded encoding; evaluation multiplies the input-selected encodings and zero-tests the product. Obfuscating the NC$^1$ circuit that checks a low-depth proof of correct homomorphic evaluation and then decrypts bootstraps the construction to all polynomial-size circuits.

## Notes

`class: unstated`: the construction is a candidate with no security reduction, so there is no reduction to classify.

- A simplified branching-program obfuscator for NC$^1$ is virtual-black-box secure, hence iO-secure, in a generic multilinear-map model — [[BGKPS14 - Protecting Obfuscation against Algebraic Attacks|BGKPS14]].
