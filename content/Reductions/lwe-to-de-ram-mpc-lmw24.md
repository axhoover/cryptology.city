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
---

# Ring-LWE ⇒ DE-RAM-MPC

[[learning-with-errors#ring-lwe|Ring-LWE]] implies [[doubly-efficient-ram-mpc|DE-RAM-MPC]].

## Statement

Hardness of [[learning-with-errors#ring-lwe|Ring-LWE]] implies maliciously secure [[doubly-efficient-ram-mpc|doubly efficient RAM-MPC]] in the plain model: each party preprocesses its input once offline, then runs arbitrarily many executions with arbitrary other parties in online time proportional to the program's RAM running time, which may be sublinear in the input size — [[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]]. LMW24 also give doubly efficient commitments and doubly succinct arguments, with committer and prover running in sublinear online time.

## Sketch

[[doubly-efficient-pir|DEPIR]], instantiated from Ring-LWE by [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]], yields doubly efficient commitments whose sender preprocesses its input and later commits and opens individual bits in sublinear time; these give doubly succinct interactive arguments and a commit-prove-and-locally-open protocol, from which the RAM-MPC is assembled.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Hypothesis changed from `lwe` to `ring-lwe`, with title and H1 to match: LMW24 instantiate from Ring-LWE via the LMW23 DEPIR; the abstract names no plain-LWE instantiation.
