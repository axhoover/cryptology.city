---
type: reduction
status: draft
title: "FAC ⇒ Factoring Blum integers"
aliases: []
id: red-fac-to-factoring-blum-integers
kind: implication
hypotheses: [fac]
conclusion: factoring-blum-integers
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor of about 4: a factoring instance is a Blum integer with probability 1/4 - o(1)"
rationale:
  class: "The reduction runs any Blum-integer factorer once as an oracle on its own instance and never uses its code."
---

# FAC ⇒ Factoring Blum integers

## Statement

If [[factoring|factoring]] $N = pq$ is hard for independent uniform $\secpar$-bit primes $p, q$, then [[factoring#factoring-with-known-factor-structure|factoring Blum integers]] ($p \equiv q \equiv 3 \pmod 4$) is hard: for every efficient $\calA$ that factors Blum integers with probability $\varepsilon$, running $\calA$ on a factoring instance factors it with probability at least $(1/4 - o(1))\,\varepsilon$ — folklore.

## Sketch

The Blum distribution is the factoring distribution conditioned on $p \equiv q \equiv 3 \pmod 4$. The $\secpar$-bit primes are equidistributed between the residue classes $1$ and $3$ modulo $4$ by the prime number theorem for arithmetic progressions, so the event has probability $1/4 - o(1)$, and on it $\calA$ sees a correctly distributed instance; success is checked by division — standard.

## Notes

- The converse does not follow in the average case: a factoring algorithm may succeed on a non-negligible fraction of all moduli and fail on every Blum integer — folklore.
