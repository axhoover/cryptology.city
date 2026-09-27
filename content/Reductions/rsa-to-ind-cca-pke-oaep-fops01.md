---
type: reduction
status: draft
title: "RSA ⇒ IND-CCA PKE (RSA-OAEP)"
aliases: []
id: red-rsa-to-ind-cca-pke-oaep-fops01
kind: implication
hypotheses: [rsa]
conclusion: pke-cca2-security
class: unstated
model: rom
source:
  - "[[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]]"
security-loss: ""
---

# RSA ⇒ IND-CCA PKE (RSA-OAEP)

[[rsa-assumption|RSA]] implies [[public-key-encryption#cca-security|IND-CCA secure PKE]] in the [[random-oracle-model|random oracle model]].

## Statement

RSAES-OAEP is an [[public-key-encryption#cca-security|IND-CCA secure PKE]] under [[rsa-assumption|RSA]] in the [[random-oracle-model|random oracle model]], via RSA's self-reducibility from partial-domain to full one-wayness — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: The proof models the padding hashes as random oracles whose query lists the reduction reads. No standard-model IND-CCA proof from RSA is known for RSA-OAEP.

- OAEP, the padding behind RSAES-OAEP, is due to Bellare and Rogaway — [[BR94 - Optimal Asymmetric Encryption|BR94]]
- The OAEP argument does not establish IND-CCA security from one-wayness of the trapdoor permutation alone — [[Sho01a - OAEP Reconsidered|Sho01a]]
