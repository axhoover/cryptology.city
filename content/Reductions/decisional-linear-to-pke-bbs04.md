---
type: reduction
status: draft
title: "DLIN ⇒ PKE (Linear Encryption)"
aliases:
  - Linear Encryption
id: red-decisional-linear-to-pke-bbs04
kind: implication
hypotheses: [decisional-linear]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[BBS04 - Short Group Signatures|BBS04]]"
security-loss: "tight up to an additive $O(1/p)$: one oracle call"
rationale:
  class: "Linear Encryption uses only the group generator, and the fixed reduction builds the public key and challenge ciphertext from the DLIN challenge and runs any CPA adversary once as an oracle."
---

# DLIN ⇒ PKE (Linear Encryption)

## Statement

If the [[decisional-diffie-hellman#dlin|decisional linear assumption]] holds for a group generator $\GrGen$, Linear Encryption over $(\GG, g, p) \gets \GrGen(1^\secpar)$ is a [[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|PKE]] scheme; no pairing is needed. The secret key is $(x_1, x_2) \getsr (\ZZ_p^{*})^2$ and the public key is $(u, v, h) \in \GG^3$ with $u^{x_1} = v^{x_2} = h$. A message $m \in \GG$ is encrypted as $(T_1, T_2, T_3) = (u^a, v^b, m \cdot h^{a+b})$ for $a, b \getsr \ZZ_p$, and decrypted as $T_3 / (T_1^{x_1} T_2^{x_2})$ — [[BBS04 - Short Group Signatures|BBS04]].

## Sketch

On a DLIN challenge $(u, v, h, u^a, v^b, Z)$ the reduction sets $\pk = (u, v, h)$ and answers the challenge query with $(u^a, v^b, m_\beta \cdot Z)$: for $Z = h^{a+b}$ this is a correctly distributed encryption of $m_\beta$ under a public key distributed as in the scheme up to statistical distance $O(1/p)$, and for uniform $Z$ the ciphertext is independent of $\beta$ — standard.

## Notes

- A ciphertext is three group elements for a one-element message, and the public key is three group elements — [[BBS04 - Short Group Signatures|BBS04]].
- DLIN is believed to hold in groups with a symmetric bilinear pairing, where DDH is easy and ElGamal ([[ddh-to-pke-elgamal85|DDH ⇒ PKE]]) is insecure; Linear Encryption is the counterpart of ElGamal for such groups — [[BBS04 - Short Group Signatures|BBS04]].
