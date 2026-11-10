---
type: reference
status: stub
title: "Wes19"
source: https://eprint.iacr.org/2018/623
authors: Benjamin Wesolowski
venue: EUROCRYPT 2019
published: 2019
aliases:
  - Wes19
cryptobib_key: EC:Wesolowski19
---

# [Wes19] Efficient Verifiable Delay Functions

**Authors:** Benjamin Wesolowski | **Venue:** EUROCRYPT 2019 | [Source](https://eprint.iacr.org/2018/623)

## Abstract

We construct a verifiable delay function (VDF). A VDF is a function whose evaluation requires running a given number of sequential steps, yet the result can be efficiently verified. They have applications in decentralised systems, such as the generation of trustworthy public randomness in a trustless environment, or resource-efficient blockchains. To construct our VDF, we actually build a trapdoor VDF. A trapdoor VDF is essentially a VDF which can be evaluated efficiently by parties who know a secret (the trapdoor). By setting up this scheme in a way that the trapdoor is unknown (not even by the party running the setup, so that there is no need for a trusted setup environment), we obtain a simple VDF. Our construction is based on groups of unknown order such as an RSA group, or the class group of an imaginary quadratic field. The output of our construction is very short (the result and the proof of correctness are each a single element of the group), and the verification of correctness is very efficient.
