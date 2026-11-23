---
type: reduction
status: draft
title: "PRP on bit strings ⇒ arbitrary-length SUF-CMA MAC (XCBC)"
aliases: []
id: red-prp-to-arbitrary-length-suf-cma-mac-br05
kind: implication
hypotheses: [bit-string-prp]
conclusion: arbitrary-length-suf-cma-mac
class: fully-black-box
model: standard
source:
  - "[[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]]"
security-loss: "additive $3.75\\sigma^2/2^n$ for queries totaling $\\sigma$ blocks, plus the PRP advantage of an adversary making $\\sigma$ queries in time $t + O(n\\sigma)$ (Corollary 8)"
rationale:
  class: "XCBC calls the block cipher only in the forward direction and only as an oracle, and the reduction samples the two XOR keys itself and runs the distinguisher once as an oracle."
---

# PRP on bit strings ⇒ arbitrary-length SUF-CMA MAC (XCBC)

## Statement

Let $\PRP = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]] with domain $\bits^n$, $n = n(\secpar) = \omega(\log \secpar)$, and write $E_k := \Eval(k, \cdot)$. XCBC has key $(k_1, k_2, k_3)$ with $k_1 \gets \KeyGen(1^\secpar)$ and $k_2, k_3 \getsr \bits^n$, and message space $\bits^*$. For $M \in (\bits^n)^+$ let $P := M$ and $K := k_2$; otherwise let $P := M \,\|\, 1 0^{j}$ with $j := n - 1 - (|M| \bmod n)$, and $K := k_3$. Writing $P = P_1 \cdots P_m$ with $|P_i| = n$,

$$
\mathrm{XCBC}_{k_1,k_2,k_3}(M) := E_{k_1}(P_m \oplus C_{m-1} \oplus K), \qquad C_0 := 0^n, \quad C_i := E_{k_1}(P_i \oplus C_{i-1}) \text{ for } 1 \le i < m.
$$

A message $M$ occupies $\max\{\lceil |M|/n \rceil, 1\}$ blocks. For every adversary $\calA$ running in time $t$ whose queries total at most $\sigma$ blocks there is an adversary $\calB$ running in time $t + O(n\sigma)$ and making $\sigma$ queries with

$$
\Adv^{\mathrm{prf}}_{\mathrm{XCBC},\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{\PRP,\calB}(\secpar) + \frac{3.75\,\sigma^2}{2^n},
$$

where the PRF advantage is against a uniformly random function $\bits^* \to \bits^n$ — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]] (Corollary 8). So XCBC is a PRF on $\bits^*$ against adversaries whose queries total polynomially many blocks, and by the argument of [[prf-to-mac|Length-preserving PRF ⇒ MAC]], which uses only that the range $\bits^n$ is superpolynomial, $\Tag((k_1, k_2, k_3), M) := \mathrm{XCBC}_{k_1,k_2,k_3}(M)$ with canonical verification is a perfectly correct UF-CMA-secure [[message-authentication-code|MAC]] on $\bits^*$; its $\Tag$ is deterministic, so it is SUF-CMA-secure ([[message-authentication-code#deterministic-macs|Deterministic MACs]]), hence an [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|arbitrary-length SUF-CMA MAC]] — standard.

## Sketch

$\calB$ samples $k_2, k_3$ and answers each query of $\calA$ by computing XCBC with its own oracle in place of $E_{k_1}$, one oracle call per block, so its PRP advantage is the distance between XCBC under $E_{k_1}$ and under a uniformly random permutation $\pi$ (Corollary 8). Over $\pi$, XCBC is FCBC, the variant of [[prf-to-arbitrary-length-suf-cma-mac-br05|ECBC]] whose last CBC step applies the second or third function, under $\pi$, $\pi(k_2 \oplus \cdot)$ and $\pi(k_3 \oplus \cdot)$. FCBC under three independent random permutations has advantage at most $2.5\sigma^2/2^n$ (Theorem 5), and for a uniform $k \in \bits^n$ the pair $\pi(\cdot), \pi(k \oplus \cdot)$ is within $1.25p^2/2^n$ of a pair of independent random permutations against $p$ queries to the two oracles in total (Lemma 6); Theorem 7 combines the two, one application of Lemma 6 for $k_2$ and one for $k_3$ — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]].

## Notes

- The passage from the PRP to a random permutation needs no switching lemma, since the information-theoretic bound is over a random permutation; the ECBC analysis it builds on passes from random functions to random permutations by the [[switching-lemma|switching lemma]] — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]].
- XORing $k_2$ after the final encipherment instead of before it is insecure. For $M \in (\bits^n)^+$ with $T(M) := \mathrm{CBC}_{k_1}(M) \oplus k_2$, where $\mathrm{CBC}_{k_1}$ is CBC-MAC under $E_{k_1}$ with initial value $0^n$, the tags $T_0 = E_{k_1}(0^n) \oplus k_2$ of $0^n$, $T_1 = E_{k_1}(1^n) \oplus k_2$ of $1^n$ and $T_2 = E_{k_1}(E_{k_1}(1^n)) \oplus k_2$ of $1^n \,\|\, 0^n$ give $T(0^n \,\|\, (T_0 \oplus T_1)) = E_{k_1}(E_{k_1}(0^n) \oplus T_0 \oplus T_1) \oplus k_2 = T_2$ on an unqueried message — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]].
- OMAC needs only the block-cipher key, where XCBC needs $k_2$ and $k_3$ as well, and is proved secure for messages of arbitrary length — [[IK03 - OMAC One-Key CBC MAC|IK03]].
