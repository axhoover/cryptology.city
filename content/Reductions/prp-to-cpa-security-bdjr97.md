---
type: reduction
status: draft
title: "PRP on bit strings ⇒ CPA-secure SKE (CBC)"
aliases:
  - CBC encryption
  - Cipher block chaining
id: red-prp-to-cpa-security-bdjr97
kind: implication
hypotheses: [bit-string-prp]
conclusion: cpa-security
class: fully-black-box
model: standard
source:
  - "[[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]]"
security-loss: "factor 2 in the PRP advantage, plus $(2q^2 - q)/2^n$ for $q$ encrypted blocks"
rationale:
  class: "CBC calls the permutation and its inverse only as oracles, and the reduction runs any CPA adversary as an oracle, answering its queries with its own permutation oracle."
---

# PRP on bit strings ⇒ CPA-secure SKE (CBC)

## Statement

A [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]] $\PRP = (\KeyGen, \Eval, \Invert)$ with domain $\bits^n$, where $n = n(\secpar) = \omega(\log \secpar)$, yields a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme by cipher block chaining with a uniform initialization vector (CBC). Its key generation is that of $\PRP$, its message space is $(\bits^n)^+$, and for $m = m_1 \cdots m_\ell$ with each $m_i \in \bits^n$,

$$
\Enc(k, m) := y_0 \| y_1 \| \cdots \| y_\ell, \qquad y_0 \getsr \bits^n, \quad y_i := \Eval(k, y_{i-1} \oplus m_i) \text{ for } 1 \le i \le \ell,
$$

$$
\Dec(k, y_0 \| y_1 \| \cdots \| y_\ell) := m_1 \cdots m_\ell, \qquad m_i := \Invert(k, y_i) \oplus y_{i-1}.
$$

Every CPA adversary that runs in time $t$ and whose queries encrypt $q$ blocks in total has advantage at most $2 \cdot \Adv^{\mathrm{prp}}_{\PRP}(t, q) + (2q^2 - q)/2^n$, where $\Adv^{\mathrm{prp}}_{\PRP}(t, q)$ is the largest advantage of a PRP distinguisher that runs in time $t$ and makes $q$ queries — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]], from the proof of Theorem 17 of the full version with Lemma 16 and Proposition 8. For $q = \poly(\secpar)$ the second term is negligible because $n = \omega(\log \secpar)$, so CBC is CPA-secure whenever $\PRP$ is pseudorandom. Correctness of $\PRP$ makes CBC perfectly correct, and $0^n$ and $1^n$ are two distinct messages of equal length — standard.

## Sketch

The proof first replaces $\Eval(k, \cdot)$ by a uniformly random function, losing twice the PRF advantage of $\PRP$, which exceeds its PRP advantage by at most $q^2 2^{-n-1}$ (Proposition 8). With a random function, the two worlds differ only on the event that two of the $q$ inputs $y_{i-1} \oplus m_i$ collide, which bounds the advantage by $(q^2 - q)/2^n$ (Lemma 16) — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].

## Notes

- The birthday term is tight: against CBC with a uniformly random permutation, $q \le 2^{n/2}$ one-block queries give advantage at least $0.316 \cdot (q^2 - q)/2^n$ (Proposition 15 of the full version) — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].
- $\Dec$ calls $\Invert$, so CBC needs a permutation, and BDJR97 analyse it under PRP rather than PRF security, unlike [[prf-to-ske|randomized counter mode]] — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].
- The initialization vector must be unpredictable: with a counter in its place, CBC is not CPA-secure ([[no-prp-to-cpa-security-bdjr97|No fixed-construction reduction from PRP on bit strings to CPA-secure SKE (CBC with a counter IV)]]) — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].
- $\Enc$ is randomized: CBC with a fixed initialization vector is deterministic and hence not CPA-secure ([[symmetric-key-encryption#cpa-security|SKE § CPA Security]]) — standard.
