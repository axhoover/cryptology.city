---
type: reference
status: stub
title: "MCR21"
source: https://eprint.iacr.org/2021/1081
authors: Muhammad Haris Mughees, Hao Chen, Ling Ren
venue: ACM CCS 2021
published: 2021
aliases:
  - MCR21
cryptobib_key: CCS:MugCheRen21
---

# [MCR21] OnionPIR: Response Efficient Single-Server PIR

**Authors:** Muhammad Haris Mughees, Hao Chen, Ling Ren | **Venue:** ACM CCS 2021 | [Source](https://eprint.iacr.org/2021/1081)

## Abstract

This paper presents OnionPIR and stateful OnionPIR two single-server PIR schemes that significantly improve the response size and computation cost over state-of-the-art schemes. OnionPIR scheme utilizes recent advances in somewhat homomorphic encryption (SHE) and carefully composes two lattice-based SHE schemes and homomorphic operations to control the noise growth and response size. Stateful OnionPIR uses a technique based on the homomorphic evaluation of copy networks.
OnionPIR achieves a response overhead of just $4.2$x over the insecure baseline, in contrast to the $100$x response overhead of state-of-the-art schemes. Our stateful OnionPIR scheme improves upon the recent stateful PIR framework of Patel et al. and drastically reduces its response overhead by avoiding downloading the entire database in the offline stage.
Compared to stateless OnionPIR, Stateful OnionPIR reduces the computation cost by $1.8-22$x for different database sizes.
