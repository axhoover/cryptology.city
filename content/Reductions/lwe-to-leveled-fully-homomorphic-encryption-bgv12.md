---
type: reduction
status: draft
title: "LWE ⇒ Leveled fully homomorphic encryption"
aliases: []
id: red-lwe-to-leveled-fully-homomorphic-encryption-bgv12
kind: implication
hypotheses: [lwe]
conclusion: leveled-fully-homomorphic-encryption
class: fully-black-box
model: standard
source:
  - "[[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]]"
security-loss: ""
rationale:
  class: "One fixed construction from LWE samples, whose public key is an acyclic chain of key-switching hints, and a hybrid over levels in which each step runs the IND-CPA adversary only as an oracle to distinguish LWE samples from uniform."
---

# LWE ⇒ Leveled fully homomorphic encryption

## Statement

For every depth bound $L$ fixed at key generation, the BGV scheme is a [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]] scheme for all polynomial-size circuits of depth $L$, IND-CPA-secure if decision [[learning-with-errors|LWE]] is hard with modulus-to-noise ratio exponential in $L$ (the largest modulus $q_L$ has $(L+1)\mu$ bits, $\mu = \Theta(\log \secpar + \log L)$). It uses neither bootstrapping nor a circular-security assumption — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].

## Sketch

Ciphertexts are LWE encryptions under a ladder of moduli $q_L > \cdots > q_0$. After each multiplication, key switching returns the ciphertext from the tensored secret to a fresh secret, and modulus switching rescales it from $q_j$ to $q_{j-1}$, dividing the noise by the same factor; the noise returns to a fixed bound $B$ at each level while the modulus shrinks one rung, so depth $L$ is reached without bootstrapping.

## Notes

- The approximate-eigenvector method gives leveled FHE from LWE with no evaluation key and no relinearization: homomorphic addition and multiplication are matrix addition and multiplication — [[GSW13 - Homomorphic Encryption from Learning with Errors Conceptually-Simpler, Asymptotically-Faster, Attribute-Based|GSW13]].
