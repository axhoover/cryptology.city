---
type: reference
status: stub
title: "DORS08"
source: https://arxiv.org/abs/cs/0602007
authors: Yevgeniy Dodis, Rafail Ostrovsky, Leonid Reyzin, Adam Smith
venue: SIAM Journal on Computing 2008
published: 2008
aliases:
  - DORS08
bibtex: |
  @article{DORS08,
    author  = {Yevgeniy Dodis and Rafail Ostrovsky and Leonid Reyzin and Adam Smith},
    title   = {Fuzzy Extractors: How to Generate Strong Keys from Biometrics and Other Noisy Data},
    journal = {SIAM Journal on Computing},
    volume  = {38},
    number  = {1},
    pages   = {97--139},
    year    = {2008},
    eprint  = {cs/0602007},
    archivePrefix = {arXiv},
  }
---

# [DORS08] Fuzzy Extractors: How to Generate Strong Keys from Biometrics and Other Noisy Data

**Authors:** Yevgeniy Dodis, Rafail Ostrovsky, Leonid Reyzin, Adam Smith | **Venue:** SIAM Journal on Computing 2008 | [Source](https://arxiv.org/abs/cs/0602007)

## Abstract

We provide formal definitions and efficient secure techniques for

- turning noisy information into keys usable for any cryptographic application, and, in particular,

- reliably and securely authenticating biometric data.

Our techniques apply not just to biometric information, but to any keying material that, unlike traditional cryptographic keys, is (1) not reproducible precisely and (2) not distributed uniformly. We propose two primitives: a "fuzzy extractor" reliably extracts nearly uniform randomness R from its input; the extraction is error-tolerant in the sense that R will be the same even if the input changes, as long as it remains reasonably close to the original. Thus, R can be used as a key in a cryptographic application. A "secure sketch" produces public information about its input w that does not reveal w, and yet allows exact recovery of w given another value that is close to w. Thus, it can be used to reliably reproduce error-prone biometric inputs without incurring the security risk inherent in storing them.

We define the primitives to be both formally secure and versatile, generalizing much prior work. In addition, we provide nearly optimal constructions of both primitives for various measures of “closeness” of input data, such as Hamming distance, edit distance, and set difference.
