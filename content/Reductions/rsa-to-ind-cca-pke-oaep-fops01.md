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
rationale:
  model: "The proof models the OAEP padding hashes as random oracles whose query lists the reduction reads, and no standard-model IND-CCA proof of RSA-OAEP from RSA is known."
---

# RSA ⇒ IND-CCA PKE (RSA-OAEP)

## Statement

In the [[random-oracle-model|random oracle model]], OAEP over a trapdoor permutation $f$ is [[public-key-encryption#cca-security|IND-CCA-secure]] if $f$ is partial-domain one-way; by RSA's self-reducibility, partial-domain one-wayness of the RSA function is equivalent to its one-wayness, so RSAES-OAEP is IND-CCA-secure under the [[rsa-assumption|RSA assumption]] — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].

## Notes

- The reduction from RSA is not tight — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].
- OAEP, the padding behind RSAES-OAEP, is due to Bellare and Rogaway — [[BR94 - Optimal Asymmetric Encryption|BR94]].
- The BR94 argument for OAEP has a gap and does not establish IND-CCA security from one-wayness of the trapdoor permutation alone — [[Sho01a - OAEP Reconsidered|Sho01a]].
