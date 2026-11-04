---
type: reduction
status: draft
title: "DBDH ⇒ CCA-secure PRE (Canetti–Hohenberger)"
aliases: []
id: red-dbdh-to-pre-cca-ch07
kind: implication
hypotheses: [dbdh]
conclusion: pre-cca
class: unstated
model: standard
source:
  - "[[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]]"
security-loss: ""
---

# DBDH ⇒ CCA-secure PRE (Canetti–Hohenberger)

## Statement

If [[bilinear-map-assumptions#decisional-bdh|DBDH]] is hard, there is a bidirectional, multi-hop [[proxy-re-encryption|PRE]] scheme that is [[proxy-re-encryption#chosen-ciphertext-security|CCA-secure]] in the standard model — [[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]].

## Notes

- Earlier schemes, including the bidirectional scheme of [[BBS98 - Divertible Protocols and Atomic Proxy Cryptography|BBS98]] and the unidirectional schemes of [[AFGH05 - Improved Proxy Re-Encryption Schemes with Applications to Secure Distributed Storage|AFGH05]], target chosen-plaintext security only — [[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]].
