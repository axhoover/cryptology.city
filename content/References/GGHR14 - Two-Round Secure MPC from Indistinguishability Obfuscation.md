---
type: reference
status: stub
title: "GGHR14"
source: https://eprint.iacr.org/2013/601
authors: Sanjam Garg, Craig Gentry, Shai Halevi, Mariana Raykova
venue: TCC 2014
published: 2014
aliases:
  - GGHR14
cryptobib_key: TCC:GGHR14
---

# [GGHR14] Two-Round Secure MPC from Indistinguishability Obfuscation

**Authors:** Sanjam Garg, Craig Gentry, Shai Halevi, Mariana Raykova | **Venue:** TCC 2014 | [Source](https://eprint.iacr.org/2013/601)

## Abstract

One fundamental complexity measure of an MPC protocol is its _round complexity_. Asharov et al. recently constructed the first three-round protocol for general MPC in the CRS model. Here, we show how to achieve this result with only two rounds. We obtain UC security with abort against static malicious adversaries, and fairness if there is an honest majority. Additionally the communication in our protocol is only proportional to the input and output size of the function being evaluated and independent of its circuit size. Our main tool is indistinguishability obfuscation, for which a candidate construction was recently proposed by Garg et al.

The technical tools that we develop in this work also imply virtual black box obfuscation of a new primitive that we call a _dynamic point function_. This primitive may be of independent interest.
