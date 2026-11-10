---
type: reference
status: stub
title: "GGHW14"
source: https://eprint.iacr.org/2013/860
authors: Sanjam Garg, Craig Gentry, Shai Halevi, Daniel Wichs
venue: CRYPTO 2014
published: 2014
aliases:
  - GGHW14
cryptobib_key: C:GGHW14
---

# [GGHW14] On the Implausibility of Differing-Inputs Obfuscation and Extractable Witness Encryption with Auxiliary Input

**Authors:** Sanjam Garg, Craig Gentry, Shai Halevi, Daniel Wichs | **Venue:** CRYPTO 2014 | [Source](https://eprint.iacr.org/2013/860)

## Abstract

The notion of differing-inputs obfuscation (diO) was introduced by Barak et al. (CRYPTO 2001). It guarantees that, for any two circuits $C_0, C_1$, if it is difficult to come up with an input $x$ on which $C_0(x) \neq C_1(x)$, then it should also be difficult to distinguish the obfuscation of $C_0$ from that of $C_1$. This is a strengthening of indistinguishability obfuscation, where the above is only guaranteed for circuits that agree on all inputs: $C_0(x) = C_1(x)$ for all $x$. Two recent works of Ananth et al. (ePrint 2013) and Boyle et al. (TCC 2014) study the notion of diO in the setting where the attacker is also given some auxiliary information related to the circuits, showing that this notion leads to many interesting applications.

In this work, we show that the existence of general-purpose diO with general auxiliary input has a surprising consequence: it implies that a specific circuit $C^*$ with specific auxiliary input $\mathsf{aux}^*$ cannot be obfuscated in a way that hides some specific information. In other words, under the conjecture that such special-purpose obfuscation exists, we show that general-purpose diO cannot exist. We do not know if this special-purpose obfuscation assumption is implied by diO itself, and hence we do not get an unconditional impossibility result. However, the special-purpose obfuscation assumption is a falsifiable assumption which we do not know how to break for candidate obfuscation schemes. Showing the existence of general-purpose diO with general auxiliary input would necessitate showing how to break this assumption.

We also show that the special-purpose obfuscation assumption implies the impossibility of extractable witness encryption with auxiliary input, a notion proposed by Goldwasser et al. (CRYPTO 2013). A variant of this assumption also implies the impossibility of “output-only dependent” hardcore bits for general one-way functions, as recently constructed by Bellare and Tessaro (ePrint 2013) using diO.
