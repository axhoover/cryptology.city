---
type: reduction
status: draft
title: "Ring-LWE ⇒ DE-RAM-MPC"
aliases: []
id: red-lwe-to-de-ram-mpc-lmw24
kind: implication
hypotheses: [ring-lwe]
conclusion: doubly-efficient-ram-mpc
class: unstated
model: standard
source:
  - "[[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]]"
security-loss: ""
rationale:
  class: "The conclusion bundles an efficiency requirement, sublinear online time, with security, and that requirement lies outside the RTV04 axes."
---

# Ring-LWE ⇒ DE-RAM-MPC

## Statement

If [[learning-with-errors#ring-lwe|Ring-LWE]] is hard, there is a maliciously secure [[doubly-efficient-ram-mpc|doubly efficient RAM-MPC]] in the plain model: each party preprocesses its input once offline, then runs arbitrarily many executions with arbitrary other parties in online time proportional to the program's RAM running time, which may be sublinear in the input size — [[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]].

## Notes

- LMW24 build the protocol from [[doubly-efficient-pir|DEPIR]], and the Ring-LWE instantiation is the DEPIR of [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]. On the way, LMW24 construct doubly efficient commitments, whose sender commits and opens individual bits in sublinear online time after preprocessing, and doubly succinct arguments, whose prover runs each proof in sublinear online time after preprocessing — [[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]].
