---
type: reduction
status: draft
title: "PRG ⇒ SKE"
aliases: []
id: red-prg-to-ske
kind: implication
hypotheses: [prg]
conclusion: ske
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# PRG ⇒ SKE

[[pseudorandom-generator|PRG]] implies [[symmetric-key-encryption|SKE]].

## Statement

A length-doubling [[pseudorandom-generator|PRG]] implies CPA-secure [[symmetric-key-encryption|SKE]]: the PRG yields a [[pseudorandom-function|PRF]] ([[prg-to-prf-ggm86|PRG ⇒ PRF (GGM)]]), and $\Enc(k, m) = (r, \Eval(k, r) \oplus m)$ with fresh $r \getsr \calD$ is CPA-secure ([[prf-to-ske|PRF ⇒ CPA-secure SKE]]) — folklore. The fixed-pad stream cipher $\Enc(k, m) = G(k) \oplus m$ is deterministic, hence not CPA-secure; it is only one-time secure.

## Notes

`class: fully-black-box`: Composition of two fully-black-box links: the GGM construction calls the PRG only as an oracle, and the PRF-based randomized encryption calls the PRF only as an oracle; each security reduction runs its adversary only as an oracle (the CPA reduction answers encryption queries with its own PRF-oracle calls). Fully-black-box reductions compose, so the composed pair retains the RTV04 shape.
