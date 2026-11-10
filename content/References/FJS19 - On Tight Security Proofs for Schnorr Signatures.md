---
type: reference
status: stub
title: "FJS19"
source: https://eprint.iacr.org/2013/418
authors: Nils Fleischhacker, Tibor Jager, Dominique Schröder
venue: Journal of Cryptology
published: 2019
aliases:
  - FJS19
cryptobib_key: JC:FleJagSch19
---

# [FJS19] On Tight Security Proofs for Schnorr Signatures

**Authors:** Nils Fleischhacker, Tibor Jager, Dominique Schröder | **Venue:** Journal of Cryptology | [Source](https://eprint.iacr.org/2013/418)

## Abstract

The Schnorr signature scheme is the most efficient signature scheme based on the discrete logarithm problem and a long line of research investigates the existence of a tight security reduction for this scheme in the random oracle model. Almost all recent works present lower tightness bounds and most recently Seurin (Eurocrypt 2012) showed that under certain assumptions the non-tight security proof for Schnorr signatures in the random oracle by Pointcheval and Stern (Eurocrypt 1996) is essentially optimal. All previous works in this direction rule out tight reductions from the (one-more) discrete logarithm problem.

In this paper we introduce a new meta-reduction technique, which shows lower bounds for the large and very natural class of generic reductions. A generic reduction is independent of a particular representation of group elements. Most reductions in state-of-the-art security proofs have this property. It is desirable, because then the reduction applies generically to any concrete instantiation of the group. Our approach shows unconditionally that there is no tight generic reduction from any natural non-interactive computational problem $\Pi$ defined over algebraic groups to breaking Schnorr signatures, unless solving $\Pi$ is easy.

In an additional application of the new meta-reduction technique, we also unconditionally rule out any (even non-tight) generic reduction from natural non-interactive computational problems defined over algebraic groups to breaking Schnorr signatures in the non-programmable random oracle model.
