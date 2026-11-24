---
type: reduction
status: draft
title: "Length-preserving PRF ⇒ arbitrary-length SUF-CMA MAC (ECBC)"
aliases: []
id: red-prf-to-arbitrary-length-suf-cma-mac-br05
kind: implication
hypotheses: [length-preserving-prf]
conclusion: arbitrary-length-suf-cma-mac
class: fully-black-box
model: standard
source:
  - "[[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]]"
security-loss: "additive $\\sigma^2/2^n$ for queries totaling $\\sigma$ blocks, plus the PRF advantages of three adversaries, one per key, the first making $\\sigma$ queries and the others $q$"
rationale:
  class: "ECBC calls the PRF only as an oracle under three keys, each hybrid reduction runs the distinguisher once as an oracle, and the random-function case is bounded information-theoretically."
---

# Length-preserving PRF ⇒ arbitrary-length SUF-CMA MAC (ECBC)

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]], with domain and range $\bits^n$ for a polynomially bounded $n = n(\secpar) = \omega(\log \secpar)$ computable from $1^\secpar$ in polynomial time, write $F_k := \Eval(k, \cdot)$, and let $\mathrm{CBC}_k(x_1 \cdots x_m) := y_m$, with $y_0 := 0^n$ and $y_i := F_k(y_{i-1} \oplus x_i)$, be its CBC-MAC on $(\bits^n)^+$. ECBC has three independent keys $k_1, k_2, k_3 \gets \KeyGen(1^\secpar)$, message space $\bits^*$, and

$$
\mathrm{ECBC}_{k_1,k_2,k_3}(M) := \begin{cases} F_{k_2}\big(\mathrm{CBC}_{k_1}(M)\big) & \text{if } M \in (\bits^n)^+, \\ F_{k_3}\big(\mathrm{CBC}_{k_1}(M \,\|\, 1 0^{j})\big) & \text{otherwise, with } j := n - 1 - (|M| \bmod n). \end{cases}
$$

A message $M$ occupies $\max\{\lceil |M|/n \rceil, 1\}$ blocks. With $F_{k_1}, F_{k_2}, F_{k_3}$ replaced by independent uniformly random functions on $\bits^n$, every adversary, of unbounded running time, whose queries total at most $\sigma$ blocks distinguishes ECBC from a uniformly random function $\bits^* \to \bits^n$ with advantage at most $\sigma^2/2^n$ — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]] (proof of Theorem 4). A hybrid over the three keys gives, for every efficient $\calA$ whose queries total at most $\sigma$ blocks, efficient $\calB_1, \calB_2, \calB_3$ with

$$
\Adv^{\mathrm{prf}}_{\mathrm{ECBC},\calA}(\secpar) \le \sum_{i=1}^{3} \Adv^{\mathrm{prf}}_{\PRF,\calB_i}(\secpar) + \frac{\sigma^2}{2^n},
$$

where $\calB_1$ makes at most $\sigma$ queries and $\calB_2, \calB_3$ at most as many as $\calA$, so ECBC is a PRF on $\bits^*$ against adversaries whose queries total polynomially many blocks — standard. By the argument of [[prf-to-mac|Length-preserving PRF ⇒ MAC]], which uses only that the range $\bits^n$ is superpolynomial, $\Tag((k_1, k_2, k_3), M) := \mathrm{ECBC}_{k_1,k_2,k_3}(M)$ with canonical verification is a perfectly correct UF-CMA-secure [[message-authentication-code|MAC]] on $\bits^*$; its $\Tag$ is deterministic, so it is SUF-CMA-secure ([[message-authentication-code#deterministic-macs|Deterministic MACs]]), hence an [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|arbitrary-length SUF-CMA MAC]] — standard.

## Sketch

Over random functions, ECBC applies one of two independent random functions, chosen by whether $M$ was padded, to the CBC-MAC of the padded message, and $10^j$ padding is injective on the messages it applies to, so the answers are independent and uniform until two queries in the same class collide under CBC-MAC. Two distinct messages of $m$ and $m'$ blocks collide under CBC-MAC over a random function with probability at most $mm'/2^n + \max\{m, m'\}/2^n$ (Lemma 3), and summing over pairs of queries gives $\sigma^2/2^n$ — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]]. In the hybrid, $\calB_i$ answers $\calA$'s queries with its oracle in position $i$, with lazily sampled random functions in the positions before $i$ and with $F$ under keys it samples in the positions after $i$ — standard.

## Notes

- With independent uniformly random permutations of $\bits^n$ in place of the three functions the bound is $2.5\sigma^2/2^n$, the [[switching-lemma|switching lemma]] adding at most $(0.5\sigma^2 + q^2)/2^n$ for $q \le \sigma$ queries — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]] (Theorem 4). By the same hybrid, ECBC under a [[pseudorandom-permutation#prps-on-bit-strings|PRP]] on $\bits^n$ is an arbitrary-length SUF-CMA MAC as well — standard.
- On $(\bits^n)^+$, ECBC is EMAC, $F_{k_2}(\mathrm{CBC}_{k_1}(M))$, so the same bound covers EMAC on messages of any positive number of blocks — standard. FCBC, which uses $F_{k_2}$ or $F_{k_3}$ in place of $F_{k_1}$ in the last CBC step and so saves one call, has the bound $2.5\sigma^2/2^n$ over random permutations — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]] (Theorem 5).
- The bounds for ECBC, FCBC and XCBC are tight up to constant factors: for $\sigma$ up to order $2^{n/2}$, an attack whose queries total $\sigma$ blocks forges with probability $\Omega(\sigma^2/2^n)$ — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]].
- Without the final application of $F_{k_2}$ or $F_{k_3}$, CBC-MAC on messages of varying length is forged after one query ([[no-prf-to-arbitrary-length-suf-cma-mac|No fixed-construction reduction from length-preserving PRF to arbitrary-length SUF-CMA MAC (plain CBC-MAC)]]) — folklore.
