---
type: reduction
status: draft
title: "OWF ⇒ PIR with client preprocessing (Piano)"
aliases: []
id: red-owf-to-client-preprocessing-pir-zpzs24
kind: implication
hypotheses: [owf]
conclusion: client-preprocessing-pir
class: unstated
model: standard
source:
  - "[[ZPZS24 - Piano Extremely Simple, Single-Server PIR with Sublinear Server Computation|ZPZS24]]"
security-loss: ""
rationale:
  class: "The conclusion carries an efficiency requirement, sublinear amortized server time after client preprocessing, that lies outside the RTV04 axes."
---

# OWF ⇒ PIR with client preprocessing (Piano)

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, there is a single-server [PIR with client preprocessing](single-server-private-information-retrieval#pir-with-client-preprocessing) for $n$-bit databases stored unencoded, with client storage $\tilde O_\secpar(\sqrt n)$, amortized online server and client computation $\tilde O(\sqrt n)$ per query and online communication $O(\sqrt n)$ per query — [[ZPZS24 - Piano Extremely Simple, Single-Server PIR with Sublinear Server Computation|ZPZS24]]. Counting the offline phase, the bandwidth and computation per query are $\tilde O(\sqrt n)$ — [[GZS24 - Efficient Pre-processing PIR Without Public-Key Cryptography|GZS24]].

## Notes

- Efficiency: for a 100 GB database of 1.6 billion entries, Piano's online computation is 12 ms per query on one core — [[ZPZS24 - Piano Extremely Simple, Single-Server PIR with Sublinear Server Computation|ZPZS24]].
- Plinko has query time $\tilde O(n/r)$ for every client storage $r$, matching the lower bound $r \cdot t = \Omega(n)$ up to logarithmic factors, and worst-case $\tilde O(1)$ updates, using an invertible PRF that one-way functions give ([[prf-to-invertible-prf-hppy25|PRF ⇒ iPRF]]) — [[HPPY25 - Plinko Single-Server PIR with Efficient Updates via Invertible PRFs|HPPY25]].
- From one-way functions there is also a single-server scheme with online bandwidth $\tilde O(n^{1/4})$, offline bandwidth and computation $\tilde O(n^{1/2})$ per query and client storage $\tilde O(n^{1/2})$ — [[GZS24 - Efficient Pre-processing PIR Without Public-Key Cryptography|GZS24]] — and, combining client-side with server-side preprocessing at $n^{1+\varepsilon}$ server space, one with polylogarithmic online bandwidth and with offline bandwidth and client space $\tilde O_\secpar(n^{1/2+\varepsilon})$ — [[GZSP25 - Pseudorandom Functions with Weak Programming Privacy and Applications to Private Information Retrieval|GZSP25]].
- Under [[learning-with-errors|LWE]], bandwidth drops to $\tilde O_\secpar(1)$ per query in a single round trip, with $\tilde O_\secpar(\sqrt n)$ amortized computation and client storage — [[ZLTS23 - Optimal Single-Server Private Information Retrieval|ZLTS23]].
- Piano's trade-off between client space and bandwidth is nearly optimal for schemes that use a one-way function as a black box — [[ISW24 - PIR with Client-Side Preprocessing Information-Theoretic Constructions and Lower Bounds|ISW24]].
