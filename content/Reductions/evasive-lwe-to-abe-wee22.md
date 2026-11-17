---
type: reduction
status: draft
title: "Evasive LWE + Tensor LWE ⇒ Very selectively secure CP-ABE"
aliases: []
id: red-evasive-lwe-to-abe-wee22
kind: implication
hypotheses: [evasive-lwe, tensor-lwe]
conclusion: very-selective-cp-abe
class: unstated
model: standard
source:
  - "[[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]"
security-loss: ""
---

# Evasive LWE + Tensor LWE ⇒ Very selectively secure CP-ABE

## Statement

[[learning-with-errors#evasive-lwe|Evasive LWE]] together with [[learning-with-errors#tensor-lwe|tensor LWE]] (introduced in the same work) and [[learning-with-errors|LWE]] yields ciphertext-policy [[attribute-based-encryption|ABE]] for circuits of a-priori bounded polynomial depth, with parameter sizes independent of the circuit size, that is [[attribute-based-encryption#very-selective-security|very selectively secure]]: the adversary fixes the challenge policy and all key queries before $\Setup$ — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]. Its policies are circuits of every polynomial depth bound given at $\Setup$, which contain every polynomial-size monotone formula of threshold gates at a polynomial bound, and correctness follows from its noise bound — standard.
