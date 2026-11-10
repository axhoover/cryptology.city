---
type: reference
status: stub
title: "CPS08"
source: https://eprint.iacr.org/2008/246
authors: Jean-Sébastien Coron, Jacques Patarin, Yannick Seurin
venue: CRYPTO 2008
published: 2008
aliases:
  - CPS08
cryptobib_key: C:CorPatSeu08
---

# [CPS08] The Random Oracle Model and the Ideal Cipher Model Are Equivalent

**Authors:** Jean-Sébastien Coron, Jacques Patarin, Yannick Seurin | **Venue:** CRYPTO 2008 | [Source](https://eprint.iacr.org/2008/246)

## Abstract

The Random Oracle Model and the Ideal Cipher Model are two well known idealised models of computation for proving the security of cryptosystems. At Crypto 2005, Coron et al. showed that security in the random oracle model implies security in the ideal cipher model; namely they showed that a random oracle can be replaced by a block cipher-based construction, and the resulting scheme remains secure in the ideal cipher model. The other direction was left as an open problem, i.e. constructing an ideal cipher from a random oracle. In this paper we solve this open problem and show that the Feistel construction with 6 rounds is enough to obtain an ideal cipher; we also show that 5 rounds are insufficient by providing a simple attack. This contrasts with the classical Luby-Rackoff result that 4 rounds are necessary and sufficient to obtain a (strong) pseudo-random permutation from a pseudo-random function.
