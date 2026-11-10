---
type: reference
status: stub
title: "Seu12"
source: https://eprint.iacr.org/2012/029
authors: Yannick Seurin
venue: EUROCRYPT 2012
published: 2012
aliases:
  - Seu12
cryptobib_key: EC:Seurin12
---

# [Seu12] On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model

**Authors:** Yannick Seurin | **Venue:** EUROCRYPT 2012 | [Source](https://eprint.iacr.org/2012/029)

## Abstract

The Schnorr signature scheme has been known to be provably secure in the Random Oracle Model under the Discrete Logarithm (DL) assumption since the work of Pointcheval and Stern (EUROCRYPT '96), at the price of a very loose reduction though: if there is a forger making at most $q_h$ random oracle queries, and forging signatures with probability $\varepsilon_F$, then the Forking Lemma tells that one can compute discrete logarithms with constant probability by rewinding the forger $\mathcal{O}(q_h/\varepsilon_F)$ times. In other words, the security reduction loses a factor $\mathcal{O}(q_h)$ in its time-to-success ratio. This is rather unsatisfactory since $q_h$ may be quite large. Yet Paillier and Vergnaud (ASIACRYPT 2005) later showed that under the One More Discrete Logarithm (OMDL) assumption, any _algebraic_ reduction must lose a factor at least $q_h^{1/2}$ in its time-to-success ratio. This was later improved by Garg _et al._ (CRYPTO 2008) to a factor $q_h^{2/3}$. Up to now, the gap between $q_h^{2/3}$ and $q_h$ remained open. In this paper, we show that the security proof using the Forking Lemma is essentially the best possible. Namely, under the OMDL assumption, any algebraic reduction must lose a factor $f(\varepsilon_F)q_h$ in its time-to-success ratio, where $f\le 1$ is a function that remains close to 1 as long as $\varepsilon_F$ is noticeably smaller than 1. Using a formulation in terms of expected-time and queries algorithms, we obtain an optimal loss factor $\Omega(q_h)$, independently of $\varepsilon_F$. These results apply to other signature schemes based on one-way group homomorphisms, such as the Guillou-Quisquater signature scheme.
