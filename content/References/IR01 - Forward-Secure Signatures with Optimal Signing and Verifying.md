---
type: reference
status: stub
title: "IR01"
source: https://eprint.iacr.org/2001/048
authors: Gene Itkis, Leonid Reyzin
venue: CRYPTO 2001
published: 2001
aliases:
  - IR01
cryptobib_key: C:ItkRey01
---

# [IR01] Forward-Secure Signatures with Optimal Signing and Verifying

**Authors:** Gene Itkis, Leonid Reyzin | **Venue:** CRYPTO 2001 | [Source](https://eprint.iacr.org/2001/048)

## Abstract

Ordinary digital signatures have an inherent weakness: if the secret key is leaked, then all signatures, even the ones generated before the leak, are no longer trustworthy. Forward-secure digital signatures were recently proposed to address this weakness: they ensure that past signatures remain secure even if the current secret key is leaked.

We propose the first forward-secure signature scheme for which both signing and verifying are as efficient as for one of the most efficient ordinary signature schemes (Guillou-Quisquater): each requiring just two modular exponentiations with a short exponent. All previously proposed forward-secure signature schemes took significantly longer to sign and verify than ordinary signature schemes.

Our scheme requires only fractional increases to the sizes of keys and signatures, and no additional public storage. Like the underlying Guillou-Quisquater scheme, our scheme is provably secure in the random oracle model.
