---
type: reduction
status: draft
title: "Compact private-key XOR-homomorphic encryption ⇒ PKE"
aliases: []
id: red-secret-key-xor-homomorphic-encryption-to-pke-rot11
kind: implication
hypotheses: [secret-key-xor-homomorphic-encryption]
conclusion: pke
class: unstated
model: standard
source:
  - "[[Rot11 - Homomorphic Encryption From Private-Key to Public-Key|Rot11]]"
security-loss: ""
---

# Compact private-key XOR-homomorphic encryption ⇒ PKE

## Statement

Every [[homomorphic-encryption#private-key-homomorphic-encryption|compact private-key encryption scheme homomorphic for addition modulo 2]], one whose homomorphically generated encryptions have length independent of the number of ciphertexts they were computed from, can be transformed into a [[public-key-encryption|public-key encryption]] scheme; nothing is required of the distribution of homomorphically generated encryptions — [[Rot11 - Homomorphic Encryption From Private-Key to Public-Key|Rot11]].

## Notes

- The transformation costs one hop of homomorphism: if the private-key scheme is $(i+1)$-hop homomorphic for a set of operations that includes addition modulo $2$, the public-key scheme is $i$-hop homomorphic for the same operations — [[Rot11 - Homomorphic Encryption From Private-Key to Public-Key|Rot11]].
- Private-key encryption itself follows from one-way functions, from which no relativizing construction of public-key encryption exists ([[no-hash-function-to-pke-gkm-00|No relativizing reduction from OWF to PKE]]) — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
