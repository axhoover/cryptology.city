---
title: "MMP+10"
source: https://ieeexplore.ieee.org/abstract/document/5670946
authors: Andrew McGregor, Ilya Mironov, Toniann Pitassi, Omer Reingold, Kunal Talwar, Salil Vadhan
venue: STOC 2010
published: 2010-06-01
created: 2025-03-07
aliases:
  - MMP+10
tags:
  - STOC

---
# [MMP+10] The Limits of Two-Party Differential Privacy

**Authors:** Andrew McGregor, Ilya Mironov, Toniann Pitassi, Omer Reingold, Kunal Talwar, Salil Vadhan | **Venue:** STOC 2010 | [Source](https://ieeexplore.ieee.org/abstract/document/5670946)

## Abstract
We study differential privacy in a distributed setting where two parties would like to perform analysis of their joint data while preserving privacy for both datasets. Our results imply almost tight lower bounds on the accuracy of such data analyses, both for specific natural functions (such as Hamming distance) and in general. Our bounds expose a sharp contrast between the two-party setting and the simpler client-server setting (where privacy guarantees are one-sided). In addition, those bounds demonstrate a dramatic gap between the accuracy that can be obtained by differentially private data analysis versus the accuracy obtainable when privacy is relaxed to a computational variant of differential privacy. The first proof technique we develop demonstrates a connection between differential privacy and deterministic extraction from Santha-Vazirani sources. A second connection we expose indicates that the ability to approximate a function by a low-error differentially private protocol is strongly related to the ability to approximate it by a low communication protocol. (The connection goes in both directions).