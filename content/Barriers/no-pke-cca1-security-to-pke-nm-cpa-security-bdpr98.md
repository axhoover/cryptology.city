---
type: barrier
status: draft
title: "No fixed-construction reduction from CCA1 security to NM-CPA security"
aliases: []
id: bar-pke-cca1-security-to-pke-nm-cpa-security-bdpr98
hypotheses: [pke-cca1-security]
conclusion: pke-nm-cpa-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [pke-cca1-security]
circumvented-by: [red-pke-cpa-security-to-pke-nm-cpa-security-psv06]
source:
  - "[[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]"
rationale:
  class: "The counterexample refutes the identity map (IND-CCA1 security of a scheme implying NM-CPA security of the same scheme) and does not rule out building an NM-CPA-secure scheme from an IND-CCA1-secure one by another construction."
  strength: "BDPR98 prove the separation assuming an IND-CCA1-secure scheme exists; without one, the identity-map implication holds vacuously."
---

# No fixed-construction reduction from CCA1 security to NM-CPA security

## Statement

If an [[public-key-encryption#cca1-security|IND-CCA1]]-secure [[public-key-encryption|PKE]] scheme exists, then there is a PKE scheme that is IND-CCA1-secure but not [[public-key-encryption#non-malleability|NM-CPA]]-secure, so the identity map is no reduction from IND-CCA1 to NM-CPA security — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Sketch

Given an IND-CCA1-secure $\PKE = (\KeyGen, \Enc, \Dec)$, let $\Enc'(\pk, m) = \Enc(\pk, m) \| 0$ and let $\Dec'(\sk, c \| \beta) = \Dec(\sk, c)$ ignore the appended bit $\beta$. A CCA1 adversary against $\PKE'$ yields one against $\PKE$ that strips the bit from each Phase-1 query and appends $0$ to $c^*$. An NM-CPA adversary flips the last bit of $c^*$, submits the result, which differs from $c^*$, as its decryption query, and receives $m_b$ — standard.

## Notes

- IND-CCA1 security implies IND-CPA security ([[cca1-security-to-cpa-security|CCA1 ⇒ CPA]]), so the same scheme is IND-CPA-secure and not NM-CPA-secure — standard.
- A construction other than the identity turns every IND-CPA-secure scheme into an NM-CPA-secure one ([[pke-cpa-security-to-pke-nm-cpa-security-psv06|IND-CPA ⇒ NM-CPA]]) — [[PSV06 - Construction of a Non-malleable Encryption Scheme from Any Semantically Secure One|PSV06]].
- The converse separation also holds: [[no-pke-nm-cpa-security-to-pke-cca1-security-bdpr98|NM-CPA ⇏ IND-CCA1]] — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].
