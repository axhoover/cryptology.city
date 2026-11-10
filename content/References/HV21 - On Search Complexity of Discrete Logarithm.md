---
type: reference
status: stub
title: "HV21"
source: https://arxiv.org/abs/2107.02617
authors: Pavel Hubáček, Jan Václavek
venue: MFCS 2021
published: 2021
aliases:
  - HV21
bibtex: |
  @inproceedings{HV21,
    author    = {Pavel Hub{\'a}{\v c}ek and Jan V{\'a}clavek},
    title     = {On Search Complexity of Discrete Logarithm},
    booktitle = {46th International Symposium on Mathematical Foundations of Computer Science (MFCS 2021)},
    series    = {Leibniz International Proceedings in Informatics (LIPIcs)},
    volume    = {202},
    pages     = {60:1--60:16},
    publisher = {Schloss Dagstuhl -- Leibniz-Zentrum f{\"u}r Informatik},
    year      = {2021},
    doi       = {10.4230/LIPIcs.MFCS.2021.60},
    url       = {https://arxiv.org/abs/2107.02617}
  }
---

# [HV21] On Search Complexity of Discrete Logarithm

**Authors:** Pavel Hubáček, Jan Václavek | **Venue:** MFCS 2021 | [Source](https://arxiv.org/abs/2107.02617)

## Abstract

In this work, we study the discrete logarithm problem in the context of TFNP - the complexity class of search problems with a syntactically guaranteed existence of a solution for all instances. Our main results establish that suitable variants of the discrete logarithm problem are complete for the complexity class PPP, respectively PWPP, i.e., the subclasses of TFNP capturing total search problems with a solution guaranteed by the pigeonhole principle, respectively the weak pigeonhole principle. Besides answering an open problem from the recent work of Sotiraki, Zampetakis, and Zirdelis (FOCS'18), our completeness results for PPP and PWPP have implications for the recent line of work proving conditional lower bounds for problems in TFNP under cryptographic assumptions. In particular, they highlight that any attempt at basing average-case hardness in subclasses of TFNP (other than PWPP and PPP) on the average-case hardness of the discrete logarithm problem must exploit its structural properties beyond what is necessary for constructions of collision-resistant hash functions.

Additionally, our reductions provide new structural insights into the class PWPP by establishing two new PWPP-complete problems. First, the problem DOVE, a relaxation of the PPP-complete problem PIGEON. DOVE is the first PWPP-complete problem not defined in terms of an explicitly shrinking function. Second, the problem CLAW, a total search problem capturing the computational complexity of breaking claw-free permutations. In the context of TFNP, the PWPP-completeness of CLAW matches the known intrinsic relationship between collision-resistant hash functions and claw-free permutations established in the cryptographic literature.
