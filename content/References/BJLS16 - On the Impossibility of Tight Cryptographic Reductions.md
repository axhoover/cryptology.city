---
type: reference
status: stub
title: "BJLS16"
source: https://eprint.iacr.org/2015/374
authors: Christoph Bader, Tibor Jager, Yong Li, Sven Schäge
venue: EUROCRYPT 2016
published: 2016
aliases:
  - BJLS16
cryptobib_key: EC:BJLS16
---

# [BJLS16] On the Impossibility of Tight Cryptographic Reductions

**Authors:** Christoph Bader, Tibor Jager, Yong Li, Sven Schäge | **Venue:** EUROCRYPT 2016 | [Source](https://eprint.iacr.org/2015/374)

## Abstract

The existence of tight reductions in cryptographic security proofs is an important question, motivated by the theoretical search for cryptosystems whose security guarantees are truly independent of adversarial behavior and the practical necessity of concrete security bounds for the theoretically-sound selection of cryptographic parameters.
At Eurocrypt 2002, Coron described a meta-reduction technique that allows to prove the impossibility of tight reductions for certain digital signature schemes.
This seminal result has found many further interesting applications.
However, due to a technical subtlety in the argument, the applicability of this technique beyond digital signatures in the single-user setting has turned out to be rather limited.

We describe a new meta-reduction technique for proving such impossibility results, which improves on known ones in several ways.
First, it enables interesting novel applications. This includes a formal proof that for certain cryptographic primitives (including public-key encryption/key encapsulation mechanisms and digital signatures), the security loss incurred when the primitive is transferred from an idealized single-user setting to the more realistic multi-user setting is impossible to avoid, and a lower tightness bound for non-interactive key exchange protocols. Second, the technique allows to rule out tight reductions from a very general class of non-interactive complexity assumptions. Third, the provided bounds are quantitatively and qualitatively better, yet simpler, than the bounds derived from Coron's technique and its extensions.
