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
---

# NIKE ⇒ PKE

[[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]] implies [[public-key-encryption|PKE]].

## Statement

Let $(\Gen, \mathsf{Combine})$ be a [[key-exchange#non-interactive-key-exchange-nike|NIKE]] with key space $\calK = \bits^\ell$ whose shared key is indistinguishable from uniform given both honestly generated public keys. Then $\KeyGen := \Gen$, $\Enc(\pk, m) := (\pk', \mathsf{Combine}(\sk', \pk) \oplus m)$ for fresh $(\pk', \sk') \gets \Gen(1^\secpar)$, and $\Dec(\sk, (\pk', c)) := \mathsf{Combine}(\sk, \pk') \oplus c$ is an IND-CPA [[public-key-encryption|PKE]] with $\calM = \bits^\ell$ — folklore.

## Sketch

Correctness is NIKE correctness. Given a NIKE challenge $(\pk, \pk', k)$, the reduction gives $\calA$ the public key $\pk$ and the challenge ciphertext $(\pk', k \oplus m_b)$ for its own bit $b$, and outputs $[b' = b]$: for the real shared key this is the CPA game, and for uniform $k$ the ciphertext is independent of $b$.

## Notes

`class: fully-black-box`: the scheme calls $\Gen$ and $\mathsf{Combine}$ only as oracles, and the fixed reduction runs the CPA adversary once as an oracle.

- Applied to Diffie–Hellman, with $\oplus$ replaced by the group operation, the construction is ElGamal encryption — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]; see [[ddh-to-pke-elgamal85]].
- The same construction works from any two-message KE, with the initiator's message as the public key — folklore.
- Sourcing pass (2026-09): this page previously recorded KE ⇒ PKE for general, possibly multi-round, KE, which the construction does not cover, cited to [[DH76 - New Directions in Cryptography|DH76]], which proves no such theorem; it was migrated from [[key-exchange]] § Other results. The slug still reads ke-to-pke-dh76; filenames are live URLs and are not renamed.
