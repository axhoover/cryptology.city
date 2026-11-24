---
type: reference
status: draft
title: "JZC+18"
source: https://eprint.iacr.org/2017/1096
authors: Haodong Jiang, Zhenfeng Zhang, Long Chen, Hong Wang, Zhi Ma
venue: CRYPTO 2018
published: 2018
aliases:
  - JZC+18
cryptobib_key: C:JZCWM18
---

# [JZC+18] IND-CCA-Secure Key Encapsulation Mechanism in the Quantum Random Oracle Model, Revisited

**Authors:** Haodong Jiang, Zhenfeng Zhang, Long Chen, Hong Wang, Zhi Ma | **Venue:** CRYPTO 2018 | [Source](https://eprint.iacr.org/2017/1096)

## Abstract

With the gradual progress of NIST's post-quantum cryptography standardization, the Round-1 KEM proposals have been posted for public to discuss and evaluate. Among the IND-CCA-secure KEM constructions, mostly, an IND-CPA-secure (or OW-CPA-secure) public-key encryption (PKE) scheme is first introduced, then some generic transformations are applied to it. All these generic transformations are constructed in the random oracle model (ROM). To fully assess the post-quantum security, security analysis in the quantum random oracle model (QROM) is preferred. However, current works either lacked a QROM security proof or just followed Targhi and Unruh's proof technique (TCC-B 2016) and modified the original transformations by adding an additional hash to the ciphertext to achieve the QROM security.

In this paper, by using a novel proof technique, we present QROM security reductions for two widely used generic transformations without suffering any ciphertext overhead. Meanwhile, the security bounds are much tighter than the ones derived by utilizing Targhi and Unruh's proof technique. Thus, our QROM security proofs not only provide a solid post-quantum security guarantee for NIST Round-1 KEM schemes, but also simplify the constructions and reduce the ciphertext sizes. We also provide QROM security reductions for Hofheinz-Hoevelmanns-Kiltz modular transformations (TCC 2017), which can help to obtain a variety of combined transformations with different requirements and properties.
