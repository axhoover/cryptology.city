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
---

# LWE ⇒ Leveled fully homomorphic encryption

[[learning-with-errors|LWE]] implies [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled fully homomorphic encryption]].

## Statement

For every depth bound $L$ fixed at key generation, hardness of decision [[learning-with-errors|LWE]] with modulus-to-noise ratio growing with $L$ implies [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]] for all polynomial-size circuits of depth $L$, without bootstrapping and without a circular-security assumption — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].

## Sketch

Ciphertexts are Regev-style LWE encryptions under a ladder of moduli $q_L > \cdots > q_0$. After each multiplication, key switching returns the ciphertext from the tensored secret to a fresh secret, and modulus switching rescales it from $q_j$ to $q_{j-1}$, dividing the noise by the same factor; the noise returns to a fixed bound $B$ after each level while the modulus shrinks one rung, so depth $L$ is reached without bootstrapping.

## Notes

`class: fully-black-box`: One fixed construction whose public key is an acyclic chain of key-switching hints (LWE encryptions of level-$j$ key material under the level-$(j-1)$ key); the proof is a hybrid over levels, each step converting the IND-CPA adversary, used only as an oracle, into a decision-LWE distinguisher.

- The approximate-eigenvector method gives leveled FHE from LWE with no evaluation key and no relinearization: homomorphic addition and multiplication are matrix addition and multiplication — [[GSW13 - Homomorphic Encryption from Learning with Errors Conceptually-Simpler, Asymptotically-Faster, Attribute-Based|GSW13]]
