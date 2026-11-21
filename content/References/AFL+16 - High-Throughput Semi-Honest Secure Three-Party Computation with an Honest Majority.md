---
type: reference
status: stub
title: "AFL+16"
source: https://eprint.iacr.org/2016/768
authors: Toshinori Araki, Jun Furukawa, Yehuda Lindell, Ariel Nof, Kazuma Ohara
venue: CCS 2016
published: 2016
aliases:
  - AFL+16
cryptobib_key: CCS:AFLNO16
---

# [AFL+16] High-Throughput Semi-Honest Secure Three-Party Computation with an Honest Majority

**Authors:** Toshinori Araki, Jun Furukawa, Yehuda Lindell, Ariel Nof, Kazuma Ohara | **Venue:** CCS 2016 | [Source](https://eprint.iacr.org/2016/768)

## Abstract

In this paper, we describe a new information-theoretic protocol (and a computationally-secure variant) for secure _three_-party computation with an honest majority. The protocol has very minimal computation and communication; for Boolean circuits, each party sends only a single bit for every AND gate (and nothing is sent for XOR gates). Our protocol is (simulation-based) secure in the presence of semi-honest adversaries, and achieves privacy in the client/server model in the presence of malicious adversaries.

On a cluster of three 20-core servers with a 10Gbps connection, the implementation of our protocol carries out over _1.3 million_ AES computations per second, which involves processing over _7 billion gates per second_. In addition, we developed a Kerberos extension that replaces the ticket-granting-ticket encryption on the Key Distribution Center (KDC) in MIT-Kerberos with our protocol, using keys/ passwords that are shared between the servers. This enables the use of Kerberos while protecting passwords. Our implementation is able to support a login storm of over 35,000 logins per second, which suffices even for very large organizations. Our work demonstrates that high-throughput secure computation is possible on standard hardware.
