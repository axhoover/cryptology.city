---
type: reduction
status: draft
title: "DCR ⇒ FAC"
aliases: []
id: red-dcr-to-fac
kind: implication
hypotheses: [dcr]
conclusion: fac
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one factoring call, advantage factor $1 - 1/n$"
rationale:
  class: "The fixed reduction calls the factoring algorithm once as an oracle, on the challenge modulus, and never uses its code."
---

# DCR ⇒ FAC

## Statement

If [[decisional-composite-residuosity|DCR]] is hard, then [[factoring|factoring]] is hard for the same distribution of $n = pq$: a factoring algorithm yields, with one call, a DCR distinguisher whose advantage is $1 - 1/n$ times the factoring success probability — folklore.

## Sketch

Given a DCR challenge $(n, c)$, run the factoring algorithm on $n$. If it returns a prime factor $p$, set $q := n/p$ and output $0$ iff $c^{(p-1)(q-1)} \equiv 1 \pmod{n^2}$, which holds iff $c$ is an $n$-th residue; otherwise output a uniform bit. A uniform element of $\ZZ_{n^2}^*$ is an $n$-th residue with probability $1/n$, which gives the factor $1 - 1/n$.

## Notes

- Whether factoring hardness implies DCR hardness is open — folklore; [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]], which introduced DCR, proves no such implication.
