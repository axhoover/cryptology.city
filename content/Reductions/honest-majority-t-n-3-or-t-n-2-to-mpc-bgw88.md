---
type: reduction
status: draft
title: "Secure channels ⇒ MPC with honest majority ($t < n/3$) (BGW)"
aliases: []
id: red-honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88
kind: implication
hypotheses: [secure-channels]
conclusion: honest-majority-t-lt-n-over-3
class: free
model: standard
source:
  - "[[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]"
security-loss: "none (perfect security)"
rationale:
  class: "The theorem is unconditional and information-theoretic in the secure-channels model, so there is no hardness assumption for a black-box reduction to break."
---

# Secure channels ⇒ MPC with honest majority ($t < n/3$) (BGW)

## Statement

Over a synchronous complete network of [[interactive-protocol#secure-channels|secure point-to-point channels]], every $n$-party functionality has a protocol that is perfectly secure, with [[secure-multi-party-computation#honest-majority-t--n3|guaranteed output delivery]], against a malicious adversary corrupting any $t < n/3$ of the parties — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].

## Sketch

Each party Shamir-shares its input with a degree-$t$ polynomial; addition gates are local, and at a multiplication gate each party shares the product of its two shares and the parties take the Lagrange combination of these sub-sharings, a degree-$t$ sharing of the product. Against malicious parties every sharing is verifiable and every product sharing is checked, and opening a degree-$t$ sharing with $t$ corrupted shares is Reed–Solomon decoding, which needs $n \ge 3t + 1$.

## Notes

- Against a semi-honest adversary, perfect security holds for $t < n/2$ in the same model ([Secure channels ⇒ Semi-honest MPC with honest majority ($t < n/2$)](secure-channels-to-semi-honest-honest-majority-t-lt-n-over-2-bgw88)); both thresholds are optimal for perfect security — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].
- Unconditionally secure MPC for $t < n/3$ with exponentially small error was obtained concurrently and independently ([Chaum–Crépeau–Damgård](secure-channels-to-honest-majority-t-lt-n-over-3-ccd88)) — [[CCD88 - Multiparty Unconditionally Secure Protocols|CCD88]].
- The BGW protocol has a complete simulation-based proof, whose final version also derives security against adaptive corruptions and in the UC framework — [[AL17 - A Full Proof of the BGW Protocol for Perfectly Secure Multiparty Computation|AL17]].
- For $t < n/3$ a broadcast channel can be emulated over the point-to-point channels, so the theorem needs none — [[LSP82 - The Byzantine Generals Problem|LSP82]].
- Against a malicious adversary corrupting $t < n/2$ parties, statistical security is achievable given a broadcast channel — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]] ([Secure channels ⇒ MPC with honest majority ($t < n/2$)](honest-majority-t-lt-n-over-2-to-mpc-rb89)).
- Efficiency: additions are local. In the semi-honest protocol each multiplication gate needs a degree-reduction step in which every party sends one share to every other, $O(n^2)$ field elements, and the number of rounds grows with the multiplicative depth of the circuit — standard. Against malicious adversaries a multiplication also needs verifiable subsharing and checks that every party shared its correct local product; the full BGW multiplication protocol then costs $O(n^6)$ field elements over point-to-point channels and broadcast in the worst case — [[ALR11 - Perfectly-Secure Multiplication for Any t n3|ALR11]].
- Against adaptive active corruptions with $t < n/3$, statistical security is achievable with $O(|C| n)k + O(D n^2)k + \poly(n\secpar)$ bits of communication for a circuit of $|C|$ gates and multiplicative depth $D$ over a field of $k$-bit elements — [[DN07 - Scalable and Unconditionally Secure Multiparty Computation|DN07]]; perfect security with $O(n)$ field elements per multiplication, against $\Omega(n^3)$ for earlier perfectly secure protocols ([Beerliová-Trubíniová–Hirt](secure-channels-to-honest-majority-t-lt-n-over-3-bh08)) — [[BH08 - Perfectly-Secure MPC with Linear Communication Complexity|BH08]].
- For a general adversary structure, perfectly secure MPC against active adversaries exists if and only if no three corruptible sets cover all parties — [[HM97 - Complete Characterization of Adversaries Tolerable in Secure Multi-Party Computation|HM97]]. MPC can be based efficiently on any linear secret-sharing scheme whose access structure allows it, and for some adversary structures the resulting protocols are polynomial in $n$ where every earlier approach for non-threshold adversaries is provably super-polynomial ([Cramer–Damgård–Maurer](secure-channels-to-honest-majority-t-lt-n-over-3-cdm00)) — [[CDM00 - General Secure Multi-party Computation from any Linear Secret-Sharing Scheme|CDM00]].
