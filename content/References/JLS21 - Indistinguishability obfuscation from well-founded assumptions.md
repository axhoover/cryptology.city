---
type: reference
status: draft
title: "JLS21"
source: https://eprint.iacr.org/2020/1003
authors: Aayush Jain, Huijia Lin, Amit Sahai
venue: STOC 2021
published: 2021
aliases:
  - JLS21
cryptobib_key: STOC:JaiLinSah21
---

# [JLS21] Indistinguishability Obfuscation from Well-Founded Assumptions

**Authors:** Aayush Jain, Huijia Lin, Amit Sahai | **Venue:** STOC 2021 | [Source](https://eprint.iacr.org/2020/1003)

## Abstract

Indistinguishability obfuscation, introduced by [Barak et. al. Crypto’2001], aims to compile programs into unintelligible ones while preserving functionality. It is a fascinating and powerful object that has been shown to enable a host of new cryptographic goals and beyond. However, constructions of indistinguishability obfuscation have remained elusive, with all other proposals relying on heuristics or newly conjectured hardness assumptions.

In this work, we show how to construct indistinguishability obfuscation from subexponential hardness of four well-founded assumptions. We prove:

Theorem: Let $\tau \in (0,\infty), \delta \in (0,1), \epsilon \in (0,1)$ be arbitrary constants. Assume sub-exponential security of the following assumptions, where $\lambda$ is a security parameter, $p$ is a $\lambda$-bit prime, and the parameters $\ell,k,n$ are large enough polynomials in $\lambda$:

- the Learning With Errors ($\mathsf{LWE}$) assumption over $\mathbb{Z}_p$ with subexponential modulus-to-noise ratio $2^{k^\epsilon}$, where $k$ is the dimension of the $\mathsf{LWE}$ secret,

- the Learning Parity with Noise ($\mathsf{LPN}$) assumption over $\mathbb{Z}_p$ with polynomially many $\mathsf{LPN}$ samples and error rate $1/\ell^\delta$, where $\ell$ is the dimension of the $\mathsf{LPN}$ secret,

- the existence of a Boolean Pseudo-Random Generator ($\mathsf{PRG}$) in $\mathsf{NC}^0$ with stretch $n^{1+\tau}$, where $n$ is the length of the $\mathsf{PRG}$ seed,

- the Symmetric eXternal Diffie-Hellman ($\mathsf{SXDH}$) assumption on asymmetric bilinear groups of order $p$.

Then, (subexponentially secure) indistinguishability obfuscation for all polynomial-size circuits exists.

Further, assuming only polynomial security of the aforementioned assumptions, there exists collusion resistant public-key functional encryption for all polynomial-size circuits.
