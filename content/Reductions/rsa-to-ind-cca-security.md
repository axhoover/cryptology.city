---
type: reduction
status: draft
title: "RSA ⇒ IND-CCA KEM"
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
rationale:
  model: "The proof models the key-derivation hash as a random oracle whose query list the reduction reads, and no standard-model IND-CCA proof of RSA-KEM from RSA is known."
---

# RSA ⇒ IND-CCA KEM

## Statement

RSA-KEM samples $r \getsr \ZZ_N$, sends $c = r^e \bmod N$ and derives the key $\hash(r)$. If the [[rsa-assumption|RSA]] assumption holds, RSA-KEM is an [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]] [[key-encapsulation-mechanism|KEM]] in the [[random-oracle-model|random oracle model]] — [[Sho01b - A Proposal for an ISO Standard for Public Key Encryption|Sho01b]].

## Sketch

An adversary that distinguishes $\hash(r)$ from uniform must query $\hash$ at the $e$-th root of the challenge ciphertext. The reduction plants its RSA instance as $c^*$, reads the preimage off the query list, and uses the same list, with lazily assigned keys, to simulate decapsulation.
