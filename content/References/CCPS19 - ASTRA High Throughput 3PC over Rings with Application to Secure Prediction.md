---
type: reference
status: draft
title: "CCPS19"
source: https://eprint.iacr.org/2019/429
authors: Harsh Chaudhari, Ashish Choudhury, Arpita Patra, Ajith Suresh
venue: CCSW 2019
published: 2019
aliases:
  - CCPS19
cryptobib_key: EPRINT:CCPS19
---

# [CCPS19] ASTRA: High Throughput 3PC over Rings with Application to Secure Prediction

**Authors:** Harsh Chaudhari, Ashish Choudhury, Arpita Patra, Ajith Suresh | **Venue:** CCSW 2019 | [Source](https://eprint.iacr.org/2019/429)

## Abstract

The concrete efficiency of secure computation has been the focus of many recent works. In this work, we present concretely-efficient protocols for secure $3$-party computation (3PC) over a ring of integers modulo $2^l$ tolerating one corruption, both with semi-honest and malicious security. Owing to the fact that computation over ring emulates computation over the real-world system architectures, secure computation over ring has gained momentum of late.

Cast in the offline-online paradigm, our constructions present the most efficient online phase in concrete terms. In the semi-honest setting, our protocol requires communication of $2$ ring elements per multiplication gate during the online phase, attaining a per-party cost of less than one element. This is achieved for the first time in the regime of $3$PC. In the malicious setting, our protocol requires communication of $4$ elements per multiplication gate during the online phase, beating the state-of-the-art protocol by $5$ elements. Realized with both the security notions of selective abort and fairness, the malicious protocol with fairness involves slightly more communication than its counterpart with abort security for the output gates alone.

We apply our techniques from $3$PC in the regime of secure server-aided machine-learning (ML) inference for a range of prediction functions-- linear regression, linear SVM regression, logistic regression, and linear SVM classification. Our setting considers a model-owner with trained model parameters and a client with a query, with the latter willing to learn the prediction of her query based on the model parameters of the former. The inputs and computation are outsourced to a set of three non-colluding servers. Our constructions catering to both semi-honest and the malicious world, invariably perform better than the existing constructions.

# Notes

The abstract is that of ePrint 2019/429, a minor revision of the ACM CCSW 2019 article ([doi:10.1145/3338466.3358922](https://doi.org/10.1145/3338466.3358922)). The full and extended version is also [arXiv:1912.02592](https://arxiv.org/abs/1912.02592); its Table 1 compares the amortized communication per multiplication gate with that of AFL+16 and ABF+17.
