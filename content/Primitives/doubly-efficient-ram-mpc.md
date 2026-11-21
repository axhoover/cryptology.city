---
type: primitive
status: stub
aliases:
  - DE-RAM-MPC
  - Doubly-efficient RAM MPC
title: Doubly-efficient RAM MPC
unlisted: true
---

# Doubly-efficient RAM MPC

An MPC protocol in the RAM model in which each party preprocesses its input offline once and can then run arbitrarily many executions whose online time is proportional only to the RAM running time of the program, which may be sublinear in the input size — [[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]].

TODO: encode from [[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]] before this page is registered as a node again: the syntax (each party's preprocessing, which depends on its own input only, and the online protocol); the corruption model and the real/ideal malicious-security game with its quantifiers; and the online-time bound as LMW24's theorem states it.

# Other results

- RAM-MPC with malicious security in the plain model, without common setup: each party preprocesses its input offline once and can then run arbitrarily many MPC executions over it with arbitrary other parties, the online run time of each execution proportional only to the RAM run time of the program, which can be sublinear in the input size. The construction uses [[doubly-efficient-pir|DEPIR]] as a building block, through doubly efficient commitments and doubly succinct arguments, and can be instantiated from [[learning-with-errors#ring-lwe|Ring LWE]] — [[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]].
