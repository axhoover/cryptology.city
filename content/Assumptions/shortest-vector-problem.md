---
type: assumption
status: stub
aliases:
  - GapSVP
  - Shortest Vector Problem
  - SVP
title: Shortest Vector Problem
id: gapsvp
variants:
  gapsvp-sqrt-n: "#factor-square-root-of-n"
  gapsvp-sqrt-n-over-log-n: "#factor-square-root-of-n-over-log-n"
  gapsvp-poly-factor: "#polynomial-factors"
---

# Shortest Vector Problem

The promise problem of deciding, given a lattice basis and a parameter $d$, whether the lattice's shortest nonzero vector is shorter than $d$ or longer than $\gamma \cdot d$, for an approximation factor $\gamma$.

TODO: syntax and security definition.

# Variations

A larger approximation factor makes the promise problem easier, so a containment proved for $\mathrm{GapSVP}_\gamma$ holds for every $\gamma' \ge \gamma$ — standard.

## Factor square root of n

$\mathrm{GapSVP}_\gamma$ for $\gamma(n) \ge c\sqrt{n}$, where $c$ is the suitable absolute constant for which $\mathrm{GapSVP}_{c\sqrt n}$ lies in $\classcoNP$ — [[AR04 - Lattice Problems in NP intersect coNP|AR04]]. The theorem does not give $c = 1$.

## Factor square root of n over log n

$\mathrm{GapSVP}_\gamma$ for $\gamma(n) \ge c\sqrt{n / \log n}$ for some constant $c > 0$, the regime in which it lies in $\classcoAM$ — [[GG00 - On the limits of non-approximability of lattice problems|GG00]].

## Polynomial factors

GapSVP is **hard for polynomial factors** if for every constant $c > 0$ no probabilistic polynomial-time classical algorithm solves $\mathrm{GapSVP}_{n^c}$ in the worst case: for every such algorithm and all sufficiently large $n$ there are a basis of an $n$-dimensional lattice $L$ and $d > 0$ with $\lambda_1(L) \le d$ or $\lambda_1(L) > n^c d$ on which it answers wrongly with probability above $1/3$. Worst-case hardness of approximating GapSVP to within small polynomial factors is the hypothesis of the classical reductions to [[learning-with-errors|LWE]] — [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]], [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]].

<!-- BEGIN GENERATED participates-in 68ff8a834bd8 -->

## Participates in

**Builds on Shortest Vector Problem**

- [[gapsvp-poly-factor-to-gapsvp|GapSVP for polynomial factors ⇒ GapSVP]] (via [[shortest-vector-problem#polynomial-factors|Polynomial factors]])
- [[gapsvp-poly-factor-to-lwe-blprs13|Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)]] (via [[shortest-vector-problem#polynomial-factors|Polynomial factors]])
- [[gapsvp-poly-factor-to-lwe-pei09|Polynomial-factor GapSVP ⇒ LWE (exponential modulus)]] (via [[shortest-vector-problem#polynomial-factors|Polynomial factors]])
- [[gapsvp-to-coam-gg00|GapSVP ∈ coAM for γ ≥ √(n/log n)]] (via [[shortest-vector-problem#factor-square-root-of-n-over-log-n|Factor square root of n over log n]])
- [[gapsvp-to-conp-ar04|GapSVP ∈ coNP for γ ≥ c√n]] (via [[shortest-vector-problem#factor-square-root-of-n|Factor square root of n]])
- [[gapsvp-to-lwe-reg05|GapSVP ⇒ LWE]]
- [[gapsvp-to-np|GapSVP ∈ NP]]
- [[gapsvp-to-sis-ajt96|GapSVP ⇒ SIS]]
- [[gapsvp-to-szk-mv03|GapSVP ∈ SZK for γ ≥ √(n/log n)]] (via [[shortest-vector-problem#factor-square-root-of-n-over-log-n|Factor square root of n over log n]])

**Produces Shortest Vector Problem**

- [[gapsvp-poly-factor-to-gapsvp|GapSVP for polynomial factors ⇒ GapSVP]]

**Barriers**

- [[no-np-to-gapsvp-ar04|No Karp reduction from NP to GapSVP for γ ≥ c√n unless NP = coNP]] (via [[shortest-vector-problem#factor-square-root-of-n|Factor square root of n]])
- [[no-np-to-gapsvp-gg00|No Karp reduction from NP to GapSVP for γ ≥ √(n/log n) unless coNP ⊆ AM]] (via [[shortest-vector-problem#factor-square-root-of-n-over-log-n|Factor square root of n over log n]])

<!-- END GENERATED participates-in -->
