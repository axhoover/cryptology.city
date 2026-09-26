---
type: reduction
status: draft
title: "Hash function ⇒ SKE"
aliases: []
id: red-hash-function-to-ske
kind: implication
hypotheses: [hash-function]
conclusion: ske
class: fully-black-box
model: standard
source:
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
  - "[[GGM86 - How to construct random functions|GGM86]]"
security-loss: ""
---

# Hash function ⇒ SKE

[[hash-function|Hash function]] implies [[symmetric-key-encryption|SKE]].

## Statement

Every [[hash-function|one-way function]] yields CPA-secure [[symmetric-key-encryption|SKE]]. The OWF gives a PRG — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]; the PRG gives a PRF $\Eval$ — [[GGM86 - How to construct random functions|GGM86]]; and $\Enc(k, m) = (r, \Eval(k, r) \oplus m)$ for uniform $r$ is CPA-secure whenever $\Eval$ is a PRF — folklore. Encrypt-then-MAC with a strongly unforgeable [[message-authentication-code|MAC]] upgrades the scheme to CCA security — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]; a fixed-input-length PRF is such a MAC — standard.

## Notes

`class: fully-black-box`: each link uses its primitive only as an oracle (HILL: OWF in the PRG; GGM: PRG in the PRF; $\Enc$: PRF in the SKE), and each security reduction runs its adversary as an oracle; fully-black-box reductions compose — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

- The hypothesis `hash-function` is the merged OWF/CRHF page, so the OWF node also owns collision resistance site-wide.
