---
type: barrier
status: draft
title: "No fixed-construction reduction from NM-CPA security to CCA1 security"
aliases: []
id: bar-pke-nm-cpa-security-to-pke-cca1-security-bdpr98
hypotheses: [pke-nm-cpa-security]
conclusion: pke-cca1-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [pke-nm-cpa-security]
source:
  - "[[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]"
rationale:
  class: "The counterexample refutes the identity map (NM-CPA security of a scheme implying IND-CCA1 security of the same scheme) and does not rule out building an IND-CCA1-secure scheme from an NM-CPA-secure one by another construction."
  strength: "BDPR98 prove the separation assuming an NM-CPA-secure scheme exists; without one, the identity-map implication holds vacuously."
---

# No fixed-construction reduction from NM-CPA security to CCA1 security

## Statement

If an [[public-key-encryption#non-malleability|NM-CPA]]-secure [[public-key-encryption|PKE]] scheme exists, then there is a PKE scheme that is NM-CPA-secure but not [[public-key-encryption#cca1-security|IND-CCA1]]-secure, so the identity map is no reduction from NM-CPA to IND-CCA1 security — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].

## Sketch

Given an NM-CPA-secure $\PKE = (\KeyGen, \Enc, \Dec)$, let $\KeyGen'$ also sample $u \getsr \bits^\secpar$ into the secret key, let $\Enc'(\pk, m) = 0 \| \Enc(\pk, m)$ and $\Dec'((\sk, u), 0 \| c) = \Dec(\sk, c)$, and let $\Dec'$ return $u$ on the string $1$, return $\sk$ on $2 \| u$, and return $\bot$ on every other string. A CCA1 adversary queries $1$, then $2 \| u$, and decrypts $c^*$ with $\sk$. In the parallel NM-CPA game of [[BS99 - Non-malleable Encryption Equivalence between Two Notions, and an Indistinguishability-Based Characterization|BS99]] all $\ell$ decryption queries are made at once, before $\calA$ learns $u$, so a reduction that samples $u$ itself and answers $\bot$ on every query $2 \| u'$ errs with probability at most $\ell \cdot 2^{-\secpar}$ — standard.

## Notes

- The converse separation also holds: [[no-pke-cca1-security-to-pke-nm-cpa-security-bdpr98|IND-CCA1 ⇏ NM-CPA]] — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].
