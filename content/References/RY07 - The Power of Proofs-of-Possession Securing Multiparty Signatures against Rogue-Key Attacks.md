---
type: reference
status: stub
title: "RY07"
source: https://eprint.iacr.org/2007/264
authors: Thomas Ristenpart, Scott Yilek
venue: EUROCRYPT 2007
published: 2007
aliases:
  - RY07
cryptobib_key: EC:RisYil07
---

# [RY07] The Power of Proofs-of-Possession: Securing Multiparty Signatures against Rogue-Key Attacks

**Authors:** Thomas Ristenpart, Scott Yilek | **Venue:** EUROCRYPT 2007 | [Source](https://eprint.iacr.org/2007/264)

## Abstract

Multiparty signature protocols need protection against rogue-key attacks, made possible whenever an adversary can choose its public key(s) arbitrarily. For many schemes, provable security has only been established under the knowledge of secret key (KOSK) assumption where the adversary is required to reveal the secret keys it utilizes. In practice, certifying authorities rarely require the strong proofs of knowledge of secret keys required to substantiate the KOSK assumption. Instead, proofs of possession (POPs) are required and can be as simple as just a signature over the certificate request message. We propose a general registered key model, within which we can model both the KOSK assumption and in-use POP protocols. We show that simple POP protocols yield provable security of Boldyreva's multisignature scheme [11], the LOSSW multisignature scheme [28], and a 2-user ring signature scheme due to Bender, Katz, and Morselli [10]. Our results are the first to provide formal evidence that POPs can stop rogue-key attacks.
