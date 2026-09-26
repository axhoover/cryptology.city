---
type: reduction
status: draft
title: "Ring-LWE ⇒ DEPIR"
aliases: []
id: red-lwe-to-depir-lmw23
kind: implication
hypotheses: [ring-lwe]
conclusion: depir
class: unstated
model: standard
source:
  - "[[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]"
security-loss: ""
---

# Ring-LWE ⇒ DEPIR

[[learning-with-errors#ring-lwe|Ring-LWE]] implies [[doubly-efficient-pir|DEPIR]].

## Statement

Hardness of [[learning-with-errors#ring-lwe|Ring-LWE]] implies unkeyed [[doubly-efficient-pir|DEPIR]]: for every constant $\varepsilon > 0$, the server deterministically preprocesses a database of size $N$ in time and space $O(N^{1+\varepsilon})$, after which each query costs $\polylog(N)$ server time and communication, and updates cost $O(N^{\varepsilon})$ — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]].

## Sketch

LMW23 first build a PIR whose server computation is evaluating a fixed multivariate polynomial: the database is encoded as a low-degree polynomial, the query is a Ring-LWE somewhat-homomorphic encryption of the index point, and homomorphic evaluation is polynomial evaluation over the ciphertext ring. Preprocessing that polynomial with the Kedlaya–Umans data structure for fast multipoint evaluation makes each online evaluation cost $\polylog(N)$.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- LMW23 also construct RAM-FHE from Ring-LWE plus circular security; RAM-FHE has no object page.
- Hypothesis changed from `lwe` to `ring-lwe`, with title and H1 to match: LMW23 prove security under Ring-LWE (title and abstract); ring-lwe is a declared variant id on the LWE page.
