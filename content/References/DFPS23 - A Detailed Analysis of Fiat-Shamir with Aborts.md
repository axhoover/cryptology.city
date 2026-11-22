---
type: reference
status: draft
title: "DFPS23"
source: https://eprint.iacr.org/2023/245
authors: Julien Devevey, Pouria Fallahpour, Alain Passelègue, Damien Stehlé
venue: CRYPTO 2023
published: 2023
aliases:
  - DFPS23
cryptobib_key: C:DFPS23
---

# [DFPS23] A Detailed Analysis of Fiat-Shamir with Aborts

**Authors:** Julien Devevey, Pouria Fallahpour, Alain Passelègue, Damien Stehlé | **Venue:** CRYPTO 2023 | [Source](https://eprint.iacr.org/2023/245)

## Abstract

Lyubashevky's signatures are based on the Fiat-Shamir with Aborts paradigm. It transforms an interactive identification protocol that has a non-negligible probability of aborting into a signature by repeating executions until a loop iteration does not trigger an abort. Interaction is removed by replacing the challenge of the verifier by the evaluation of a hash function, modeled as a random oracle in the analysis. The access to the random oracle is classical (ROM), resp. quantum (QROM), if one is interested in security against classical, resp. quantum, adversaries. Most analyses in the literature consider a setting with a bounded number of aborts (i.e., signing fails if no signature is output within a prescribed number of loop iterations), while practical instantiations (e.g., Dilithium) run until a signature is output (i.e., loop iterations are unbounded).

In this work, we emphasize that combining random oracles with loop iterations induces numerous technicalities for analyzing correctness, run-time, and security of the resulting schemes, both in the bounded and unbounded case. As a first contribution, we put light on errors in all existing analyses. We then provide two detailed analyses in the QROM for the bounded case, adapted from Kiltz, Lyubashevsky, and Shaffner [EUROCRYPT'18] and from Grilo, Hövelmanns, Hülsing, and Majenz [ASIACRYPT'21]. In the process, we prove the underlying $\Sigma$-protocol to achieve a stronger zero-knowledge property than usually considered for $\Sigma$-protocols with aborts, which enables a corrected analysis. A further contribution is a detailed analysis in the case of unbounded aborts, the latter inducing several additional subtleties.

# Notes

The ePrint version is a major revision of the CRYPTO 2023 paper and lists Keita Xagawa as a fifth author; the abstract above is the ePrint version's.
