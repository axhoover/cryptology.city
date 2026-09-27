---
type: barrier
status: draft
title: "No fixed-construction reduction from CPA security to CCA1 security"
aliases: []
id: bar-pke-cpa-security-to-pke-cca1-security-bdpr98
hypotheses: [pke-cpa-security]
conclusion: pke-cca1-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on:
  - an IND-CPA-secure PKE scheme exists
source:
  - "[[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]"
---

# No fixed-construction reduction from CPA security to CCA1 security

A reduction of class `fixed-construction` from [[public-key-encryption#cpa-security|CPA security]] to [[public-key-encryption#cca1-security|CCA1 security]] would imply a contradiction, if an IND-CPA-secure [[public-key-encryption|PKE]] scheme exists.

## Statement

If an IND-CPA-secure [[public-key-encryption|PKE]] scheme exists, then there is a PKE scheme that is IND-CPA-secure but not [[public-key-encryption#cca1-security|IND-CCA1]]-secure — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Sketch

Given an IND-CPA-secure $\PKE = (\KeyGen, \Enc, \Dec)$, let $\Enc'(\pk, m) = 0 \| \Enc(\pk, m)$, let $\Dec'(\sk, 0 \| c) = \Dec(\sk, c)$, and let $\Dec'$ return $\sk$ on the designated ciphertext $1$, which $\Enc'$ never outputs. The CPA game never calls $\Dec'$, so $\PKE'$ is IND-CPA-secure; a CCA1 adversary queries $1$ in Phase 1, receives $\sk$, and decrypts $c^*$ — standard.

## Notes

`class: fixed-construction`: the construction is the identity map — the hyperedge is read for one scheme (CPA security of $\PKE$ ⇒ CCA1 security of the same $\PKE$) — and the counterexample refutes it. Building a CCA1-secure scheme from a CPA-secure one by another construction is not ruled out.

`strength: conditional`: BDPR98 prove each separation assuming the first notion can be met at all; if no IND-CPA-secure scheme exists, the identity-map implication holds vacuously.

- The converse holds for every scheme: [[cca1-security-to-cpa-security|CCA1 security ⇒ CPA security]].
