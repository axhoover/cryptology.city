---
type: reduction
status: draft
title: "Secure channels ⇒ Semi-honest MPC with honest majority ($t < n/2$) (BGW)"
aliases: []
id: red-secure-channels-to-semi-honest-honest-majority-t-lt-n-over-2-bgw88
kind: implication
hypotheses: [secure-channels]
conclusion: semi-honest-honest-majority-t-lt-n-over-2
class: free
model: standard
source:
  - "[[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]"
security-loss: "none (perfect security)"
rationale:
  class: "The theorem is unconditional and information-theoretic in the secure-channels model, so there is no hardness assumption for a black-box reduction to break."
---

# Secure channels ⇒ Semi-honest MPC with honest majority ($t < n/2$) (BGW)

## Statement

Over a synchronous network of [[interactive-protocol#secure-channels|secure point-to-point channels]], with no broadcast channel and no setup, every $n$-party functionality has a protocol that is perfectly secure against a semi-honest adversary corrupting any $t < n/2$ of the parties ([semi-honest security with an honest majority](secure-multi-party-computation#semi-honest-honest-majority-t--n2)) — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]. No hardness assumption is used.

## Sketch

Each party [[secret-sharing#shamir-secret-sharing|Shamir-shares]] its input with a random polynomial of degree $t$, and addition gates are local. At a multiplication gate each party re-shares the product of its two shares, a point on a polynomial of degree $2t$, with a fresh polynomial of degree $t$, and each party takes the fixed Lagrange combination of the $n$ sub-shares it received, a degree-$t$ sharing of the product because $n \ge 2t + 1$ points determine a polynomial of degree $2t$. Any $t$ shares of a degree-$t$ sharing are uniform, so the corrupted parties' view is simulated from their inputs and outputs — standard.

## Notes

- Additions are free; each multiplication gate costs one round in which every party sends one share to every other party, $n(n-1)$ field elements, so the number of rounds grows with the multiplicative depth of the circuit — standard.
- For passive security and $t < n/2$ the communication can be cut to $O(n|C|)k$ bits for a circuit of $|C|$ gates over a field of $k$-bit elements, $O(n)$ field elements per gate against $O(n^2)$ for this protocol — [[DN07 - Scalable and Unconditionally Secure Multiparty Computation|DN07]].
- For three parties, one semi-honest corruption and Boolean circuits, each party sends a single bit per AND gate and nothing for XOR gates — [[AFL+16 - High-Throughput Semi-Honest Secure Three-Party Computation with an Honest Majority|AFL+16]].
- The threshold $t < n/2$ is optimal for perfect security — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]. A Boolean function is either $n$-private, or $\lfloor (n-1)/2 \rfloor$-private and not $\lceil n/2 \rceil$-private, and the $n$-private ones are exactly those of the form $f_1(x_1) \oplus \cdots \oplus f_n(x_n)$ — [[CK89 - A Zero-One Law for Boolean Privacy|CK89]]. The two-argument functions computable with perfect privacy are characterized combinatorially — [[Kus89 - Privacy and Communication Complexity|Kus89]].
- The protocol has a complete simulation-based proof — [[AL17 - A Full Proof of the BGW Protocol for Perfectly Secure Multiparty Computation|AL17]].
- Against a malicious adversary the same model gives perfect security with guaranteed output delivery for $t < n/3$ ([Secure channels ⇒ MPC with honest majority ($t < n/3$)](honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88)) — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].
