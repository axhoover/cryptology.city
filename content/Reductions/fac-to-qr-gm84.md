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
rationale:
  class: "The fixed reduction calls the factoring algorithm once as an oracle and never uses its code."
---

# QR ⇒ FAC

## Statement

If [[quadratic-residuosity|QR]] is hard for moduli $N = pq$ with $p \equiv q \equiv 3 \pmod 4$, then [[factoring#factoring-with-known-factor-structure|factoring]] such $N$ (Blum integers) is hard — folklore.

## Sketch

Given a QR challenge $(N, a)$, run the factoring algorithm on $N$; if it returns a prime factor $p'$, output $0$ iff $a^{(p'-1)/2} \equiv 1 \pmod{p'}$, and otherwise output a uniform bit. For $a \in \J_N$, $\left(\frac{a}{p}\right) = \left(\frac{a}{q}\right)$, so $a \in \QR_N$ iff $a$ is a square modulo $p'$, which Euler's criterion decides; the QR advantage therefore equals the factoring success probability.

## Notes

- The reduction preserves the modulus distribution: QR hardness for any distribution of $N = pq$ with $p, q$ distinct odd primes gives factoring hardness for the same distribution — folklore.
- Whether factoring hardness implies QR hardness is open — folklore.
