---
title: Protecting Data Privacy in Private Information Retrieval Scheme
source: https://dl.acm.org/doi/pdf/10.1145/276698.276723
authors: Yael Gertner, Yuval Ishai, Eyal Kushilevitz, Tal Malkin
venue: STOC 1998, JCSS 2000
published: 1998-06-01
aliases:
  - GIKM00
---
# Protecting Data Privacy in Private Information Retrieval Scheme
URL: https://dl.acm.org/doi/pdf/10.1145/276698.276723
Authors: Yael Gertner, Yuval Ishai, Eyal Kushilevitz, Tal Malkin

## Abstract
Private information retrieval (PIR) schemes allow a user to retrieve the ith bit of an n-bit data string x, replicated in k⩾2 databases (in the information-theoretic setting) or in k⩾1 databases (in the computational setting), while keeping the value of i private. The main cost measure for such a scheme is its communication complexity. In this paper we introduce a model of symmetrically-private information retrieval (SPIR), where the privacy of the data, as well as the privacy of the user, is guaranteed. That is, in every invocation of a SPIR protocol, the user learns only a single physical bit of x and no other information about the data. Previously known PIR schemes severely fail to meet this goal. We show how to transform PIR schemes into SPIR schemes (with information-theoretic privacy), paying a constant factor in communication complexity. To this end, we introduce and utilize a new cryptographic primitive, called conditional disclosure of secrets, which we believe may be a useful building block for the design of other cryptographic protocols. In particular, we get a k-database SPIR scheme of complexity O(n1/(2k−1)) for every constant k⩾2 and an O(log n)-database SPIR scheme of complexity O(log2 n·log log n). All our schemes require only a single round of interaction, and are resilient to any dishonest behavior of the user. These results also yield the first implementation of a distributed version of (n1)-OT (1-out-of-n oblivious transfer) with information-theoretic security and sublinear communication complexity.