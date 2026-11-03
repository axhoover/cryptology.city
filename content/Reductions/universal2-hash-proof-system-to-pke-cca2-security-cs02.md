---
type: reduction
status: draft
title: "Universal-2 HPS ⇒ CCA-secure PKE"
aliases: []
id: red-universal2-hash-proof-system-to-pke-cca2-security-cs02
kind: implication
hypotheses: [universal2-hash-proof-system]
conclusion: pke-cca2-security
class: fully-black-box
model: standard
source:
  - "[[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]"
security-loss: "additive: twice the subset-membership advantage, plus statistical terms in the smoothness and universal-2 errors, one of them linear in the number of decryption queries"
rationale:
  class: "The scheme calls the two hash proof systems only as oracles, and the reduction answers decryption queries with hash keys it samples itself, running any CCA adversary once as an oracle on a challenge built from its subset-membership instance."
---

# Universal-2 HPS ⇒ CCA-secure PKE

## Statement

Let $(\mathsf{HPS}, \widehat{\mathsf{HPS}})$ be a [[hash-proof-system#universal-2-hash-proof-systems|universal-2 hash proof system]] for a hard subset membership problem $\calM$: $\mathsf{HPS}$ is smooth with functions $H_k : X \to \Pi$, and $\widehat{\mathsf{HPS}}$ is extended universal-2 with functions $\hat H_{\hat k} : X \times \Pi \to \hat\Pi$. The scheme with $\pk = (\Lambda, \alpha(k), \hat\alpha(\hat k))$, $\sk = (k, \hat k)$, ciphertexts $(x, e, \hat\pi)$ for $x \getsr L$, $e = m \cdot H_k(x)$ and $\hat\pi = \hat H_{\hat k}(x, e)$, both hash values computed from the projections and the witness of $x$, and decryption that outputs $\bot$ unless $\hat\pi = \hat H_{\hat k}(x, e)$ and otherwise $e \cdot H_k(x)^{-1}$, is [[public-key-encryption#cca-security|IND-CCA2-secure]] in the standard model — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]. The construction uses no primitive besides the hash proof systems — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

## Notes

- Instances: [[prime-order-ddh-to-universal2-hash-proof-system-cs02|DDH ⇒ Universal-2 HPS]] and [[dcr-safe-primes-to-universal2-hash-proof-system-cs02|DCR ⇒ Universal-2 HPS]]; the composition with the DCR system is recorded directly as [[dcr-safe-primes-to-pke-cca2-security-cs02|DCR (safe-prime moduli) ⇒ CCA-secure PKE]], and the [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup cryptosystem]] is a special case over the DDH language, with the tag compressed by a universal one-way hash function — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
- Dropping $\hat\pi$ and its check leaves an IND-CPA-secure scheme: [[hash-proof-system-to-pke-cpa-security-cs02|HPS ⇒ CPA-secure PKE]] — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
