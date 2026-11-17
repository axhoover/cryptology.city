---
type: reduction
status: draft
title: "IPPE ⇒ HVE"
aliases: []
id: red-ippe-to-hve
kind: implication
hypotheses: [ippe]
conclusion: hve-selective-attribute-hiding
class: fully-black-box
model: standard
source:
  - "[[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]"
security-loss: "tight up to an additive $2q/p$ in winning probability for $q$ key queries: a non-matching key's encoded inner product vanishes on each challenge attribute with probability $1/p$"
rationale:
  class: "One fixed construction calls the IPPE algorithms once each on encoded vectors, and one fixed reduction runs any selective HVE adversary as an oracle, translating its queries through the encoding."
  security-loss: "The coefficients $r_i$ are sampled after the challenge attributes are fixed, so each non-matching key's encoded inner product is uniform in $\\ZZ_p$ on each of them."
---

# IPPE ⇒ HVE

## Statement

Let an [[inner-product-predicate-encryption|IPPE]] scheme be $(1-\negl(\secpar))$-correct with $|\calM| \ge 2$ and attribute-hiding for every prime $p \ge 2^\secpar$ of $\poly(\secpar)$ bits and every dimension $2n$ with $n \le \poly(\secpar)$. It yields an [[hidden-vector-encryption|HVE]] scheme for patterns in $(\Sigma \cup \{*\})^n$, for every alphabet $\Sigma$ with $2 \le |\Sigma| \le \poly(\secpar)$: the HVE $\Setup$ picks a prime $p \ge \max(|\Sigma|, 2^\secpar)$ and embeds $\Sigma \subseteq \ZZ_p$, and a pattern $v$ with wildcard set $S$ and an attribute $x$ are encoded as vectors whose inner product is $\sum_{i \notin S} r_i (x_i - v_i)$ for uniformly random coefficients $r_i$, which vanishes when $v$ matches $x$ and otherwise with probability $1/p$. The HVE scheme has the IPPE scheme's correctness and message space, since matching patterns give inner product $0$ — standard — and it is [[hidden-vector-encryption#selective-attribute-hiding-security|selectively attribute-hiding]]: for every efficient selective HVE adversary making $q$ key queries there is an efficient IPPE adversary whose winning probability is within $2q/p$ of the HVE adversary's — [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]].

## Sketch

Encode $x$ as $(x_1, 1, \ldots, x_n, 1)$ and $v$ as $(r_1, -r_1 v_1, \ldots, r_n, -r_n v_n)$ with $r_i = 0$ for $i \in S$ and $r_i \getsr \ZZ_p$ otherwise, sampled at key generation; $\Setup$, $\KeyGen$, $\Enc$, $\Dec$ of the HVE scheme call the IPPE algorithms once each on the encoded vectors. The reduction learns $x_0, x_1$ before it samples any $r_i$, and resamples the coefficients of a key whose encoded inner product vanishes on a non-matching challenge attribute, so each of its IPPE queries is admissible; a resampled key differs in distribution from a real one by at most $2/p$.

## Notes

- IPPE attribute-hiding constrains ciphertexts, not keys, so a scheme may reveal its key vectors (for instance, append them in the clear). An adaptive HVE adversary can then read off the $r_i$ and choose a non-matching challenge attribute with zero encoded inner product, trivially when $\Sigma = \ZZ_p$; such a challenge is admissible in the [[hidden-vector-encryption#attribute-hiding-security|adaptive attribute-hiding]] HVE game but not in the IPPE game. The transfer to adaptive HVE security therefore needs an extra hypothesis, such as hidden encoded key vectors — folklore.
