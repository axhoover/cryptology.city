---
type: reference
status: stub
title: "JS24"
source: https://eprint.iacr.org/2025/2123
authors: Joseph Jaeger, Roy Stracovsky
venue: ASIACRYPT 2024
published: 2024
aliases:
  - JS24
cryptobib_key: AC:JaeStr24
---

# [JS24] Dictators? Friends? Forgers. Breaking and Fixing Unforgeability Definitions for Anamorphic Signature Schemes

**Authors:** Joseph Jaeger, Roy Stracovsky | **Venue:** ASIACRYPT 2024 | [Source](https://eprint.iacr.org/2025/2123)

## Abstract

Anamorphic signature schemes (KPPYZ, Crypto 2023) allow users to hide encrypted messages in signatures to allow covert communication in a hypothesized scenario where encryption is outlawed by a "dictator" but authentication is permitted. We enhance the security of anamorphic signatures by proposing two parallel notions of unforgeability which close gaps in existing security definitions. The first notion considers a dictator who wishes to forge anamorphic signatures. This notion patches a divide between the definition and a stated security goal of robustness (BGHMR, Eurocrypt 2024). We port two related BGHMR constructions to the signature scheme setting and demonstrate that, as presented, both of these and a construction from KPPYZ are insecure under an active dictator. However, two of the three can easily be modified to satisfy our definition. The second notion we propose considers a recipient who wishes to forge signatures. To motivate this notion, we identify a gap in an existing security definition from KPPYZ and present attacks that allow parties to be impersonated when using schemes erroneously deemed secure. We then formalize our new unforgeability definition to close this gap. Interestingly, while the new definition is only modestly different from the old one, the change introduces subtle technical challenges that arise when proving security. We overcome these challenges in our reanalysis of existing anamorphic signature schemes by showing they achieve our new notion when built from chosen-randomness secure signatures or with encryption that satisfies a novel ideal-model simulatability property.
