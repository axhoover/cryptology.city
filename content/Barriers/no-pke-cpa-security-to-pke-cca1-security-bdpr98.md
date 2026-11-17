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
conditional-on: [pke-cpa-security]
source:
  - "[[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]"
rationale:
  class: "The counterexample refutes the identity map (CPA security of a scheme implying CCA1 security of the same scheme) and does not rule out building a CCA1-secure scheme from a CPA-secure one by another construction."
  strength: "BDPR98 prove the separation assuming an IND-CPA-secure scheme exists; without one, the identity-map implication holds vacuously."
---

# No fixed-construction reduction from CPA security to CCA1 security

## Statement

If an [[public-key-encryption#cpa-security|IND-CPA]]-secure [[public-key-encryption|PKE]] scheme exists, then there is a PKE scheme that is IND-CPA-secure but not [[public-key-encryption#cca1-security|IND-CCA1]]-secure, so the identity map is no reduction from CPA to CCA1 security — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Sketch

Given an IND-CPA-secure $\PKE = (\KeyGen, \Enc, \Dec)$, fix two distinct messages $m^{(0)}, m^{(1)} \in \calM$ of equal length, as [[public-key-encryption#syntax|PKE § Syntax]] provides. Let $\Enc'(\pk, m) = 0 \| \Enc(\pk, m)$ and $\Dec'(\sk, 0 \| c) = \Dec(\sk, c)$, let $\Dec'$ return $m^{(s_i)}$ on the string $1 \| i$ for $i \le |\sk|$, where $s_i$ is bit $i$ of $\sk$, and let $\Dec'$ return $\bot$ on every other string. $\PKE'$ has the message space and the correctness of $\PKE$. The CPA game never calls $\Dec'$, and $\Enc'$ never outputs a string $1 \| i$, so $\PKE'$ is IND-CPA-secure. A CCA1 adversary queries $1 \| i$ for $i = 1, 2, \ldots$ in Phase 1 until $\Dec'$ returns $\bot$, reassembles $\sk$, and decrypts $c^*$ — standard. Unlike the [[no-pke-nm-cpa-security-to-pke-cca1-security-bdpr98|separation of NM-CPA from CCA1 security]], no masking string is needed, because the CPA game makes no decryption queries.

## Notes

- The converse holds for every scheme: [[cca1-security-to-cpa-security|CCA1 security ⇒ CPA security]] — folklore.
