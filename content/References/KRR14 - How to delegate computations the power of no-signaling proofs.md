---
type: reference
status: stub
title: "KRR14"
source: https://eprint.iacr.org/2013/862
authors: Yael Tauman Kalai, Ran Raz, Ron D. Rothblum
venue: STOC 2014
published: 2014
aliases:
  - KRR14
cryptobib_key: STOC:KalRazRot14
---

# [KRR14] How to delegate computations: the power of no-signaling proofs

**Authors:** Yael Tauman Kalai, Ran Raz, Ron D. Rothblum | **Venue:** STOC 2014 | [Source](https://eprint.iacr.org/2013/862)

## Abstract

We construct a 1-round delegation scheme (i.e., argument-system)
for every language computable in time t=t(n), where the running
time of the prover is poly(t) and the running time of the
verifier is n\*polylog(t). In particular, for every language in P
we obtain a delegation scheme with almost linear time
verification. Our construction relies on the existence of a
computational sub-exponentially secure private information
retrieval (PIR) scheme.

The proof exploits a curious connection between the problem of
computation delegation and the model of multi-prover interactive
proofs that are sound against no-signaling (cheating) strategies,
a model that was studied in the context of multi-prover
interactive proofs with provers that share quantum entanglement,
and is motivated by the physical principle that information
cannot travel faster than light.

For any language computable in time t=t(n), we construct a
multi-prover interactive proof (MIP) that is sound against
no-signaling strategies, where the running time of the provers is
poly(t), the number of provers is polylog(t), and the running
time of the verifier is n\*polylog(t).

In particular, this shows that the class of languages that have
polynomial-time MIPs that are sound against no-signaling
strategies, is exactly EXP. Previously, this class was only known
to contain PSPACE.

To convert our MIP into a 1-round delegation scheme, we use the
method suggested by Aiello et-al (ICALP, 2000), which makes use
of a PIR scheme. This method lacked a proof of security. We
prove that this method is secure assuming the underlying MIP is
secure against no-signaling provers.
