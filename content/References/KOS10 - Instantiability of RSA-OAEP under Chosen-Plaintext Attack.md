---
type: reference
status: stub
title: "KOS10"
source: https://eprint.iacr.org/2011/559
authors: Eike Kiltz, Adam O'Neill, Adam Smith
venue: CRYPTO 2010
published: 2010
aliases:
  - KOS10
cryptobib_key: C:KilONeSmi10
---

# [KOS10] Instantiability of RSA-OAEP under Chosen-Plaintext Attack

**Authors:** Eike Kiltz, Adam O'Neill, Adam Smith | **Venue:** CRYPTO 2010 | [Source](https://eprint.iacr.org/2011/559)

## Abstract

We show that the widely deployed RSA-OAEP encryption scheme of Bellare and Rogaway (Eurocrypt 1994), which combines RSA with two rounds of an underlying Feistel network whose hash (_i.e._, round) functions are modeled as random oracles, meets indistinguishability under chosen-plaintext attack (IND-CPA) in the _standard model_ based on simple, non-interactive, and non-interdependent assumptions on RSA and the hash functions. To prove this, we first give a result on a more general notion called “padding-based” encryption, saying that such a scheme is IND-CPA if (1) its underlying padding transform satisfies a “fooling” condition against small-range distinguishers on a class of high-entropy input distributions, and (2) its trapdoor permutation is sufficiently _lossy_ as defined by Peikert and Waters (STOC 2008). We then show that the first round of OAEP satisfies condition (1) if its hash function is $t$-wise independent for $t$ roughly proportional to the allowed message length. We clarify that this result requires the hash function to be keyed, and for its key to be included in the public-key of RSA-OAEP. We also show that RSA satisfies condition (2) under the $\Phi$-Hiding Assumption of Cachin _et al._ (Eurocrypt 1999).

This is the first _positive_ result about the instantiability of RSA-OAEP.
In particular, it increases confidence that chosen-plaintext attacks are unlikely to be found against the scheme. In contrast, RSA-OAEP's predecessor in PKCS \#1 v1.5 was shown to be vulnerable to such attacks by Coron _et
al_. (Eurocrypt 2000).
