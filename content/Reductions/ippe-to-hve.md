---
type: reduction
status: draft
title: "IPPE ⇒ Selectively attribute-hiding HVE"
aliases: []
id: red-ippe-to-hve
kind: implication
hypotheses: [ippe]
conclusion: hve-selective-attribute-hiding
class: fully-black-box
model: standard
source:
  - "[[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]"
security-loss: "tight up to an additive $2q \\cdot \\mathbb{E}[1/p]$ for $q$ key queries: a non-matching key's encoded inner product vanishes on each challenge attribute with probability $1/p$"
rationale:
  class: "One fixed construction calls the IPPE algorithms once each on encoded vectors, and one fixed reduction runs any selective HVE adversary as an oracle, translating its queries through the encoding."
  security-loss: "The coefficients $r_i$ are sampled after the challenge attributes are fixed, so each non-matching key's encoded inner product is uniform in $\\ZZ_p$ on each of them."
---

# IPPE ⇒ Selectively attribute-hiding HVE

## Statement

For every polynomial $n = n(\secpar)$ and every family of alphabets $\Sigma_\secpar$ of polynomial size, an attribute-hiding [[inner-product-predicate-encryption|IPPE]] scheme of dimension $2n$ yields a [[hidden-vector-encryption#selective-attribute-hiding-security|selectively attribute-hiding]] [[hidden-vector-encryption|HVE]] scheme for patterns in $(\Sigma_\secpar \cup \{*\})^n$, with the same message space. Its setup runs the IPPE setup and embeds $\Sigma_\secpar$ injectively into $\ZZ_p$, which is possible except with negligible probability since $1/p$ is negligible. A pattern $v$ with wildcard set $S$ and an attribute $x$ are encoded as vectors whose inner product is $\sum_{i \notin S} r_i (x_i - v_i)$ for coefficients $r_i \getsr \ZZ_p$ sampled at key generation, which vanishes when $v$ matches $x$ and otherwise with probability $1/p$ — [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]. The HVE scheme is correct because a matching pattern's encoded inner product is exactly $0$ — standard.

## Sketch

Encode $x$ as $(x_1, 1, \ldots, x_n, 1)$ and $v$ as $(r_1, -r_1 v_1, \ldots, r_n, -r_n v_n)$ with $r_i = 0$ for $i \in S$ and $r_i \getsr \ZZ_p$ otherwise; $\Setup$, $\KeyGen$, $\Enc$, $\Dec$ of the HVE scheme call the IPPE algorithms once each on the encoded vectors. Given the selective challenge $(x_0, x_1)$, the reduction answers each key query with fresh $r_i$ and aborts if a non-matching pattern's encoded inner product vanishes on $x_0$ or $x_1$, which happens with probability at most $2/p$ per query; otherwise every query is admissible in the IPPE game, and the message condition carries over.

## Notes

- The conclusion is only selective. IPPE attribute-hiding constrains ciphertexts, not keys, so a scheme may reveal its key vectors (for instance, append them in the clear). An adversary that chooses its challenge attributes after seeing the $r_i$ may then pick a non-matching attribute whose encoded inner product vanishes; that challenge is admissible in the adaptive HVE game but not in the IPPE game. For an alphabet as large as $\ZZ_p$, one key for a pattern with two non-wildcard positions already yields such an attribute — folklore.
