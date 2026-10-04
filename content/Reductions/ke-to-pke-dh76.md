---
type: reduction
status: draft
title: "NIKE ⇒ PKE"
aliases: []
id: red-ke-to-pke-dh76
kind: implication
hypotheses: [non-interactive-key-exchange]
conclusion: pke
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one NIKE challenge per run of the CPA adversary"
rationale:
  class: "The scheme calls Gen and Combine only as oracles, and the fixed reduction runs the CPA adversary once as an oracle."
---

# NIKE ⇒ PKE

## Statement

Let $(\Gen, \Combine)$ be a [[key-exchange#non-interactive-key-exchange-nike|NIKE]] with key space $\calK = \bits^\ell$ whose shared key is indistinguishable from uniform given both honestly generated public keys. Then $\KeyGen := \Gen$, $\Enc(\pk, m) := (\pk', \Combine(\sk', \pk) \oplus m)$ for fresh $(\pk', \sk') \gets \Gen(1^\secpar)$, and $\Dec(\sk, (\pk', c)) := \Combine(\sk, \pk') \oplus c$ is an [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] with $\calM = \bits^\ell$ — folklore.

## Sketch

Correctness is NIKE correctness. Given a NIKE challenge $(\pk, \pk', k)$, the reduction gives $\calA$ the public key $\pk$ and the challenge ciphertext $(\pk', k \oplus m_b)$ for its own bit $b$, and outputs $[b' = b]$: for the real shared key this is the CPA game, and for uniform $k$ the ciphertext is independent of $b$.

## Notes

- Instantiated with Diffie–Hellman, with $\oplus$ replaced by the group operation, the construction is ElGamal encryption ([[ddh-to-pke-elgamal85|DDH ⇒ PKE]]) — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]].
- The same construction works from any two-message [[key-exchange|key exchange]], with the initiator's message as the public key — folklore.
