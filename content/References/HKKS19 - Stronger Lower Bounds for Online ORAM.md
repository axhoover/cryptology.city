---
title: "HKKS19"
source: https://link.springer.com/chapter/10.1007/978-3-030-36033-7_10
authors: Pavel Hubáček, Michal Koucký, Karel Král, Veronika Slívová
venue: TCC 2019
published: 2019-11-22
created: 2025-04-22
aliases:
  - HKKS19
tags:
  - TCC

---
# [HKKS19] Stronger Lower Bounds for Online ORAM

**Authors:** Pavel Hubáček, Michal Koucký, Karel Král, Veronika Slívová | **Venue:** TCC 2019 | [Source](https://link.springer.com/chapter/10.1007/978-3-030-36033-7_10)

## Abstract
Oblivious RAM (ORAM), introduced in the context of software protection by Goldreich and Ostrovsky [JACM’96], aims at obfuscating the memory access pattern induced by a RAM computation. Ideally, the memory access pattern of an ORAM should be independent of the data being processed. Since the work of Goldreich and Ostrovsky, it was believed that there is an inherent $\Omega(\log n)$ bandwidth overhead in any ORAM working with memory of size $n$. Larsen and Nielsen [CRYPTO’18] were the first to give a general $\Omega(\log n)$ lower bound for any online ORAM, i.e., an ORAM that must process its inputs in an online manner.

In this work, we revisit the lower bound of Larsen and Nielsen, which was proved under the assumption that the adversarial server knows exactly which server accesses correspond to which input operation. We give an $\Omega(\log n)$ lower bound for the bandwidth overhead of any online ORAM even when the adversary has no access to this information. For many known constructions of ORAM this information is provided implicitly as each input operation induces an access sequence of roughly the same length. Thus, they are subject to the lower bound of Larsen and Nielsen. Our results rule out a broader class of constructions and specifically, they imply that obfuscating the boundaries between the input operations does not help in building a more efficient ORAM.

As our main technical contribution and to handle the lack of structure, we study the properties of access graphs induced naturally by the memory access pattern of an ORAM computation. We identify a particular graph property that can be efficiently tested and that all access graphs of ORAM computation must satisfy with high probability. This property is reminiscent of the Larsen-Nielsen property but it is substantially less structured; that is, it is more generic.

This research was supported in part by the Grant Agency of the Czech Republic under the grant agreement no. 19-27871X, by the Charles University projects PRIMUS/17/SCI/9 and UNCE/SCI/004, Charles University grant SVV-2017-260452, and by the Neuron Fund for the support of science.