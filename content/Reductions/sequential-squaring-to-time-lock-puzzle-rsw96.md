---
type: reduction
status: draft
title: "Sequential squaring ⇒ TLP (RSW puzzle)"
aliases:
  - RSW puzzle
  - RSW time-lock puzzle
id: red-sequential-squaring-to-time-lock-puzzle-rsw96
kind: implication
hypotheses: [sequential-squaring]
conclusion: time-lock-puzzle
class: unstated
model: standard
heuristic: true
source:
  - "[[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]]"
security-loss: ""
rationale:
  heuristic: "RSW96 conjecture that solving the puzzle requires t sequential squarings and give neither a security definition against parallel adversaries nor a reduction."
---

# Sequential squaring ⇒ TLP (RSW puzzle)

## Statement

[[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]] give the first candidate [[time-lock-puzzle|time-lock puzzle]]. To lock a message $M$ for $T$ squarings, the generator picks an RSA modulus $N = pq$ and a random $x$ modulo $N$, encrypts $M$ under a random key $K$ of a symmetric cipher, and publishes $(N, x, T)$, the ciphertext and $C_K = K + x^{2^T} \bmod N$. Knowing $\phi(N)$, the generator computes $x^{2^T} = x^{2^T \bmod \phi(N)} \bmod N$ in time $\poly(\secpar, \log T)$; a solver without the factorization recovers $K$ by $T$ sequential squarings. RSW96 conjecture that the squarings cannot be parallelized, which is the [[sequential-squaring|sequential squaring]] assumption, and give no reduction from it.

## Notes

- The puzzle relies on the hardness of factoring as well as on the sequentiality of squaring, and is therefore vulnerable to advances in factoring and to quantum attacks — [[MMV11 - Time-Lock Puzzles in the Random Oracle Model|MMV11]]; see [[sequential-squaring-to-fac-rsw96|Sequential squaring ⇒ FAC]].
- Time-lock puzzles with gap $\varepsilon$ against polynomial-size adversaries of depth below $T^\varepsilon$ are defined by [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]], who construct them from [[randomized-encoding#succinct-randomized-encodings|succinct randomized encodings]] and a non-parallelizing language rather than from squaring.
