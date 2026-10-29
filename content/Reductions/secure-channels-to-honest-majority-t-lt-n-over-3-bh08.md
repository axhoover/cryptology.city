---
type: reduction
status: draft
title: "Secure channels ⇒ MPC with honest majority ($t < n/3$) with linear communication (Beerliová-Trubíniová–Hirt)"
aliases: []
id: red-secure-channels-to-honest-majority-t-lt-n-over-3-bh08
kind: implication
hypotheses: [secure-channels]
conclusion: honest-majority-t-lt-n-over-3
class: free
model: standard
source:
  - "[[BH08 - Perfectly-Secure MPC with Linear Communication Complexity|BH08]]"
security-loss: "none (perfect security)"
rationale:
  class: "The theorem is unconditional and information-theoretic in the secure-channels model, so there is no hardness assumption for a black-box reduction to break."
---

# Secure channels ⇒ MPC with honest majority ($t < n/3$) with linear communication (Beerliová-Trubíniová–Hirt)

## Statement

Over [[interactive-protocol#secure-channels|secure point-to-point channels]], every $n$-party functionality has a protocol that is perfectly secure, with [[secure-multi-party-computation#honest-majority-t--n3|guaranteed output delivery]], against an active, adaptive adversary corrupting any $t < n/3$ of the parties, which is the optimal threshold, and that communicates $O(n)$ field elements per multiplication gate — [[BH08 - Perfectly-Secure MPC with Linear Communication Complexity|BH08]]. Security against adaptive corruption implies security against static corruption — standard.

## Notes

- Earlier perfectly secure protocols communicate $\Omega(n^3)$ field elements per multiplication, against $O(n)$ here — [[BH08 - Perfectly-Secure MPC with Linear Communication Complexity|BH08]].
- In total the protocol communicates $O(|C| n + D n^2 + n^3)$ field elements for a circuit of $|C|$ gates and multiplicative depth $D$, so the $O(n)$ cost per multiplication is amortized over the circuit; faults are handled by player elimination, which on a detected fault removes a set of parties containing a corrupted one and continues with the rest — [[BH08 - Perfectly-Secure MPC with Linear Communication Complexity|BH08]].
- The protocol is built from detectable protocols using hyper-invertible matrices, matrices whose every non-trivial square submatrix is invertible, which allow efficient correctness checks of many instances in parallel — [[BH08 - Perfectly-Secure MPC with Linear Communication Complexity|BH08]].
- With statistical security against adaptive active corruptions and $t < n/3$, the communication is $O(|C| n)k + O(D n^2)k + \poly(n\secpar)$ bits for a circuit of $|C|$ gates and multiplicative depth $D$ over a field of $k$-bit elements — [[DN07 - Scalable and Unconditionally Secure Multiparty Computation|DN07]].
- The full multiplication protocol of the first perfectly secure protocol for this threshold costs $O(n^6)$ field elements in the worst case ([Secure channels ⇒ MPC with honest majority ($t < n/3$) (BGW)](honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88)) — [[ALR11 - Perfectly-Secure Multiplication for Any t n3|ALR11]].
