---
type: reduction
status: draft
title: "IND-CPA PKE ⇒ NM-CPA PKE (Pass–shelat–Vaikuntanathan)"
aliases: []
id: red-pke-cpa-security-to-pke-nm-cpa-security-psv06
kind: implication
hypotheses: [pke-cpa-security]
conclusion: pke-nm-cpa-security
class: free
model: standard
source:
  - "[[PSV06 - Construction of a Non-malleable Encryption Scheme from Any Semantically Secure One|PSV06]]"
security-loss: ""
rationale:
  class: "The construction proves NP statements about the given scheme's encryption algorithm, so it uses the scheme's code."
---

# IND-CPA PKE ⇒ NM-CPA PKE (Pass–shelat–Vaikuntanathan)

## Statement

Every [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme can be transformed into an [[public-key-encryption#non-malleability|NM-CPA-secure]] one — [[PSV06 - Construction of a Non-malleable Encryption Scheme from Any Semantically Secure One|PSV06]].

## Notes

- A transformation that uses the IND-CPA-secure scheme only as a black box gives non-malleable encryption as well — [[CDMW08 - Black-Box Construction of a Non-malleable Encryption Scheme from Any Semantically Secure One|CDMW08]].
- The identity map does not suffice: an IND-CPA-secure scheme need not be NM-CPA-secure ([[no-pke-cca1-security-to-pke-nm-cpa-security-bdpr98|IND-CCA1 ⇏ NM-CPA]]) — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]].
