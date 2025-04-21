---
title: "Doubly Efficient Cryptography: Commitments, Arguments and RAM MPC"
source: https://eprint.iacr.org/2025/235
authors: Wei-Kai Lin, Ethan Mook, Daniel Wichs
venue: CRYPTO 2024
published: 2025-02-14
aliases:
  - LMW24
---
# Doubly Efficient Cryptography: Commitments, Arguments and RAM MPC
URL: https://eprint.iacr.org/2025/235
Authors: Wei-Kai Lin, Ethan Mook, Daniel Wichs

## Abstract
Can a sender commit to a long input without even reading all of it? Can a prover convince a verifier that an NP statement holds without even reading the entire witness? Can a set of parties run a multiparty computation (MPC) protocol in the RAM model, without necessarily even reading their entire inputs? We show how to construct such "doubly efficient" schemes in a setting where parties can preprocess their input offline, but subsequently they can engage in many different protocol executions over this input in sublinear online time. We do so in the plain model, without any common setup. Our constructions rely on doubly efficient private information retrieval (DEPIR) as a building block and can be instantiated based on Ring LWE.

In more detail, we begin by constructing doubly efficient (interactive) commitments, where the sender preprocesses the input offline, and can later commit to this input to arbitrary receivers in sublinear online time. Moreover, the sender can open individual bits of the committed input in sublinear time. We then use these commitments to implement doubly succinct (interactive) arguments, where the prover preprocesses the statement/witness offline, and can subsequently run many proof protocols to convince arbitrary verifiers of the statement's validity in sublinear online time. Furthermore, we augment these to get a doubly efficient "commit, prove and locally open" protocol, where the prover can commit to a long preprocessed input, prove that it satisfies some global property, and locally open individual bits, all in sublinear time. Finally, we leverage these tools to construct a RAM-MPC with malicious security in the plain model. Each party individually preprocesses its input offline, and can then run arbitrary MPC executions over this input with arbitrary other parties. The online run-time of each MPC execution is only proportional to the RAM run-time of the underlying program, that can be sublinear in the input size.