---
type: reference
status: stub
title: "BKKV10"
source: https://eprint.iacr.org/2010/278
authors: Zvika Brakerski, Yael Tauman Kalai, Jonathan Katz, Vinod Vaikuntanathan
venue: FOCS 2010
published: 2010
aliases:
  - BKKV10
cryptobib_key: FOCS:BKKV10
---

# [BKKV10] Overcoming the Hole in the Bucket: Public-Key Cryptography Resilient to Continual Memory Leakage

**Authors:** Zvika Brakerski, Yael Tauman Kalai, Jonathan Katz, Vinod Vaikuntanathan | **Venue:** FOCS 2010 | [Source](https://eprint.iacr.org/2010/278)

## Abstract

In recent years, there has been a major effort to design cryptographic schemes
that remain secure even if part of the secret key is leaked. This is due to a
recent proliferation of side channel attacks which, through various physical
means, can recover part of the secret key. We explore the possibility of
achieving security even with continual leakage, i.e., even if some information
is leaked each time the key is used.

We show how to securely update a secret key while information is leaked: We
construct schemes that remain secure even if an attacker, _at each time
period_, can probe the entire memory (containing a secret key) and “leak” up
to a $(1-o(1))$ fraction of the secret key. The attacker may also probe the
memory during the updates, and leak $O(\log k)$ bits, where $k$ is the security
parameter (relying on subexponential hardness allows $k^\epsilon$ bits of
leakage during each update process). All of the above is achieved without
restricting the model as is done in previous works (e.g. by assuming that
“only computation leaks information” [Micali-Reyzin, TCC04]).

Specifically, under the decisional linear assumption on bilinear groups (which
allows for a leakage rate of $(1/2-o(1))$) or the symmetric external
Diffie-Hellman assumption (which allows for a leakage rate of $(1-o(1))$), we
achieve the above for public key encryption, identity-based encryption, and
signature schemes. Prior to this work, it was not known how to construct
public-key encryption schemes even in the more restricted model of [MR].

The main contributions of this work are (1) showing how to securely update a
secret key while information is leaked (in the more general model) and (2)
giving a public key encryption (and IBE) schemes that are resilient to
continual leakage.
