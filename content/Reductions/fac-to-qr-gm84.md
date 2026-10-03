---
type: reduction
status: draft
title: "QR ⇒ FAC"
aliases: []
id: red-qr-to-factoring-blum-integers
kind: implication
hypotheses: [qr]
conclusion: factoring-blum-integers
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one factoring call; the QR advantage equals the factoring success probability"
---

# QR ⇒ FAC

[[quadratic-residuosity|QR]] implies [[factoring#factoring-with-known-factor-structure|factoring Blum integers]].

## Statement

If [[quadratic-residuosity|QR]] is hard for moduli $N = pq$ with $p \equiv q \equiv 3 \pmod 4$, then factoring such $N$ is hard. For $a \in \J_N$, $\left(\frac{a}{p}\right) = \left(\frac{a}{q}\right)$, and $a \in \QR_N$ iff $\left(\frac{a}{p}\right) = 1$, which is computable from $p$ — folklore. Whether factoring hardness implies QR hardness is open.

## Sketch

Given a QR challenge $(N, a)$, run the factoring algorithm on $N$. If it returns a prime factor $p'$ of $N$, output $0$ iff $a^{(p'-1)/2} \equiv 1 \pmod{p'}$ (Euler's criterion); otherwise output a uniform bit. When factoring succeeds the answer is always correct, so the QR advantage equals the factoring success probability.

## Notes

`class: fully-black-box`: the fixed reduction calls the factoring algorithm once as an oracle and never uses its code.

- The conclusion is the Blum-integer variant because the reduction preserves the modulus distribution and the QR game samples $p \equiv q \equiv 3 \pmod 4$. If that game is generalized to arbitrary primes, change the conclusion to `fac`.
- Sourcing pass (2026-09): this page previously recorded the inverted edge FAC ⇒ QR credited to [[GM84 - Probabilistic encryption|GM84]], migrated from [[factoring]] and [[quadratic-residuosity]] § Known Results. GM84 make no such claim. The slug keeps the old direction because filenames are live URLs.
