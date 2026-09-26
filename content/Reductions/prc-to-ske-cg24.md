---
type: reduction
status: draft
title: "PRC ⇒ SKE"
aliases: []
id: red-prc-to-ske-cg24
kind: implication
hypotheses: [prc]
conclusion: ske
class: fully-black-box
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: "CPA advantage at most twice the PRC pseudorandomness advantage (one hybrid per world)"
---

# PRC ⇒ SKE

[[pseudorandom-error-correcting-code|PRC]] implies [[symmetric-key-encryption|SKE]].

## Statement

An $L$-bit [[pseudorandom-error-correcting-code|PRC]] $(\Gen, \Enc, \Dec)$ is a [[symmetric-key-encryption|SKE]] scheme with message space $\bits^L$ and ciphertext space $\bits^n$: robustness against the identity channel gives $(1-\negl(\secpar))$-correctness, and PRC pseudorandomness is [[symmetric-key-encryption#ind-cpa-security|IND\$-CPA]] security, which implies [[symmetric-key-encryption#cpa-security|CPA]] security — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Sketch

In each world of the CPA game, one PRC-pseudorandomness hybrid replaces the oracle's answers $\Enc_k(m_b)$ by uniform $n$-bit strings; the oracle then ignores its input, so the challenge bit is information-theoretically hidden.

## Notes

`class: fully-black-box`: the construction is the identity, using the PRC only as an oracle, and the reduction runs any CPA adversary as an oracle in one hybrid per world. Fixed construction, fixed reduction.
