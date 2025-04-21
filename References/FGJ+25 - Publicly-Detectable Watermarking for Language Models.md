---
title: Publicly-Detectable Watermarking for Language Models
source: https://cic.iacr.org/p/1/4/31
authors: Jaiden Fairoze, Sanjam Garg, Somesh Jha, Saeed Mahloujifar, Mohammad Mahmoody, Mingyuan Wang
venue: CiC Vol 1, No 4 (2025)
published: 2023-10-27
aliases:
  - FGJ+25
---
# Publicly-Detectable Watermarking for Language Models
URL: https://cic.iacr.org/p/1/4/31
Authors: Jaiden Fairoze, Sanjam Garg, Somesh Jha, Saeed Mahloujifar, Mohammad Mahmoody, Mingyuan Wang

## Abstract
We present a publicly-detectable watermarking scheme for LMs: the detection algorithm contains no secret information, and it is executable by anyone. We embed a publicly-verifiable cryptographic signature into LM output using rejection sampling and prove that this produces unforgeable and distortion-free (i.e., undetectable without access to the public key) text output. We make use of error-correction to overcome periods of low entropy, a barrier for all prior watermarking schemes. We implement our scheme and find that our formal claims are met in practice.