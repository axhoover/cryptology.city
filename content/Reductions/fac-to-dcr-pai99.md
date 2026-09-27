---
type: reduction
status: draft
title: "DCR ⇒ FAC"
aliases: []
id: red-fac-to-dcr-pai99
kind: implication
hypotheses: [dcr]
conclusion: fac
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one factoring call; the DCR advantage is $(1 - 1/n)$ times the factoring success probability"
---

# DCR ⇒ FAC

[[decisional-composite-residuosity|DCR]] implies [[factoring|FAC]].

## Statement

If [[decisional-composite-residuosity|DCR]] is hard, then [[factoring|factoring]] is hard for the same distribution of $n = pq$. Given $p$ and $q$, an element $z \in \ZZ_{n^2}^*$ is an $n$-th residue iff $z^{\varphi(n)} \equiv 1 \pmod{n^2}$, so a factoring algorithm yields a DCR distinguisher — folklore. Whether factoring hardness implies DCR hardness is open.

## Sketch

Given a DCR challenge $(n, c)$, run the factoring algorithm on $n$. If it returns a prime factor $p$ of $n$, set $q := n/p$ and output $0$ iff $c^{(p-1)(q-1)} \equiv 1 \pmod{n^2}$; otherwise output a uniform bit. A uniform element of $\ZZ_{n^2}^*$ is an $n$-th residue with probability $1/n$, so the distinguisher's advantage is $(1 - 1/n)$ times the factoring success probability.

## Notes

`class: fully-black-box`: the fixed reduction calls the factoring algorithm once as an oracle and never uses its code.

- Sourcing pass (2026-09): this page previously recorded the inverted edge FAC ⇒ DCR credited to [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]], migrated from [[decisional-composite-residuosity]] and [[factoring]] § Known Results. Pai99 prove no such implication.
