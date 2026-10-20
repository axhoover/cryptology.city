---
type: reduction
status: draft
title: "QR ⇒ NIZK proofs with a common random string (Blum–De Santis–Micali–Persiano)"
aliases: []
id: red-qr-to-common-random-string-nizk-proof-bdmp91
kind: implication
hypotheses: [qr]
conclusion: common-random-string-nizk-proof
class: fully-black-box
model: crs
source:
  - "[[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]"
  - "[[BDMP91 - Noninteractive Zero-Knowledge|BDMP91]]"
security-loss: "polynomial: soundness is statistical, and zero knowledge reduces to QR with a hybrid over the polynomially many repetitions"
rationale:
  class: "The prover uses only the Blum-integer sampler and arithmetic modulo the integer it samples, soundness is statistical, and zero knowledge reduces to QR using any distinguisher only as an oracle."
  model: "The uniformly random reference string carries the hidden bits."
---

# QR ⇒ NIZK proofs with a common random string (Blum–De Santis–Micali–Persiano)

## Statement

If [[quadratic-residuosity|QR]] is hard for Blum integers, every language in $\classNP$ has a [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proof system with a uniformly random reference string]]: soundness is statistical, and zero knowledge is computational — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]], [[BDMP91 - Noninteractive Zero-Knowledge|BDMP91]]. Soundness against provers that choose the statement after seeing the string follows from soundness for each fixed statement: repeating the proof on independent segments of the string drives the error for a fixed $x$ below $2^{-(|x| + \secpar)}$, a union bound over the statements of length $|x|$ leaves error at most $2^{-\secpar}$, and single-theorem zero knowledge survives the repetition by a hybrid argument — standard.

## Sketch

The prover samples a Blum integer $N$, whose factorization it knows, and some $y \in \J_N \setminus \QR_N$, and proves unconditionally, in NIZK, that $N$ has exactly two distinct prime divisors and that $y$ is a quadratic non-residue — [[BDMP91 - Noninteractive Zero-Knowledge|BDMP91]]. It reads the rest of the string as elements $x \in \J_N$, each carrying the hidden bit $[x \in \QR_N]$, which it opens with a square root of $x$ or of $xy$; these bits drive a proof for satisfiability. The simulator takes $y \in \QR_N$ instead, so that it can open every element either way, and QR hides the substitution.

## Notes

- One reference string serves polynomially many theorems by the compiler of [[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]], which needs a [[pseudorandom-generator|PRG]]; QR gives one ([[qr-to-prg-bbs86|QR ⇒ PRG]]) — [[BBS86 - A Simple Unpredictable Pseudo-Random Number Generator|BBS86]].
- BDMP91 is the journal version of BFM88; the general-assumption counterpart, NIZK for $\classNP$ from trapdoor permutations, is [[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]] — [[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]].
