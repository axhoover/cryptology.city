---
type: reduction
status: draft
title: DDH ⇒ Rerandomizable RCCA encryption (Double-strand Cramer–Shoup)
aliases: []
id: red-ddh-to-rerandomizable-rcca-encryption-pr07
kind: implication
hypotheses: [ddh]
conclusion: rerandomizable-rcca-encryption
class: unstated
model: standard
source:
  - "[[PR07 - Rerandomizable RCCA Encryption|PR07]]"
---

# DDH ⇒ Rerandomizable RCCA encryption (Double-strand Cramer–Shoup)

## Statement

Under the [[decisional-diffie-hellman|DDH]] assumption, the Double-strand Cramer–Shoup scheme, an extension of [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup encryption]], is a [[rerandomizable-encryption#rerandomizable-rcca-encryption|rerandomizable RCCA]] scheme: it is [[rerandomizable-encryption#rerandomization|perfectly rerandomizable]], and for all efficient $\calA$, $\Adv^{\mathrm{rcca}}_{\PKE,\calA}(\secpar)$ is negligible — [[PR07 - Rerandomizable RCCA Encryption|PR07]].

## Notes

- Every scheme that is rerandomizable and RCCA-secure in the sense of PR07's definitions is a UC-secure implementation of their Replayable Message Posting functionality — [[PR07 - Rerandomizable RCCA Encryption|PR07]].
