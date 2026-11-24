---
type: reference
status: draft
title: "GK03"
source: https://eprint.iacr.org/2003/034
authors: Shafi Goldwasser, Yael Tauman Kalai
venue: FOCS 2003
published: 2003
aliases:
  - GK03
cryptobib_key: FOCS:GolKal03
---

# [GK03] On the (In)security of the Fiat-Shamir Paradigm

**Authors:** Shafi Goldwasser, Yael Tauman Kalai | **Venue:** FOCS 2003 | [Source](https://eprint.iacr.org/2003/034)

## Abstract

In 1986, Fiat and Shamir suggested a general method for transforming secure 3-round public-coin identification schemes into digital signature schemes. The significant contribution of this method is a means for designing efficient digital signatures, while hopefully achieving security against chosen message attacks. All other known constructions which achieve such security are substantially more inefficient and complicated in design.

In 1996, Pointcheval and Stern proved that the signature schemes obtained by the Fiat-Shamir transformation are secure in the so called ‘Random Oracle Model’. The question is: does the proof of the security of the Fiat-Shamir transformation in the Random Oracle Model, imply that the transformation yields secure signature schemes in the “real-world”?

In this paper we answer this question negatively. We show that there exist secure 3-round public-coin identification schemes for which the Fiat-Shamir methodology produces **insecure** digital signature schemes for **any** implementation of the ‘Random Oracle Model’ in the ‘real-world’ by a function ensemble.
