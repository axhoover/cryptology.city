---
type: reduction
status: draft
title: "RSA ⇒ IND-CCA security"
aliases: []
id: red-rsa-to-ind-cca-security
kind: implication
hypotheses: [rsa]
conclusion: ind-cca-kem
class: unstated
model: rom
source:
  - "[[Sho01b - A Proposal for an ISO Standard for Public Key Encryption|Sho01b]]"
security-loss: ""
---

# RSA ⇒ IND-CCA security

[[rsa-assumption|RSA]] implies [[key-encapsulation-mechanism#ind-cca-security|IND-CCA security]] of a KEM in the [[random-oracle-model|random oracle model]].

## Statement

RSA-KEM, which samples $r \getsr \ZZ_N$, sends $c = r^e \bmod N$ and derives the key $\hash(r)$, is an [[key-encapsulation-mechanism#ind-cca-security|IND-CCA secure KEM]] under [[rsa-assumption|RSA]] in the [[random-oracle-model|random oracle model]] — [[Sho01b - A Proposal for an ISO Standard for Public Key Encryption|Sho01b]]. RSAES-OAEP is likewise an IND-CCA secure [[public-key-encryption|PKE]] under RSA in the random oracle model, via RSA's self-reducibility from partial-domain to full one-wayness — [[FOPS01 - RSA-OAEP Is Secure under the RSA Assumption|FOPS01]].

## Sketch

The encapsulated key is $\hash(r)$ for uniform $r$ with $r^e$ as the ciphertext, so an adversary that distinguishes it from uniform must query $\hash$ at the $e$-th root of its challenge; the reduction plants its RSA instance as $c^*$, reads the preimage off the query list, and uses the same list, with lazily assigned keys, to simulate decapsulation.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: Both proofs model the key-derivation or padding hash as a random oracle whose query list the reduction reads. No standard-model IND-CCA proof from RSA is known for either scheme.

- OAEP, the padding behind RSAES-OAEP, is due to Bellare and Rogaway — [[BR94 - Optimal Asymmetric Encryption|BR94]]
- The OAEP argument does not establish IND-CCA security from one-wayness of the trapdoor permutation alone — [[Sho01a - OAEP Reconsidered|Sho01a]]
