---
type: reference
status: stub
title: "DL25"
source: https://eprint.iacr.org/2025/328
authors: Amit Deo, Benoît Libert
venue: preprint
published: 2025
aliases:
  - DL25
cryptobib_key: EPRINT:DeoLib25
---

# [DL25] Fully Asymmetric Anamorphic Homomorphic Encryption from LWE

**Authors:** Amit Deo, Benoît Libert | **Venue:** preprint | [Source](https://eprint.iacr.org/2025/328)

## Abstract

As introduced by Persiano _et al._ (Eurocrypt'22), anamorphic encryption (AE) is a primitive enabling private communications against a dictator that forces users to surrender their decryption keys. In its fully asymmetric flavor (defined by Catalano _et al._, Eurocrypt'24), anamorphic channels can work as hidden public-key mechanisms in the sense that anamorphic encryptors are not necessarily able to decrypt anamorphic ciphertexts. Unfortunately, fully asymmetric AE is hard to come by and even impossible to obtain from ordinary public-key encryption via black-box constructions. So far, only three schemes are known to rely on well-established assumptions. In this paper, we exhibit constructions from the standard LWE assumption based on Regev's cryptosystem and its dual version. In both cases, we retain the additive homomorphism of the schemes. We additionally show that dual Regev is public-key anamorphic in the sense of Persiano _et al._ (Crypto'24). In the FHE setting, we show that the dual GSW system provides fully asymmetric AE (while preserving its leveled homomorphism) when instantiated with binary/ternary secret keys. Along the way, we discuss the extent to which our schemes satisfy a generalization of Banfi _et al._'s notion of robustness (Eurocrypt'24) to the case of homomorphically evaluated ciphertexts.
