---
type: reduction
status: draft
title: "PRG ⇒ COM"
aliases: []
id: red-prg-to-com-naor91
kind: implication
hypotheses: [prg]
conclusion: com
class: fully-black-box
model: standard
source:
  - "[[Naor91 - Bit commitment using pseudorandomness|Naor91]]"
security-loss: "hiding: factor $2$ in the PRG advantage; binding: statistical, error $2^{-\\secpar}$"
rationale:
  class: "The committer calls the PRG only as an oracle, the hiding reduction runs any distinguisher as an oracle in two PRG hybrids, and binding is statistical and needs no reduction."
---

# PRG ⇒ COM

## Statement

A length-tripling [[pseudorandom-generator|PRG]] $G : \bits^\secpar \to \bits^{3\secpar}$ yields a statistically binding, computationally hiding bit [[commitment-scheme|commitment]]: the receiver sends $\pp \getsr \bits^{3\secpar}$; the committer samples $s \getsr \bits^\secpar$ and sends $G(s)$ to commit to $0$ or $G(s) \oplus \pp$ to commit to $1$; opening reveals $(b, s)$ — [[Naor91 - Bit commitment using pseudorandomness|Naor91]].

## Sketch

Hiding: $G(s)$ and $G(s) \oplus \pp$ are each one PRG hybrid from uniform, so commitments to $0$ and $1$ are two hybrids apart. Binding: opening to both bits requires seeds $s_0, s_1$ with $G(s_0) \oplus G(s_1) = \pp$; at most $2^{2\secpar}$ of the $2^{3\secpar}$ strings $\pp$ admit such a pair, so binding fails with probability at most $2^{-\secpar}$ over the receiver's message.

## Notes

- The commit phase is interactive: the receiver sends $\pp$ first. In the [[commitment-scheme|commitment]] syntax $(\Gen, \Com, \Open)$, $\pp$ plays the role of honestly sampled public parameters.
