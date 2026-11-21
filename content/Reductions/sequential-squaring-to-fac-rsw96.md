---
type: reduction
status: draft
title: "Sequential squaring ⇒ FAC"
aliases: []
id: red-sequential-squaring-to-fac-rsw96
kind: implication
hypotheses: [sequential-squaring]
conclusion: fac
class: fully-black-box
model: standard
source:
  - "[[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]]"
security-loss: "tight: one factoring call; the squaring adversary succeeds whenever the factoring algorithm does"
rationale:
  class: "The fixed reduction calls the factoring algorithm once as an oracle and never uses its code."
---

# Sequential squaring ⇒ FAC

## Statement

If [[sequential-squaring|sequential squaring]] holds for $\GrGen$ with some gap $\varepsilon \in (0, 1)$, then [[factoring|factoring]] the moduli $N$ that $\GrGen$ outputs is hard, since the factors of $N$ give $\phi(N)$ and with it $x^{2^T} \bmod N$ in time $\poly(\secpar, \log T)$ — [[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]].

## Sketch

Given $(N, T, x)$, run the factoring algorithm on $N$; on a factor $p$, set $q = N/p$, compute $e := 2^T \bmod (p-1)(q-1)$ with $O(\log T)$ multiplications, and output $x^e \bmod N$, which equals $x^{2^T}$ because $x^{\phi(N)} = 1$. The factoring algorithm has polynomial size, hence depth at most some polynomial $d(\secpar)$, and the rest has depth $\poly(\secpar, \log T)$; for every polynomial $T$ with $T^\varepsilon$ above this total, the adversary has depth at most $T^\varepsilon$ and succeeds whenever factoring does.

## Notes

- The converse holds for generic-ring algorithms ([[fac-to-sequential-squaring-rs20|FAC ⇒ Sequential squaring (generic ring model)]]) — [[RS20b - Generically Speeding-Up Repeated Squaring Is Equivalent to Factoring Sharp Thresholds for All Generic-Ring Delay Functions|RS20b]].
