---
type: reference
status: stub
title: "GL01"
source: https://eprint.iacr.org/2000/057
authors: Oded Goldreich, Yehuda Lindell
venue: CRYPTO 2001
published: 2001
aliases:
  - GL01
cryptobib_key: C:GolLin01
---

# [GL01] Session-Key Generation Using Human Passwords Only

**Authors:** Oded Goldreich, Yehuda Lindell | **Venue:** CRYPTO 2001 | [Source](https://eprint.iacr.org/2000/057)

## Abstract

We present session-key generation protocols in a model where the
legitimate parties share _only_ a human-memorizable
password, and there is no additional setup assumption in the
network. Our protocol is proven secure under the assumption that
trapdoor permutations exist. The security guarantee holds with
respect to probabilistic polynomial-time adversaries that control
the communication channel (between the parties), and may omit,
insert and modify messages at their choice. Loosely speaking, the
effect of such an adversary that attacks an execution of our
protocol is comparable to an attack in which an adversary is only
allowed to make a constant number of queries of the form “is $w$
the password of Party $A$”. We stress that the result holds also
in case the passwords are selected at random from a small
dictionary so that it is feasible (for the adversary) to scan the
entire directory. We note that prior to our result, it was not
known whether or not such protocols were attainable without the
use of random oracles or additional setup assumptions.
