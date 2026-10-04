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
rationale:
  class: "The construction is the identity on the PRC, and the reduction runs any CPA adversary only as an oracle, in one pseudorandomness hybrid per world."
---

# PRC ⇒ SKE

## Statement

An $L$-bit [[pseudorandom-error-correcting-code|PRC]] $(\Gen, \Enc, \Dec)$ is an [[symmetric-key-encryption|SKE]] scheme with message space $\bits^L$ and ciphertext space $\bits^n$: robustness against the identity channel gives $(1-\negl(\secpar))$-correctness, and PRC pseudorandomness is [[symmetric-key-encryption#ind-cpa-security|IND\$-CPA]] security, which implies [[symmetric-key-encryption#cpa-security|CPA]] security — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Sketch

In each world of the CPA game, one pseudorandomness hybrid replaces the answers $\Enc_k(m_b)$ by uniform $n$-bit strings; the oracle then ignores its input, so $b$ is information-theoretically hidden.
