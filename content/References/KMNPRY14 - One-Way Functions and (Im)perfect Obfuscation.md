---
type: reference
status: stub
title: "KMNPRY14"
source: https://eprint.iacr.org/2014/347
authors: Ilan Komargodski, Tal Moran, Moni Naor, Rafael Pass, Alon Rosen, Eylon Yogev
venue: FOCS 2014
published: 2014
aliases:
  - KMNPRY14
cryptobib_key: FOCS:KMNPRY14
---

# [KMNPRY14] One-Way Functions and (Im)perfect Obfuscation

**Authors:** Ilan Komargodski, Tal Moran, Moni Naor, Rafael Pass, Alon Rosen, Eylon Yogev | **Venue:** FOCS 2014 | [Source](https://eprint.iacr.org/2014/347)

## Abstract

A program obfuscator takes a program and outputs an "scrambled" version of it, where the goal is that the obfuscated program will not reveal much about its structure beyond what is apparent from executing it. There are several ways of formalizing this goal. Specifically, in indistinguishability obfuscation, first defined by Barak et al. (CRYPTO 2001), the requirement is that the results of obfuscating any two functionally equivalent programs (circuits) will be computationally indistinguishable. Recently, a fascinating candidate construction for indistinguishability obfuscation was proposed by Garg et al. (FOCS 2013). This has led to a flurry of discovery of intriguing constructions of primitives and protocols whose existence was not previously known (for instance, fully deniable encryption by Sahai and Waters, STOC 2014). Most of them explicitly rely on additional hardness assumptions, such as one-way functions.

Our goal is to get rid of this extra assumption. We cannot argue that indistinguishability obfuscation of all polynomial-time circuits implies the existence of one-way functions, since if $P = NP$, then program obfuscation (under the indistinguishability notion) is possible. Instead, the ultimate goal is to argue that if $P \neq NP$ and program obfuscation is possible, then one-way functions exist.

Our main result is that if $NP \not\subseteq ioBPP$ and there is an efficient (even imperfect) indistinguishability obfuscator, then there are one-way functions. In addition, we show that the existence of an indistinguishability obfuscator implies (unconditionally) the existence of SZK-arguments for $NP$. This, in turn, provides an alternative version of our main result, based on the assumption of hard-on-the average $NP$ problems. To get some of our results we need obfuscators for simple programs such as 3CNF formulas.
