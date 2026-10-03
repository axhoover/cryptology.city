---
type: barrier
status: draft
title: "No fixed-construction reduction from CCA1 security to CCA2 security"
aliases: []
id: bar-pke-cca1-security-to-pke-cca2-security-bdpr98
hypotheses: [pke-cca1-security]
conclusion: pke-cca2-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [pke-cca1-security]
source:
  - "[[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]"
---

# No fixed-construction reduction from CCA1 security to CCA2 security

A reduction of class `fixed-construction` from [[public-key-encryption#cca1-security|CCA1 security]] to [[public-key-encryption#cca-security|CCA2 security]] would imply a contradiction, if an IND-CCA1-secure [[public-key-encryption|PKE]] scheme exists.

## Statement

If an IND-CCA1-secure [[public-key-encryption|PKE]] scheme exists, then there is a PKE scheme that is IND-CCA1-secure but not [[public-key-encryption#cca-security|IND-CCA2]]-secure — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Sketch

Given an IND-CCA1-secure $\PKE = (\KeyGen, \Enc, \Dec)$, let $\Enc'(\pk, m) = \Enc(\pk, m) \| 0$ and let $\Dec'(\sk, c \| \beta) = \Dec(\sk, c)$ ignore the appended bit $\beta$. A CCA1 adversary against $\PKE'$ yields one against $\PKE$ that strips the bit from each Phase-1 query and appends $0$ to $c^*$. A CCA2 adversary flips the last bit of $c^*$, queries $\Dec'$ on the result, which differs from $c^*$, and receives $m_b$ — standard.

## Notes

`class: fixed-construction`: the construction is the identity map — the hyperedge is read for one scheme (CCA1 security of $\PKE$ ⇒ CCA2 security of the same $\PKE$) — and the counterexample refutes it. Building a CCA2-secure scheme from a CCA1-secure one by another construction is not ruled out.

`strength: conditional`: BDPR98 prove each separation assuming the first notion can be met at all; if no IND-CCA1-secure scheme exists, the identity-map implication holds vacuously.

- The converse holds for every scheme: [[cca-security-to-cca1-security|CCA2 security ⇒ CCA1 security]].
