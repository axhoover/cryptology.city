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
security-loss: "a factor λ for the bit encryption; tight for a group key space"
rationale:
  class: "The scheme calls Setup, Gen, Combine and the key-space sampler only as oracles, and the fixed hybrid reduction runs the CPA adversary once as an oracle."
---

# NIKE ⇒ PKE

## Statement

Let $(\Setup, \Gen, \Combine)$ be a [[key-exchange#non-interactive-key-exchange-nike|NIKE]] with $(1-\varepsilon)$-correctness and key space $\calK$, $|\calK| \ge 2$. The following scheme encrypts bits:

- $\KeyGen(1^\secpar)$ samples $\pp \gets \Setup(1^\secpar)$ and independent $(\pk_i, \sk_i) \gets \Gen(\pp)$ for $i \le \secpar$, and outputs $\pk^* = (\pp, (\pk_i)_{i \le \secpar})$ and $\sk^* = (\sk_i)_{i \le \secpar}$;
- $\Enc(\pk^*, b)$, for $b \in \bits$, samples fresh $(\pk'_i, \sk'_i) \gets \Gen(\pp)$ for $i \le \secpar$, sets $c_i := \Combine(\sk'_i, \pk_i)$ if $b = 0$ and $c_i \getsr \calK$ if $b = 1$, and outputs $(\pk'_i, c_i)_{i \le \secpar}$;
- $\Dec(\sk^*, (\pk'_i, c_i)_{i \le \secpar})$ outputs $0$ iff $c_i = \Combine(\sk_i, \pk'_i)$ for every $i \le \secpar$.

Its correctness error is at most $\secpar\varepsilon + |\calK|^{-\secpar} \le \secpar\varepsilon + 2^{-\secpar}$, and it is [[public-key-encryption#cpa-security|IND-CPA-secure]], so it is a [[public-key-encryption|PKE]] with $\calM = \bits$ — folklore.

## Sketch

An encryption of $0$ decrypts wrongly only if one of the $\secpar$ honest pairs disagrees, and an encryption of $1$ only if every uniform $c_i$ equals the corresponding honest key. For CPA security, hybrid $j$ makes $c_i$ uniform for $i \le j$ in the encryption of $0$; the reduction for step $j$ plants its NIKE challenge $(\pp, \pk, \pk', k)$ as $(\pk_j, \pk'_j, c_j)$ and generates the other pairs under the same $\pp$, so the CPA advantage is at most $\secpar$ times the NIKE advantage.

## Notes

- If $\calK$ is a finite group with efficient operations and $|\calK| \ge 2$, one instance suffices: $\KeyGen$ outputs $\pk^* = (\pp, \pk)$, $\Enc(\pk^*, m) := (\pk', \Combine(\sk', \pk) \cdot m)$ for fresh $(\pk', \sk') \gets \Gen(\pp)$ encrypts $m \in \calM = \calK$, and the reduction to one NIKE challenge is tight — folklore. For $\calK = \bits^\ell$ under $\oplus$ this is the one-time-pad scheme; instantiated with Diffie–Hellman it is ElGamal encryption ([[ddh-to-pke-elgamal85|DDH ⇒ CPA-secure PKE (ElGamal)]]) — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]].
- The same construction works from any two-message [[key-exchange|key exchange]], with the initiator's message as the public key — folklore.
