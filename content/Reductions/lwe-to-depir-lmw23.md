---
type: reduction
status: draft
title: "Ring-LWE ⇒ Unkeyed DEPIR"
aliases: []
id: red-lwe-to-depir-lmw23
kind: implication
hypotheses: [ring-lwe]
conclusion: unkeyed-depir
class: unstated
model: standard
source:
  - "[[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]"
security-loss: ""
rationale:
  class: "The conclusion carries an efficiency requirement, sublinear server time after preprocessing, that lies outside the RTV04 axes."
---

# Ring-LWE ⇒ Unkeyed DEPIR

## Statement

If [[learning-with-errors#ring-lwe|Ring-LWE]] is hard, there is an [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]]: for every constant $\varepsilon > 0$, the server deterministically preprocesses a database of size $N$ in time and space $O(N^{1+\varepsilon})$, after which each query costs $\polylog(N)$ server time and communication, and updates to the preprocessed database cost $O(N^{\varepsilon})$ — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]].

## Notes

- On top of this DEPIR, LMW23 construct fully homomorphic encryption for RAM programs under Ring-LWE with circular security, with homomorphic evaluation time $T^{1+\varepsilon} \cdot \polylog(|x| + |y|)$ for a RAM program of worst-case run-time $T$ on client input $x$ and preprocessed server input $y$ — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]].
