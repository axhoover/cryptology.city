---
type: reduction
status: draft
title: SIS ∈ PWPP
aliases: []
id: red-sis-to-pwpp-szz18
kind: inclusion
hypotheses: [sis]
conclusion: pwpp
class: free
model: standard
source:
  - "[[SZZ18 - PPP-Completeness with Connections to Cryptography|SZZ18]]"
security-loss: "none: one Karp reduction to Weak Pigeon, and a collision maps to a solution by subtraction"
---

# SIS ∈ PWPP

## Statement

For $m \ge n \log q + 1$ and $\sqrt{m} \le \beta < q$, worst-case [[shortest-integer-solution|SIS]] for $(n, m, q, \beta)$ lies in [[total-function-np#pwpp|PWPP]] — standard. [[SZZ18 - PPP-Completeness with Connections to Cryptography|SZZ18]] prove more: weak constrained SIS, a binary collision problem whose unconstrained case is the collision form of SIS, is PWPP-complete, and constrained SIS is [[total-function-np#ppp|PPP]]-complete.

## Sketch

Map $\mathbf{A} \in \ZZ_q^{n \times m}$ to the circuit $\bits^m \to \bits^{m-1}$ that sends $\mathbf{x}$ to $\mathbf{A}\mathbf{x} \bmod q$, encoded in $\lceil n \log q \rceil \le m - 1$ bits and padded. A collision $\mathbf{x} \ne \mathbf{x}'$ gives $\mathbf{z} = \mathbf{x} - \mathbf{x}' \in \{-1, 0, 1\}^m \setminus \{\mathbf{0}\}$ with $\mathbf{A}\mathbf{z} \equiv \mathbf{0} \pmod q$ and $\|\mathbf{z}\| \le \sqrt{m} \le \beta$.

## Notes

- For $n \log q < m < n \log q + 1$ the map need not save a bit, but SIS still lies in PPP: shifted by one, the index of $\mathbf{A}\mathbf{x}$ in $\ZZ_q^n$ is a nonzero element of $\bits^m$ because $q^n < 2^m$, so every solution of the resulting Pigeon instance is a collision — standard. When $m - n \log q \ge 1/\poly(n)$, the $k$-fold map $(\mathbf{x}_1, \ldots, \mathbf{x}_k) \mapsto (\mathbf{A}\mathbf{x}_1, \ldots, \mathbf{A}\mathbf{x}_k)$ with $k = \lceil 1/(m - n \log q) \rceil$ saves a bit, and a collision in it is a collision in some coordinate, so SIS lies in PWPP there too — folklore.
- Membership does not make SIS PWPP-hard; completeness holds for the constrained variants — [[SZZ18 - PPP-Completeness with Connections to Cryptography|SZZ18]].
