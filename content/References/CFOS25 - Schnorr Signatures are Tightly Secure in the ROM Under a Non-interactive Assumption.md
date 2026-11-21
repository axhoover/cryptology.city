---
type: reference
status: stub
title: "CFOS25"
source: https://eprint.iacr.org/2024/1528
authors: Gavin Cho, Georg Fuchsbauer, Adam O'Neill, Marek Sefranek
venue: CRYPTO 2025
published: 2025
aliases:
  - CFOS25
cryptobib_key: C:CFOS25
---

# [CFOS25] Schnorr Signatures are Tightly Secure in the ROM Under a Non-interactive Assumption

**Authors:** Gavin Cho, Georg Fuchsbauer, Adam O'Neill, Marek Sefranek | **Venue:** CRYPTO 2025 | [Source](https://eprint.iacr.org/2024/1528)

## Abstract

We show that the widely-used Schnorr signature scheme meets existential unforgeability under chosen-message attack (EUF-CMA) in the random oracle model (ROM) if the circular discrete-logarithm (CDL) assumption holds in the underlying group. CDL is a new, non-interactive and falsifiable variant of the discrete-logarithm (DL) assumption that we introduce. Our reduction is completely tight, meaning the constructed adversary against CDL has essentially the same running time and success probability as the assumed forger. This serves to justify the size of the underlying group for Schnorr signatures used in practice.

To our knowledge, we are the first to exhibit such a reduction. Indeed,
prior work required interactive and non-falsifiable assumptions (Bellare and Dai, INDOCRYPT 2020) or additional idealized models beyond the ROM like the algebraic group model (Fuchsbauer, Plouviez and Seurin, EUROCRYPT 2020). To further demonstrate the applicability of CDL, we show that Sparkle+ (Crites, Komlo and Maller, CRYPTO 2023), a threshold signing scheme for Schnorr, is tightly secure (under static corruptions) assuming CDL. Finally, we justify CDL by showing it holds in two carefully chosen idealized models that idealize different aspects of the assumption.
