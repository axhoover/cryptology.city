---
type: reference
status: stub
title: "BHP17"
source: https://eprint.iacr.org/2017/386
authors: Zvika Brakerski, Shai Halevi, Antigoni Polychroniadou
venue: TCC 2017
published: 2017
aliases:
  - BHP17
cryptobib_key: TCC:BraHalPol17
---

# [BHP17] Four Round Secure Computation Without Setup

**Authors:** Zvika Brakerski, Shai Halevi, Antigoni Polychroniadou | **Venue:** TCC 2017 | [Source](https://eprint.iacr.org/2017/386)

## Abstract

We construct a 4-round multi-party computation protocol in the plain model for any functionality, secure against a malicious adversary. Our protocol relies on the sub-exponential hardness of the Learning with Errors (LWE) problem with slightly super-polynomial noise ratio, and on the existence of adaptively secure commitments. Lin, Pass and Soni (FOCS '17) provide an adaptively secure commitment scheme from Time-Lock Puzzles.
Our round complexity matches a lower bound of Garg et al. (EUROCRYPT '16), and outperforms the state of the art of 6 rounds based on similar assumptions to ours, and 5 rounds relying on indistinguishability obfuscation and other strong assumptions.

To do this, we construct an LWE based multi-key FHE scheme with a very simple one-round distributed setup procedure (vs. the trusted setup required in previous LWE based constructions).
This lets us construct the first 3-round semi-malicious MPC protocol without setup from standard LWE using the approach of Mukherjee and Wichs (EUROCRYPT '16). Finally, subexponential hardness and adaptive commitments are used to ”compile” the protocol into the fully malicious setting.
