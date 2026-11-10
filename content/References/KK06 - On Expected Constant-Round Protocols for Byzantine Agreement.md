---
type: reference
status: stub
title: "KK06"
source: https://eprint.iacr.org/2006/065
authors: Jonathan Katz, Chiu-Yuen Koo
venue: CRYPTO 2006
published: 2006
aliases:
  - KK06
cryptobib_key: C:KatKoo06
---

# [KK06] On Expected Constant-Round Protocols for Byzantine Agreement

**Authors:** Jonathan Katz, Chiu-Yuen Koo | **Venue:** CRYPTO 2006 | [Source](https://eprint.iacr.org/2006/065)

## Abstract

In a seminal paper, Feldman and Micali (STOC '88) show an $n$-party Byzantine agreement protocol tolerating $t < n/3$ malicious parties that runs in expected constant rounds. Here, we show an expected constant-round protocol for authenticated Byzantine agreement assuming
honest majority (i.e., $t < n/2$), and relying only on the existence of a secure signature scheme and a public-key infrastructure (PKI).
Combined with existing results, this gives the first expected constant-round protocol for secure computation with honest majority in a point-to-point network assuming only one-way functions and a PKI. Our key technical tool --- a new primitive we introduce called moderated VSS --- also yields a simpler proof of the Feldman-Micali result.

We also show a simple technique for sequential composition of protocols without simultaneous termination (something that is inherent for Byzantine agreement protocols using $o(n)$ rounds) for the case of $t<n/2$.
