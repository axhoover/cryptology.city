---
type: reduction
status: draft
title: "PRG ⇒ One-time SKE for messages longer than the key"
aliases: []
id: red-prg-to-long-message-ske
kind: implication
hypotheses: [prg]
conclusion: long-message-ske
class: fully-black-box
model: standard
source: folklore
security-loss: "factor 2: the one-time advantage is twice the PRG advantage"
rationale:
  class: "The scheme evaluates the PRG on its key only as an oracle, and the reduction runs any one-time adversary once as an oracle."
---

# PRG ⇒ One-time SKE for messages longer than the key

## Statement

A [[pseudorandom-generator|PRG]] $\PRG : \bits^\secpar \to \bits^{\ell(\secpar)}$ with $\ell(\secpar) > \secpar$ yields a [[symmetric-key-encryption#messages-longer-than-the-key|one-time-secure SKE scheme for messages longer than the key]]: $\KeyGen(1^\secpar)$ outputs $k \getsr \bits^\secpar$, $\calM_\secpar = \calC_\secpar = \bits^{\ell(\secpar)}$, $\Enc(k, m) := \PRG(k) \oplus m$ and $\Dec(k, c) := \PRG(k) \oplus c$. The scheme is perfectly correct and has key length $\secpar < \ell(\secpar)$, and for every one-time adversary $\calA$ there is a PRG distinguisher $\calB$ that runs $\calA$ once, with

$$
\Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) = 2\,\Adv^{\mathrm{prg}}_{\PRG,\calB}(\secpar)
$$

— folklore.

## Sketch

On input $r$, $\calB$ samples $b \getsr \bits$, answers the query $(m_0, m_1)$ of $\calA$ with $r \oplus m_b$, and outputs $0$, its guess that $r = \PRG(s)$, iff $\calA$ outputs $b$. For $r = \PRG(s)$ this is the one-time game, which $\calA$ wins with probability $p := \Pr[\Game^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) = 1]$; for uniform $r$ the answer is uniform whatever $b$ is, so $\calA$ wins with probability $1/2$. Hence $\calB$ wins with probability $p/2 + 1/4$, and $\Adv^{\mathrm{prg}}_{\PRG,\calB}(\secpar) = |p - 1/2| = \Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar)/2$.

## Notes

- $\Enc$ is deterministic, so the scheme is not [[symmetric-key-encryption#cpa-security|CPA-secure]]: two encryptions of one message under one key coincide — standard. CPA-secure SKE follows from a PRG through [[prg-to-prf-ggm86|PRG ⇒ PRF (GGM)]] and [[prf-to-ske|PRF ⇒ CPA-secure SKE]].
- With keys of $\secpar$ bits and all messages of $\ell(\secpar) > \secpar$ bits, no perfectly correct scheme is [[symmetric-key-encryption#perfect-secrecy|perfectly secret]] ([[symmetric-key-encryption#shannons-bound|Shannon's bound]]) — standard.
