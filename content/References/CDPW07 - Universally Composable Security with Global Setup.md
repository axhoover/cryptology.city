---
type: reference
status: stub
title: "CDPW07"
source: https://eprint.iacr.org/2006/432
authors: Ran Canetti, Yevgeniy Dodis, Rafael Pass, Shabsi Walfish
venue: TCC 2007
published: 2007
aliases:
  - CDPW07
cryptobib_key: TCC:CDPW07
---

# [CDPW07] Universally Composable Security with Global Setup

**Authors:** Ran Canetti, Yevgeniy Dodis, Rafael Pass, Shabsi Walfish | **Venue:** TCC 2007 | [Source](https://eprint.iacr.org/2006/432)

## Abstract

Cryptographic protocols are often designed and analyzed under some trusted setup assumptions, namely in settings where the participants have access to global information that is trusted to have some basic security properties. However, current modeling of security in the presence of such setup falls short of providing the expected security guarantees. A quintessential example of this phenomenon is the deniability concern: there exist natural protocols that meet the strongest known composable security notions, and are still vulnerable to bad interactions with rogue protocols that use the same setup.

We extend the notion of universally composable (UC) security in a way that re-establishes its original intuitive guarantee even for protocols that use globally available setup. The new formulation prevents bad interactions even with adaptively chosen protocols that use the same setup. In particular, it guarantees deniability. While for protocols that use no setup the proposed requirements are the same as in traditional UC security, for protocols that use global setup the proposed requirements are significantly stronger. In fact, realizing Zero Knowledge or commitment becomes provably impossible, even in the Common Reference String model. Still, we propose reasonable alternative setup assumptions and protocols that allow realizing practically any cryptographic task under standard hardness assumptions even against adaptive corruptions.
