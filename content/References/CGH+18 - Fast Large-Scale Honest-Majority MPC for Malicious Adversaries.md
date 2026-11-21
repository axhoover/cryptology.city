---
type: reference
status: stub
title: "CGH+18"
source: https://eprint.iacr.org/2018/570
authors: Koji Chida, Daniel Genkin, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Yehuda Lindell, Ariel Nof
venue: CRYPTO 2018
published: 2018
aliases:
  - CGH+18
cryptobib_key: C:CGHIKL18
---

# [CGH+18] Fast Large-Scale Honest-Majority MPC for Malicious Adversaries

**Authors:** Koji Chida, Daniel Genkin, Koki Hamada, Dai Ikarashi, Ryo Kikuchi, Yehuda Lindell, Ariel Nof | **Venue:** CRYPTO 2018 | [Source](https://eprint.iacr.org/2018/570)

## Abstract

Protocols for secure multiparty computation enable a set of parties to compute a function of their inputs without revealing anything but the output. The security properties of the protocol must be preserved in the presence of adversarial behavior. The two classic adversary models considered are semi-honest (where the adversary follows the protocol specification but tries to learn more than allowed by examining the protocol transcript) and malicious (where the adversary may follow any arbitrary attack strategy). Protocols for semi-honest adversaries are often far more efficient, but in many cases the security guarantees are not strong enough.

In this paper, we present new protocols for securely computing any functionality represented by an arithmetic circuit. We utilize a new method for verifying that the adversary does not cheat, that yields a cost of just twice that of semi-honest protocols in some settings. Our protocols are information-theoretically secure in the presence of a malicious adversaries, assuming an honest majority. We present protocol variants for small and large fields, and show how to efficiently instantiate them based on replicated secret sharing and Shamir sharing. As with previous works in this area aiming to achieve high efficiency, our protocol is secure with abort and does not achieve fairness, meaning that the adversary may receive output while the honest parties do not.

We implemented our protocol and ran experiments for different numbers of parties, different network configurations and different circuit depths. Our protocol significantly outperforms the previous best for this setting (Lindell and Nof, CCS 2017); for a large number of parties, our implementation runs almost an order of magnitude faster than theirs.
