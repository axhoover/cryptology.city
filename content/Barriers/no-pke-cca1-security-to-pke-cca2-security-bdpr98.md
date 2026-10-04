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
rationale:
  class: "The counterexample refutes the identity map (CCA1 security of a scheme implying CCA2 security of the same scheme) and does not rule out building a CCA2-secure scheme from a CCA1-secure one by another construction."
  strength: "BDPR98 prove the separation assuming an IND-CCA1-secure scheme exists; without one, the identity-map implication holds vacuously."
---

# No fixed-construction reduction from CCA1 security to CCA2 security

## Statement

If an [[public-key-encryption#cca1-security|IND-CCA1]]-secure [[public-key-encryption|PKE]] scheme exists, then there is a PKE scheme that is IND-CCA1-secure but not [[public-key-encryption#cca-security|IND-CCA2]]-secure, so the identity map is no reduction from CCA1 to CCA2 security — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Sketch

Given an IND-CCA1-secure $\PKE = (\KeyGen, \Enc, \Dec)$, let $\Enc'(\pk, m) = \Enc(\pk, m) \| 0$ and let $\Dec'(\sk, c \| \beta) = \Dec(\sk, c)$ ignore the appended bit $\beta$. A CCA1 adversary against $\PKE'$ yields one against $\PKE$ that strips the bit from each Phase-1 query and appends $0$ to $c^*$; a CCA2 adversary flips the last bit of $c^*$, queries $\Dec'$ on the result, which differs from $c^*$, and receives $m_b$ — standard.

## Notes

- The converse holds for every scheme: [[cca-security-to-cca1-security|CCA2 security ⇒ CCA1 security]] — folklore.
